import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AnimePredictionServiceService {
  private apiUrl = 'http://localhost:8000/predict/';
  constructor(private http: HttpClient) { }

  predictPopularity(episodes: number, members: number, score: number, ranked: number): Observable<any> {
    const body = { "episodes": episodes, "members": members, "score": score, "ranked": ranked};
    return this.http.post<any>(this.apiUrl, body);
  }
}
