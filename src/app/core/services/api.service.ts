import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, firstValueFrom } from "rxjs";
import { ICategoria, IResult } from "src/app/shared/news/news.component";

@Injectable()
export class ApiService {
    public $categoria = new BehaviorSubject<ICategoria>(null);
    constructor(private http: HttpClient) {}

    public getNoticia(categoria: string): Promise<IResult> {
        console.log('chegou no serviço: ', categoria);
        return firstValueFrom(this.http.get<IResult>(`https://inshorts.deta.dev/news?category=${categoria}`));
    }
}