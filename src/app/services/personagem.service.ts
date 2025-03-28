import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getPersonagem(page: number, nameFilter: string, statusFilter: string): Observable<any> {
    let url = `${this.apiUrl}?page=${page}`;

    if (nameFilter) {
      url += `&name=${nameFilter}`;
    }
    if (statusFilter && statusFilter !== 'all') {
      url += `&status=${statusFilter}`;
    }

    return this.http.get<any>(url);
  }

  getPersonagemPorId(ids: number[]): Observable<any[]> {
    const idsString = ids.join(',');

    if (ids.length === 0) {
      return of([]);
    }

    return this.http.get<any>(`${this.apiUrl}/${idsString}`).pipe(
      map((response: any) => Array.isArray(response) ? response : [response])
    );
  }
}
