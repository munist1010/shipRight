import Image from 'next/image';
import { useState } from 'react';
export default function Login() {
    const [hasAnAccount, setHasAnAccount] = useState(false)
    return (
        <section className="grid grid-cols-5">
            <article id='login-left' className="flex col-span-3 items-center justify-center">
                <Image 
                src={require("./../../public/shipright.svg")}
                width={500}
                height={400}
                alt="ShipRight logo" />
            </article>
            <article id="login-right" className="flex col-span-2 bg-white h-screen justify-center align-middle">
                
                <div className="flex align-middle flex-col justify-between">
                    <div id="title" className='my-20'>
                        <Image 
                            src={require("./../../public/shiprightTitle.svg")}
                            width={500}
                            height={400}
                            alt="ShipRight title"
                        />
                    </div>
                        {(hasAnAccount === false) && 
                    <div id="form-create-account" className='flex flex-col my-20 align-middle justify-center items-center mb-40'>
                        <h1>Already got an account?</h1>
                        <button 
                        className="bg-slate-200 rounded-lg w-80 h-10 hover:bg-slate-300 mb-10"
                        onClick={() => setHasAnAccount(true)}>Sign in</button>
                        <h1>Create an account:</h1>
                        <form className="flex flex-col w-full justify-center items-center">
                            <label className='py-1'>
                                Email address:
                                <br></br>
                                <input placeholder="Enter your email" className='w-80' />
                            </label>
                            <label className='py-1'>
                                Password:
                                <br></br>
                                <input placeholder="Enter your password" className='w-80' />
                            </label>
                            <label className='py-1'>
                                Repeat password:
                                <br></br>
                                <input placeholder="Re-enter your password" className='w-80'/>
                            </label>
                            <button className="bg-slate-200 rounded-lg w-80 h-10 hover:bg-slate-300 mb-10 mt-4"
                            >Submit</button>
                        </form>
                    </div>
                        }
                        {(hasAnAccount && 
                        <div id="form-sign-in" className='flex flex-col my-20 align-middle justify-center items-center mb-40'>
                            <h1>Need to create an account?</h1>
                            <button 
                            className="bg-slate-200 rounded-lg w-80 h-10 hover:bg-slate-300 mb-10"
                            onClick={() => setHasAnAccount(false)}>Sign up</button>
                            <h1>Sign in to your account:</h1>
                            <form className="flex flex-col w-full justify-center items-center">
                                <label className='py-1'>
                                    Email address:
                                    <br></br>
                                    <input placeholder="Enter your email" className='w-80' />
                                </label>
                                <label className='py-1'>
                                    Password:
                                    <br></br>
                                    <input placeholder="Enter your password" className='w-80' />
                                </label>
                            <button className="bg-slate-200 rounded-lg w-80 h-10 hover:bg-slate-300 mb-10 mt-4"
                            >Submit</button>
                            </form>
                        </div>
                        )}
                </div>
            </article>
        </section>
    )
}