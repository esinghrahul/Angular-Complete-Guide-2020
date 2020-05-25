import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  @Input() account: {name: string, status: string};
  @Input() id: number;


  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
  // Example of cross-component communication using services
    this.accountsService.statusUpdatedAlert.emit(status);
  }

}
