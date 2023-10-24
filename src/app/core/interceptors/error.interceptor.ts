import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ToastService } from '../services/toast.service';
import { Router } from "@angular/router";
import { AppLoaderService } from "../services/app-loader.service";
import { UserService } from "../services/user.service";

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private toaster: ToastService,
        private router: Router,
        private loader: AppLoaderService,
        private userService: UserService
    ) { }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                // retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    this.loader.close();
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error: ${error.error.message}`;
                        // this.toaster.present(errorMessage);

                    } else {
                        // server-side error
                        errorMessage = `Error Status: ${error.status} Message: ${error.message}`;
                        if (error.status === 401) {
                            // token has expired . then refresh token
                            this.userService.logout();
                        }
                        if (error.status === 404) {
                            // page notfount
                            // this.toaster.present('Server not responding -> ErrorCode : 404');
                        }

                        if (error.status === 500) {
                            this.loader.close()
                            // page ser error
                            // this.toaster.present('Server not responding -> ErrorCode : 500');

                        }
                    }
                    return next.handle(request);
                })
            );
    }
}
