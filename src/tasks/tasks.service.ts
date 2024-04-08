import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class TasksService {
  private tasks: Task[];

  constructor(
    @InjectModel(Task.name)
    private tasksModel: mongoose.Model<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    const tasks = await this.tasksModel
      .find()
      .sort({ timestamp: 'desc' })
      .exec();

    this.tasks = tasks;

    return tasks;
  }

  async findAllByDate(date): Promise<Task[]> {
    const tasks = await this.tasksModel
      .find({ date })
      .sort({ timestamp: 'desc' })
      .exec();

    this.tasks = tasks;
    return tasks;
  }

  async create(task: Task): Promise<Task> {
    const resp = await this.tasksModel.create(task);
    return resp;
  }

  async updateById(id: string, task: Task): Promise<Task> {
    return await this.tasksModel.findByIdAndUpdate(id, task, {
      new: true,
    });
  }

  async deleteById(id: string): Promise<Task> {
    return await this.tasksModel.findByIdAndDelete(id);
  }

  async findAllTasksDate(): Promise<string[]> {
    const resp = await this.tasksModel
      .distinct('date')
      .sort({ date: 'desc' })
      .exec();
    return resp;
  }
}
