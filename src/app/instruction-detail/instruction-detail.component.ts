import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InstructionService } from '../instruction.service';
import { InstructionDb } from '../instruction-db';
import { Instruction } from '../instruction';

@Component({
  selector: 'app-instruction-detail',
  templateUrl: './instruction-detail.component.html',
  styleUrls: ['./instruction-detail.component.css']
})
export class InstructionDetailComponent implements OnInit {
  instructions: InstructionDb = new InstructionDb([]);
  instruction?: Instruction = undefined;

  constructor(
    private route: ActivatedRoute,
    private instructionService: InstructionService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.instructionService.getInstructions().then((instrs) => {
      this.instructions = instrs;
    }).then(() => {
      this.instruction = this.instructions.getInstruction(this.route.snapshot.paramMap.get('instruction')!);
    });
  }
}
