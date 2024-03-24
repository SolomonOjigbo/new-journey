import React from 'react'

const PageLayout = ({children}) => {
  return (

    <div className='max-content relative bg-bg-pattern bg-cover bg-no-repeat min-h-screen'>
        <div className='bg-sky-400 bg-opacity-60 min-h-screen absolute'>

        {children}
        </div>

    </div>
  )
}

export default PageLayout