export declare function configureDecodeTokenSocketMiddleware(authURL: string): (message: {
    payload: {
        authToken: string;
    };
}, operationParams: object) => Promise<{
    context: {
        authentication: string | object;
    };
}>;
