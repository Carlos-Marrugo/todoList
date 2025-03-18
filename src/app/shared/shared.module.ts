import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TaskService } from './services/task.service';
import { TaskComponent } from './components/task-item/task-item.component';
import { TasksTableComponent } from './components/tasks-table/tasks-table.component';



@NgModule({
  declarations: [TaskComponent , TasksTableComponent],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

  ],
  exports : [CommonModule,FormsModule,IonicModule,TaskComponent , TasksTableComponent],
})
export class SharedModule { }
