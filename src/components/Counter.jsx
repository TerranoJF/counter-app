import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, RotateCcw, Trash2 ,} from 'lucide-react';

function Counter() {
  const [count, setCount] = useState(() => parseInt(localStorage.getItem('counter') || 0));
  const [logs, setLogs] = useState(() => JSON.parse(localStorage.getItem('logs') || '[]'));

  useEffect(() => {
    localStorage.setItem('counter', count);
    localStorage.setItem('logs', JSON.stringify(logs));
  }, [count, logs]);

  const handleAction = (type) => {
    const action = {
      tambah: () => setCount(c => c + 1),
      kurang: () => setCount(c => c - 1),
      reset: () => setCount(0)
    };
    action[type]();
    setLogs(l => [...l, `${new Date().toLocaleTimeString()} ➜ ${type}`]);
  };

  const clearLogs = () => setLogs([]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      style={{ textAlign: 'center' }}
    >
      <AnimatePresence mode="wait">
        <motion.h2
          key={count}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          style={{
            color: count < 0 ? 'red' : 'black',
            fontSize: '36px',
            margin: '20px 0',
            transition: 'color 0.3s ease',
          }}
        >
          Nilai: {count}
        </motion.h2>
      </AnimatePresence>

      <motion.button whileTap={{ scale: 0.9 }} onClick={() => handleAction('kurang')}>
        <Minus style={{ marginRight: '6px' }} size={16} /> Kurang
      </motion.button>
      <motion.button whileTap={{ scale: 0.9 }} onClick={() => handleAction('tambah')} style={{ marginLeft: '10px' }}>
        <Plus style={{ marginRight: '6px' }} size={16} /> Tambah
      </motion.button>
      <motion.button whileTap={{ scale: 0.9 }} onClick={() => handleAction('reset')} style={{ marginLeft: '10px' }}>
        <RotateCcw  style={{ marginRight: '6px' }} size={16} /> Reset
      </motion.button>

      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <h3>Riwayat:</h3>
        <ul>
          {logs.slice(-5).reverse().map((log, i) => (
            <li key={i}>{log}</li>
          ))}
        </ul>
        <motion.button onClick={clearLogs} whileTap={{ scale: 0.9 }}  style={{ marginLeft: '10px' }}>
        <Trash2 style={{ marginRight: '6px' }} size={16} /> Hapus Riwayat
      </motion.button> 
      </div>
    </motion.div>
  );
}

export default Counter;
