import { Component, OnInit, Input } from '@angular/core';
import { Instruction } from '../instruction';
import { InstructionDb } from '../instruction-db';
import { InstructionService } from '../instruction.service';
import { Function } from '../function';

@Component({
  selector: 'intrinsic',
  templateUrl: './intrinsic.component.html',
  styleUrls: ['./intrinsic.component.css']
})
export class IntrinsicComponent implements OnInit {
  @Input()
  instruction?: Instruction;
  @Input()
  intrinsic?: Function;

  instructions: InstructionDb = new InstructionDb([]);

  constructor(private instructionService : InstructionService) { }

  ngOnInit(): void {
    this.instructionService.getInstructions().then((instrs) => {
      this.instructions = instrs;
    })
  }
}
