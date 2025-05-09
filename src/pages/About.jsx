import ThemeToggle from '../components/ThemeToggle';

function About() {
  return (
    <div style={{
        minWidth: '98vw',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: '20px',
        textAlign: 'center',
      }}
    >
      <div style={{ position: 'absolute', top: 30, right: 20 }}>
        <ThemeToggle />
      </div>
        <h1>Tentang Aplikasi</h1>
        <p>Aplikasi ini dibuat dengan React + Framer Motion + React Router.</p>
        <p>Versi: 1.0.0</p> 
    </div>
 
  );
}


export default About;
