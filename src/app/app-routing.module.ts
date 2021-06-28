import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsComponent } from './instructions/instructions.component';
import { IntrinsicsComponent } from './intrinsics/intrinsics.component';
import { WavComponent } from './wav/wav.component';
import { FamiliesComponent } from './families/families.component';
import { InstructionDetailComponent } from './instruction-detail/instruction-detail.component';
import { IntrinsicDetailComponent } from './intrinsic-detail/intrinsic-detail.component';
import { WavDetailComponent } from './wav-detail/wav-detail.component';

const routes: Routes = [
  { path: 'instructions', component: InstructionsComponent },
  { path: 'instructions/:instruction', component: InstructionDetailComponent },
  { path: 'intrinsics', component: IntrinsicsComponent },
  { path: 'intrinsics/:intrinsic', component: IntrinsicDetailComponent },
  { path: 'wav', component: WavComponent },
  { path: 'wav/:wav', component: WavDetailComponent },
  { path: 'families', component: FamiliesComponent },
  { path: '', redirectTo: '/instructions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
