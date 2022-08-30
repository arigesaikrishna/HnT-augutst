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
  }
  constructor(public userService: UserService) { }

  saveUser(){
    console.log('clicked');
    const promise = this.userService.save(this.user);
    promise.subscribe((response:any)=>{
      console.log(response);
    }),
    (error:any)=> {
      console.log(error);
    }
    );
  }

  ngOnInit(): void {
  }

}
