import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  // Only intercept requests that don't already have the full URL
  if (!req.url.startsWith('http')) {
    // For API requests, use the full URL from environment
    const apiUrl = environment.apiUrl;
    const apiReq = req.clone({
      url: `${apiUrl}${req.url}`
    });
    return next(apiReq);
  }
  return next(req);
};