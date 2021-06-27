import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { MarkdownModule } from 'ngx-markdown';
import { IntrinsicsComponent } from './intrinsics/intrinsics.component';
import { WavComponent } from './wav/wav.component';
import { FormsModule } from '@angular/forms';
import { LoweringComponent } from './lowering/lowering.component';
import { InstructionComponent } from './instruction/instruction.component';
import { IntrinsicComponent } from './intrinsic/intrinsic.component';
import { WavFunctionComponent } from './wav-function/wav-function.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    IntrinsicsComponent,
    WavComponent,
    LoweringComponent,
    InstructionComponent,
    IntrinsicComponent,
    WavFunctionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
