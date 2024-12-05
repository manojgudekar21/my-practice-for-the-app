import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecepieService } from '../recepies/recepie.service';
import { Recepie } from '../shared/recepie.model';
import { RecepieStorageService } from '../shared/recepieStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private recepieStorageService: RecepieStorageService, private recepieService: RecepieService) { }

  ngOnInit(): void {
  }

  onSaveData() {
    this.recepieStorageService.onSave()
  }

  onFetchData() {
    this.recepieStorageService.onFetch().subscribe()
  }


}
