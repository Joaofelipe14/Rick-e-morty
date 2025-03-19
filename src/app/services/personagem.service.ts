import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getPersonagem(page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`);
  }

  getPersonagemPorId(ids: number[]): Observable<any[]> {
    const idsString = ids.join(',');

    return this.http.get<any>(`${this.apiUrl}/${idsString}`).pipe(
      map((response: any) => Array.isArray(response) ? response : [response])
    );
  }
}
