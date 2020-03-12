import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {
  animationIsRun: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  turnAnimation() {
    console.log(this.animationIsRun);
    return this.animationIsRun = !this.animationIsRun;
  }

}
