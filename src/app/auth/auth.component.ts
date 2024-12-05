import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @ViewChild('f') signinForm: NgForm;

  isLoggedin = false;
  isLoading = false;
  error = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isLoading = true;
    if (this.isLoggedin) {
      //...
    } else {
      this.authService.signUp(this.signinForm.value.email, this.signinForm.value.password)
        .subscribe((response) => {
          console.log(response);
          this.isLoading = false;
        }, error => {
          console.log(error);
          this.error = error.error.error.message;
          this.isLoading = false;
        })
    }
    this.signinForm.reset()
  }

  onSwitch() {
    this.isLoggedin = !this.isLoggedin
  }

}
