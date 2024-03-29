import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

function Banner() {
  const {user} = useAuth()
    return (
        <div>
      <div
        className="hero md:h-[650px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/rF1hR7q/kelly-sikkema-LM17x-Cof-KA0-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="md:mb-5 py-2 md:text-5xl text-2xl font-bold text-white">Scheduler <span className='text-[#349DF1]'>Task Manager</span></h1>
            <p className="mb-5 md:text-xl text-md">
            Empower Productivity, Master Efficiency: Your Tasks, Our Priority.
            </p>
            {user ? <><button className="p-2 rounded-md bg-[#349DF1] text-xl text-white font-semibold"><Link to={"/dashboard"}>Add Your Todo</Link></button> </> : <><button className="p-2 rounded-md bg-[#349DF1] text-xl text-white font-semibold"><Link to={"/signup"}>Let's Get Started</Link></button> </>}
            {/* <button className="btn btn-primary"><Link to={"/login"}>Let's Explore</Link></button> */}
          </div>
        </div>
      </div>
    </div>
    )
}

export default Banner