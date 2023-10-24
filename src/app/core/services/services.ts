import { ApiService } from './api.service';
import { UserService } from './user.service';
import { ErrorHandlerService } from './error-handler.service';
import { HttpCacheService } from './http-cache.service';
import { RoutePartsService } from './route-parts.service';
import { ToastService } from './toast.service';

export const serviceProvider = [
    ApiService,
    ErrorHandlerService,
    HttpCacheService,
    RoutePartsService,
    ToastService,
];