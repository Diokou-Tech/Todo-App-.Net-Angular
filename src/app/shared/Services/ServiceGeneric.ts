import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGenericService } from "../interfaces/IGenericService";

@Injectable({
    providedIn: 'root'
  })
  export class GenericService<T> implements IGenericService<T> {
    private readonly _baseUrl: string;
    _element:string = '';
    // private _httpOptions : HttpHeaders ;
    constructor(private readonly http : HttpClient) {
        this._baseUrl = "${}"+"/api/items";
    }
    getAll(): Observable<T[]> {
        return this.http.get<T[]>(this._baseUrl);
    }
    getById(id: number): Observable<T> {
        return this.http.get<T>(`${this._baseUrl}/${id}`);
    }
    create(item: T): Observable<T> {
        return this.http.post<T>(this._baseUrl, item);
    }
    update(id:string | number ,item: T): Observable<T> {
        return this.http.put<T>(`${this._baseUrl}/${id}`, item);
    }
    delete(id: string | number): Observable<void> {
        return this.http.delete<void>(`${this._baseUrl}/${id}`);
    }
  }