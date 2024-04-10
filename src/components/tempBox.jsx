import React from 'react';

const TempBox = () => {
    
    return (
        <div className='w-full md:w-1/2 flex justify-center px-2'>
            <div className='bg-[#11e3ff5e] rounded-2xl px-3 py-8 w-2/3 backdrop-blur-[1px] drop-shadow-[0px_0px_3px_rgba(0,0,0,1)]'>
                <span className='text-white text-4xl drop-shadow-[0px_0px_3px_rgba(0,0,0,1)]'>
                2 درجه 
                </span>
            </div>
        </div>
    );
}

export default TempBox;
