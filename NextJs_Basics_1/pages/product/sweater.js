import React from 'react'

const Sweater = () => {
  return (
    <div>
      Landin Page for sweater 
    </div>
  )
}

export default Sweater

//localhost:3000/product/sweater
//now if we created specific file for "sweater" i.e., sweater.js then it will not show content of "[productId].js",then it will go directly to "sweater.js" Next.js is so smart that it will first check for specific route then it will go for dynamic route