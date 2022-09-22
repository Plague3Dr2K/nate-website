import React, { Component } from 'react'
import '../scss/App.scss';

export class Pros extends Component {
  render() {
    return (
      <div id="projects" className='container-fluid'>
        <div className='row justify-content-center'>
        <div className='quote col-lg-4'>
        <p className='framecap'>Random Quote Machine</p>
        <iframe className='frame'src="https://plague3dr2k.github.io/nate-quote-machine/"><p className='framecap'>Random Quote Machine</p></iframe>
        <p className='info'>Made with ReactJs and SASS</p>
      </div>
       </div>
      </div>
      
      
    )
  }
}

export default Pros