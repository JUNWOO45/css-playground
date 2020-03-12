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


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'training', component: TrainingComponent,
    children: [
      { path: "training/transition", component: TransitionComponent },
      { path: "training/transform", component: TransformComponent },
      { path: "training/threedepth", component: ThreeDepthComponent },
    ]
  },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'image', component: ImageComponent },
  { path: 'animation', component: AnimationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
