import React from 'react'

const HeroSection = () => {
  return (
    <main className='hero'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolo
            </p>
      
        
        <div className='hero-btn'>
            <button>Shop Now</button>
            <button className='secondary-btn'>Category</button>
        </div>

        <div className="shoping">
            <p>Also Available On</p>

            <div className="brand-icons">
                <img src="/amazon_logo.jpg" alt="" style={{width: '60px', height:'40px'}}/>
                 <img src="/flipkart.jpg" alt="" style={{width: '60px', height:'60px'}}/>
            </div>
        </div>

        </div>

        <div className='hero-image'>
            <img src="/brand.png" style={{width: '900px', height: '700px'}} alt="" />
        </div>
    </main>
  )
}

export default HeroSection