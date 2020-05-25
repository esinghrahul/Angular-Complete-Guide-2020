import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import {map, catchError, tap} from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error= new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string){
    const postData: Post= {title: title, content: content};
    this.http.post<{name: string}>('https://ng-complete-http-section.firebaseio.com/posts.json',
    postData
    // ,{
    //   observe: 'response'
    // })
    ).subscribe(responseData => {
      console.log(responseData);
    }, error=> {
      this.error.next(error.message);
    })
  }

  fetchPosts(){
    let searchParams= new HttpParams();
    searchParams= searchParams.append('print', 'pretty');
    searchParams= searchParams.append('custom', 'key')
    //Response object is received by default as an object with a key, hence using spread operator to push individual values
    //and then inserting the key itself as an id into the new array inside map operator
    return this.http.get<{[key: string]: Post }>('https://ng-complete-http-section.firebaseio.com/posts.json',
    {headers: new HttpHeaders({'Custom-Header': 'Hello'}),
    params: searchParams,
    responseType: 'json'
  })
    .pipe(map(responseData => {
      const postsArray: Post[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key], id: key});
        }
      }
      return postsArray;
    }),
    catchError(errorRes=> {
      //Additional handling tasks like sending to analytics server for error logging
      return throwError(errorRes);
    }))
  }

  deletePosts(){
    return this.http.delete('https://ng-complete-http-section.firebaseio.com/posts.json',
    {
      observe: 'events'
    }).pipe(tap(event=> {
      console.log(event);
      if(event.type === HttpEventType.Response){
        console.log(event.body);
      }
    }));
  }

}
