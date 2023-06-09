import React from 'react'

const Contact = () => {
  return (
    <div id='Contact'>
        <section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-black">
    <iframe
      width="100%"
      height="100%"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="map"
      scrolling="no"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54451.982188426206!2d74.24669311035129!3d31.462339018951035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190143e0e99feb%3A0xf39379efff4dd86!2sUniversity%20of%20Management%20%26%20Technology!5e0!3m2!1sen!2s!4v1686324627074!5m2!1sen!2s"
      style={{ filter: " contrast(1.2) opacity(0.5)" }}
    />
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">
        CONTACT
      </h2>
      <p className="leading-relaxed mb-5 text-sm text-white">
        Post-ironic portland shabby chic echo park, banjo fashion axe
      </p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-black rounded border border-[#20C20E] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-black rounded border border-[#20C20E] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-[#20C20E] border-0 py-2 px-6 focus:outline-none hover:text-black rounded text-lg">
        Submit
      </button>
      <p className="text-xs text-white mt-3">
        Chicharrones blog helvetica normcore iceland tousled brook viral
        artisan.
      </p>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact

