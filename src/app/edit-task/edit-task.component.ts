import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyTask } from 'src/model/myTask';
import { MyGroup } from 'src/model/myGroup';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit{

  groups:MyGroup[]=[]//to hold all group details
  task:MyTask={}// specific task details
  nameId:string=''//name id of task
  
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.name);
      this.nameId=data.name;

      //call api for a specific task details
      this.api.viewTaskDetails(this.nameId).subscribe((result:any)=>{
        console.log(result);
        this.task=result

        //api for getting allgroup info
        this.api.getAllGroups().subscribe((data:any)=>{
          console.log(data);
          this.groups=data
        })
       
      })
    })
  }
  updateTask(){
    this.api.updateTask(this.nameId,this.task).subscribe((result:any)=>{
      console.log(result);
      this.route.navigateByUrl('/')
    })
  }

}
