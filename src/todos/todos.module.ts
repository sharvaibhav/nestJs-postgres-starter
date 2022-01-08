import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from './controllers/todos.controller';
import { User } from './model/User.entity';
import { TodosService } from './services/todos.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
