import { Parameter } from "./parameter";
import { Function } from "./function";
import { LoweringArch } from "./lowering-arch";

export interface Instruction {
  name: string;
  family_name?: string;
  opcode: number;
  "return"?: string;
  params: Parameter[];
  description?: string;
  wav?: Function[];
  intrin?: Function[];
  lowering: LoweringArch[];
}
