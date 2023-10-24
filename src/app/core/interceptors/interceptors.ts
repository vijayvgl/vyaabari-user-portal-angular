import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefixInterceptor } from './api-prefix.interceptor';
import { HttpTokenInterceptor } from './http.token.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { ProfilerInterceptor } from './profiler.interceptor';

export const interceptorProviders =
    [
        { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ProfilerInterceptor, multi: true },
    ];