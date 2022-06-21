import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/users';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WildFire';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService) {}

  ngOnInit() {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  getUsers() {
    this.http.get("https://localhost:5001/api/Users").subscribe({
      next: (response:any) => {
        this.users = response;
        },
      error: (e:any) => { console.log(e); },
      complete: () => { console.log("complete") }
    });
  }

}
