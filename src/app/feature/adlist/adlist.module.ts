import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdlistRoutingModule } from './adlist-routing.module';
import { AdNewComponent } from './ad-new/ad-new.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdFormComponent } from './ad-form/ad-form.component';



@NgModule({
  declarations: [
    AdNewComponent,
    AdDetailComponent,
    AdFormComponent
  ],
  imports: [
    CommonModule,
    AdlistRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdlistModule { }
