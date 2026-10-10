'use client';
import React, { useState } from 'react';

export default function Page() {
  const [status, setStatus] = useState("Ready to hustle");

  const runSmuggle = async () => {
    setStatus("Crossing the bridge... watch for police!");
    try {
      const res = await fetch('/api/smuggle', { method: 'POST', body: JSON.stringify({ playerId: '1' }) });
      const data = await res.json();
      setStatus(data.message);
    } catch {
      setStatus("Network glitch! The agberos blocked your signal.");
    }
  };

  return (
    <div style={{ backgroundColor: '#09090b', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      <h1 style={{ color: '#eab308', letterSpacing: '2px' }}>GANGS OF LAGOS</h1>
      <p style={{ color: '#a1a1aa' }}>📍 Mainland Zone (Alpha Build)</p>
      
      <div style={{ backgroundColor: '#18181b', border: '1px solid #27272a', padding: '20px', borderRadius: '8px', width: '100%', maxW: '400px', textAlign: 'center', margin: '20px 0' }}>
        <p style={{ fontWeight: 'bold' }}>{status}</p>
      </div>

      <button onClick={runSmuggle} style={{ backgroundColor: '#eab308', color: '#000', border: 'none', padding: '12px 24px', fontWeight: 'black', borderRadius: '4px', cursor: 'pointer', width: '100%', maxWidth: '400px' }}>
        ⚡ Run Cargo (Third Mainland Bridge)
      </button>
    </div>
  );
}
