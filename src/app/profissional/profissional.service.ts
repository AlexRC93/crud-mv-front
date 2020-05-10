
import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../app.api';
import { Observable } from 'rxjs/internal/Observable';
import { Profissional } from './profissional.model';

@Injectable()
export class ProfissionalService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
 });
  options = {
    headers: this.headers
 }

  constructor(private http: HttpClient){}

  getProfissionais(): Observable<any> {
    return this.http.get(`${BASE_URL}/profissionais`)
  }

  salvarProfissional(profisisonal: Profissional): Observable<any> {
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json')
    return this.http.post(`${BASE_URL}/profissionais`, JSON.stringify(profisisonal),
    this.options)
  }

  deletarProfisisonal(id:number): Observable<any> {
    return this.http.delete(`${BASE_URL}/profissionais/${id}`)
  }

}
