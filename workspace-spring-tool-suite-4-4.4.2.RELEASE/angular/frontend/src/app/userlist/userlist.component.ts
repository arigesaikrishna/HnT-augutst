import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: any[] = [];
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    const observable = this.userService.getUsers();
    observable.subcribe(usersFromServer:any)=>{
      this.users=usersFromServer;
    }
  }

}
