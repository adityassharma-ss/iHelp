import React from 'react'
import competitiveprogramming from '../mapstyles/competitiveprogramming.css'


const Competitiveprogramming = () => {
  return (
    <div className='competitive-ops'>
      <div className='competitive-sub'>Competitive programming</div>
      <ul>
        {/* <div className='cyber-sub'></div> */}
        <li><a href="https://www.codecademy.com/resources/blog/what-is-competitive-programming/">What is Competitive Programming?</a></li>
        <li><a href="https://www.codingninjas.com/codestudio/library/how-to-get-started-with-competitive-programming">How to get started with CP?</a></li>
        <li><a href="https://cses.fi/book/book.pdf">Handbook for CP</a></li>
        <li><a href="https://www.codingninjas.com/landing/cnsat/">CP Course</a></li>
        <li><a href="https://blog.edx.org/5-career-benefits-of-competitive-programming">Career Benefits of CP</a></li>
        <li><a href="https://www.redgreencode.com/12-reasons-to-study-competitive-programming/">Reasons to study CP</a></li>
    </ul>
    </div>
  )
}

export default Competitiveprogramming