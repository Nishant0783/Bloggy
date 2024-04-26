import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import LoginBtn from '../Buttons/LoginBtn';
import SignupBtn from '../Buttons/SignupBtn';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='w-full bg-gray-200'>
      <div className='max-w-[1500px] px-[50px] mx-auto pt-[40px] pb-[20px]'>
        <div className='grid grid-cols-3 gap-x-[30px] max-[826px]:grid-cols-2 max-[826px]:gap-y-[20px] max-[575px]:grid-cols-1 max-[575px]:gap-y-[30px]'>
          <div className='col-span-1 flex flex-col gap-y-[20px]'>
            <div>
              <img src={logo} className='w-[150px]' />
            </div>
            <div className='font-navbar text-[1rem] text-[#2c2c2c] leading-tight pr-[40px]'>
              <p>All the images and icons used in this website are free to use and belong to their respective owner.</p>
            </div>
          </div>
          <div className='col-span-1 flex flex-col gap-y-[10px] font-bold text-[1.2rem] items-center max-[575px]:items-start'>
            <div>
              <Link to='/'>HOME</Link>
            </div>
            <div>
              <Link to='/about-us'>ABOUT US</Link>
            </div>
            <div>
              <Link to='/contact-us'>CONTACT US</Link>
            </div>
          </div>
          <div className='col-span-1 flex flex-col gap-y-[30px] items-end max-[826px]:items-start'>
            <div className='flex flex-col gap-y-[15px]'>
              <div className=' text-[1.2rem] font-semibold'>
                Developers social
              </div>
              <div className='flex flex-row gap-x-[20px]'>
                <Link to=''>
                  <div className='flex bg-gray-400 rounded-full px-[7px] py-[7px]'>
                    <FontAwesomeIcon icon={faInstagram} className='w-[25px] h-[25px] rounded-full' />
                  </div>
                </Link>
                <Link to=''>
                  <div className='flex bg-gray-400 rounded-full px-[7px] py-[7px]'>
                    <FontAwesomeIcon icon={faLinkedin} className='w-[25px] h-[25px] rounded-full' />
                  </div>
                </Link>
                <Link to=''>
                  <div className='flex bg-gray-400 rounded-full px-[7px] py-[7px]'>
                    <FontAwesomeIcon icon={faGithub} className='w-[25px] h-[25px] rounded-full' />
                  </div>
                </Link>
              </div>
            </div>
            <div className='flex gap-x-[25px] items-center max-[330px]:flex-col max-[330px]:gap-y-[20px] max-[330px]:items-start'>
              <div className='font-semibold text-[1.2rem]'>
                <LoginBtn />
              </div>
              <div className='font-semibold text-[1.2rem]'>
                <SignupBtn />
              </div>
            </div>
          </div>
        </div>
        <hr class="h-px my-[30px] bg-gray-600 border-0"></hr>
        <div className='flex justify-center'>
          <p>Copyright &copy; {year}, All Right Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer