import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products';
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean=false){
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass: isError ?['msg-success'] : ['msg-error']
    })
  }

  create(product:Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError (e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  read():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError (e => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${id}`).pipe(
      map((obj) => obj),
      catchError (e => this.errorHandler(e))
    );
  }

  update(product:Product): Observable<Product>{
    return this.http.put<Product>(`${this.baseUrl}/${product.id}`,product).pipe(
      map((obj) => obj),
      catchError (e => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Product> { 
    return this.http.delete<Product>(`${this.baseUrl}/${id}`).pipe(
      map((obj) => obj),
      catchError (e => this.errorHandler(e))
    );
  }
}
