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
  apiProductsArray:any=[]
  encrypted_filter_id:any
  categories:any


  constructor(private route:ActivatedRoute ,private _encryptionservice:EncryptionService,private cartservice:CartService , private productdata:ProductDataService){}

  ngOnInit(){
    this.scroll()
    this.getCategoryId()
    this.productsByCategoryId()
    this. productsArray=this.cartservice.productData()
    // this.getProductId()
    // this.getProduct()
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

  
  filterData(data:any){
      this.getData=data
      console.log("get data", this.getData);
    
      this._encryptionservice.Encryption(this.getData).subscribe((res)=>{
        console.log("filter data res",res);
        this.encrypted_filter_id=res.data
        this.productdata.productByCategoryId(this.encrypted_filter_id).subscribe((res)=>{
          console.log(res);
          
          this.product_by_cat_Id = res.data
          
          console.log("filtered data ",this.product_by_cat_Id);
        })
        
      })  
  }

  
  addToCart(category: any){    
    this.cartservice.addToCart(category)
  }
  
  
  product_by_cat_Id:any =[]
  
  productsByCategoryId(){

    if(this.Category_Id){

      this._encryptionservice.Encryption(this.Category_Id).subscribe((res)=>{
        console.log(res);
        this.encrypted_category_id =res.data
        
        this.productdata.productByCategoryId(this.encrypted_category_id).subscribe((res)=>{
          console.log(res);
          
          this.product_by_cat_Id = res.data
          
          console.log("prod by ",this.product_by_cat_Id);
          
        })
      })

    }else{

      this.productdata.getAllProducts().subscribe((res)=>{
        console.log(res);
        
        this.apiProductsArray= res.data
        console.log("apiproducts array" , this.apiProductsArray);
      })

    }

  }
  
  
  
  
  
  // getProduct(){
  //   this.route.paramMap.subscribe((x)=>{
  //     if(x.get('name')==null){
  //       this.getData = "All"
  //     }else{
  //       this.getData= x.get('name')
  //     }
  //   })
  // }
  
  
  // getProductId(){
  //   this.cartservice.getProductId()
  // }
}
