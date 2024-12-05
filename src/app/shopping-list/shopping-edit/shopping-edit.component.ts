import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Ingrident } from 'src/app/shared/ingrident.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f') formData!: NgForm;

  constructor(private slService: ShoppingListService) { }

  id!: number;
  ingrident!: Ingrident;
  editMode: boolean = false

  ngOnInit(): void {
    this.slService.index.subscribe((index: number) => {
      this.editMode = true;
      this.id = index;
      this.ingrident = this.slService.getIngridentAccToIndex(index)
      this.formData.form.patchValue({
        'ingrident': this.ingrident.ingrident,
        'amount': this.ingrident.amount
      })
    })
  }

  onSubmit() {
    console.log(this.formData.value);
    this.slService.addIngrident(this.formData.value)
    this.formData.reset()
  }

  onDelete() {
    this.slService.onRemoveIngrident(this.id)
    this.editMode = false
    this.formData.reset()
  }

  onClear() {
    this.editMode = false
    this.formData.reset()
  }

}
