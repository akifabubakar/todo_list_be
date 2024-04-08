import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  id: true,
  versionKey: false,
})
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({ default: '' })
  description: string;

  @Prop({ default: false })
  completed: boolean;

  @Prop({ required: true })
  date: string;

  @Prop({ default: false })
  important: boolean;

  @Prop({ default: new Date().valueOf() })
  timestamp: number;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
