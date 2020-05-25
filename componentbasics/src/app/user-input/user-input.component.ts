import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  newServerName= '';
  newServerContent= '';
  newWriteValue= '';
  @Output() serverCreated= new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated= new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverContentInputElement') serverContentInput :ElementRef; 
  constructor() { }

  ngOnInit(): void {
  }


  // onAddServer(){
  //   this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  // }

  // onAddBlueprint(){
  //   this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  // }

  onAddServer(nameInput: HTMLInputElement){
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
