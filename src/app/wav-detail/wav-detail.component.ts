import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InstructionService } from '../instruction.service';
import { InstructionDb } from '../instruction-db';
import { Function } from '../function';

@Component({
  selector: 'app-wav-detail',
  templateUrl: './wav-detail.component.html',
  styleUrls: ['./wav-detail.component.css']
})
export class WavDetailComponent implements OnInit {
  instructions: InstructionDb = new InstructionDb([]);
  wav?: Function = undefined;

  constructor(
    private route: ActivatedRoute,
    private instructionService: InstructionService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.instructionService.getInstructions().then((instrs) => {
      this.instructions = instrs;
    }).then(() => {
      this.wav = this.instructions.getWav(this.route.snapshot.paramMap.get('wav')!);
    });
  }
}
