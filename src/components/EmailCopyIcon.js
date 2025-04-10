import React, { useState, useEffect } from 'react';
import { MdEmail } from 'react-icons/md';

const EmailCopyIcon = ({ email }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleEmailCopy = () => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(email)
        .then(() => {
          setIsCopied(true);
          setShowTooltip(true);
        })
        .catch((err) => {
          console.error('Failed to copy email: ', err);
          alert('Failed to copy email address.');
        });
    } else {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setIsCopied(true);
      setShowTooltip(true);
    }
  };

  useEffect(() => {
    let timeoutId;
    if (showTooltip) {
      timeoutId = setTimeout(() => {
        setShowTooltip(false);
        setIsCopied(false); // Reset copied state after tooltip disappears
      }, 1500); // Adjust the duration the tooltip is shown (in milliseconds)
    }
    return () => clearTimeout(timeoutId); // Cleanup on unmount or when showTooltip changes
  }, [showTooltip]);

  const tooltipStyles = {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '0.8em',
    zIndex: 10,
    top: '-30px', // Adjust position above the icon
    left: '50%',
    transform: 'translateX(-50%)',
    opacity: showTooltip ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={handleEmailCopy}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: '0 0px',
          cursor: 'pointer',
          verticalAlign: 'middle',
        }}
        aria-label={`Copy email address: ${email}`}
      >
        <MdEmail size={26} color="#2f7657" />
      </button>
      {showTooltip && (
        <div style={tooltipStyles}>
          Copied!
        </div>
      )}
    </div>
  );
};

export default EmailCopyIcon;