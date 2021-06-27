import { Component, OnInit } from '@angular/core';
import { InstructionDb } from '../instruction-db';
import { InstructionService } from '../instruction.service';

@Component({
  selector: 'app-intrinsics',
  templateUrl: './intrinsics.component.html',
  styleUrls: ['./intrinsics.component.css']
})
export class IntrinsicsComponent implements OnInit {
  private allIntrinsicList: string[] = [];

  intrinsicList: string[] = [];
  intrinsicDetailsVisible: Map<string, boolean> = new Map();
  filter: string = "";

  instructions: InstructionDb = new InstructionDb([]);

  toggleIntrinsicDetailsVisible(instruction_name: string): void {
    this.intrinsicDetailsVisible.set(instruction_name, !this.intrinsicDetailsVisible.get(instruction_name));
  }

  getInstructions(): void {
    this.instructionService.getInstructions()
      .then((instrs) => {
        this.instructions = instrs;
        this.allIntrinsicList = this.instructions.getIntrinsicList();
        this.allIntrinsicList.forEach((name) => {
          this.intrinsicDetailsVisible.set(name, false);
        });
        this.intrinsicList = this.allIntrinsicList;
      });
  }

  filterChanged(value: string): void {
    let input = (value.startsWith(this.filter)) ? this.intrinsicList : this.allIntrinsicList;
    this.intrinsicList = input.filter((haystack) => {
      return haystack.indexOf(value) != -1;
    });
    this.filter = value;
  }

  constructor(private instructionService : InstructionService) { }

  ngOnInit(): void {
    this.getInstructions();
  }
}
