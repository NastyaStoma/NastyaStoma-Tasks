import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent { 
	
	public TasksArray: string[] = [];
	
	AddTask(taskName:string)
	{
		if(taskName == '')
			alert('Please, create a task before adding to the list :)');
		else
			this.TasksArray.push(taskName);
	}
	RemoveTask(index:number)
	{
		this.TasksArray.splice(index, 1);
	}
}