import { Component, OnInit } from '@angular/core';
import { InstructionDb } from '../instruction-db';
import { InstructionService } from '../instruction.service';

@Component({
  selector: 'app-wav',
  templateUrl: './wav.component.html',
  styleUrls: ['./wav.component.css']
})
export class WavComponent implements OnInit {
  wavList: string[] = [];
  wavDetailsVisible: Map<string, boolean> = new Map();

  instructions: InstructionDb = new InstructionDb([]);

  toggleWavDetailsVisible(instruction_name: string): void {
    this.wavDetailsVisible.set(instruction_name, !this.wavDetailsVisible.get(instruction_name));
  }

  getInstructions(): void {
    this.instructionService.getInstructions()
      .then((instrs) => {
        this.instructions = instrs;
        this.wavList = this.instructions.getWavList();
        this.wavList.forEach((name) => {
          this.wavDetailsVisible.set(name, false);
        });
      });
  }

  constructor(private instructionService : InstructionService) { }

  ngOnInit(): void {
    this.getInstructions();
  }
}
