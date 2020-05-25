import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  title = 'servicebasics';

  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService){}
  
  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }
}
