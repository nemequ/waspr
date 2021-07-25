import { LoweringInstruction } from "./lowering-instruction";

export interface LoweringInstructionList {
  throughput: number;
  sequence: LoweringInstruction[];
}
