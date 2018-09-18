import { Component } from '@angular/core';
import { registerElement } from 'nativescript-angular';
import { LottieView } from 'nativescript-lottie';
import {timer} from 'rxjs'
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";

registerElement('LottieView', () => LottieView);

@Component({
  templateUrl: 'splashscreen.component.xml',
  styleUrls: ['splashscreen.component.css'],
  moduleId: module.id
})
export class SplashScreenComponent {
  public loop: boolean = true;
  public src: string;
  public autoPlay: boolean = true;
  public animations: Array<string>;

  private _lottieView: LottieView;

  constructor(private router: Router, private page: Page) {
    this.animations = ['splashscreen.json'];
    this.src = this.animations[0];
    this.page.actionBarHidden = true
  }
  public source = timer(1000, 1000);


//output: 0
public subscribe = this.source.subscribe(val =>{
  console.log(val)
  if(val === 4){this.logoff()}

  })
        
        
    
  public logoff() {
    console.log('im logging off')
    this.router.navigate(["/login"]);
}

}
