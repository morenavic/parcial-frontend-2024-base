import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {PasswordModule} from "primeng/password";
import {CheckboxModule} from "primeng/checkbox";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {LayoutService} from "../../../shared/services/app.layout.service";
import {ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";
import {NgStyle} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {SigninRequest} from "../../interfaces/signin-request.interface";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

@Component({
    selector: 'auth-login-page',
    standalone: true,
    imports: [RouterModule, PasswordModule, CheckboxModule, FormsModule, ButtonDirective, Ripple, InputTextModule, NgStyle, ReactiveFormsModule, ToastModule],
    providers: [MessageService],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss'
})
export default class LoginPageComponent implements OnInit {

    valCheck: string[] = ['remember'];
    password!: string;
    public image: SafeStyle;
    form!: FormGroup;
    loading: boolean = false;

    constructor(public layoutService: LayoutService,
                private sanitization: DomSanitizer,
                private formBuilder: FormBuilder,
                private authService: AuthService,
                private messageService: MessageService,
                private router: Router) {
        this.image = this.sanitization.bypassSecurityTrustStyle('url(./assets/layout/images/signin.webp');
    }

    ngOnInit(): void {
        this.buildForm();
    }

    private buildForm(): any {
        this.form = this.formBuilder.group({
            usuario: ['', [Validators.required, Validators.minLength(4)]],
            password: ['', [Validators.required, Validators.minLength(4)]],
        });
    }

    login(): void {
        this.loading = true;
        if (this.form.invalid) {
            this.form.markAsTouched();
            return;
        }

        const signinrequest: SigninRequest = {
            username: this.form.controls['usuario'].value,
            password: this.form.controls['password'].value
        }

        this.authService.login(signinrequest).subscribe({
            next: (response) => {
                this.authService.setCurrentUser(response);
                this.loading = false;
                this.messageService.add({severity: 'success', summary: 'Success', detail: 'Bienvenido!'});
                this.router.navigate(['/dashboard']);
            },
            error: (error) => {
                console.error(error.error);
                this.loading = false;
                this.messageService.add({severity: 'error', summary: 'Error', detail: error.error});
            }
        });
    }

    unsplashClass(): any {
        return {
            'min-height': '100%',
            'background-size': 'cover',
            position: `relative`
        };
    }
}
