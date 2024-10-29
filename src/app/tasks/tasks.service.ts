import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from './task/task.model';

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = dummyTasks;

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(newTask : NewTask, userId: string) {
        this.tasks.unshift({
          id: new Date().getTime().toString(),
          userId: userId,
          title: newTask.title,
          summary: newTask.summary,
          dueDate: newTask.date
        })
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
}