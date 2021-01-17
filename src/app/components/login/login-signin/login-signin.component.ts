import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiLoginService } from '../../../services/api-login.service'
import { LoginRequestModel } from '../../../models/login/login-request.interface'
import { environment } from "../../../../environments/environment"
import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-login-signin',
  templateUrl: './login-signin.component.html',
  styleUrls: ['./login-signin.component.css']
})

export class LoginSigninComponent implements OnInit {


  // Definiendo variable del login
  loginForm = new FormGroup({
    user_mail: new FormControl('', Validators.required),
    user_password: new FormControl('', Validators.required)
  })

  constructor(private api: ApiLoginService) { }

  ngOnInit(): void {
  }



  // Metodo submit del login
  async Push_login(form: LoginRequestModel) {

    // Proceso de encriptado
    const cryptoEmail = CryptoJS.enc.Base64.parse(form.user_mail);
    const user_mail = CryptoJS.enc.Base64.stringify(cryptoEmail);
    const cryptoPassword = CryptoJS.enc.Base64.parse(form.user_password);
    const user_password = CryptoJS.enc.Base64.stringify(cryptoPassword);

    // TODO: Tengo dificultad con la estructura de los datos (model en LoginRequestModel sin usar en este momento)
    const cryptoForm = { user_mail, user_password }


    await console.log(user_mail, user_password)
    // Enviando contenido a la Api
    await this.api.Post_login(cryptoForm).subscribe(data => {
      console.log(data);
    })
  }
}
