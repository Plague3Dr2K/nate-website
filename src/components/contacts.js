import React, { Component } from 'react'
import '../scss/App.scss';
import facebook from '../icons/facebook.png'
import github from '../icons/github.png'
import instagram from '../icons/instagram.png'
import coder from '../icons/coder.png'

export class Cons extends Component {
  render() {
    return (
        <div id="contacts" className="contactinfo">
          <div className='ringme'>
            <h4 className='email'>Email:<a className='linky' href='mailto:nathanielimang@gmail.com?' target='_blank'> nathanielimang@gmail.com</a></h4>
            <h4 className='phone'>Contact Number:<a className='linky' href="https://wa.me/+601115856160" target="_blank"> +60115856160</a></h4>
            <p className='click'>Or Just click one of the icons below</p>
          </div>
          <hr className='line'/>
          <div className="contactme">
            <div className="contacts"><a href='https://www.facebook.com/nathaniel.florian.3' target='_blank'><img className='subcon img-responsive'src={facebook} alt=''></img></a></div>
            <div className="contacts"><a href='https://www.freecodecamp.org/Plagu3Dr2k' target='_blank'><img className='subcon img-responsive'src={coder} alt=''></img></a></div>
            <div className="contacts"><a href='https://github.com/Plague3Dr2K' target='_blank'><img className='subcon img-responsive'src={github} alt=''></img></a></div>
            <div className="contacts"><a href='https://www.instagram.com/nate_lakai/' target='_blank'><img className='subcon img-responsive'src={instagram} alt=''></img></a></div>
            </div>
      </div>
        
      
    )
  }
}
    
export default Cons
