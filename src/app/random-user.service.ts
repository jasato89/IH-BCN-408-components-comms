import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomUserResponse } from './random-user-response';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  private readonly baseUrl = 'https://randomuser.me/api';

  constructor(private http : HttpClient) { }

getRandomUser(): Observable<RandomUserResponse> {
  return this.http.get<RandomUserResponse>(this.baseUrl);

}

}
