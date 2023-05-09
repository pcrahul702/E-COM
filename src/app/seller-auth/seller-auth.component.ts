import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { signup } from '../data-type';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

constructor(private seller:SellerService ) { }
  ngOnInit(): void {
    this.seller.reloadseller();
  }
  signup(data:signup):void{;
      this.seller.usersignup(data);
   }
}
