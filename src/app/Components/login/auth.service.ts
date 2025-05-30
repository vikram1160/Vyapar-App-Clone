import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'https://freeapi.miniprojectideas.com/api/User/GetAllUsers';

  constructor(private http: HttpClient) { }

   login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
