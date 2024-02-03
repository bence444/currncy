import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const pokeAuthInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({ setHeaders: { "X-Api-Key": environment.apiKey } });
  return next(req);
};
