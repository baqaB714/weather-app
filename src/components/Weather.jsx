import React from 'react';

const Weather = () => {
    return (
        <div className='flex flex-col items-center w-full md:w-1/2 justify-center'>
            <div className='flex w-full'>
                <div className="flex items-center ps-4 border border-violet-700 rounded w-full md:w-1/2 mx-2 my-2 transition hover:bg-[#ebdff88f] bg-[#b26bfd2f]">
                    <input id="bordered-radio-1" type="radio" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 " />
                    <label for="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-bold text-gray-900 ">درج شهر</label>
                </div>
                <div className="flex items-center ps-4 border border-blue-700 rounded w-full md:w-1/2 mx-2 my-2 transition hover:bg-[#ebdff88f] bg-[#799dff65]">
                    <input checked id="bordered-radio-2" type="radio" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 " />
                    <label for="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-bold text-gray-900 ">درج مختصات</label>
                </div>
            </div>
            <div className='w-full'>
                <div className="relative mx-2">
                    <input type="text" id="floating_filled" className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="floating_filled" className="absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">نام شهر</label>
                </div>
            </div>

        </div>
    );
}

export default Weather;
