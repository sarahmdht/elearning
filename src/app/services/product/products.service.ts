import { Injectable } from "@angular/core";
import { Product } from "../../shared/models/Product";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor() {}

 getAllProducts(): Product[] {
        const products: Product[] =  [
            {
              id: 1,
              title: "Little Coder",
              price: 300 ,
              age: "5-7",
              photo: "../../../assets/images/computer.jpg", 
            },
            {
              id: 2,
              title: "Coder",
              price: 350 ,
              age: "7-14",
              photo: "../../../assets/images/computer.jpg", 
            },
            {
              id: 3,
              title: "Web Development",
              age: "7-14",
              price: 250 ,
              photo: "../../../assets/images/colorful.jpg", 
            },
            {
              id: 4,
              title: "Character Building Jr",
              age: "4-7",
              price: 200 ,
              photo: "../../../assets/images/colorful.jpg" , 
            },
            {
              id: 5,
              title: "Character Building Heros",
              age: "7-11",
              price: 200 ,
              photo: "../../../assets/images/colorful.jpg" , 
            },
            {
              id: 6,
              title: "Character Building Leaders",
              age: "11-16",
              price: 200 ,
              photo: "../../../assets/images/colorful.jpg" , 
            },
          ] ;
          return products;
    }
}