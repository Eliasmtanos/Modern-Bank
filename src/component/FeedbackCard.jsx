import React from 'react';
import { quotes } from '../assets';

const FeedbackCard = ({content , name , img , title}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] md:max-w-[330px] w-full
    md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="Double-quotes" className='w-[47px] h-[27px] object-contain ' />
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>

      <div className='flex flex-row '>
        <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white' >{name}</h4>
          <p className='font-poppins font-normal text-[15px] leading-[32px] text-dimwhite'>{title}</p>
        </div>

      </div>

    </div>
  )
}

export default FeedbackCard