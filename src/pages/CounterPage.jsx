import Counter from '../components/counter';
import ThemeToggle from '../components/ThemeToggle';

function CounterPage() {
  return (
    <div
      style={{
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

      <h1 style={{ marginBottom: '10px' }}>Aplikasi Counter Pro</h1>
      <Counter />
    </div>
  );
}

export default CounterPage;
