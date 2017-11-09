export class AsyncConfig {
    initialMessage: string;
    successMessage: string;
    failureMessage: string;
    constructor(iMessage: string, sMessage: string, fMessage: string) {
        this.initialMessage = iMessage;
        this.successMessage = sMessage;
        this.failureMessage = fMessage;
    }
}
