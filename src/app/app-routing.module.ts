import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsComponent } from './instructions/instructions.component';
import { IntrinsicsComponent } from './intrinsics/intrinsics.component';

const routes: Routes = [
  { path: 'instructions', component: InstructionsComponent },
  { path: 'intrinsics', component: IntrinsicsComponent },
  { path: '', redirectTo: '/instructions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
