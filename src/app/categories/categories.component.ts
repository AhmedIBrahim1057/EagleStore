import { Component, OnInit } from '@angular/core';
declare var $:any;
import 'jquery';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  tShirts=[
    {productName:"t-shirt" , image:"./assets/images/t-shirt-1.png"},
    {productName:"t-shirt" , image:"./assets/images/t-shirt-2.png"},
    {productName:"t-shirt" , image:"./assets/images/t-shirt-3.png"},
    {productName:"t-shirt" , image:"./assets/images/t-shirt-4.png"},
    {productName:"t-shirt" , image:"./assets/images/t-shirt-5.png"},
    {productName:"t-shirt" , image:"./assets/images/t-shirt-6.png"}
  ]

  pants=[
    {productName:"pant" , image:"./assets/images/pants-1.png"},
    {productName:"pant" , image:"./assets/images/pants-2.png"},
    {productName:"pant" , image:"./assets/images/pants-6.png"},
    {productName:"pant" , image:"./assets/images/pants-4.png"},
    {productName:"pant" , image:"./assets/images/pants-5.png"},
    {productName:"pant" , image:"./assets/images/pants-1.png"}
  ]

  jackets=[
    {productName:"jacket" , image:"./assets/images/jacket-1.png"},
    {productName:"jacket" , image:"./assets/images/jacket-2.png"},
    {productName:"jacket" , image:"./assets/images/jacket-3.png"},
    {productName:"jacket" , image:"./assets/images/jacket-4.png"},
    {productName:"jacket" , image:"./assets/images/jacket-5.png"},
    {productName:"jacket" , image:"./assets/images/jacket-6.png"}
  ]

  dresses=[
    {productName:"dress" , image:"./assets/images/dress-1.png"},
    {productName:"dress" , image:"./assets/images/dress-2.png"},
    {productName:"dress" , image:"./assets/images/dress-3.png"},
    {productName:"dress" , image:"./assets/images/dress-4.png"},
    {productName:"dress" , image:"./assets/images/dress-5.png"},
    {productName:"dress" , image:"./assets/images/dress-6.png"}
  ]

  skirts=[
    {productName:"skirt" , image:"./assets/images/skirt-1.png"},
    {productName:"skirt" , image:"./assets/images/skirt-2.png"},
    {productName:"skirt" , image:"./assets/images/skirt-3.png"},
    {productName:"skirt" , image:"./assets/images/skirt-4.png"},
    {productName:"skirt" , image:"./assets/images/skirt-5.png"},
    {productName:"skirt" , image:"./assets/images/skirt-6.png"}
  ]

  Accessories=[
    {productName:"Accessories" , image:"./assets/images/Accessories-1.png"},
    {productName:"Accessories" , image:"./assets/images/Accessories-2.png"},
    {productName:"Accessories" , image:"./assets/images/Accessories-3.png"},
    {productName:"Accessories" , image:"./assets/images/Accessories-4.png"},
    {productName:"Accessories" , image:"./assets/images/Accessories-5.png"},
    {productName:"Accessories" , image:"./assets/images/Accessories-6.png"}
  ]

  constructor() { }

  ngOnInit() {

    var x = document.getElementsByClassName("itemWrapper");

    $('.list-unstyled .main-category').click(function(){
      
      $("li").removeClass("active");
      $(this).addClass("active");

    })


    $(".collapse.list-unstyled li").click(function(){
      
      $("li").removeClass("active");
      $(this).addClass("active");
      
      for(var i=0 ; i<x.length ; i++){
        $(x[i]).hide();
        if( $(x[i]).attr('id') == $(this).attr('id')){
          $(x[i]).show();
        }
      }

    })

    $('.list-unstyled .main-category:first').click(function(){
      
      for(var i=0 ; i<x.length ; i++)
      {
        $(x[i]).show();
      }
    
    })


  }

  active = false;

  open()
  {
    this.active = !this.active;
  }

  close()
  {
    this.active = !this.active;
  }

  
}
