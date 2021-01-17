import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiLoginService } from '../../../services/api-login.service'
import { LoginRequestModel } from '../../../models/login/login-request.interface'

@Component({
  selector: 'app-login-signin',
  templateUrl: './login-signin.component.html',
  styleUrls: ['./login-signin.component.css']
})
export class LoginSigninComponent implements OnInit {

  // Definiendo variable del login
  loginForm = new FormGroup({
    user_email: new FormControl('', Validators.required),
    user_password: new FormControl('', Validators.required)
  })

  constructor(private api: ApiLoginService) { }

  ngOnInit(): void {
  }

  // Metodo submit del login
  Push_login(form: LoginRequestModel) {
    this.api.Post_login(form).subscribe(data => {
      console.log(data);
    })
  }
}
