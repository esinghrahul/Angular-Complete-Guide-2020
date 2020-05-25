import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    console.log(`Request is on its way to ${req.url} and this message was logged via a simple interceptor implementation.`);
    const modifiedRequest= req.clone({
      headers: req.headers.append('Auth', 'xyz')
    })
    console.log(`Request has been modified and is now on its way with new request headers`);
    return next.handle(modifiedRequest)
    .pipe(tap(event => {
      console.log(event);
      if(event.type === HttpEventType.Response){
        console.log('Response has arrived and can also be handled via interceptor.');
        console.log('body data arrived as:', event.body);
      }
    }));
  }
}
