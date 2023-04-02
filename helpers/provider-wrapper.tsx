export type ProviderWrapper<T> = T & {
  children: React.ReactNode | React.ReactNode[];
};
export function wrapProvider<T>(Provider: React.Provider<T>) {
  return ({ children, ...value }: ProviderWrapper<T>) => (
    <Provider value={value as T}>{children}</Provider>
  );
}
