import { Parameter } from "./parameter";
import { Function } from "./function";
import { LoweringArch } from "./lowering-arch";

export interface Instruction {
  name: string;
  family_name?: string;
  opcode: number;
  "return"?: string;
  params: Parameter[];
  title?: string;
  description?: string;
  wav?: Function[];
  intrin?: Function[];
  lowering: LoweringArch[];
  simde?: string;
}
