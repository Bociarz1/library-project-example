import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username:string = '';
  password:string = '';
  repeatPassword:string = '';
  constructor(private authService:AuthService) {}

  Register() {
    if(this.username !== "" && this.password !=="" && this.repeatPassword !== "") {
      if (this.password === this.repeatPassword) {
        const user = {username:this.username,password:this.password}
        this.authService.AddUser(user)
      }
      else console.log("passwords are different")
    }
    else console.log("empty inputs")
    
  }
}
