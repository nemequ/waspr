import { LoweringImplementation } from "./lowering-implementation";

export interface LoweringOption {
  option: string;
  implementations: LoweringImplementation[];
}
