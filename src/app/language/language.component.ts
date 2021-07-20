import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/Services/translate-config.service';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  
  constructor(private translate:TranslateConfigService) { }

  ngOnInit(): void {
  }
  changeLang(type:string){
    this.translate.changelang(type);
  }

}
