import { EffectProps } from "./Effect";

export type Action<ActionList = never, ActionOptions = never> = {
  action: ActionList;
  actionOptions?: ActionOptions;
  effects?: Action[];
} | null;

export enum ActionNature {
  "CREATE" = "CREATE",
  "READ" = "READ",
  "UPDATE" = "UPDATE",
  "SAVE" = "SAVE",
  "DELETE" = "DELETE",
  "CANCEL" = "CANCEL",
  "TOGGLE" = "TOGGLE",
  "DISMISS" = "DISMISS",
  "CLEAR" = "CLEAR",
  "NAVIGATE" = "NAVIGATE",
}

export type ActionFnProps = Record<string, any>;
export type ActionDescription = {
  nature: ActionNature;
  tooltip?: string;
  props?: Record<string, any>;
  action: (props?: ActionFnProps) => EffectProps[] | null | void;
};

export type EffectAction = Action & {
  type: "Effect";
};
