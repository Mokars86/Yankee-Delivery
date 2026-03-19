import { LogOut, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in" style={{
      display: 'flex', flexDirection: 'column', minHeight: '100svh',
      backgroundColor: 'var(--bg-color)', color: 'var(--text-main)',
      paddingBottom: 'calc(var(--nav-height) + var(--safe-bottom) + 1rem)'
    }}>
      
      {/* Header Profile Section */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, #1E7A28 100%)',
        padding: 'calc(env(safe-area-inset-top, 0px) + 2rem) 1.5rem 2.5rem',
        borderRadius: '0 0 2.5rem 2.5rem',
        boxShadow: '0 8px 24px rgba(46, 158, 58, 0.25)',
        marginBottom: '1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
         <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '12rem', height: '12rem', background: 'rgba(255,255,255,0.08)', borderRadius: '50%' }} />
         <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '8rem', height: '8rem', background: 'rgba(245,166,35,0.15)', borderRadius: '50%' }} />
         
         <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 10 }}>
            <div style={{
              width: '5rem', height: '5rem', background: '#fff', borderRadius: '50%', padding: '0.25rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)', position: 'relative'
            }}>
              <img 
                src="https://ui-avatars.com/api/?name=Alex+Rider&background=random" 
                alt="Profile" 
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ color: '#fff' }}>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.25rem', letterSpacing: '-0.02em' }}>Alex Rider</h1>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem', margin: 0 }}>
                <CheckCircle2 size={14} color="var(--primary-light)" />
                Verified Rider
              </p>
            </div>
         </div>
      </div>

      <div style={{ padding: '0 1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
         <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', cursor: 'pointer' }}>
             <div style={{ display: 'flex', flexDirection: 'column' }}>
               <span style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '1rem', marginBottom: '0.125rem' }}>Personal Information</span>
               <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>Edit your details</span>
             </div>
             <ChevronRight size={20} color="var(--text-muted)" />
         </div>

         <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', cursor: 'pointer' }}>
             <div style={{ display: 'flex', flexDirection: 'column' }}>
               <span style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '1rem', marginBottom: '0.125rem' }}>Vehicle Details</span>
               <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>Motorcycle Honda PCX</span>
             </div>
             <ChevronRight size={20} color="var(--text-muted)" />
         </div>
         
         <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', cursor: 'pointer' }}>
             <div style={{ display: 'flex', flexDirection: 'column' }}>
               <span style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '1rem', marginBottom: '0.125rem' }}>Support</span>
               <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>Help center, Terms, Privacy</span>
             </div>
             <ChevronRight size={20} color="var(--text-muted)" />
         </div>
      </div>

      <div style={{ padding: '0 1.25rem' }}>
        <button 
          onClick={() => navigate('/')}
          className="active:scale-95 transition-transform"
          style={{
            width: '100%', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)',
            fontWeight: 800, fontSize: '1rem', borderRadius: 'var(--radius-xl)', border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer'
          }}
        >
          <LogOut size={20} />
          Log Out
        </button>
      </div>
      
    </div>
  );
};

export default Profile;
