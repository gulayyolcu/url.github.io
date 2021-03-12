import React from 'react';



const Boost=()=>{
    return(
        <div className="boost w-full flex flex-col bg-local justify-center items-center py-20 " >
            <h1 className="text-2xl text-center font-bold md:text-4xl text-white font-medium mb-2">Boost your links today</h1>
            <button style={{backgroundColor:"var(--cyan)"}} className="getStarted text-white font-bold focus:outline-none hover:opacity-50 py-2 px-6 rounded-full text-xl mt-6">Get Started</button>
        </div>
    )
}

export default Boost;

/* style={{backgroundImage:`url(${boostMobile})`,backgroundSize:"cover",backgroundColor:"var(--darkViolet)"}} */