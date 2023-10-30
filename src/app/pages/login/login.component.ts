import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  loginError = false;
  

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    const usernameControl = this.loginForm.get('username');
    const passwordControl = this.loginForm.get('password');
  
    if (usernameControl && passwordControl) {
      const username = usernameControl.value;
      const password = passwordControl.value;
      this.loginError = !this.loginService.login(username, password);
      console.log(this.loginError)
    }

    if (!this.loginError){
      this.router.navigate(['customer-list']);
      this.toastr.success("Login relizado com sucesso!");
    } else{
      this.toastr.error("Usuário ou senha inválidos");
    }

   
  }
  

}
