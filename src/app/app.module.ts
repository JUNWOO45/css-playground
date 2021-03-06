import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
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
import { LoaderComponent } from './animation/loader/loader.component';
import { PreLoaderComponent } from './animation/pre-loader/pre-loader.component';
import { WaveLoaderComponent } from './animation/wave-loader/wave-loader.component';
import { PulseComponent } from './animation/pulse/pulse.component';

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
    BalloonComponent,
    CoinComponent,
    RacingComponent,
    RotatorComponent,
    FallComponent,
    ShakingComponent,
    BlingComponent,
    LightingComponent,
    HeartbeatComponent,
    FlowComponent,
    BouncingComponent,
    RainComponent,
    ImageSliderComponent,
    MindcontrolComponent,
    LoaderComponent,
    PreLoaderComponent,
    WaveLoaderComponent,
    PulseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  // entryComponents: [ FooComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
