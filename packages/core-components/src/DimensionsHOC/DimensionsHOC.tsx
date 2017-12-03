import * as onElementResize from 'element-resize-event'; // tslint:disable-line:no-require-imports
import { debounce } from 'lodash-es'; // tslint:disable-line:no-require-imports
import * as React from 'react';

function defaultGetDimensions(element: HTMLElement): [number, number] {
  return [element.clientWidth, element.clientHeight];
}


/**
 *
 *
 * @export
 * @param {{
 *     getDimensions: (element: HTMLElement) => [number, number];
 *     debounce: number;
 *     debounceOpts: _.DebounceSettings;
 *     elementResize: boolean;
 *   }} [options={
 *     getDimensions: defaultGetDimensions,
 *     debounce: 0,
 *     debounceOpts: {},
 *     elementResize: true,
 *   }]
 * @returns
 */
export function configureDimensionsHOC(options: { // tslint:disable-line:typedef
    getDimensions: (element: HTMLElement) => [number, number];
    debounce: number;
    debounceOpts: _.DebounceSettings;
    elementResize: boolean;
  } = {
    getDimensions: defaultGetDimensions,
    debounce: 0,
    debounceOpts: {},
    elementResize: true,
  }) {
  return function createDimensionsHOC< // tslint:disable-line:typedef
    ComponentProps extends {
      containerWidth?: number;
      containerHeight?: number;
    }
  >(
    ComposedComponent: React.ComponentClass<ComponentProps>,    // tslint:disable-line:variable-name
  ) {
    type State = {
      containerWidth: number | undefined;
      containerHeight: number | undefined;
    };
    return class DimensionsHOC extends React.Component<ComponentProps, State> {
      public _wrapper: HTMLDivElement | null;
      public _wrappedInstance: React.ReactInstance | null;
      public _animationFrameId: number | undefined;

      constructor(props: ComponentProps) {
        super(props);
        this.state = {
          containerWidth: undefined,
          containerHeight: undefined,
        };
      }

      public componentDidMount(): void {
        if (this._wrapper == undefined) {
          throw new Error('Cannot find wrapper div');
        }
        this._updateDimensionsImmediate();
        if (options.elementResize) {
          // Experimental: `element-resize-event` fires when an element resizes.
          // It attaches its own window resize listener and also uses requestAnimationFrame, so we can just call `this.updateDimensions`.
          onElementResize(this._wrapper, this._updateDimensions);
        } else {
          this._getWindow().addEventListener('resize', this._onResize, false);
        }
      }

      public componentWillUnmount(): void {
        this._getWindow().removeEventListener('resize', this._onResize);
      }

      /**
       * Returns the underlying wrapped component instance.
       * Useful if you need to access a method or property of the component
       * passed to react-dimensions.
       *
       * @return {object} The rendered React component
       */
      public getWrappedInstance(): React.ReactInstance | null{
        return this._wrappedInstance;
      }

      public render(): JSX.Element {
        const { containerWidth, containerHeight } = this.state;
        if (this._wrapper != undefined && containerWidth == undefined && containerHeight == undefined) {
          // tslint:disable-next-line:no-console
          console.warn('Wrapper div has no height or width, try overriding style with `containerStyle` option');
        }
        const wrapperStyle: React.CSSProperties = {
          height: 'fit-content',
          width: '100%',
          padding: 0,
          border: 0,
        };
        return (
          <div
            id='dimensioning-div'
            style={wrapperStyle}
            ref={ref => {
              this._wrapper = ref;
            }}
          >
          { (containerWidth || containerHeight) ?
            <ComposedComponent
              {...this.state}
              {...this.props}
              ref={ref => this._wrappedInstance = ref}
            /> : undefined
          }
          </div>
        );
      }

      // Immediate updateDimensions callback with no debounce
      public _updateDimensionsImmediate = () => {
        if (this._wrapper != undefined) {
          const dimensions = options.getDimensions(this._wrapper);

          if (dimensions[0] !== this.state.containerWidth || dimensions[1] !== this.state.containerHeight) {
            this.setState({
              containerWidth: dimensions[0],
              containerHeight: dimensions[1],
            });
          }
        }
      }
      // Optionally-debounced updateDimensions callback
      public _updateDimensions = options.debounce === 0
        ? this._updateDimensionsImmediate // tslint:disable-line:member-ordering
        : debounce(this._updateDimensionsImmediate, options.debounce, options.debounceOpts);

      public _onResize = () => {
        if (this._animationFrameId != undefined) return;
        this._animationFrameId = this._getWindow().requestAnimationFrame(() => {
          this._animationFrameId = undefined;
          this._updateDimensions();
        });
      }

      public _getWindow(): Window {
        return this.refs.container != undefined && (this.refs.container as Element).ownerDocument != undefined
          ? (this.refs.container as Element).ownerDocument.defaultView || window
          : window;
      }
    };
  };
}

