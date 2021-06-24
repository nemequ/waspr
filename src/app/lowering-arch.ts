import { LoweringOption } from "./lowering-option";

export interface LoweringArch {
  arch: string;
  options: LoweringOption[];
}
