import { LoweringInstruction } from "./lowering-instruction";

export interface LoweringImplementation {
  option: string;
  immediates?: number[];
  instructions: LoweringInstruction[];
}
