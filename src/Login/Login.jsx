import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="">
              
            <div className=' my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
                <div className="bg-[#f8b3d1] container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">
                    {/* left  part  */}
                    <div className="md:w-1/2">
                        <h1 className='text-3xl mb-8 md:text-start text-center'>Welcome to <span className='text-[#E21B70] font-bold italic'>MEETBOX</span></h1>
                        <img src="https://i.ibb.co/ynrr0K1/5423351-Mobile-login.jpg" alt="About Us Image" className="md:w-10/12 shadow-xl object-cover " />
                        
                    </div>
                    
                    {/* right part */}
                    <div className="md:w-1/2 w-full ">
                        <div className="card flex-shrink-0 w-full">
                            <h2 className="text-center  text-3xl font-bold">Login Now</h2>
                            <form className="card-body">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <div className='indicator w-full flex-col'>
                                    <span className="indicator-item badge bg-[#E21B70] text-white border-none">Required</span>
                                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered shadow-lg" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <div className='indicator w-full flex-col'>
                                    <span className="indicator-item badge bg-[#E21B70] text-white border-none">Required</span>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered shadow-lg" required />
                                    </div>
                                    
                                    <label className="label">
                                        <a href="#" className="label-text-alt text-lg link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="mt-6 form-control">
                                    <button className=" bg-[#fc3d90] hover:bg-[#E21B70] px-10 hover:text-white text-white font-bold text-lg py-2 rounded-lg shadow-2xl duration-300">Login</button>
                                </div>
                                <div className='text-center  mt-6'>
                                    <p className='text-lg  divider '>Or Connect With</p>
                                    <div className='my-4'>
                                        <button className='px-4'>
                                            <img className='w-10' src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png" alt="" />
                                        </button>
                                        <button className='px-4'>
                                            <img className='w-10' src="https://i.ibb.co/VxKN3Mg/github.png" alt="" />

                                        </button>
                                    </div>
                            <div>
                                <p className='text-sm'>New to <span className='font-semibold text-[#E21B70]'>MEETBOX</span> ?<Link to="/register"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Registration Here</button>
                                </Link></p>
                            </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;