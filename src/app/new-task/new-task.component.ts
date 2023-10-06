import { Component, OnInit } from '@angular/core';
import { MyTask } from 'src/model/myTask';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit{
  allGroups:any=[]//to hold all group name
  task:MyTask={}

  constructor(private api:ApiService, private router:Router){
    this.task.GroupId="Select a Catagory"
  }
  ngOnInit(): void {
   this.api.getAllGroups().subscribe((data:any)=>{
    this.allGroups=data
   })
  }

  addTask(){
    this.api.addTask(this.task).subscribe((result:any)=>{
      this.router.navigateByUrl('')
    })

  }

}
