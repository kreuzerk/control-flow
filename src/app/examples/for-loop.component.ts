import {Component, signal} from "@angular/core";
import {AsyncPipe, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {delay, of} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  standalone: true,
  selector: 'for-loop-example',
  template: `
      <h1>Switch case example</h1>

      <h2>Old syntax</h2>
      <ul>
          <li *ngFor="let streamingService of streamingServices">{{streamingService}}</li>
      </ul>

      <h2>New syntax</h2>
      <ul>
          @for (streamingService of streamingServices; track streamingService){
          <li>{{streamingService}}</li>
          }
      </ul>

      <h2>New syntax with async pipe</h2>
      <ul>
          @for (streamingService of streamingServices$ | async; track streamingService){
          <li>{{streamingService}}</li>
          }
      </ul>

      <h2>New syntax with toSignal pipe</h2>
      <ul>
          @for (streamingService of streamingServicesSignal(); track streamingService){
          <li>{{streamingService}}</li>
          }
      </ul>

      <h2>Loop vars</h2>
      <ul>
          @for (streamingService of  streamingServices; track streamingService;
          let i = $index;
          let first = $first;
          let last = $last;
          let even = $even;
          let odd = $odd
        ){
          <li>{{i}} {{first}} {{last}} {{even}} {{odd}}</li>
          }
      </ul>
  `,
  imports: [NgFor, AsyncPipe]
})
export class ForLoopExampleComponent {
  streamingServices = ['AppleTV', 'Netflix', 'Disney+'];
  streamingServices$ = of(this.streamingServices).pipe(
    delay(2000)
  );
  streamingServicesSignal = toSignal(this.streamingServices$);
}
