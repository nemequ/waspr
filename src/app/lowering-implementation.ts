import { LoweringInstruction } from "./lowering-instruction";

export interface LoweringImplementation {
  option: string;
  instructions: LoweringInstruction[];
}
