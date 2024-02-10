import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className="hero bg-base-200 py-12">
        <div className="">
          <div className="text-center">
          <h1 className="text-3xl mb-8 font-semibold text-[#349DF1]">Welcome, SignUp Now</h1>
          </div>
          <div className="card shrink-0 w-[350px] shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Write your full name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <button className="p-2 rounded-md bg-[#349DF1] text-white font-semibold">SignUp</button>
              </div>
            </form>
            <p className="text-center mb-4 -mt-4 text-xl">
              Already have an account? <Link to={"/signin"}><span className="text-[#349DF1] font-semibold">Sign in</span></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
