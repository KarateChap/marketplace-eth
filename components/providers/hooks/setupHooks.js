import { handler as createUseAccount } from "./useAccount";

export const setupHooks = (...deps) => {
  return {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useAccount: createUseAccount(...deps),
  };
};
