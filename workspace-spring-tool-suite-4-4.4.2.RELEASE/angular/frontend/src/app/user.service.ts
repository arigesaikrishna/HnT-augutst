import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = "http://localhost:8080/user"
@Injectable({
  providedIn: 'root'
})

export class UserService {
  deleteUser(id: any) {
  return this.http.delete(URL+"/"+id);
  }
  save(user: any){
    return this.http.post(URL+"/age/"+24+"/height/"+100+"?param1=43&param2",user);
  }
  getUser(){
    return this.http.get(URL);
    }

  constructor(public http:HttpClient) { }
}
