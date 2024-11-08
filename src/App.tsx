import backgroundImg from './assets/abstract_compose.png';
import Landing from './components/Landing';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}>
        <img
          src={backgroundImg}
          alt='taniu_background'
          style={{
            height: '30%',
            maxWidth: '80%',
            objectFit: 'contain',
            position: 'absolute',
            top: '6vh',
            left: '3vw',
            opacity: '0.5',
          }}
        />
        <Landing />
      </div>
      <Footer />
    </>
  );
}

export default App;
