import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

function SignIn () {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
  } = useForm()
  const {signIn} = useAuth();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signIn(email, password)
    .then((response)=> {
      console.log(response.user);
      navigate("/dashboard")
    })
    .catch((error)=> {
      console.log(error);
    })
  }
    return (
        <div>
                <div>
      <div className="hero bg-base-200 py-12">
        <div className="">
          <div className="text-center">
          <h1 className="text-3xl mb-8 font-semibold text-[#349DF1]">Welcome, Sign in Now</h1>
          </div>
          <div className="card shrink-0 md:w-[350px] m-4 shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                {...register("email")}
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
                {...register("password")}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <button className="p-2 rounded-md bg-[#349DF1] text-white font-semibold">Sign in</button>
              </div>
            </form>
            <p className="text-center mb-4 -mt-4 text-xl mx-4">
              Already have an account? <Link to={"/signup"}><span className="text-[#349DF1] font-semibold">Sign up</span></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default SignIn