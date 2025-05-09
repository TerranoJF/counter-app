import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.body.style.backgroundColor = dark ? '#1e1e1e' : '#ffffff';
    document.body.style.color = dark ? '#f5f5f5' : '#000000';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default ThemeToggle;
