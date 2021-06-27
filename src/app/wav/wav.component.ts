import { Component, OnInit } from '@angular/core';
import { InstructionDb } from '../instruction-db';
import { InstructionService } from '../instruction.service';

@Component({
  selector: 'app-wav',
  templateUrl: './wav.component.html',
  styleUrls: ['./wav.component.css']
})
export class WavComponent implements OnInit {
  private allWavList: string[] = [];

  wavList: string[] = [];
  wavDetailsVisible: Map<string, boolean> = new Map();
  filter: string = "";

  instructions: InstructionDb = new InstructionDb([]);

  toggleWavDetailsVisible(instruction_name: string): void {
    this.wavDetailsVisible.set(instruction_name, !this.wavDetailsVisible.get(instruction_name));
  }

  getInstructions(): void {
    this.instructionService.getInstructions()
      .then((instrs) => {
        this.instructions = instrs;
        this.allWavList = this.instructions.getWavList();
        this.allWavList.forEach((name) => {
          this.wavDetailsVisible.set(name, false);
        });
        this.wavList = this.allWavList;
      });
  }

  filterChanged(value: string): void {
    let input = (value.startsWith(this.filter)) ? this.wavList : this.allWavList;
    this.wavList = input.filter((haystack) => {
      return haystack.indexOf(value) != -1;
    });
    this.filter = value;
  }

  constructor(private instructionService : InstructionService) { }

  ngOnInit(): void {
    this.getInstructions();
  }
}
