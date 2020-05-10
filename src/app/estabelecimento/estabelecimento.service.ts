
import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../app.api';
import { Observable } from 'rxjs/internal/Observable';
import { Estabelecimento } from './estabelecimento.model';

@Injectable()
export class EstabelecimentoService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
 });
  options = {
    headers: this.headers
 }

  constructor(private http: HttpClient){}

  getEstabelecimentos(): Observable<any> {
    return this.http.get(`${BASE_URL}/estabelecimentos`)
  }

  salvarEstabelecimento(estabelecimento: Estabelecimento): Observable<any> {
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json')
    return this.http.post(`${BASE_URL}/estabelecimentos`, JSON.stringify(estabelecimento),
    this.options)
  }

  deletarEstabelecimento(id:number): Observable<any> {
    return this.http.delete(`${BASE_URL}/estabelecimentos/${id}`)
  }

}
