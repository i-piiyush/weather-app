import React, { useContext } from 'react'
import { userContext } from '../utils/Context'
import { IoSearchOutline } from "react-icons/io5";




const Navbar = () => {
  const [userCity,weatherDetails] = useContext(userContext)
  var searchValue;


  return (
    <nav className=' w-full h-[90px] flex justify-between items-center px-32'>

      <div className='flex items-center'>
      <input type="text" placeholder='Enter a Location' className='px-5 py-3 w-[20vw] rounded-full bg-transparent border-[#088F8F]/[.3] outline-none border text-white' onChange={(e)=> {
           searchValue = e.target.value
          
        }} />

        <button className='text-white bg-[#088F8F] mx-5 p-2 h-[45px] w-[45px] rounded-full flex justify-center items-center text-lg ' onClick={(e)=>{
          e.preventDefault()
          userCity.setcity(searchValue);
        }}>{
          <IoSearchOutline />
        }</button>
      </div>
       

        <span className=' h-[50px] w-[50px] rounded-full overflow-hidden'>
            <img src="src\assets\pfp.png" alt="profile" className='h-full' />
        </span>

    </nav>
  )
}

export default Navbar