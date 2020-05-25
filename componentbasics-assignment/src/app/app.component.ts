import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentbasics-assignment';
  counterValueOdd = [];
  counterValueEven= [];
  
  onIntervalFired(fetchedValue: number){
    if(fetchedValue % 2 === 0){
      this.counterValueEven.push(fetchedValue);
    }else{
      this.counterValueOdd.push(fetchedValue);
    }
  }

}
