import React, { useState, useEffect, useRef } from 'react';
import { Container, Paper, TextField, IconButton, Divider, Typography, Box, ListItemIcon } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './ChatWindow.css'; 
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'; 

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false); 
  const chatContainerRef = useRef(null); // Create a ref for the chat container

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const updatedMessages = [...messages, { text: message, sender: 'You' }];
      setMessages(updatedMessages);
      setMessage('');
      setIsTyping(true);

      fetch(`http://18.130.225.150:5000/api/data?question=${encodeURIComponent(message)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setIsTyping(false);
          if (data.error) {
            console.log(data.error);
            setMessages([...updatedMessages, { text: 'Sorry, an error occurred.', sender: 'Assistant' }]);
          } else {
            console.log(data);
            const response =  data;
            setMessages([...updatedMessages, { text: data, sender: 'Assistant' }]);
          }
        })
        .catch((error) => {
          setIsTyping(false);
          console.error('Error:', error);
          setMessages([...updatedMessages, { text: 'Sorry, an error occurred.', sender: 'Assistant' }]);
        });
    }
  };

  // Scroll to the bottom of the chat when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', height: '80vh' }}>
      <Box sx={{ border: '1px solid #D3D3D3', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography style={{ textAlign: 'left', color: '#1976d2' }}>
          Start a Conversation
        </Typography>
        <ListItemIcon>
          <ChatBubbleOutlineIcon fontSize="large" color="primary" />
        </ListItemIcon>
      </Box>
      <Paper elevation={3} sx={{ border: '1px solid #D3D3D3', flex: 1, overflowY: 'scroll', boxShadow: 0, borderRadius: 0 }} ref={chatContainerRef}>
        <div style={{ padding: '16px' }}>
          <div style={{ marginBottom: '8px', textAlign: 'left' }}>
            <strong>Assistant:</strong> Hello! How can I assist you today?
          </div>

          {messages.map((msg, index) => (
            <div key={index} style={{ marginBottom: '8px', textAlign: msg.sender === 'You' ? 'right' : 'left' }}>
              <strong>{msg.sender}:</strong> {typeof msg.text === 'string' ? (
                msg.text
              ) : (
                <pre>{JSON.stringify(msg.text, null, 2)}</pre>
              )}
            </div>
          ))}
        </div>
        <div>
          {isTyping && (
            <div className="typing-indicator" style={{padding: "16px"}}>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          )}
        </div>
      </Paper>
      <Divider />
      <div style={{ display: 'flex', alignItems: 'center', paddingTop: '8px' }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ flexGrow: 1 }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <IconButton color="primary" onClick={handleSendMessage} style={{ marginLeft: '-40px', zIndex: '1' }}>
          <SendIcon />
        </IconButton>
      </div>
    </Container>
  );
};

export default ChatWindow;
