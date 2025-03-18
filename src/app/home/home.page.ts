import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTaskPage } from '../modals/add-task/add-task.page';
import { map, Observable } from 'rxjs';
import { TaskService } from '../shared/services/task.service';
import {  Task } from '../interface/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage {
  tasks$!: Observable<Task[]>; 
  searchTerm: string = '';

  constructor(private modalCtrl: ModalController, private taskService: TaskService) { }

  async openAddTaskModal() {
    const modal = await this.modalCtrl.create({
      component: AddTaskPage
    });
    return await modal.present();
  }

  searchTasks(event: any) {
    this.searchTerm = event.target.value;
    this.tasks$ = this.taskService.getTasks().pipe(
      map(tasks => tasks.filter(task => task.title.toLowerCase().includes(this.searchTerm.toLowerCase())))
    );
  }

}
