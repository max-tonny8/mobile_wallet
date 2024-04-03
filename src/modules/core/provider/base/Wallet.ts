export abstract class Wallet {
    abstract create(): Promise<Object>;

    abstract fromMnemonic(params): Promise<Object>;
}
