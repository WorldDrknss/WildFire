import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import {User} from "../_models/users";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe({
      next:(response) => {
        this.router.navigateByUrl('/members');
      },
      error:(e: any) => { console.log(e) },
      complete: () => { console.log("completed") }
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
