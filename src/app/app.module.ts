import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ImageComponent } from './image/image.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TransitionComponent } from './training/transition/transition.component';
import { TransformComponent } from './training/transform/transform.component';
import { ThreeDepthComponent } from './training/three-depth/three-depth.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimationComponent } from './animation/animation.component';
import { FooComponent } from './foo/foo.component';
import { AnimationBasicComponent } from './animation/animation-basic/animation-basic.component';
import { BalloonComponent } from './animation/balloon/balloon.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    ButtonsComponent,
    ImageComponent,
    WelcomeComponent,
    TransitionComponent,
    TransformComponent,
    ThreeDepthComponent,
    AnimationComponent,
    FooComponent,
    AnimationBasicComponent,
    BalloonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  // entryComponents: [ FooComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
