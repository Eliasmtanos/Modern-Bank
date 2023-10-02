import React from 'react';
import styles , {layout} from '../style';
import { card } from '../assets';
import Button from './Button';

const CardDeal = () => {
  return (
    <div className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>
         in few east steps.
        </h2>
        <p className={`${styles.p} max-w-[470px] mt-5`}>
          Arcu tortor, purus in attis at sed 
          integer faucibus. Aliquer quis aliquer aget mauris tortor. Aliquet ultrices ac, ametau.
        </p>
        <Button buttonStyles='mt-10' />

      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />

      </div>

    </div>
  )
}

export default CardDeal