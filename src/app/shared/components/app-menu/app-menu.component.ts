import {Component, OnInit} from '@angular/core';
import {LayoutService} from "../../services/app.layout.service";
import {NgForOf, NgIf} from "@angular/common";
import {AppMenuitemComponent} from "./app.menuitem.component";
import {AppConfigModule} from "../../config/config.module";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        AppMenuitemComponent,
        AppConfigModule
    ],
    templateUrl: './app-menu.component.html',
    styleUrls: ['./app-menu.component.scss'],
    styles: ``
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService,
                private authService: AuthService) {
    }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard']}
                ]
            },
            {
                label: 'Cursos',
                items: [
                    {label: 'Mis cursos', icon: 'pi pi-fw pi-list-check', routerLink: ['/mis-cursos']},
                    {label: 'Nuevo curso', icon: 'pi pi-fw pi-plus', routerLink: ['/new']},
                    {label: 'Buscar curso', icon: 'pi pi-fw pi-search', routerLink: ['/search']}
                ]
            },
            {
                label: 'Mi cuenta',
                items: [
                    {label: 'Mensajes', icon: 'pi pi-fw pi-envelope', routerLink: ['/messages']},
                    {label: 'Mi perfil', icon: 'pi pi-fw pi-user', routerLink: ['/my-profile']},
                    {
                        label: 'Cerrar sesión',
                        icon: 'pi pi-fw pi-sign-out',
                        command: () => this.logout()
                    },
                ]
            }
        ];
    }

    logout() {
        this.authService.logout();
    }
}
