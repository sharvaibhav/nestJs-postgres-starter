import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from 'config/configuration';
import { AppController } from './app.controller';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRoot(),
    TodosModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private configService: ConfigService) {}
}
