import {inject, Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {environments} from '../../../environments/environments';
import {User} from '../interfaces/user.interface';
import {SigninRequest} from "../interfaces/signin-request.interface";
import {HttpClient} from "@angular/common/http";
import {StorageService} from "../../shared/services/storage.service";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {

    private baseUrl = environments.baseUrl;
    private user?: User;
    private http = inject(HttpClient);

    constructor(private storageService: StorageService,
                private router: Router) {
        this.baseUrl = `${this.baseUrl}/api/auth`;
    }

    public login(signinrequest: SigninRequest): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/signin`, signinrequest);
    }

    setCurrentUser(currentUser: User) {
        this.user = currentUser;
        this.storageService.setCurrentUser(currentUser);
    }

    getCurrentUser(): User | undefined {
        if (!this.storageService.getCurrentUser()) return undefined;
        return this.storageService.getCurrentUser();
    }

    checkAuthentication(): Observable<boolean> {
        if (!this.getCurrentUser()) {
            return of(false);
        }
        return of(true);
    }

    logout() {
        this.storageService.removeCurrentUser();
        this.router.navigate(['/auth/login']);
    }
}
