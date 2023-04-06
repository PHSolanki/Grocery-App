import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/Services/cart-service/cart.service';
import { EncryptionService } from 'src/app/shared/Services/encryption/encryption.service';
import { ProductDataService } from 'src/app/shared/Services/Product Data-Service/product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  product: any;
  productId: any;
  itemsCart:any=[];
  getData:string | null = "All"
  productsArray!:any[]
  Category_Id: any;
  encrypted_category_id:any


  constructor(private route:ActivatedRoute ,private _encryptionservice:EncryptionService,private cartservice:CartService , private productdata:ProductDataService){}

  ngOnInit(){
    this.getProduct()
    this.scroll()
    this.getProductId()
    this.getCategoryId()
    this.productsByCategoryId()
    this. productsArray=this.cartservice.productData()
  }

  scroll(){
    window.scrollBy(0,0)
  }

  getCategoryId(){
    this.route.paramMap.subscribe((params)=>{
      this.Category_Id=params.get('name')
      console.log("category id",this.Category_Id)
    })
  }

  getProductId(){
    this.cartservice.getProductId()
  }
  
  filterData(data:any){
      this.getData=data
      console.log(this.getData);  
  }

  getProduct(){
    this.route.paramMap.subscribe((x)=>{
      if(x.get('name')==null){
        this.getData = "All"
      }else{
        this.getData= x.get('name')
      }
    })
  }

  addToCart(category: any){    
    this.cartservice.addToCart(category)
  }


  product_by_cat_Id:any =[]

  productsByCategoryId(){

    this._encryptionservice.Encryption(this.Category_Id).subscribe((res)=>{
      console.log(res);
      this.encrypted_category_id =res.data
      
      this.productdata.productByCategoryId(this.encrypted_category_id).subscribe((res)=>{
        console.log(res);

        this.product_by_cat_Id = res.data

        console.log((this.product_by_cat_Id));
        
      })
    })
  }
  
}
