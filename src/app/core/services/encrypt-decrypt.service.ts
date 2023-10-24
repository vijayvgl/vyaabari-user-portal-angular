import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { constant } from '../helpers/global.helper';
@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {
  apiKey: string = "ACCUPAYD-VYABARI"
  constructor() { }

  encrypt(data: string) {
    let encryptedData = CryptoJS.AES.encrypt(data, this.apiKey)
    return encryptedData.toString()
  }

  decrypt(data: string) {
    let decryptedData
    var returnValue = CryptoJS.AES.decrypt(data, this.apiKey);
    decryptedData = returnValue.toString(CryptoJS.enc.Utf8);
    return decryptedData
  }

  encryptUsingAES256(plainText: any) {
    let _key = CryptoJS.enc.Utf8.parse(constant().app.secureKey);
    let _iv = CryptoJS.enc.Utf8.parse(constant().app.secureIV);
    let encryptData = CryptoJS.AES.encrypt(
      JSON.stringify(plainText), _key, {
      keySize: 128 / 8,
      iv: _iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
    return encryptData ? encryptData : plainText;
    }
  
   decryptUsingAES256(plainText: any) {
    let _key = CryptoJS.enc.Utf8.parse(constant().app.secureKey);
    let _iv = CryptoJS.enc.Utf8.parse(constant().app.secureIV);
    let decryptData =  CryptoJS.AES.decrypt(
      plainText, _key, {
      keySize: 128 / 8,
      iv: _iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return decryptData ? JSON.parse(decryptData) : plainText;
    }
}
