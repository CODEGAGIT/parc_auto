import React, { children }from 'react'
import Topbar  from './Topbar'
import Sidebar from './Sidebar'
import Footer from './Footer'


function GeneralLayout({children}) {
  return (
    <body id="page-top">
        <div id='wrapper'>
         <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar/>
                <div className='pagecontent'>
                    {children}
                </div>
                </div>
                <Footer/>
            </div> 
        </div>
    </body>
  )
}

export default GeneralLayout