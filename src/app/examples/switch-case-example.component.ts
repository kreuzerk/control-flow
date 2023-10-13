import {Component} from "@angular/core";
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";

@Component({
  standalone: true,
  selector: 'switch-case-example',
  template: `
      <h1>Switch case example</h1>
      <h2>Old syntax</h2>
      <div [ngSwitch]="streamingService">
          <div *ngSwitchCase="'AppleTV'">Ted Lasso</div>
          <div *ngSwitchCase="'Disney+'">Mandalorian</div>
          <div *ngSwitchDefault>Peaky Blinders</div>
      </div>

      <h2>New syntax</h2>
      @switch (streamingService) {
        @case ('AppleTV') {
            <div>Ted Lasso</div>
        }
        @case ('Disney+') {
            <div>Mandalorian</div>
      }
        @default {
            <div>Peaky Blinders</div>
      }
      }

      <button (click)="changeToNetflix()">Netflix</button>
      <button (click)="changeToAppleTV()">AppleTV</button>
      <button (click)="changeToDisney()">Disney+</button>
  `,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault]
})
export class SwitchCaseExampleComponent {
  streamingService: 'AppleTV' | 'Netflix' | 'Disney+' | undefined;

  changeToNetflix() {
    this.streamingService = 'Netflix';
  }

  changeToAppleTV() {
    this.streamingService = 'AppleTV';
  }

  changeToDisney() {
    this.streamingService = 'Disney+';
  }

}
