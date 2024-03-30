import React from 'react';

const Weather = () => {
    return (
        <div className='flex flex-col items-center w-full md:w-1/2 justify-center'>
            <div className='flex w-full justify-center'>
                <div className="flex items-center ps-4 border border-violet-700 rounded w-full md:w-1/3 mx-2 my-2 transition hover:bg-[#ebdff88f] bg-[#b26bfd2f]">
                    <input id="bordered-radio-1" type="radio" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 " />
                    <label for="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-bold text-gray-900 ">درج شهر</label>
                </div>
                <div className="flex items-center ps-4 border border-blue-700 rounded w-full md:w-1/3 mx-2 my-2 transition hover:bg-[#ebdff88f] bg-[#799dff65]">
                    <input checked id="bordered-radio-2" type="radio" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 " />
                    <label for="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-bold text-gray-900 ">درج مختصات</label>
                </div>
            </div>
            <div className='w-full px-2'>
                <form>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="search" class="block w-full p-4 ps-10 text-lg text-gray-900 border rounded-lg " placeholder="نام شهر یا کشور" required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">جست و جو</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Weather;
