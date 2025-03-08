export type StateDescription = {
  identity: Record<string, string>;
};

export type State<Type = unknown> = {
  value: Type;
};
