import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="customer">
            <div className='c-1'>Customer Care</div>
            <div className='c-2'>Help Center</div>
            <div className='c-2'>How to Buy</div>
            <div className='c-2'>Returns & Refunds</div>
        </div>
        <div className="support">
          <div className="s1">Support</div>
              <div className="contact">ContactUs</div>
              <div className="contact">FAQ</div>
        </div>
    </div>
   
  )
}
export default Footer
