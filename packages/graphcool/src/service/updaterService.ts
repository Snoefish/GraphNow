import { execute } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import gql from 'graphql-tag';
import * as ws from 'ws';
import { redeploy } from './redeploy';

export function startUpdaterService() {
  const wsLink = new WebSocketLink({
    uri: 'ws://localhost:60000/subscriptions/v1/cjapptdzb00040160sf97d2jg',
    options: {
      reconnect: true,
    },
    webSocketImpl: ws,
  });

  execute(wsLink, {
    query: gql`
      subscription {
        Table {
          node {
            name
          }
        }
      }
    `,
  }).subscribe({
    next: redeploy,
    error: error => {
      debugger;
      console.log(`received error ${error.message}`);
    },
    complete: () => console.log(`complete`),
  });

  execute(wsLink, {
    query: gql`
      subscription {
        Field {
          node {
            name
          }
        }
      }
    `,
  }).subscribe({
    next: redeploy,
    error: error => {
      debugger;
      console.log(`received error ${error.message}`);
    },
    complete: () => console.log(`complete`),
  });

}
