import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  setFibonacci(formData: any) {
    // tslint:disable-next-line: prefer-const
    //let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
    // tslint:disable-next-line: prefer-const
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post('http://localhost:3000/setFibonacci', formData, httpOptions);
  }

  setDev(formData: any) {
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post('http://localhost:3000/setDev', formData, httpOptions);
  }

  getValues() {
    // tslint:disable-next-line: prefer-const
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post('http://localhost:3000/getlocation', httpOptions);
  }
}
