import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc, CollectionReference, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Task } from '../../interface/Task';

@Injectable({
  providedIn: 'root' 
})
export class TaskService {
  private tasksCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.tasksCollection = collection(this.firestore, 'TASKS');
  }

  addTask(task: Task): Promise<void> {
    return addDoc(this.tasksCollection, task).then(() => { });
  }

  getTasks(): Observable<Task[]> {
    return collectionData(this.tasksCollection, { idField: 'id' }) as Observable<Task[]>; 
  }

  updateTask(task: Task): Promise<void> {
    const taskDoc = doc(this.firestore, `TASKS/${task.id}`);
    return updateDoc(taskDoc, { ...task });
  }

  async deleteTask(taskId: string): Promise<void> {
    const taskDoc = doc(this.firestore, `TASKS/${taskId}`);
    await deleteDoc(taskDoc); 
  }

  getTaskById(taskId: string): Observable<Task> {
    const taskDoc = doc(this.firestore, `TASKS/${taskId}`);
    return docData(taskDoc, { idField: 'id' }) as Observable<Task>; 
  }
}