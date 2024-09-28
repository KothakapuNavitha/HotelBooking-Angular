import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide: boolean = true;
  loginForm!: FormGroup;

  constructor(
    // private RestPasspopup: MatDialog,
    public fb: FormBuilder,
    private router: Router // private auth: AuthsrvcService
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  login(): void {
    // if (this.loginForm.valid) {
    //   this.auth.login(this.loginForm.value).subscribe(
    //     () => {
    //       this.router.navigate(['Menu']);
    //     },
    //     (err: Error) => {
    //       alert(err.message);
    //     }
    //   );
    // }
  }
}
