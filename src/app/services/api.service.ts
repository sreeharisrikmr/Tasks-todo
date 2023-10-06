import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyTask } from 'src/model/myTask';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//DI
  constructor(private http:HttpClient) { }

  //get all tasks
  getAllTasks():Observable<MyTask>{
    return this.http.get('http://localhost:3000/tasks')
  }
  //view specific task details
  viewTaskDetails(nameId:string){
    return this.http.get(`http://localhost:3000/tasks/${nameId}`)
  }
  //Api call for getting group name
  getGroupName(GroupId:string){
    return this.http.get(` http://localhost:3000/groups/${GroupId}`)
  }
  //Api call for add Task
  addTask(taskBody:any){
    return this.http.post(`http://localhost:3000/tasks`,taskBody)
  }
  //Api call for get group details
  getAllGroups(){
    return this.http.get(`http://localhost:3000/groups`)
  }
  //Api call for delete a specific task
  deleteTask(nameId:any){
    return this.http.delete(`http://localhost:3000/tasks/${nameId}`)
  }
  //Api call for update a specific task
  updateTask(nameId:any,taskBody:any){
    return this.http.put(`http://localhost:3000/tasks/${nameId}`,taskBody)

  }

}
