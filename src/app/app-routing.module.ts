import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ImageComponent } from './image/image.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TransitionComponent } from './training/transition/transition.component';
import { TransformComponent } from './training/transform/transform.component';
import { ThreeDepthComponent } from './training/three-depth/three-depth.component';
import { AnimationComponent } from './animation/animation.component';
import { AnimationBasicComponent } from './animation/animation-basic/animation-basic.component';
import { BalloonComponent } from './animation/balloon/balloon.component';
import { CoinComponent } from './animation/coin/coin.component';
import { RacingComponent } from './animation/racing/racing.component';
import { RotatorComponent } from './animation/rotator/rotator.component';
import { FallComponent } from './animation/fall/fall.component';
import { ShakingComponent } from './animation/shaking/shaking.component';
import { BlingComponent } from './animation/bling/bling.component';
import { LightingComponent } from './animation/lighting/lighting.component';
import { HeartbeatComponent } from './animation/heartbeat/heartbeat.component';
import { FlowComponent } from './animation/flow/flow.component';
import { BouncingComponent } from './animation/bouncing/bouncing.component';
import { RainComponent } from './animation/rain/rain.component';
import { ImageSliderComponent } from './animation/image-slider/image-slider.component';
import { MindcontrolComponent } from './animation/mindcontrol/mindcontrol.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent, data: { animation: 'Home' }},
  { path: 'training', component: TrainingComponent, data: { animation: 'Basic' },
    children: [
      { path: "", component: TransitionComponent },
      { path: "transition", component: TransitionComponent },
      { path: "transform", component: TransformComponent },
      { path: "threedepth", component: ThreeDepthComponent },
    ]
  },
  { path: 'buttons', component: ButtonsComponent, data: { animation: 'Button' } },
  { path: 'image', component: ImageComponent, data: { animation: 'Image' } },
  { path: 'animation', component: AnimationComponent, data: { animation: 'Animation' },
    children: [
      { path: '', component: AnimationBasicComponent },
      { path: 'animation-basic', component: AnimationBasicComponent },
      { path: 'rain', component: RainComponent },
      { path: 'balloon', component: BalloonComponent },
      { path: 'heartbeat', component: HeartbeatComponent },
      { path: 'coin', component: CoinComponent },
      { path: 'shaking', component: ShakingComponent },
      { path: 'racing', component: RacingComponent },
      { path: 'bling', component: BlingComponent },
      { path: 'rotator', component: RotatorComponent },
      { path: 'fall', component: FallComponent },
      { path: 'flow', component: FlowComponent },
      { path: 'lighting', component: LightingComponent },
      { path: 'bouncing', component: BouncingComponent },
      { path: 'mindcontrol', component: MindcontrolComponent },
      { path: 'image-slider', component: ImageSliderComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
