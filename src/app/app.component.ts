import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {NgIfElseComponent} from "./examples/ng-if-else.component";
import {SwitchCaseExampleComponent} from "./examples/switch-case-example.component";
import {ForLoopExampleComponent} from "./examples/for-loop.component";
import {EmptyComponent} from "./examples/empty.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgIfElseComponent, SwitchCaseExampleComponent, ForLoopExampleComponent, EmptyComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'control-flow';
}
