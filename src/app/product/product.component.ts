import { Component, Input } from '@angular/core';
import { ProductService } from '../Services/product.service';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent {

    @Input() data:any;

}
