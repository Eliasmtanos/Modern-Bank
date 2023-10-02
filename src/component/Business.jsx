import React from 'react';
import Obj from '../constants';
import styles , {layout} from '../style';
import Button from './Button';



const FeaturedCard = ({icon , title , content , index})=>{
  return(
    <div className={`flex flex-row p-6 rounded-[20px]
     ${index !== Obj.features.length -1 ? 'mb-6' :'mb-0'} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
        <p className='font-poppins font-normal text-white text-[16px] leading-[24px] mb-1'>{content}</p>

      </div>
    </div>

  )
}

const Business = () => {
  return (
    <div id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden'/> We'll handle the money</h2>
        <p className={`${styles.p} max-w-[470px] mt-5`} >With the right credit card, You can improve your financial life by building credit ,
          earning rewards and saving money.But with hundreds of credit cards on the market.</p> 

        <Button buttonStyles= 'mt-10'/>  
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {
          Obj.features.map( (feature , index )=>(
            <FeaturedCard key={index} icon={feature.icon} index={feature.index} 
            content={feature.content} title={feature.title}/>
          ) )
        }

      </div>

    </div>
  )
}

export default Business