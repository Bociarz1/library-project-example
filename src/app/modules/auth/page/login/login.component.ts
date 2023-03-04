import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username:string='';
  password:string='';

  constructor(private authService:AuthService) {}

  LogIn() {
    if (this.username !== '' && this.password !== '') {
      const user = {username:this.username,password:this.password}
      this.authService.LogIn(user)
    }
    else console.log("inputs are empty")
  }
}
