import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, finalize } from "rxjs/operators";
import { Logger } from '../services/logger.service';

const log = new Logger('ProfilerInterceptor');

@Injectable({
  providedIn: 'root'
})
export class ProfilerInterceptor implements HttpInterceptor {
  constructo() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // ignore some url
    // if (!req.url.includes() && !req.url.includes("users")) {
  //  return next.handle(req);
    // }
    const started = Date.now();
    let ok: string;

    return next.handle(req).pipe(
      tap(
        // Succeeds when there is a response; ignore other events
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            ok = "succeeded";
          }
        },
        // Operation failed; error is an HttpErrorResponse
        error => (ok = "failed")
      ),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${req.method} "${req.urlWithParams}"
               ${ok} in ${elapsed} ms.`;
        log.debug(msg);
      })
    );
  }
}
