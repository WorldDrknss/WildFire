import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WildFire';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
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
