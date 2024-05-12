import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewCompComponentsComponent } from './new-comp-components/new-comp-components.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewCompComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
}
