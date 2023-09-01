import React from 'react'

const Card1 = () => {
  return (
    <section class="teams" id="teams">
        <div class="max-width">
            <h2 class="title">My Education</h2>
            <div class="carousel owl-carousel">
                <div class="card">
                    <div class="box">
                        <img src="src/assets/image-36.jpg" alt=""/>
                        <div class="text">78.00%</div>
                        <p>B.Tech in</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src="src/assets/image-37.jpg" alt=""/>
                        <div class="text">72.29%</div>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src="src/assets/image-38.jpg" alt=""/>
                        <div class="text">78.37%</div>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src="src/assets/image-39.jpg" alt=""/>
                        <div class="text">71.09%</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Card1