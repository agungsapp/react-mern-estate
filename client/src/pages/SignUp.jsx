import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-bold text-center my-7'>Sign Up</h1>

      <form className='flex flex-col gap-4'>
        <input className='border p-3 rounded-lg' type="text" id="username" placeholder='username' />
        <input className='border p-3 rounded-lg' type="email" id="email" placeholder='email' />
        <input className='border p-3 rounded-lg' type="password" id="password" placeholder='password' />

        <button className='bg-slate-700 p-3 text-white rounded-xl hover:opacity-90 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account ? </p>
        <Link to={'/sign-in'} >
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
