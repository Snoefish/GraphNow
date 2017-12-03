export {
  show,
  success,
  error,
  warning,
  info,
  hide,
  removeAll,
  reducer,
  NotificationsState as State,
} from 'react-notification-system-redux';
import { NotificationSystem as NotificationSystemComponent } from './Components';
import { reduxConnector } from './ReduxStore';

import { ComponentClass as _ComponentClass, StatelessComponent as _StatelessComponent } from 'react';
export { _ComponentClass, _StatelessComponent };

// tslint:disable-next-line:variable-name
export const NotificationSystem = reduxConnector(NotificationSystemComponent);
