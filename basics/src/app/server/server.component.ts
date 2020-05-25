import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId= 10;
  serverValue= {
    status: "Ok",
    code: Math.random() > 0.5 ? 'online' : 'offline'
  }
  allowNewServer= true;
  newClass= "btn btn-danger";
  timeOutValue= 5000;
  serverCreationStatus = "Server creation pending";
  serverStatus = false;
  servers = ['10']
  newServerPortValue= '';

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = false;
      this.newClass= "btn btn-primary";
    },this.timeOutValue)
   }

  ngOnInit(): void {
  }

  addServer(){
    this.serverCreationStatus = `Server was created on port ${this.serverId}`;
    this.servers.push((this.serverId).toString());
    this.serverStatus = true;
  }

  onUpdateServerName(event:Event){
    this.serverId = parseInt((<HTMLInputElement>event.target).value);
  }

  getColor(){
    return this.serverValue.code === 'online' ? 'green' : 'red';
  }
}
