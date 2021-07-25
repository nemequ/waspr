import { LoweringInstruction } from "./lowering-instruction";
import { LoweringInstructionList } from "./lowering-instruction-list";

export interface LoweringImplementation {
  option: string;
  immediates?: number[];
  instructions: LoweringInstructionList;
}
