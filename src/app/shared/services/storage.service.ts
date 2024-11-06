import {Injectable} from '@angular/core';
import {User} from "../../auth/interfaces/user.interface";

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() {
    }

    setCurrentUser(user: User) {
        const encrypt = JSON.stringify(user);
        sessionStorage.setItem('cr3d', encrypt);
    }

    getCurrentUser(): User | undefined {
        if (!sessionStorage.getItem('cr3d')) {
            return undefined;
        } else {
            return JSON.parse(sessionStorage.getItem('cr3d')!);
        }
    }

    removeCurrentUser() {
        sessionStorage.removeItem('cr3d');
    }
}
