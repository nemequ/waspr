import { Injectable } from '@angular/core';
import { Instruction } from './instruction';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InstructionDb } from './instruction-db';

@Injectable({
  providedIn: 'root'
})
export class InstructionService {
  private dataUri = 'https://nemequ.github.io/wasm-simd-data/wasm-simd-data.json';
  private instdb: InstructionDb | undefined = undefined;

  getInstructions(): Promise<InstructionDb> {
    if (this.instdb) {
      return of(this.instdb).toPromise();
    }

    return this.http.get(this.dataUri).toPromise().then((data) => {
      var instructions: Instruction[] = [];

      for (const [family_name, family] of Object.entries(data)) {
        family['instructions'].forEach((instruction: Instruction) => {
          instruction.description = family["description"];
          instruction.title = family["title"];
          instruction.family_name = family_name;
          instructions.push(instruction);
        });
      }

      this.instdb = new InstructionDb(instructions);

      return this.instdb;
    });
  }

  private log(message: string) {
    console.log(message)
  }

  constructor(
    private http: HttpClient
  ) { }
}
