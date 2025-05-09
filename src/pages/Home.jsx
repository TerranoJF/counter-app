import ThemeToggle from '../components/ThemeToggle';

function Home() {
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
       <h1>Selamat Datang di Aplikasi Counter</h1>
      <p>Ini adalah halaman beranda.</p>
    </div>
  );
}

export default Home;
