import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CardDto } from '../../shared/models/card.dto';
import { PaginatorDto } from '../../shared/models/paginator.dto';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  
  getSearchResult(
    paginator: PaginatorDto
  ): Observable<CardDto[]> {
    return this.http.get<CardDto[]>(
      `${environment.apiRoot}/cards?
        page=${paginator.page}
        &pageSize=${paginator.pageSize}
        &select=id,name`
    );
  }

}
