import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  users:{username:string,password:string}[] = [];

  AddUser(data:{username:string,password:string}){
    this.users.push(data)
  }
  LogIn(data:{username:string,password:string}) {
    if (this.users.filter(user => user.username === data.username && user.password === data.password)) {
      console.log(`hello ${data.username}, you have just logged in!`)
    }
    else console.log("this user dont exist")
  }
}
