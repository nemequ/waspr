import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsComponent } from './instructions/instructions.component';
import { IntrinsicsComponent } from './intrinsics/intrinsics.component';
import { WavComponent } from './wav/wav.component';

const routes: Routes = [
  { path: 'instructions', component: InstructionsComponent },
  { path: 'intrinsics', component: IntrinsicsComponent },
  { path: 'wav', component: WavComponent },
  { path: '', redirectTo: '/instructions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
