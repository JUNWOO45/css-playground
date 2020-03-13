import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-basic',
  templateUrl: './animation-basic.component.html',
  styleUrls: ['./animation-basic.component.scss']
})
export class AnimationBasicComponent implements OnInit {
  animationIsRun: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  turnAnimation() {
    return this.animationIsRun = !this.animationIsRun;
  }
}
