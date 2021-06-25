import { Instruction } from "./instruction";
import { Function } from "./function";
import { LoweringImplementation } from "./lowering-implementation";

export class InstructionDb {
  private instructionNameMap: Map<string, Instruction> = new Map<string, Instruction>();
  private intrinsicNameMap: Map<string, Instruction> = new Map<string, Instruction>();

  getInstruction(instruction: string): Instruction | undefined {
    return this.instructionNameMap?.get(instruction);
  }

  getInstructionList(): string[] {
    if (this.instructionNameMap) {
      return Array.from(this.instructionNameMap.keys());
    } else {
      return [];
    }
  }

  getInstructionForIntrinsic(func: string): Instruction | undefined {
    return this.intrinsicNameMap.get(func);
  }

  getIntrinsic(func: string): Function | undefined {
    let inst = this.getInstructionForIntrinsic(func);
    let fn: Function | undefined = undefined;
    inst?.intrin?.forEach((cf) => {
      if (cf.name == func)
        fn = cf;
    });
    return fn;
  }

  getIntrinsicList(): string[] {
    if (this.intrinsicNameMap) {
      return Array.from(this.intrinsicNameMap.keys());
    } else {
      return [];
    }
  }

  instructionId(inst: Instruction): string {
    return 'inst-' + inst.name.replace('.', '_');
  }

  intrinsicId(func: Function): string {
    return 'func-' + func.name.replace('.', '_');
  }

  sumLatency(impl: LoweringImplementation): number {
    var total: number = 0;
    impl.instructions.forEach((inst) => total += inst.latency)
    return total;
  }

  sumOps(impl: LoweringImplementation): number {
    var total: number = 0;
    impl.instructions.forEach((inst) => total += inst.uops)
    return total;
  }

  constructor(
    private instructions: Instruction[]
  ) {
    this.instructions.forEach((instr) => {
      this.instructionNameMap.set(instr.name, instr);
        instr.intrin?.forEach((func) => {
          console.log([func.name, instr]);
          this.intrinsicNameMap.set(func.name, instr);
        });
    });
  }
}
