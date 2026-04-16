'use client';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Assistant() {
  const [minimized, setMinimized] = useState(true);
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Hi there! I am your Computational Genomics AI tutor. Ask me anything about the content on this page!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pageContext, setPageContext] = useState('');
  const messagesEndRef = useRef(null);
  const pathname = usePathname();

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, minimized]);

  // When pathname changes, fetch the raw markdown of the current page to serve as context
  useEffect(() => {
    const fetchContext = async () => {
      let slug = pathname;
      if (slug === '/') slug = '/index';
      try {
        // We need a subtle way to fetch the markdown client-side.
        // Wait, Next.js server components render the markdown. 
        // We'll extract innerText from the main content!
        const contentEl = document.querySelector('.markdown-body');
        if (contentEl) {
          setPageContext(contentEl.innerText);
        }
      } catch (err) {
        console.error('Failed to get page context', err);
      }
    };
    // small timeout to ensure DOM is rendered
    setTimeout(fetchContext, 500);
  }, [pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages.filter(m => m.role !== 'system'), { role: 'user', content: userMsg }],
          context: pageContext
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'system', content: `Error: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`assistant-panel ${minimized ? 'minimized' : ''}`}>
      <div 
        className="assistant-header" 
        onClick={() => setMinimized(!minimized)}
        style={{ cursor: 'pointer' }}
      >
        <div className="assistant-title">
          <span /> AI Tutor
        </div>
        <button className="toggle-btn" onClick={(e) => { e.stopPropagation(); setMinimized(!minimized); }}>
          {minimized ? '▲' : '▼'}
        </button>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>
             {msg.content.split('\n').map((line, i) => <p key={i}>{line}</p>)}
          </div>
        ))}
        {isLoading && (
          <div className="message ai">
            <span className="loading-dots">Thinking</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form className="chat-input-container chat-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="chat-input"
          placeholder="Ask a question about this page..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit" className="chat-submit" disabled={isLoading || !input.trim()}>
           ➤
        </button>
      </form>
    </div>
  );
}
