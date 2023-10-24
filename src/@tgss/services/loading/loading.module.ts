import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TgssLoadingInterceptor } from '@tgss/services/loading/loading.interceptor';

@NgModule({
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: TgssLoadingInterceptor,
            multi   : true
        }
    ]
})
export class TgssLoadingModule
{
}
