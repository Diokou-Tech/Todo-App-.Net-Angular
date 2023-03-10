import { Observable } from "rxjs";

export interface IGenericService<T> {
    getAll(): Observable<T[]>;
    getById(id: number | string): Observable<T>;
    create(item: T): Observable<T>;
    update(id:string | number, item: T) : Observable<T>;
    delete(id: number | string ): Observable<void>;
}
