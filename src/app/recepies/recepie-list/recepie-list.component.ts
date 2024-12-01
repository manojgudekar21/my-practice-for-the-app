import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from 'src/app/shared/recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  @Output() recepieSelected = new EventEmitter<Recepie>();

  constructor() { }

  ngOnInit(): void {
  }

  recepies: Recepie[] = [
    new Recepie("chicken curry", "its so delecious", "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Chicken-Curry-Recipe.jpg"),
    new Recepie("mutton curry", "its so awesome", "https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450&ssl=1")
  ]

  recepieWasSelected(recepie: Recepie) {
    this.recepieSelected.emit(recepie);
  }


}
