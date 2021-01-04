import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannerHeaderComponent} from './banner-header/banner-header.component';
import { FeaturesComponent } from './features/features.component';
import { StaticImagesComponent } from './static-images/static-images.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';


@NgModule({
  declarations: [
    BannerHeaderComponent,
    FeaturesComponent,
    StaticImagesComponent,
    TestimonialsComponent,
    CallToActionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BannerHeaderComponent,
    FeaturesComponent,
    StaticImagesComponent,
    TestimonialsComponent,
    CallToActionComponent
  ]
})
export class SectionsModule { }
