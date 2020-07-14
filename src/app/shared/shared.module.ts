import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blob1Component } from './components/blobs/blob1/blob1.component';
import { BlobComponent } from './components/blobs/blob/blob.component';
import { ReflectAnimationComponent } from './components/reflect-animation/reflect-animation.component';
import { IonicModule } from '@ionic/angular';

import { LottieModule } from "ngx-lottie";
import player from "lottie-web";
import { Blob2Component } from './components/blobs/blob2/blob2.component';

// Note we need a separate function as it's required
// by the AOT compiler.
export function lottiePlayerFactory() {
  return player;
}

@NgModule({
  declarations: [
    BlobComponent,
    Blob1Component,
    Blob2Component,
    ReflectAnimationComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    LottieModule.forRoot({ player: lottiePlayerFactory, useCache: true }),
  ],
  exports: [
    BlobComponent,
    Blob1Component,
    Blob2Component,
    ReflectAnimationComponent
  ]
})
export class SharedModule { }
