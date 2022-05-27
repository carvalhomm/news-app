import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { IResult } from "src/app/shared/news/news.component";

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {}

    public getNoticia(categoria: string): Promise<IResult> {
        return firstValueFrom(this.http.get<IResult>(`https://inshorts.deta.dev/news?category=${categoria}`));
    }
}