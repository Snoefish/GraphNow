/// <reference types="lodash" />
/// <reference types="react" />
import * as React from 'react';
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
export declare function configureDimensionsHOC(options?: {
    getDimensions: (element: HTMLElement) => [number, number];
    debounce: number;
    debounceOpts: _.DebounceSettings;
    elementResize: boolean;
}): <ComponentProps extends {
    containerWidth?: number | undefined;
    containerHeight?: number | undefined;
}>(ComposedComponent: React.ComponentClass<ComponentProps>) => {
    new (props: ComponentProps): {
        _wrapper: HTMLDivElement | null;
        _wrappedInstance: Element | React.Component<any, {}> | null;
        _animationFrameId: number | undefined;
        componentDidMount(): void;
        componentWillUnmount(): void;
        getWrappedInstance(): Element | React.Component<any, {}> | null;
        render(): JSX.Element;
        _updateDimensionsImmediate: () => void;
        _updateDimensions: () => void;
        _onResize: () => void;
        _getWindow(): Window;
        setState<K extends "containerWidth" | "containerHeight">(f: (prevState: {
            containerWidth: number | undefined;
            containerHeight: number | undefined;
        }, props: ComponentProps) => Pick<{
            containerWidth: number | undefined;
            containerHeight: number | undefined;
        }, K>, callback?: (() => any) | undefined): void;
        setState<K extends "containerWidth" | "containerHeight">(state: Pick<{
            containerWidth: number | undefined;
            containerHeight: number | undefined;
        }, K>, callback?: (() => any) | undefined): void;
        forceUpdate(callBack?: (() => any) | undefined): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<ComponentProps>;
        state: Readonly<{
            containerWidth: number | undefined;
            containerHeight: number | undefined;
        }>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
};
