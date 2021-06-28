import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InstructionService } from '../instruction.service';
import { InstructionDb } from '../instruction-db';
import { Function } from '../function';

@Component({
  selector: 'app-intrinsic-detail',
  templateUrl: './intrinsic-detail.component.html',
  styleUrls: ['./intrinsic-detail.component.css']
})
export class IntrinsicDetailComponent implements OnInit {
  instructions: InstructionDb = new InstructionDb([]);
  intrinsic?: Function = undefined;

  constructor(
    private route: ActivatedRoute,
    private instructionService: InstructionService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.instructionService.getInstructions().then((instrs) => {
      this.instructions = instrs;
    }).then(() => {
      this.intrinsic = this.instructions.getIntrinsic(this.route.snapshot.paramMap.get('intrinsic')!);
    });
  }
}
