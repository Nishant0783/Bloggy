import React, { useState } from 'react'
import Input from '../Input/Input'
import SubmitBtn from '../Buttons/SubmitBtn';

const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleName = (e) => {
    setName(e.target.value)
    console.log(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className='w-full bg-white'>
      <div className='max-w-[1500px] px-[50px] mx-auto flex items-center justify-center h-screen'>
        <div className='flex flex-col font-body items-center justify-center gap-y-[40px]'>
          <div className='flex justify-center font-bold text-[3rem] text-[#2c2c2c]'>
            <span>SIGN UP</span>
          </div>
          <form
            onSubmit={handleSubmit}
          >
            <div className='flex flex-col gap-y-[20px] w-[500px] max-[600px]:w-full'>
              <div className='flex flex-col'>
                <label htmlFor='signupName' className='text-[1.2rem]'>FULL NAME</label>

                <Input
                  id='signupName'
                  placeholder='Enter your full name'
                  type='text'
                  name='signupName'
                  value={name}
                  onChange={handleName}
                  classes={'outline-0 bg-gray-200 px-[10px] text-[1.2rem] py-[5px]'}
                  otherAttributes={{ required: true }}
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='signupEmail' className='text-[1.2rem]'>EMAIL</label>

                <Input
                  id='signupEmail'
                  placeholder='Enter your email'
                  type='email'
                  name='signupEmail'
                  value={email}
                  onChange={handleEmail}
                  classes={'outline-0 bg-gray-200 px-[10px] text-[1.2rem] py-[5px]'}
                  otherAttributes={{ required: true }}
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='signupUsername' className='text-[1.2rem]'>USERNAME</label>

                <Input
                  id='signupUsername'
                  placeholder='Enter your full name'
                  type='text'
                  name='signupUsername'
                  value={username}
                  onChange={handleUsername}
                  classes={'outline-0 bg-gray-200 px-[10px] text-[1.2rem] py-[5px]'}
                  otherAttributes={{ required: true }}
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='signupPassword' className='text-[1.2rem]'>PASSWORD</label>

                <Input
                  id='signupPassword'
                  placeholder='Enter your password'
                  type='password'
                  name='signupPassword'
                  value={password}
                  onChange={handlePassword}
                  classes={'outline-0 bg-gray-200 px-[10px] text-[1.2rem] py-[5px]'}
                  otherAttributes={{ required: true }}
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='confirmPassword' className='text-[1.2rem]'>CONFIRM PASSWORD</label>

                <Input
                  id='confirmPassword'
                  placeholder='Re-enter your password'
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  classes={'outline-0 bg-gray-200 px-[10px] text-[1.2rem] py-[5px]'}
                  otherAttributes={{required: true}}
                />
              </div>
            </div>
            <div className='flex justify-center mt-[30px]'>
              <SubmitBtn
                type={'submit'}
                classes={'hover:bg-[#2c2c2c] hover:text-white'}
                content={'Sign Up'}
              />
            </div>
          </form>


        </div>
      </div>
    </div>
  )
}

export default SignUp