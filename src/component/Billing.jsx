import React from 'react';
import { apple , bill , google } from '../assets';
import styles , {layout} from '../style';

const Billing = () => {
  return (
    <div id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="Billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className='sm:block hidden'/> billing & invoicing.
        </h2>
        <p className='  max-w-[470px] mt-5 text-white font-poppins leading-[24px]'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Et labore maxime deserunt ab voluptatibus, dicta,
           omnis a modi possimus numquam quibusdam illum ipsam totam
            commodi iusto incidunt nihil inventore earum.
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt='apple' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt='apple' className='w-[128px] h-[42px] object-contain cursor-pointer'/>
          
        </div>
    
      </div>

    </div>
  )
}

export default Billing