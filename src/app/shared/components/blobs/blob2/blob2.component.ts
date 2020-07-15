import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'plh-blob2',
  templateUrl: './blob2.component.html',
  styleUrls: ['./blob2.component.scss']
})
export class Blob2Component implements OnInit {

  animOptions: AnimationOptions = {
    path: "assets/lottie-anims/test_body_motion_only.json",
    autoplay: true,
    loop: 30
  };

  // setInterval(() => { console.log("lolz ", $('g.empty_layer > g').transform.animVal[0].matrix); })

  constructor() { }

  ngOnInit() {

  }

  animationCreated() {
    setTimeout(() => {
      for (var cls of ["red_hat", "green_hat", "blue_hat"]) {
        var svgGroup = document.getElementsByClassName(cls)[0] as SVGGeometryElement;
        svgGroup.style.display = "none";
      }
    }, 2000);
  }

}
