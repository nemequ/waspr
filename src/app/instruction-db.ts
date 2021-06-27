import { Instruction } from "./instruction";
import { Function } from "./function";
import { LoweringImplementation } from "./lowering-implementation";

export class InstructionDb {
  private instructionNameMap: Map<string, Instruction> = new Map<string, Instruction>();
  private intrinsicNameMap: Map<string, Instruction> = new Map<string, Instruction>();
  private wavNameMap: Map<string, Instruction> = new Map<string, Instruction>();

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

  instructionId(inst: Instruction): string {
    return 'inst-' + inst.name.replace('.', '_');
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

  intrinsicId(func: Function): string {
    return 'func-' + func.name.replace('.', '_');
  }

  getInstructionForWav(func: string): Instruction | undefined {
    return this.wavNameMap.get(func);
  }

  getWav(func: string): Function | undefined {
    let inst = this.getInstructionForWav(func);
    let fn: Function | undefined = undefined;
    inst?.wav?.forEach((cf) => {
      if (cf.name == func)
        fn = cf;
    });
    return fn;
  }

  getWavList(): string[] {
    if (this.wavNameMap) {
      return Array.from(this.wavNameMap.keys());
    } else {
      return [];
    }
  }

  wavId(func: Function): string {
    return 'wav-' + func.name.replace('.', '_');
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

  sumThroughput(impl: LoweringImplementation): number {
    var total: number = 0;
    impl.instructions.forEach((inst) => total += inst.throughput)
    return total;
  }

  constructor(
    private instructions: Instruction[]
  ) {
    this.instructions.forEach((instr) => {
      this.instructionNameMap.set(instr.name, instr);
        instr.intrin?.forEach((func) => {
          this.intrinsicNameMap.set(func.name, instr);
        });
        instr.wav?.forEach((func) => {
          this.wavNameMap.set(func.name, instr);
        });
    });
  }
}
