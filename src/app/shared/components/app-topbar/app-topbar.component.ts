import {Component, ElementRef, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";
import {LayoutService} from "../../services/app.layout.service";
import {RouterLink} from "@angular/router";
import {CommonModule, NgClass} from "@angular/common";
import {MenubarModule} from "primeng/menubar";
import {MenuModule} from "primeng/menu";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
    selector: 'shared-topbar',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        NgClass,
        MenubarModule,
        MenuModule
    ],
    templateUrl: './app-topbar.component.html',
    styles: ``
})
export class AppTopbarComponent {

    items!: MenuItem[];
    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
    @ViewChild('topbarmenu') menu!: ElementRef;
    itemsPerfil: MenuItem[];

    constructor(public layoutService: LayoutService,
                private authService: AuthService) {
        this.itemsPerfil = [
            {
                items: [
                    {
                        label: 'Mi perfil',
                        icon: 'pi pi-user',
                        routerLink: ['/my-profile']
                    },
                    {
                        label: 'Cerrar sesión',
                        icon: 'pi pi-sign-out',
                        command: () => this.logout()
                    }
                ]
            }
        ];
    }

    logout() {
        this.authService.logout();
    }

    set theme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            theme: val,
        }));
    }

    set colorScheme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            colorScheme: val,
        }));
    }

    changeColorScheme(colorScheme: string) {
        const currentTheme = this.layoutService.config().theme;

        if (currentTheme.includes('light')) {
            this.theme = currentTheme.replace('light', 'dark');
        } else if (currentTheme.includes('dark')) {
            this.theme = currentTheme.replace('dark', 'light');
        }

        this.colorScheme = colorScheme;
    }

    getColorSchemePayload(currentScheme: string): string {
        return currentScheme === 'light' ? 'dark' : 'light';
    }

    getColorSchemeIcon(currentScheme: string): string {
        return currentScheme === 'light' ? 'pi-moon' : 'pi-sun';
    }
}
