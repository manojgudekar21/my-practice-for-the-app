import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from 'src/app/shared/recepie.model';
import { RecepieService } from '../recepie.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  constructor(private recepieService: RecepieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recepies = this.recepieService.getRecepies();
    this.recepieService.updatedRecepies.subscribe((recepies: Recepie[]) => {
      this.recepies = recepies;
    })
  }

  recepies: Recepie[] = [];

  toNewRecepie() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }


}
