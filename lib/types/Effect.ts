export enum EffectType {
  Action = "Action",
}

export type ActionEffect<Actions extends string[]> = EffectProps & {
  action: Actions;
};

export type EffectProps = {
  type: EffectType;
  deps?: any[];
};
