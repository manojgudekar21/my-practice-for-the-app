import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'manoj-pract-app';

  optionSelected!: string;

  SelectedOption(name: string) {
    this.optionSelected = name;
  }
}
