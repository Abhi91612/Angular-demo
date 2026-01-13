import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppUtilityService } from '../app-utility.service';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss'
})
export class TodoListItemComponent {
  constructor(private service:AppUtilityService ){}
 task=[{
  value:'task1'
   }];
  taskTitle='take A toure';
  isCompleted=false;

  updateTitle(newTitle:string){
    this.taskTitle=newTitle;
  }

  completeTask(){
    this.isCompleted=true;
  }
}
