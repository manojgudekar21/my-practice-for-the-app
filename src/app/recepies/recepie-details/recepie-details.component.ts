import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recepie } from 'src/app/shared/recepie.model';
import { RecepieService } from '../recepie.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.css'],
})
export class RecepieDetailsComponent implements OnInit {
  id!: number;
  recepie!: Recepie;
  constructor(
    private route: ActivatedRoute,
    private recepieService: RecepieService,
    private slService: ShoppingListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recepie = this.recepieService.getRecepieById(this.id);
    });
  }

  toShoppingList() {
    this.slService.addIngridentsFromSl(this.recepie.ingridents);
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

  onDeleteRecepie() {
    this.recepieService.onDeleteRecepie(this.id);
    this.router.navigate(["../"], { relativeTo: this.route })
  }
}
