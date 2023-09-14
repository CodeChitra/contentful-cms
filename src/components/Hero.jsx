import React from 'react'
import heroImg from "../assets/hero.svg";
export default function Hero() {
    return (
        <section className='hero'>
            <div className='hero-center'>
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt a omnis accusamus corrupti nobis nam cumque? Inventore voluptatem facere maxime, distinctio neque eos, suscipit non ea similique ad a?</p>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt="" className='img' />
                </div>
            </div>
        </section>
    )
}
