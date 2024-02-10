import React from 'react'
import { Link } from 'react-router-dom'

function SignUpBanner () {
    return (
        <div className='flex items-center justify-center m-4 '>
        <div className='md:w-[1200px]'>
        <div
        className="hero rounded-2xl my-12"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/WczCNcN/natalie-comrie-i-Ld0-Y3-Yt3-Hg-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-20 rounded-2xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" p-6">
            <h1 className="mb-5 md:text-3xl text-xl font-bold">Simplify task management and prioritize work</h1>
            <button className="py-4">
            <a className="p-2 rounded-md bg-[#349DF1] text-white font-semibold">Get Started</a>
            </button>
          </div>
        </div>
      </div>
        </div>
    </div>
    )
}

export default SignUpBanner