import moment from 'moment-jalaali';
import React, { useEffect, useState } from 'react';
const weekDays = [
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنج شنبه',
    'جمعه',
    'شنبه',
]

const yearMonth = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
]


const DateTime = () => {
    const [date , setDate] = useState('')
    const [time , setTime] = useState('')

    useEffect(()=>{
        let m = moment()
        console.log(m.format("jYYYY/jM/jD"));
    } , []);
    
    return (
        <div className='w-full md:w-1/3 px-2 my-3'>
            <div className='bg-[#3f0e527c] text-2xl rounded-2xl p-2 '>
                <div className='text-white drop-shadow-[0px_0px_3px_rgba(0,0,0,1)]'>دوشنبه 13 فروردین 1403</div>
                <div className='text-white drop-shadow-[0px_0px_3px_rgba(0,0,0,1)]'>ساعت 15:00</div>
            </div>
        </div>
    );
}

export default DateTime;
