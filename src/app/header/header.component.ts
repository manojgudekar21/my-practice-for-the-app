import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedOption = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  SelectedOption(name: string) {
    this.selectedOption.emit(name)
  }

}
