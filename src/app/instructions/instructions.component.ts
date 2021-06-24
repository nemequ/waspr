import { Component, OnInit } from '@angular/core';
import { Instruction } from '../instruction';
import { InstructionService } from '../instruction.service';
import { LoweringImplementation } from '../lowering-implementation';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  instructions: Instruction[] = []

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
        console.log(instrs);
        this.instructions = instrs;
      });
  }

  constructor(private instructionService : InstructionService) { }

  ngOnInit(): void {
    this.getInstructions();
  }

}
