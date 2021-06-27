import { Component, OnInit, Input } from '@angular/core';
import { Instruction } from '../instruction';
import { InstructionDb } from '../instruction-db';
import { InstructionService } from '../instruction.service';

@Component({
  selector: 'lowering',
  templateUrl: './lowering.component.html',
  styleUrls: ['./lowering.component.css']
})
export class LoweringComponent implements OnInit {
  @Input()
  instruction?: Instruction;

  instructions: InstructionDb = new InstructionDb([]);

  constructor(private instructionService : InstructionService) { }

  ngOnInit(): void {
    this.instructionService.getInstructions().then((instrs) => {
      this.instructions = instrs;
    })
  }
}
