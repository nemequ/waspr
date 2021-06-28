import { Component, OnInit, Input } from '@angular/core';
import { Instruction } from '../instruction';
import { InstructionDb } from '../instruction-db';
import { InstructionService } from '../instruction.service';
import { Function } from '../function';

@Component({
  selector: 'wav-function',
  templateUrl: './wav-function.component.html',
  styleUrls: ['./wav-function.component.css']
})
export class WavFunctionComponent implements OnInit {
  @Input()
  instruction?: Instruction;
  @Input()
  wav?: Function;

  instructions: InstructionDb = new InstructionDb([]);

  constructor(private instructionService : InstructionService) { }

  ngOnInit(): void {
    this.instructionService.getInstructions().then((instrs) => {
      this.instructions = instrs;
    })
  }
}
