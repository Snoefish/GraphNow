import { DatabaseManager as DatabaseManagementComponent } from './Components';
import { reduxConnector } from './ReduxStore';
export { reducer } from './ReduxStore';

// tslint:disable-next-line:variable-name
export const DatabaseManager = reduxConnector(DatabaseManagementComponent);
