import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TasksModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_URL}/todos`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
