import React from 'react'
import './Products.css'
// import { preview } from 'vite'
const Products = () => {
    // let previewContainer=document.querySelector('.products-preview')
    // let previewBox=previewContainer.querySelectorAll('.preview')

    // document.querySelectorAll('.container .card').forEach(product =>{
    //     Card.onclick=()=>{
    //         previewContainer.style.display='flex';
    //         let name=product.getAttribute('data-name');
    //         previewBox.forEach(preview=>{
    //             let target=preview.getAttribute('data-target')
    //             if(name==target){
    //                 preview.classList.add('active')
    //             }
    //         }) 
    //     }
    // })

  return (
    <>
      <div class="title">
    <p>The Best Seller Of Hitheme</p>
    <h2><span>Best</span> Seller</h2>
</div>
<section class="container">
    <div class="card">
        <div class="image image-1" data-name="p-1"></div>
        <a href="">Incidid Tongue Bar</a>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
        </div>
        <p><span class="price-old">Rs. 725</span><span class="money"> Rs. 479</span></p>
    </div>
    <div class="card">
        <div class="image image-2"></div>
        <a href="">Incidid Tongue Bar</a>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
        </div>
        <p><span class="price-old">Rs. 725</span><span class="money"> Rs. 479</span></p>
    </div>
    <div class="card">
        <div class="image image-3"></div>
        <a href="">Incidid Tongue Bar</a>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
        </div>
        <p><span class="price-old">Rs. 725</span><span class="money"> Rs. 479</span></p>
    </div>
    <div class="card">
        <div class="image image-4"></div>
        <a href="">Incidid Tongue Bar</a>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
        </div>
        <p><span class="price-old">Rs. 725</span><span class="money"> Rs. 479</span></p>
    </div>
    <div class="card">
        <div class="image image-5"></div>
        <a href="">Incidid Tongue Bar</a>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
        </div>
        <p><span class="price-old">Rs. 725</span><span class="money"> Rs. 479</span></p>
    </div>
    <div class="card">
        <div class="image image-6"></div>
        <a href="">Incidid Tongue Bar</a>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
        </div>
        <p><span class="price-old">Rs. 725</span><span class="money"> Rs. 479</span></p>
    </div>
    <div class="card">
        <div class="image image-7"></div>
        <a href="">Incidid Tongue Bar</a>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
        </div>
        <p><span class="price-old">Rs. 725</span><span class="money"> Rs. 479</span></p>
    </div>
    <div class="card">
        <div class="image image-8"></div>
        <a href="">Incidid Tongue Bar</a>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
        </div>
        <p><span class="price-old">Rs. 725</span><span class="money"> Rs. 479</span></p>
    </div>
</section>
<div class="products-preview">

        <div class="preview" data-target="p-1">
          <i class="fas fa-times"></i>
          <img src="src/assets/1.png" alt="" />
          <h3>organic strawberries</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <span>( 250 )</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
          <div class="price">$2.00</div>
          <div class="buttons">
            <a href="#" class="buy">buy now</a>
            <a href="#" class="cart">add to cart</a>
          </div>
        </div>
        </div>
    </>
  )
}

export default Products