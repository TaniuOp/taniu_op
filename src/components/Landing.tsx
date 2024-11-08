import './Landing.css';

function Landing() {
  return (
    <div className='main-body'>
      <p className='username'>TaniuOp</p>

      <div className='card-overlay'>
        <div className='text-content-container'>
          <div className='text-content'>
            <h1 className='title'>TaniuOp</h1>
            <h2 className='title'>Front-end Design & Develop</h2>
            <p className='subtitle'>Project Lead | Scrum Master</p>
          </div>
          <p className='summary-text'>
            Skilled in creating intuitive, user-centered interfaces with a focus
            on accessibility and streamlined functionality.
          </p>
          <p className='summary-text'>
            Experienced in managing projects through the complete development
            lifecycle, collaborating with cross-functional teams to deliver
            optimized, scalable solutions on time.
          </p>
          <p className='summary-text'>
            Passionate about UI/UX, continuously expanding knowledge of design
            principles to develop engaging, results-driven experiences.
          </p>
        </div>
        <div className='vertical-line'>
          <div className='dot top-dot' />
          <div className='dot middle-dot' />
          <div className='dot bottom-dot' />
        </div>
        <p className='location'>Switzerland</p>
      </div>
    </div>
  );
}

export default Landing;
