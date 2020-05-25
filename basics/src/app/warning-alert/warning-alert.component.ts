import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  userName = "";
  spanVisible = false;
  clickStatusValues= [];
  constructor() { }

  ngOnInit(): void {
  }
  
  onButtonClick(){
    this.userName = "";
  }

  onDisplayClick(){
    this.spanVisible = !this.spanVisible;
    // this.clickStatusValues.push(this.clickStatusValues.length + 1);
    this.clickStatusValues.push(new Date());
  }
}
