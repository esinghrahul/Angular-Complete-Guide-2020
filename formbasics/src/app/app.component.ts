import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formbasics';
  defaultQuestion= 'teacher';
  answer= "";
  gender= ['male', 'female'];
  @ViewChild('form') signupForm: NgForm;
  user={
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  isSubmitted= false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm);
    this.isSubmitted = true;
    this.user.username= this.signupForm.value.userData.username;
    this.user.email= this.signupForm.value.userData.email;
    this.user.secretQuestion= this.signupForm.value.select;
    this.user.answer= this.signupForm.value.questionAnswer;
    this.user.gender= this.signupForm.value.gender;

    this.signupForm.reset();
  }

}
