import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MessageService {

  constructor(private http:HttpClient) {}


  sendMailSumbit(data){
    let body = JSON.stringify(data);
    console.log(body);
    return this.http.post('http://localhost:8080/sendmail', body, httpOptions).subscribe();
  }
}
