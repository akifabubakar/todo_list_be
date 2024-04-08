import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get() // GET /tasks
  getAllTasks(
    @Query('date') date = undefined,
  ): Promise<Task[]> | BadRequestException {
    if (!date) {
      return new BadRequestException();
    }
    return this.tasksService.findAllByDate(date);
  }

  @Post() // POST /tasks
  createTask(@Body() task: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(task);
  }

  @Put(':id') // PUT /tasks/:id
  async updateTask(
    @Param('id')
    id: string,
    @Body()
    task: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.updateById(id, task);
  }

  @Delete(':id') // DELETE /tasks/:id
  async deleteTask(
    @Param('id')
    id: string,
  ): Promise<Task> {
    return this.tasksService.deleteById(id);
  }

  @Get('date') // GET /tasks/date
  getAllTasksDate(): Promise<string[]> {
    return this.tasksService.findAllTasksDate();
  }
}
