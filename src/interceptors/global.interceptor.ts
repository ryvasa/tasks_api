import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Task } from 'src/task/entities/task.entity';
@Injectable()
export class GlobalInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    return handler.handle().pipe(
      map((data: Task) => {
        return {
          data,
        };
      }),
    );
  }
}
