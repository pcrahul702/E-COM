import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signup } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
 isSellerLoggesdIn=new BehaviorSubject<boolean>(false); 
  constructor(private http:HttpClient, private router:Router) { }
  usersignup(data:signup) {
     this.http.post(`http://localhost:3000/seller/`,data,
      {observe:"response"}).subscribe((result)=>{
        console.log(result);
        if(result){ 
           localStorage.setItem("seller",JSON.stringify(result.body));
           this.router.navigate(['seller-home']);
        }
    })
    
  }
  reloadseller(){
   if(localStorage.getItem("seller")){
    this.isSellerLoggesdIn.next(true);
    this.router.navigate(['seller-home']);
   }
  }
}
