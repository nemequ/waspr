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
  }

  getInstructions(): void {
    this.instructionService.getInstructions()
      .then((instrs) => {
        this.instructions = instrs;
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
