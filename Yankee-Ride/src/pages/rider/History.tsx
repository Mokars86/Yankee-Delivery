import { Receipt } from 'lucide-react';

const History = () => {
    return (
      <div className="animate-fade-in" style={{
        display: 'flex', flexDirection: 'column', minHeight: '100svh',
        backgroundColor: 'var(--bg-color)', color: 'var(--text-main)',
        padding: '1rem', paddingBottom: 'calc(var(--nav-height) + var(--safe-bottom) + 1rem)'
      }}>
          <div className="page-header sticky top-0 bg-gray-50 z-20" style={{ background: 'var(--bg-color)', borderBottom: 'none', boxShadow: 'none' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>Delivery History</h1>
          </div>
          
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
             <div style={{
               width: '5rem', height: '5rem', borderRadius: 'var(--radius-full)',
               background: 'var(--surface-color)',
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               marginBottom: '1.5rem', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)'
             }}>
                <Receipt size={32} color="var(--text-muted)" />
             </div>
             <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem' }}>No past deliveries</h2>
             <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '250px', lineHeight: 1.5 }}>
               When you complete a delivery, it will appear here.
             </p>
          </div>
      </div>
    );
};

export default History;
