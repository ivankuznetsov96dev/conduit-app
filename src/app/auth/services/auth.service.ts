import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RegisterRequestInterface } from '../types/register-request.interface';
import { CurrentUserInterface } from '../../shared/types/current-user.interface';
import { environment } from '../../../environments/environment';
import { AuthResponceInterface } from '../types/auth-responce.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users`;
    return this.http
      .post<AuthResponceInterface>(url, data)
      .pipe(map((data: AuthResponceInterface) => data.user));
  }
}
