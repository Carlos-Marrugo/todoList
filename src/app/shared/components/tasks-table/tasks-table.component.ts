import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../interface/Task';
import { LoadingController, ModalController } from '@ionic/angular';
import { AddTaskPage } from 'src/app/modals/add-task/add-task.page';
import { docData } from '@angular/fire/firestore';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss'],
  standalone: false
})
export class TasksTableComponent implements OnInit {
  tasks$ = this.taskService.getTasks(); 
  router: any;

  constructor(private taskService: TaskService, private modalCtrl: ModalController, private loadingCtrl: LoadingController) { }

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks();
  }

  async editTask(task: Task) {
    const modal = await this.modalCtrl.create({
      component: AddTaskPage,
      componentProps: { task }
    });
    await modal.present();
  }

  async deleteTask(task: Task) {
    const loading = await this.loadingCtrl.create({
      message: 'Eliminando...',
      duration: 1000
    });
    await loading.present();

    try {
      await this.taskService.deleteTask(task.id!); // Elimina la tarea
      this.tasks$ = this.taskService.getTasks(); // Actualiza la lista de tareas
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    } finally {
      loading.dismiss();
    }
  }

  viewTaskDetail(task: Task) {
    this.router.navigate(['/task-detail', task.id]);
  }
}
