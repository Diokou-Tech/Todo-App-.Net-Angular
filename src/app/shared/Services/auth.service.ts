import { Injectable } from '@angular/core';
import { AppConsts } from '../Consts';
import { HttpClient }  from '@angular/common/http';

import { RegisterDto } from '../Dtos/RegisterDto';
import { AlerterService } from './alerter.service';
import { ResponseDto } from '../Dtos/ResponseDto';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private readonly _clientHttp : HttpClient ,
    private readonly _alerterService:AlerterService
  ) {}
   public async Register(model:RegisterDto) : Promise<any>
  {
    var result = this._clientHttp.post<ResponseDto>(AppConsts.AuthUrlApi.register, model);
    return result;
  }
}