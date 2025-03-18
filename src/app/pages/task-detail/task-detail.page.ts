import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/shared/services/task.service';
import { Task } from 'src/app/interface/Task';

@Component({
  standalone: false,
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {

  taskId: string = '';
  task: Task | null = null;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id') || '';
    this.taskService.getTaskById(this.taskId).subscribe((task) => {
      this.task = task;
    });
  }

}
