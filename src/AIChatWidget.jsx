import "./AIChatWidget.css";
import React, { useEffect, useRef, useState } from "react";

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm the DanjiTech AI Assistant. How can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = {
      role: "user",
      content: message.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://danjitech-ai-api.danjitech-ai-api.workers.dev/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            message: userMessage.content,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* CHAT WINDOW */}
      <div className={`chat-widget ${isOpen ? "open" : ""}`}>
        <div className="chat-header">
          <div className="assistant-info">
            <div className="assistant-avatar">✦</div>

            <div>
              <h3>DanjiTech AI</h3>

              <span>
                <span className="status-dot"></span>
                Online
              </span>
            </div>
          </div>

          <button
            className="close-chat"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            ×
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((chat, index) => (
            <div className={`message-row ${chat.role}`} key={index}>
              {chat.role === "assistant" && (
                <div className="message-avatar">✦</div>
              )}

              <div className="message-bubble">{chat.content}</div>
            </div>
          ))}

          {loading && (
            <div className="message-row assistant">
              <div className="message-avatar">✦</div>

              <div className="message-bubble typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="chat-suggestions">
          <button
            onClick={() => setMessage("What services does DanjiTech offer?")}
          >
            Our services
          </button>

          <button
            onClick={() =>
              setMessage("Tell me about your AI chatbot solutions")
            }
          >
            AI Chatbots
          </button>

          <button onClick={() => setMessage("How can I get started?")}>
            Get started
          </button>
        </div>

        <div className="chat-input-container">
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            rows="1"
          />

          <button
            className="send-message"
            onClick={sendMessage}
            disabled={!message.trim() || loading}
            aria-label="Send message"
          >
            ↑
          </button>
        </div>

        <div className="chat-footer">Powered by DanjiTech AI</div>
      </div>

      {/* FLOATING BUTTON */}
      <button
        className={`chat-toggle ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Assistant"
      >
        {isOpen ? "×" : "✦"}
      </button>
    </>
  );
};

export default AIChatWidget;
