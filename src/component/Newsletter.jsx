import React from 'react';

function Newsletter() {
  return (
    <div className=" w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 ">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Wants tips & tricks to optimize your flow?
          </h1>
          <p>Sign uo to our Newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <input type="email" className="" placeholder="Enter Email" />
          <button
            className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black"
            type="button"
          >
            Notify me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
