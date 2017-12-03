import * as React from 'react';
import * as Notifications from 'react-notification-system-redux';
import { NotificationsState } from 'react-notification-system-redux';

export type Props = {
  notifications: NotificationsState,
};

export class NotificationSystem extends React.PureComponent<Props> {
  public render(): JSX.Element {
    const { notifications } = this.props;
    return (
      <Notifications notifications={notifications} />
    );
  }
}
