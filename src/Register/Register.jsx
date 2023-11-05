import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const registerValue = {name,photo,email,password};
        console.log(registerValue);
    }
    return (
        <div>
            
            <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
                <div className="bg-[#f8b3d1] container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">
                    <div className="md:w-1/2 w-full ">
                        <div className="card flex-shrink-0 w-full">
                        <h2 className="text-center  text-3xl font-bold">Register Now</h2>
                            <form onSubmit={handleRegister} className="card-body">
                                {/* name box */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered shadow-xl" />
                                </div>
                                {/* photo box */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">photo Url</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Your Photo" className="input input-bordered shadow-xl" />
                                </div>
                                {/* email box */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered shadow-xl" required />
                                </div>
                                {/* password box */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered shadow-xl" required />
                                </div>
                                {/* register btn  */}
                                <div className="mt-6 form-control">
                                <button className=" bg-[#fc3d90] hover:bg-[#E21B70] px-10 hover:text-white text-white font-bold text-lg py-2 rounded-lg shadow-2xl duration-300">Register</button>
                                </div>
                                {/* login toggle */}
                                <div className='text-center  mt-6'>

                                    <div>
                                        <p className='text-sm'>Have an Acconut ?<Link to="/login"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Login Here</button>
                                        </Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* RIGht part */}
                    <div className="md:w-1/2">
                        <h1 className='text-3xl mb-8 md:text-start text-center ml-14'>Welcome to <span className='text-[#E21B70] font-bold italic'>MEETBOX</span></h1>
                        <img src="https://i.ibb.co/j8gSHcV/Forms-amico.png" alt="About Us Image" className="md:w-10/12 object-cover ml-14" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;