import { Component, OnInit } from '@angular/core';
import { Instruction } from '../instruction';
import { InstructionDb } from '../instruction-db';
import { InstructionService } from '../instruction.service';
import { LoweringImplementation } from '../lowering-implementation';


@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  instructionList: string[] = [];
  instructionDetailsVisible: Map<string, boolean> = new Map();

  instructions: InstructionDb = new InstructionDb([]);

  toggleInstructionDetailsVisible(instruction_name: string): void {
    this.instructionDetailsVisible.set(instruction_name, !this.instructionDetailsVisible.get(instruction_name));
    console.log(this.instructionDetailsVisible.get(instruction_name));
  }

  idOf(inst: Instruction): string {
    return 'inst-' + inst.name.replace('.', '_');
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

  getInstructions(): void {
    this.instructionService.getInstructions()
      .then((instrs) => {
        this.instructions = new InstructionDb(instrs);
        this.instructionList = this.instructions.getInstructionList();
        this.instructionList.forEach((name) => {
          this.instructionDetailsVisible.set(name, false);
        });
      });
  }

  constructor(private instructionService : InstructionService) { }

  ngOnInit(): void {
    this.getInstructions();
  }

}
