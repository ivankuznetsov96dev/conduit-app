import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetFeedResponceInterface } from '../types/get-feed-responce.interface';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  public getFeed(url: string): Observable<GetFeedResponceInterface> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<GetFeedResponceInterface>(fullUrl);
  }
}
