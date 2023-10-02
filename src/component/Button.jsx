import React from 'react'
import styles from '../style'

const Button = ({buttonStyles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px]
    text-primary outline-none rounded-[10px] ${buttonStyles}`}>
      Get Started
    </button>
  )
}

export default Button