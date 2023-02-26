import React from 'react';

function Newsletter() {
  return (
    <div className=" w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            Wants tips & tricks to optimize your flow?
          </h1>
          <p>Sign uo to our Newsletter and stay up to date</p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
