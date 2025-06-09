const modalStyles = {
  overlay: {
    position: 'fixed',
    zIndex: 9999,
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
  content: {
    maxWidth: 400,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: '2rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '300px',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    lineHeight: 1,
  },
  footerNote: {
    marginTop: 'auto',
    paddingTop: '1rem',
    borderTop: '1px solid #eee',
    fontSize: '0.9rem',
    textAlign: 'center',
    color: '#555',
  },
  signupLink: {
    marginLeft: '0.5rem',
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

const Modal = ({ isOpen, onClose, children, footerNote, onFooterLinkClick }) => {
  if (!isOpen) return null;

  return (
    <div style={modalStyles.overlay} onClick={onClose}>
      <div style={modalStyles.content} onClick={(e) => e.stopPropagation()}>
        <button
          style={modalStyles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        {children}
        {footerNote && (
          <div style={modalStyles.footerNote}>
            {footerNote.text}
            <span
              style={modalStyles.signupLink}
              onClick={onFooterLinkClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onFooterLinkClick();
              }}
            >
              {footerNote.linkText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
