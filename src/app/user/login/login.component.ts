import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  login(): void {
    if (this.form.invalid) {
      return;
    }

    const {
      username,
      password
    } = this.form.value;

    this.userService
      .login(username!, password!)
      .subscribe(() => {
        this.router.navigate(['/home']);
      })
  }
}
