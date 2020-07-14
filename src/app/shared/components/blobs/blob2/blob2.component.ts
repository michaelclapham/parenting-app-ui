import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'plh-blob2',
  templateUrl: './blob2.component.html',
  styleUrls: ['./blob2.component.scss'],
})
export class Blob2Component implements OnInit {

  animOptions: AnimationOptions = {
    path: "assets/lottie-anims/test_rig_rectangle_empty_box.json",
    autoplay: true
  };

  // setInterval(() => { console.log("lolz ", $('g.empty_layer > g').transform.animVal[0].matrix); })
  
  constructor() { }

  ngOnInit() {}

}
