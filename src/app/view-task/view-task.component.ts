import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit{
  nameId:string=''//to hold name id
  task:any=[]//to hold fetched data
  groupId:string=''//to hold GroupId of the task
  groupName:string=''//to hold group name of the contact

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}
  ngOnInit(): void {
    //to get id from url
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.name);
      this.nameId=data.name ;
      //to fetch data from that specific id
      this.api.viewTaskDetails(this.nameId).subscribe((result:any)=>{
        console.log(result);
        this.task=result
        this.groupId=result.GroupId
        console.log(this.groupId);
        
        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
          console.log(data);
          this.groupName=data.name
          console.log(this.groupName);
          
          
        })
      }) 
       
    })
  }

}
