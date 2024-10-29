import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from './task/task.model';

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = dummyTasks;

    constructor() {
        const tasks = localStorage.getItem("tasks");
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        } 
    }

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
        this.saveTasks();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id)
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
}