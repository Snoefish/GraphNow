/// <reference types="react-notification-system-redux" />
/// <reference types="react" />
import * as React from 'react';
import { NotificationsState } from 'react-notification-system-redux';
export declare type Props = {
    notifications: NotificationsState;
};
export declare class NotificationSystem extends React.PureComponent<Props> {
    render(): JSX.Element;
}
