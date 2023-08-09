import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ICep } from "interface/icep";
import { Observable } from "rxjs";

@Injectable()

export class viaCep {
  constructor(private readonly http: HttpClient) { }

  List(cep: string): Observable<ICep> {
    return this.http.get<ICep>('http://127.0.0.1:8000/api/' + cep + '/').pipe();
  }
}
