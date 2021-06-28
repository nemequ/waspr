import { Parameter } from "./parameter";
import { Function } from "./function";
import { LoweringArch } from "./lowering-arch";
import { Instruction } from './instruction';

export interface Family {
  name: string;
  title: string;
  description?: string;
  instructions?: Instruction[];
}
