import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {IProduct} from "../models/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('https://fakestoreapi.com/products')
  }
}
