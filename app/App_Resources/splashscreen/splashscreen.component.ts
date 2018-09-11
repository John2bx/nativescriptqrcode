import { Component } from '@angular/core';
import { registerElement } from 'nativescript-angular';
import { LottieView } from 'nativescript-lottie';

registerElement('LottieView', () => LottieView);

@Component({
  templateUrl: 'home.component.html',
  moduleId: module.id
})
export class HomeComponent {
  public loop: boolean = true;
  public src: string;
  public autoPlay: boolean = true;
  public animations: Array<string>;

  private _lottieView: LottieView;

  constructor() {
    this.animations = ['splashscreen.json'];
    this.src = this.animations[0];
  }

  lottieViewLoaded(event) {
    this._lottieView = <LottieView>event.object;
  }
}