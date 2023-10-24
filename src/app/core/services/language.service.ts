import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { constant, DEFAULT_LANG } from '../helpers/global.helper';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private translate: TranslateService,
  ) {

  }



  get languages() {
    return [
      { name: 'English', code: 'en' },
      { name: 'Swedish', code: 'sw' },
    ];
  }


  setLang(lang?: string) {
    lang = lang ?? DEFAULT_LANG;
    window.sessionStorage.setItem(constant().app.config.lang, lang);
    this.translate.setDefaultLang(lang);
  }



}
