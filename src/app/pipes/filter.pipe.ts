import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allTasks:any[],searchTerm:string,propsName:string):any[]{
    const result:any[]=[]
    if(!allTasks||searchTerm==''||propsName==''){
    return allTasks;
  }
    allTasks.forEach((task:any)=>{
      if(task[propsName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
      result.push(task)
    })
    return result;



  }
  

}
