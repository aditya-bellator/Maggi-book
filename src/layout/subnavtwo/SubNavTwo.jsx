import './style.scss'
import speaker from '../../assets/speaker.svg';

const SubNavTwo = () => {
    return (
        <div className="home-nav">
          <div className="container-homenav">
          
            <div className="home-p">
    
            <marquee direction="left">Welcome
            </marquee>
            <img src={speaker} alt="speaker" />
            </div>
            <button type="submit" className="submit-button">
              Register
            </button>
            <input
              type="text"
              placeholder="UserName*"
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password*"
              className="input-field"
            />
            <button type="submit" className="submit-button">
              Login
            </button>
            <button type="submit" className="submit-button">
              Demo
            </button>
          </div>
        </div>
)
}

export default SubNavTwo
