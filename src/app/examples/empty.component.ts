import {Component} from "@angular/core";
import {AsyncPipe, NgFor} from "@angular/common";

@Component({
  standalone: true,
  selector: 'empty-block-example',
  template: `
      <h1>Empty for block</h1>

      <ul>
          @for (streamingService of streamingServices; track streamingService) {
          <li>{{streamingService}}</li>
          } @empty {
          <li>No streaming items</li>
          }
      </ul>

      @if (streamingServices.length !== 0) {
      @for (streamingService of streamingServices; track streamingService) {
      <li>{{streamingService}}</li>
      }
              } @else {
      <div>No streaming items</div>
      }


      <button (click)="addStreamingServices()">Add streaming services</button>

  `,
  imports: [NgFor, AsyncPipe]
})
export class EmptyComponent {
  streamingServices: any = [];

  addStreamingServices(){
    this.streamingServices = ['AppleTV', 'Netflix', 'Disney+'];
  }
}
