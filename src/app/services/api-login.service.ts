import { Injectable } from '@angular/core';
import { LoginRequestModel } from '../models/login/login-request.interface'
import { LoginResponseModel } from '../models/login/login-response.interface'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  api: string = environment.BASE_URL
  token: string = environment.API_KEY


  constructor(private http: HttpClient) { }

  // Función post del login
  Post_login(credentials: LoginRequestModel): Observable<LoginResponseModel> {
    // Servicio del login
    const serviceLogin = this.api + "login"
    // parametro con autenticación
    let params = new HttpParams();
    params = params.append('apiKey', this.token)

    return this.http.post<LoginResponseModel>(serviceLogin, credentials, { params });
  }
}
