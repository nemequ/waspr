import { Component, OnInit, Input } from '@angular/core';
import { Instruction } from '../instruction';
import { InstructionDb } from '../instruction-db';
import { InstructionService } from '../instruction.service';

@Component({
  selector: 'instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
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
