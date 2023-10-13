import {Component} from "@angular/core";
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'ng-if-else',
  template: `

    <!-- old style -->
    <h1>Old style</h1>

      <div *ngIf="streamingService === 'AppleTV'; else elseBlock">
          Ted Lasso
      </div>

      <ng-template #elseBlock>
        <div>
          Peaky Blinders
        </div>
      </ng-template>


    <!-- new style -->
    <h1>New style</h1>
    @if (streamingService === 'AppleTV') {
      <div>Ted Lasso</div>
    } @else if (streamingService === 'Netflix') {
      <div>Peaky Blinders</div>
    } @else {
      <div>Disney+</div>
    }

    <button (click)="changeToNetflix()">Netflix</button>
    <button (click)="changeToAppleTV()">AppleTV</button>
    <button (click)="changeToDisney()">Disney+</button>
  `,
  imports: [
    NgIf
  ],
})
export class NgIfElseComponent {
  streamingService: 'AppleTV' | 'Netflix' | 'Disney+' = 'AppleTV';

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
