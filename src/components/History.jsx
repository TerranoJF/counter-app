function History({ logs, clearLogs }) {
    return (
      <div>
        <h3>Riwayat Tindakan:</h3>
        <ul>
          {logs.map((log, i) => (
            <li key={i}>{log}</li>
          ))}
        </ul>
        <button onClick={clearLogs}>Hapus Riwayat</button>
      </div>
    );
  }
  
  export default History;
  