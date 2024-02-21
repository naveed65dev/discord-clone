import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CradGiftcardIcon from '@material-ui/icons/CardGiftcard'
import GifIcon from '@material-ui/icons/Gif'
import EmojiEmoticonsIcon from '@material-ui/icons/EmojiEmotions'
import Message from './Message'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { selectChannelId, selectChannelName } from './features/appSlice'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from './axios'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Chat = () => {
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])


    const getConversation = async (channelId) => {
        try {
            console.log(channelId, "channelId");
            if (channelId) {
               
                const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTcwODQzODg3MSwiZXhwIjoxNzA4NDQyNDcxLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1uNmZlNUBkaXNjb3JkLWNsb25lLTE1Nzk0LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstbjZmZTVAZGlzY29yZC1jbG9uZS0xNTc5NC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInVpZCI6Im5hdmVlZDY1ZGV2QGdtYWlsLmNvbSIsImNsYWltcyI6eyJleHBpcmVzSW4iOiIxNWQifX0.kOvjLrWvAD6BZ_pNkbGBdQII1JzIr1HNI10OFs6jrQbm2E7sVMYlDMrroe7r2daDx7MjMJjxyi8y3ncIecLLzu0XN4TlzJFAVhdEDNOh6NXkmpp8gNvFQdTpspO8WhU5lJ9xY3HoehP3qGBytmFjqPAur42qLSlT4Sb-AN9En6jMfehOu8h94n7_m7bW6-D9Fst-oBzXq76nJobjwBKgEifBKaQqzFwHYzyAaN8bLDOXQOsyZOfn2EtETxtVvFZO79E3jTPnZhYzb7pjZ89i9MyenJUdjUrbmKAOZxEr-CAR5pUmAQUCoCF175f9WxfIVkwnNXW1zp1Usuyz-_x1DA';
    
                if (!token) {
                    toast.error('JWT token not found');
                     
                    return;
                }
    
                const response = await axios.get(`/api/get/conversation?id=${channelId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
    
                console.log('API Response:', response.data);
                setMessages(response.data[0]?.conversation || []);
            }
        } catch (error) {
            console.error('Error fetching conversation:', error);
            toast.error('Error fetching conversation');
        }
    };
    
      
      
      useEffect(() => {
        getConversation(channelId)
      }, [channelId])
      
      const sendMessage = async (e) => {
        e.preventDefault();
    
        try {
          
            const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTcwODQzODg3MSwiZXhwIjoxNzA4NDQyNDcxLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1uNmZlNUBkaXNjb3JkLWNsb25lLTE1Nzk0LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstbjZmZTVAZGlzY29yZC1jbG9uZS0xNTc5NC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInVpZCI6Im5hdmVlZDY1ZGV2QGdtYWlsLmNvbSIsImNsYWltcyI6eyJleHBpcmVzSW4iOiIxNWQifX0.kOvjLrWvAD6BZ_pNkbGBdQII1JzIr1HNI10OFs6jrQbm2E7sVMYlDMrroe7r2daDx7MjMJjxyi8y3ncIecLLzu0XN4TlzJFAVhdEDNOh6NXkmpp8gNvFQdTpspO8WhU5lJ9xY3HoehP3qGBytmFjqPAur42qLSlT4Sb-AN9En6jMfehOu8h94n7_m7bW6-D9Fst-oBzXq76nJobjwBKgEifBKaQqzFwHYzyAaN8bLDOXQOsyZOfn2EtETxtVvFZO79E3jTPnZhYzb7pjZ89i9MyenJUdjUrbmKAOZxEr-CAR5pUmAQUCoCF175f9WxfIVkwnNXW1zp1Usuyz-_x1DA';
    
            if (!token) {
                toast.error('JWT token not found');
                
                return;
            }


    if(input === ''){
       return toast.error('message is empty')
    }
            await axios.post(`/api/new/message?id=${channelId}`, {
                message: input,
                timestamp: Date.now(),
                user: user,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            setInput('');
        
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error('Error sending message');
        }
    };
    
    
    

    return (
        <div className='chat' >
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
      
            
                {messages.map(message => (
                                 <Message message={message.message} timestamp={message.timestamp} user={message.user} />
            ))}

            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize='large' />
                <form>
                    <input type="text"   value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                  
                    <button className='chat__inputButton' onClick={sendMessage} type='submit'>Send Message</button>

                </form>

                <div className="chat__inputIcon">
                    <CradGiftcardIcon fontSize='large' />
                    <GifIcon fontSize='large' />
                    <EmojiEmoticonsIcon fontSize='large' />
                </div>
            </div>
        </div>
    )
}

export default Chat
