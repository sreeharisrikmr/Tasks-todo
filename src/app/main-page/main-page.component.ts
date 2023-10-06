import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyTask } from 'src/model/myTask';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{

  searchkey:string=''//to hold the searched value

  allTasks:any=[]//hold feteched data

  constructor(private api:ApiService){
  }
  ngOnInit(): void {
   this.getAllTasks()
  }
  getAllTasks(){
    this.api.getAllTasks().subscribe((data:MyTask)=>{
      console.log(data);
      this.allTasks=data
    })
  }
  search(event:any){
    this.searchkey=event.target.value
  }
  
  deleteTask(nameId:any){
    this.api.deleteTask(nameId).subscribe((result:any)=>{
      alert("Task Deleted Successfuly")
      this.getAllTasks()
    })
  }

}
