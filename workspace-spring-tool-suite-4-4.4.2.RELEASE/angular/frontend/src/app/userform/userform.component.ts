import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  user = {
    name:'Saikrishna',
    age:10
    dob: new Date()
  }
  users:any[]=[];
  constructor(public userService: UserService) { }
  deleteUser(id:number){
    const observable = this.userService.deleteUser(id);
  }
  saveUser(){
    this.user.dob = new Date(this.user.dob);
    const observable = this.userService.save(this.user);
    observable.subscribe((responseBody:any)=>{
      console.log(responseBody);
    }),
    (error:any)=> {
      console.log(error);
    }
    );
  }

  ngOnInit(): void {
   const observable = this.userService.getUsers();
   observable.subcribe(usersFromServer:any)=>{
     this.users=usersFromServer;
   }
  }

}
