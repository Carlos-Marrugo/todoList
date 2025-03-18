import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskService } from '../../shared/services/task.service';
import { Task } from '../../interface/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  standalone: false
})
export class AddTaskPage {
  @Input() task!: Task;
  isEditMode: boolean = false;

  errorMessage: string = '';

  constructor(private modalCtrl: ModalController, private taskService: TaskService) {
    if (!this.task) {
      this.task = {
        title: '',
        description: '',
        date: new Date().toISOString(),
        completed: false
      };
    } else {
      this.isEditMode = true;
    }
  }

  async saveTask() {
    if (!this.task.title.trim()) {
      this.errorMessage = 'El título es obligatorio.';
      return;
    }

    if (!this.task.description.trim()) {
      this.errorMessage = 'La descripción es obligatoria.';
      return;
    }

    if (this.isEditMode) {
      await this.taskService.updateTask(this.task);
    } else {
      await this.taskService.addTask(this.task);
    }

    this.closeModal();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
