export abstract class Provider {
    abstract getGasPrice(): Promise<Object>;

    abstract getNetwork(): Promise<Object>;

    abstract getFeeData(params): Promise<Object>;
}
