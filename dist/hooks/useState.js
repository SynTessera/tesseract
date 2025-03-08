import { atom, useAtom } from "jotai";
const states = new WeakMap();
export const useState = (initialValue, identity = {}) => {
    let atomInstance = states.get(identity);
    if (!atomInstance) {
        atomInstance = atom(initialValue);
        states.set(identity, atomInstance);
    }
    return useAtom(atomInstance);
};
