import BackgroundImage from './Images/background.png';
import './welcomeStyle.css';

function Welcome() {
  return (
    <div className='WelcomeContainer'>
      <div className='TextContainer'>
        <h2>
          <span className='firstLetter'>L</span>et's{' '}
          <span className='firstLetter'>J</span>am!
        </h2>
        <h4>Register and start to make music together</h4>
      </div>
      <div className='ImageContainer'>
        <img src={BackgroundImage} alt='BackgroundImage' />
      </div>
    </div>
  );
}

export default Welcome;
