import React from 'react';
import styles from '../style';
import Obj from '../constants/index';
import { logo } from '../assets';


const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="Hoobank" className='w-[266px] h-[72px] object-contain' />
          <p className={`${styles.p} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {
            Obj.footerLinks.map( (footerlink)=>(

              <div key={footerlink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                <h4 className='font-poppins font-medium text-[20px] leading-[28px] text-white' >
                    {footerlink.title}
                </h4>
                <ul className='list-none mt-4'>
                  {
                    footerlink.links.map( (link , index)=>(
                      <li key={link.name} className={`font-poppins font-normal leading-[24px] text-dimwhite
                         hover:text-white cursor-pointer mt-1
                           ${index !== footerlink.links.length -1 ? 'mb-2' : 'mb-0' } `}>
                          {link.name}

                      </li>
                    ) )
                  }
                </ul>

              </div>
            ) )
          }
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-8 
           border-t-[1px] border-t-[#3f3r45]'>
        <p className='font-poppins font-medium text-[18px] leading-[28px] text-white'>
          2023 HooBank. All Rights Reserved
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {
             Obj.socialMedia.map( (social,index)=>(
              <img  key={social.id} src={social.icon} alt='social media' 
                 className={` w-[21px] h-[21px] object-contain cursor-pointer 
                     ${index !== Obj.socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}
                 />
             ) )
          }
           
        </div>
      </div>

    </section>
  )
}

export default Footer