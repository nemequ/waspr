import { Component, OnInit } from '@angular/core';
import { InstructionDb } from '../instruction-db';
import { InstructionService } from '../instruction.service';

@Component({
  selector: 'app-families',
  templateUrl: './families.component.html',
  styleUrls: ['./families.component.css']
})
export class FamiliesComponent implements OnInit {
  instructions: InstructionDb = new InstructionDb([]);

  constructor(private instructionService : InstructionService) { }

  ngOnInit(): void {
    this.instructionService.getInstructions().then((instrs) => {
      this.instructions = instrs;
    })
  }
}
