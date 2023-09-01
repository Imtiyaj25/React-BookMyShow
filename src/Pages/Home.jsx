import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import './Home.css'
import Products from '../Components/Products'
import Blocks from '../Components/Blocks'
import Blockone from '../Components/Blockone'
const Home = () => {
  let [text]=useTypewriter({
    words:[" Trending Products", "Shop Now"],
    loop:{}
  })
  return (
    <>
      <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Hello, my name is</div>
                <div class="text-2">Everything That's<br/>New And Now</div>
                <div class="text-3">Be Hurry for <span class="typing">{text}</span><Cursor/></div>
                <a href="contact">Contact me..!</a>
            </div>
        </div>
    </section>
    <Blocks/>
    <Products/>
    <Blockone/>
    </>
  )
}

export default Home