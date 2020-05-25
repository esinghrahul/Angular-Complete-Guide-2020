import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubsctiption: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Using snapshot approach to fetch route parameters
    // This is only useful when the component is recreated or reinitialized 
    this.user= {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    // Using observable's subscription approach to fetch route parameters dynamically
    // This is preferred approach
    this.paramsSubsctiption=  this.route.params
    .subscribe((params: Params)=> {
      this.user.id = params['id'];
      this.user.name= params['name'];
    });
  }

  ngOnDestroy(){
    //Unsubscription is automatically managed by angular whenever the component is destroyed.
    //Hence, this line is optional but it is still a good practice.
    this.paramsSubsctiption.unsubscribe();
  }

}
