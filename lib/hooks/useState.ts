import { atom, useAtom } from "jotai";

const states = new WeakMap();

export const useState = <Type>(initialValue: Type, identity = {}) => {
  let atomInstance = states.get(identity);
  if (!atomInstance) {
    atomInstance = atom(initialValue as NonNullable<Type>);
    states.set(identity, atomInstance);
  }
  return useAtom(atomInstance);
};
