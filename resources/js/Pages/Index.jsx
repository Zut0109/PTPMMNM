import React from 'react'
import Viewer from '../Layouts/Viewer'

export default function Index() {
  return (
    <>
        <div className='container'>
          <div className="card">
            <div className="card-body">
              Your home page
            </div>
          </div>
        </div>
    </>
  )
}

Index.layout = (page) => <Viewer children={page} title={"Index"}/>
