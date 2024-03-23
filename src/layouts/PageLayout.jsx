import React from 'react'

const PageLayout = ({children}) => {
  return (

    <div className='max-content bg-bg-pattern bg-cover bg-no-repeat min-h-screen'>
        <div className='bg-sky-200 bg-opacity-70 min-h-screen '>

        {children}
        </div>

    </div>
  )
}

export default PageLayout