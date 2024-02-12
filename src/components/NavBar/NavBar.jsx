import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Swal from 'sweetalert2';

function NavBar () {
  const {user, logOut} = useAuth();
  const navigate = useNavigate()
  const handleLogOut = async() => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be redirect to homepage!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    await logOut()
    navigate("/")
  }
    return (
<div className='border-b-stone-300 border-b-2'>
<div className="navbar bg-base-100 container mx-auto py-2 ">
  <div className="navbar-start">
    <Link to={"/"}><a className=" flex md:text-3xl font-semibold text-[#349DF1]"><img classNamew src='https://i.ibb.co/hKqxh0M/icons8-time-management-skills-96.png' className='w-10 object-cover mr-2'/>Qtec Task Manager</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    {/* <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul> */}
  </div>
  <div className="navbar-end">
    {user ? <> <a onClick={handleLogOut} className="p-2 rounded-md bg-[#349DF1] text-white font-semibold"><Link to={"/signin"}>Log Out</Link></a></> : <> <a className="p-2 rounded-md bg-[#349DF1] text-white font-semibold"><Link to={"/signin"}>Sign in</Link></a></>}
   
  </div>
</div>
</div>
    )
}

export default NavBar