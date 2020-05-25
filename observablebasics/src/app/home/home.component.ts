import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable, observable } from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObservableSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    // simple interval observable
    // this.firstObservableSubscription= interval(1000)
    // .subscribe(count => {
    //   console.log(count);
    // })

    const customIntervalObservable= Observable.create(observer => {
      let count= 0;
      setInterval(()=> {
        observer.next(count);
        if(count === 2){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error('Count is greater than 3'));
        }
        count++;
      }, 1000)
    })

    

    this.firstObservableSubscription= customIntervalObservable.pipe(filter(data => {
      return data > 0;
    }),map((data: number) => {
      return 'Round' + (data + 1);
    })).subscribe(data=> {
      console.log(data);
    }, error=> {
      alert(error.message);
    }, ()=> {
      console.log('Observable Completed');
    })
  }

  ngOnDestroy(){
    this.firstObservableSubscription.unsubscribe();
    
  }

}
