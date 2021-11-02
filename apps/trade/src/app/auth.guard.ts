/* eslint-disable max-len */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, filter, mapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private http: HttpClient) {}
  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const code = route.queryParams['code'];
    if (code && code.length > 0) {
      const headers = new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      );

      const formData = new FormData();
      formData.append('grant_type', 'authorization_code');
      formData.append('access_type', 'offline');
      formData.append('code', decodeURIComponent(code));
      formData.append(
        'client_id',
        'OSO9U25QK6O9X5JFOGEJUYTBUDPLQFFT@AMER.OAUTHAP'
      );
      formData.append('redirect_uri', 'https://127.0.0.1:4200');

      // const body = {
      //   grant_type: 'authorization_code',
      //   access_type: 'offline',
      //   code: decodeURIComponent(code),
      //   client_id: 'OSO9U25QK6O9X5JFOGEJUYTBUDPLQFFT@AMER.OAUTHAP',
      //   redirect_uri: 'https://127.0.0.1:4200',
      // };

      return this.http
        .post('https://api.tdameritrade.com/v1/oauth2/token', formData)
        .pipe(
          filter((r) => +r['responseStatusCode'] !== 400),
          mapTo(true),
          catchError(() => of(false))
        );
    }

    const x = `https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=${encodeURIComponent(
      'https://127.0.0.1:4200'
    )}&client_id=${encodeURIComponent(
      'OSO9U25QK6O9X5JFOGEJUYTBUDPLQFFT@AMER.OAUTHAP'
    )}`;
    window.location.href = x;
    return false;
  }
}
