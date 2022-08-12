import { Component } from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "sefty-client";

  constructor(public translate: TranslateService) {  
    translate.addLangs(['en', 'fr']);  
    if (localStorage.getItem('locale')) {  
      let browserLang = localStorage.getItem('locale'); 
      if(!browserLang) {
        browserLang = "";
      }
      translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');  
    } else {  
      localStorage.setItem('locale', 'en');  
      translate.setDefaultLang('en');  
    }  
  }

  changeLang(language: string) {  
    localStorage.setItem('locale', language);  
    this.translate.use(language);  
  }
}


