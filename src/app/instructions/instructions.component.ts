import { Component, OnInit } from '@angular/core';
import { InstructionDb } from '../instruction-db';
import { InstructionService } from '../instruction.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  private allInstructionList: string[] = [];

  instructionList: string[] = [];
  instructionDetailsVisible: Map<string, boolean> = new Map();
  filter: string = "";

  instructions: InstructionDb = new InstructionDb([]);

  toggleInstructionDetailsVisible(instruction_name: string): void {
    this.instructionDetailsVisible.set(instruction_name, !this.instructionDetailsVisible.get(instruction_name));
  }

  getInstructions(): void {
    this.instructionService.getInstructions()
      .then((instrs) => {
        this.instructions = instrs;
        this.allInstructionList = this.instructions.getInstructionList();
        this.allInstructionList.forEach((name) => {
          this.instructionDetailsVisible.set(name, false);
        });
        this.instructionList = this.allInstructionList;
      });
  }

  filterChanged(value: string): void {
    let input = (value.startsWith(this.filter)) ? this.instructionList : this.allInstructionList;
    this.instructionList = input.filter((haystack) => {
      return haystack.indexOf(value) != -1;
    });
    this.filter = value;
  }

  constructor(private instructionService : InstructionService) { }

  ngOnInit(): void {
    this.getInstructions();
  }

}
