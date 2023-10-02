import React from 'react';
import Obj from '../constants/index';
import styles from '../style';

const Client = () => {
  return (
    <div className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {
          Obj.clients.map( client=>(
            <div key={client.id} className={`flex-1 ${styles.flexCenter} mr-5 md:min-w-[152px] min-w-[120px]`} >
              <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain mb-3' />

            </div>
          ) )
        }

      </div>

    </div>
  )
}

export default Client