import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService   {
apiUrl=`https://jsonplaceholder.typicode.com/users`

  constructor(private http: HttpClient) {}

getD(){
 return this.http.get(this.apiUrl);
}  
}
