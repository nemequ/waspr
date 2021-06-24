import { Instruction } from "./instruction";

export class InstructionDb {
  private instructionNameMap?: Map<string, Instruction>;
  private instructionNameList: string[];

  getInstruction(instruction: string) {
    return this.instructionNameMap?.get(instruction);
  }

  getInstructionList(): string[] {
    return this.instructionNameList;
  }

  constructor(
    private instructions: Instruction[]
  ) {
    this.instructionNameMap = new Map<string, Instruction>();
    this.instructionNameList = [];
    this.instructions.forEach((instr) => {
      this.instructionNameMap?.set(instr.name, instr);
      this.instructionNameList?.push(instr.name);
    });
  }
}
