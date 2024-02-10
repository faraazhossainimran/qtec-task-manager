import React from 'react'
import { Link } from 'react-router-dom'

function About (){
    return (
        <div className="">
      {/* <div
        className="hero py-24"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/nRYL1V6/wes-hicks-6bi-N3u-Bw4-Fg-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
          </div>
        </div>
      </div> */}
      <div className="container mx-auto">
        <div className="py-2 bg-[#F5F5F5] md:bg-white m-4 md:m-0">
          <div className="hero">
            <div className="hero-content flex-col gap-8 lg:flex-row-reverse">
              <img
                src="https://i.ibb.co/p4R8bTK/Selecting-team-bro-1.png"
                className="w-[500px] rounded-lg"
              />
              <div>
                <h1 className="md:text-4xl text-xl font-bold text-[#349DF1]">Move faster as a team</h1>
                <p className="md:py-6 py-2">
                  The only project management platform for hybrid work, shaped
                  by users.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 bg-[#F5F5F5] md:bg-white m-4 md:m-0">
          <div className="hero">
            <div className="hero-content flex-col md:gap-8 gap-2 lg:flex-row">
              <img
                src="https://i.ibb.co/cvdRfmZ/Businessman-bro.png"
                className="w-[600px] "
              />
              <div>
                <h1 className="md:text-4xl text-xl font-bold text-[#349DF1]">
                  Multi-step projects made easy
                </h1>
                <p className="md:py-6 py-2">
                  Simple workflows for complex approvals. Powerful proofing and
                  annotation tools. Use project and action templates for
                  repeatable steps to cut down your work in half.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default About