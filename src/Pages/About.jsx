import React from 'react'
import './About.css'
import Card1 from '../Components/Card1'
const About = () => {
  let preveiwContainer = document.querySelector('.products-preview');
  let previewBox = preveiwContainer.querySelectorAll('.preview');

  document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
      preveiwContainer.style.display = 'flex';
      let name = product.getAttribute('data-name');
      previewBox.forEach(preview => {
        let target = preview.getAttribute('data-target');
        if (name == target) {
          preview.classList.add('active');
        }
      });
    };
  });
  previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
      close.classList.remove('active');
      preveiwContainer.style.display = 'none';
    };
  });
  return (
    <>
      <div class="card-container">

        <h3 class="title"> organic products </h3>

        <div class="products-container">

          <div class="product" data-name="p-1">
            <img src="src/assets/1.png" alt="" />
            <h3>strawberries</h3>
            <div class="price">$2.00</div>
          </div>

          <div class="product" data-name="p-2">
            <img src="src/assets/2.png" alt="" />
            <h3>onions</h3>
            <div class="price">$2.00</div>
          </div>

          <div class="product" data-name="p-3">
            <img src="src/assets/3.png" alt="" />
            <h3>tomatoes</h3>
            <div class="price">$2.00</div>
          </div>

          <div class="product" data-name="p-4">
            <img src="src/assets/4.png" alt="" />
            <h3>brinjal</h3>
            <div class="price">$2.00</div>
          </div>

          <div class="product" data-name="p-5">
            <img src="src/assets/5.png" alt="" />
            <h3>broccoli</h3>
            <div class="price">$2.00</div>
          </div>

          <div class="product" data-name="p-6">
            <img src="src/assets/6.png" alt="" />
            <h3>potatoes</h3>
            <div class="price">$2.00</div>
          </div>

        </div>

      </div>

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

        <div class="preview" data-target="p-2">
          <i class="fas fa-times"></i>
          <img src="src/assets/2.png" alt="" />
          <h3>organic onions</h3>
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

        <div class="preview" data-target="p-3">
          <i class="fas fa-times"></i>
          <img src="src/assets/3.png" alt="" />
          <h3>organic tomatoes</h3>
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

        <div class="preview" data-target="p-4">
          <i class="fas fa-times"></i>
          <img src="src/assets/4.png" alt="" />
          <h3>organic brinjal</h3>
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

        <div class="preview" data-target="p-5">
          <i class="fas fa-times"></i>
          <img src="src/assets/5.png" alt="" />
          <h3>organic broccoli</h3>
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

        <div class="preview" data-target="p-6">
          <i class="fas fa-times"></i>
          <img src="src/assets/6.png" alt="" />
          <h3>organic potatoes</h3>
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
      <Card1/>
    </>
  )
}

export default About