import React from 'react';




const Contact = () => {
  
  return (
    <div>
        <h1 className='text-center text-3xl text-red-600 font-medium pb-10'>Send Message</h1>
        <div id='contact' className='shadow-2xl p-10 border-2 rounded-2xl border-[#E21B70] relative py-12 mx-auto container'>
      
      <div className='grid md:grid-cols-12 items-center '>
        <div className='md:col-span-6'>
          
        <img className='w-3/4' src="https://i.ibb.co/McqLNL3/gif.gif" alt="" />
        </div>


        <div className='md:col-span-6 md:px-0 px-6'>
          <form className="mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#ABB2BF]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full px-4 py-2 border text-[#282C33] border-gray-300 focus:outline-none focus:ring-[#E21B70] focus:border-[#E21B70] sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block  mb-2 text-sm font-medium text-[#ABB2BF]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full px-4 py-2 border text-[#282C33] border-gray-300  focus:outline-none focus:[#E21B70] focus:border-[#E21B70] sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-[#ABB2BF]">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"

                className="block w-full px-4 py-2 border text-[#282C33] border-gray-300  focus:outline-none focus:ring-[#E21B70] focus:border-[#E21B70]  sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#ABB2BF]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full px-4 py-2 text-[#282C33] border border-gray-300 focus:outline-none focus:ring-[#E21B70] focus:border-[#E21B70]  sm:text-sm"
                required
              />
            </div>
            <div className="text-center">
              <a className='bg-none  border border-[#E21B70] px-3 py-2 mr-6 hover:border-b-4 duration-200' href="">Send Message</a>
            </div>
          </form>
        </div>

      </div>






    </div>
    </div>
  );
};

export default Contact;