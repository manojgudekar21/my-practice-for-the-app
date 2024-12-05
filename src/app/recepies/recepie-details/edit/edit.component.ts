import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { RecepieService } from '../../recepie.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editMode = false;
  id!: number;
  formData!: FormGroup;

  constructor(private route: ActivatedRoute, private recepieService: RecepieService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initform()
    })
  }

  private initform() {
    let recepieName = ''
    let recepieImagePath = ''
    let recepieDiscription = ''
    let recepieingridents = new FormArray([])


    if (this.editMode) {
      let recepie = this.recepieService.getRecepieById(this.id);
      recepieName = recepie.recepie;
      recepieImagePath = recepie.imagePath;
      recepieDiscription = recepie.discription;
      if (recepie['ingridents']) {
        for (let ingrident of recepie.ingridents) {
          recepieingridents.push(new FormGroup({
            'ingrident': new FormControl(ingrident.ingrident, Validators.required),
            'amount': new FormControl(ingrident.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }

    this.formData = new FormGroup({
      'recepie': new FormControl(recepieName, Validators.required),
      'imagePath': new FormControl(recepieImagePath, Validators.required),
      'discription': new FormControl(recepieDiscription, Validators.required),
      'ingridents': recepieingridents
    })
  }

  addIngrident() {
    (<FormArray>this.formData.get('ingridents')).push(new FormGroup({
      'ingrident': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  onSubmit() {
    if (this.editMode) {
      this.recepieService.onEditRecepie(this.id, this.formData.value)
      this.formData.reset()
    } else {
      this.recepieService.onAddRecepie(this.formData.value)
      this.formData.reset()
    }
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }

}
