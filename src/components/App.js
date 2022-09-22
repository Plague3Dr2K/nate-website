
import '../scss/App.scss';
import sarawak from '../sarawak.png'



function Top() {
  return (
    <div id="about" className='nate container-fluid'>
      <h4 className='nate'>I'm Nate, a self-taught and an aspiring web developer</h4>
      <p className='miri'>From Miri, Sarawak</p>
      <img className="sarawak img-responsive" src={sarawak}></img>
      </div>
      
      );
}

export default Top;
