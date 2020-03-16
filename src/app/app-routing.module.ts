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


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'training', component: TrainingComponent,
    children: [
      { path: "", component: TransitionComponent },
      { path: "transition", component: TransitionComponent },
      { path: "transform", component: TransformComponent },
      { path: "threedepth", component: ThreeDepthComponent },
    ]
  },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'image', component: ImageComponent },
  { path: 'animation', component: AnimationComponent,
    children: [
      { path: '', component: AnimationBasicComponent },
      { path: 'animation-basic', component: AnimationBasicComponent },
      { path: 'balloon', component: BalloonComponent },
      { path: 'coin', component: CoinComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
