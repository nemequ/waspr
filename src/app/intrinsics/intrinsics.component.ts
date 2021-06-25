import { Component, OnInit } from '@angular/core';
import { InstructionDb } from '../instruction-db';
import { InstructionService } from '../instruction.service';

@Component({
  selector: 'app-intrinsics',
  templateUrl: './intrinsics.component.html',
  styleUrls: ['./intrinsics.component.css']
})
export class IntrinsicsComponent implements OnInit {
  intrinsicList: string[] = [];
  intrinsicDetailsVisible: Map<string, boolean> = new Map();

  instructions: InstructionDb = new InstructionDb([]);

  toggleIntrinsicDetailsVisible(instruction_name: string): void {
    this.intrinsicDetailsVisible.set(instruction_name, !this.intrinsicDetailsVisible.get(instruction_name));
  }

  getInstructions(): void {
    this.instructionService.getInstructions()
      .then((instrs) => {
        this.instructions = instrs;
        this.intrinsicList = this.instructions.getIntrinsicList();
        this.intrinsicList.forEach((name) => {
          this.intrinsicDetailsVisible.set(name, false);
        });
      });
  }

  constructor(private instructionService : InstructionService) { }

  ngOnInit(): void {
    this.getInstructions();
  }
}
