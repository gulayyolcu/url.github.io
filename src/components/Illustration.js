import React from 'react';
import illustration from './images/illustration-working.svg';

const Illustration=()=>{
    return(
        <div className="mx-10 lg:flex lg:flex-row-reverse lg:mx-20 xl:mx-30">
                <div className=""><img className="mx-auto lg:object-cover" src={illustration} alt="baslık"/></div>
                <div className="space-y-6 mt-6 text-center lg:text-left lg:px-10">
                    <h1 style={{color:'var(--darkBlue)'}} className="text-4xl font-bold md:text-4xl font-medium lg:w-full lg:text-6xl xl:text-7xl">More than just shorter links</h1>
                    <p style={{color:'var(--gray)'}} className="text-lg xl:mr-36">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                    <button style={{backgroundColor:"var(--cyan)"}} className="text-white font-bold focus:outline-none hover:opacity-50 px-4 py-2 rounded-full text-xl mt-6">Get Started</button>

                </div>
        </div>
    )
}

export default Illustration;