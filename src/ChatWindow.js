import React, { useState, useEffect } from 'react';
import { Container, Paper, TextField, IconButton, Divider, Typography, Box, ListItemIcon } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './ChatWindow.css'; 
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'; 


const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false); 
  
  const handleSendMessage = () => {
    if (message.trim() !== '') {
      // Create a new array with the user's message
      const updatedMessages = [...messages, { text: message, sender: 'You' }];
  
      // Add the user's message to the messages array
      setMessages(updatedMessages);
      setMessage('');
      setIsTyping(true);
  
      // Simulate the assistant's response after a delay
      setTimeout(() => {
        setIsTyping(false);
        // Append the assistant's response to the existing messages
        setMessages([...updatedMessages, { text: "Thanks for your enquiry.", sender: 'Assistant' }]);
      }, 1500);
    }
  };

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
      <Paper elevation={3} sx={{ border: '1px solid #D3D3D3', flex: 1, overflowY: 'scroll', boxShadow: 0, borderRadius: 0 }}>
        <div style={{ padding: '16px' }}>
          <div style={{ marginBottom: '8px', textAlign: 'left' }}>
            <strong>Assistant:</strong> Hello! How can I assist you today?
          </div>
          
          <div style={{ marginBottom: '8px', textAlign: 'right' }}>
            <strong>You:&nbsp;</strong>Can you generate a report on all the opportunities in the pipeline in 'consumer ' space across markets?
          </div>
          {messages.map((msg, index) => (
            <div key={index} style={{ marginBottom: '8px', textAlign: msg.sender === 'You' ? 'right' : 'left' }}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div>
        {isTyping && (
            <div className="typing-indicator"> {/* CSS handles animation */}
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
