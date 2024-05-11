import React from 'react'

const Footer = () => {
  return (
    <div className='pt-5 pb-5'>
        <div className='container'>
            <div className='pt-5 border-t border-[#0000004d] text-center lg:text-start'>
                <p className='mb-0 opacity-50 text-[14px] lg:text-[16px] para'>All right reserved © {new Date()?.getFullYear()} noaktechnologies</p>
            </div>
        </div>
    </div>
  )
}

export default Footer