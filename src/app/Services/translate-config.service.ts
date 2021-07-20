import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  
  constructor(private translateservice:TranslateService) { 
    this.translateservice.use('en');
  }
  changelang(type:string){
    this.translateservice.use(type);
  }
}
