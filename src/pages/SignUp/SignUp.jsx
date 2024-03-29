import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
// import { useForm, SubmitHandler } from "react-hook-form"
function SignUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch
  } = useForm()
  const {signUp, userDetails} = useAuth();

  const onSubmit = (data) => {
    const email = data?.email;
    const password = data?.password;
    const name = watch("name");
    console.log(name);
    signUp(email, password)
    .then(async (response)=>{
      console.log(response?.user);
      userDetails(name)
      .then((response)=> {
        console.log(response);
      })
      .catch((error)=> {
        console.log(error);
      })
      navigate("/dashboard")
    })
    .catch((error)=> {
      console.log(error);
    })
  }
  return (
    <div>
      <div className="hero bg-base-200 py-12">
        <div className="">
          <div className="text-center">
          <h1 className="text-3xl mb-8 font-semibold text-[#349DF1] m-4">Welcome, SignUp Now</h1>
          </div>
          <div className="card shrink-0 md:w-[350px] m-4 shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  {...register("name")}
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
                <button className="p-2 rounded-md bg-[#349DF1] text-white font-semibold">SignUp</button>
              </div>
            </form>
            <p className="text-center mb-4 -mt-4 text-xl mx-4">
              Already have an account? <Link to={"/signin"}><span className="text-[#349DF1] font-semibold">Sign in</span></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
