import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone: false
})
export class TaskComponent implements OnInit {
  @Input() task!: any


  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {}
}
