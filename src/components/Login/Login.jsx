import React, { useState } from 'react'
import Input from '../Input/Input'
import SubmitBtn from '../Buttons/SubmitBtn';

const Login = () => {
  const [owner, setowner] = useState('');
  const [password, setPassword] = useState('');

  const handleOwner = (e) => {
    setowner(e.target.value)
    console.log(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }



  return (
    <div className='w-full bg-white'>
      <div className='max-w-[1500px] px-[50px] mx-auto flex items-center justify-center h-screen'>
        <div className='flex flex-col font-body items-center justify-center gap-y-[40px]'>
          <div className='flex justify-center font-bold text-[3rem] text-[#2c2c2c]'>
            <span>LOG IN</span>
          </div>
          <form
            onSubmit={handleSubmit}
          >
            <div className='flex flex-col gap-y-[20px] w-[500px] max-[600px]:w-full'>
              <div className='flex flex-col'>
                <label htmlFor='loginOwner' className='text-[1.2rem]'>EMAIL OR USERNAME</label>

                <Input
                  id='loginOwner'
                  placeholder='Email or Username'
                  type='text'
                  name='loginOwner'
                  value={owner}
                  onChange={handleOwner}
                  classes={'outline-0 bg-gray-200 px-[10px] text-[1.2rem] py-[5px]'}
                  otherAttributes={{required: true}}
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='loginPassword' className='text-[1.2rem]'>PASSWORD</label>

                <Input
                  id='loginPassword'
                  placeholder='Enter your password'
                  type='password'
                  name='loginPassword'
                  value={password}
                  onChange={handlePassword}
                  classes={'outline-0 bg-gray-200 px-[10px] text-[1.2rem] py-[5px]'}
                  otherAttributes={{required: true}}
                />
              </div>
            </div>
            <div className='flex justify-center mt-[30px]'>
              <SubmitBtn
                type={'submit'}
                classes={'hover:bg-[#2c2c2c] hover:text-white'}
                content={'Log in'}
              />
            </div>
          </form>


        </div>
      </div>
    </div>
  )
}

export default Login