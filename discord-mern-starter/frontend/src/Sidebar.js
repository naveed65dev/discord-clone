import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CallIcon from '@material-ui/icons/Call'
import { Avatar } from '@material-ui/core'
import MicIcon from '@material-ui/icons/Mic'
import HeadsetIcon from '@material-ui/icons/Headset'
import SettingsIcon from '@material-ui/icons/Settings'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import  { auth } from './firebase'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from './axios'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {
    const user = useSelector(selectUser)

    const [channels, setChannels] = useState([])
 


    const getChannels = () => {
       
        const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTcwODQ5MDU1NCwiZXhwIjoxNzA4NDk0MTU0LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1uNmZlNUBkaXNjb3JkLWNsb25lLTE1Nzk0LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstbjZmZTVAZGlzY29yZC1jbG9uZS0xNTc5NC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInVpZCI6InIyU2xUeDI3SjNaYUZocWlOcGhjMUZURUtLNjMiLCJjbGFpbXMiOnsiZXhwaXJlc0luIjoiMTVkIn19.ZuanhP9DBd9UZOzrCQ8KP99xyiDG7SzGXzJiCZzv2EQaLhkUjjkZ8qKSq7hZnKcqiGbE_XbT2qigXSWsxfDOCTBn4mbFRM4h3HOCYziPDVrPUasEu5Od3T1hmiSoeyRPIamqiaX76U76xcbQx7gXgegT4FA-hvilE9fsjLhMifDVz2IuokDGASV8o0jx8H7l2jFrZ1QRi_X7KI5BWhW2D5a4Jsayn33OE6zgyIN59Rdw1X25pCzJP0ezd-RfXC0UMOy8j5q7wHK952Aqc4J-ZqK1YBRqr-WBUJh4zrLQ-dyVwhIiz-Ipdr4MiYLOL7-GsHgrjxL5ivYw9YdWnruT7g';
    
        if (!token) {
            toast.error('JWT token not found');
             
            return;
        }
    
        axios.get('/api/get/channel', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            setChannels(res.data);
            
        })
        .catch((error) => {
            console.error('Error fetching channels:', error);
            toast.error('Error fetching channels');
        });
    };
    
        


    useEffect(() => {
        getChannels()
    }, [])
    
    
    const handleAddChannel = (e) => {
        e.preventDefault();
    
        const channelName = prompt('Enter a new channel name');
    
        if (channelName) {
           
            const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTcwODQ5MDU1NCwiZXhwIjoxNzA4NDk0MTU0LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1uNmZlNUBkaXNjb3JkLWNsb25lLTE1Nzk0LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstbjZmZTVAZGlzY29yZC1jbG9uZS0xNTc5NC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInVpZCI6InIyU2xUeDI3SjNaYUZocWlOcGhjMUZURUtLNjMiLCJjbGFpbXMiOnsiZXhwaXJlc0luIjoiMTVkIn19.ZuanhP9DBd9UZOzrCQ8KP99xyiDG7SzGXzJiCZzv2EQaLhkUjjkZ8qKSq7hZnKcqiGbE_XbT2qigXSWsxfDOCTBn4mbFRM4h3HOCYziPDVrPUasEu5Od3T1hmiSoeyRPIamqiaX76U76xcbQx7gXgegT4FA-hvilE9fsjLhMifDVz2IuokDGASV8o0jx8H7l2jFrZ1QRi_X7KI5BWhW2D5a4Jsayn33OE6zgyIN59Rdw1X25pCzJP0ezd-RfXC0UMOy8j5q7wHK952Aqc4J-ZqK1YBRqr-WBUJh4zrLQ-dyVwhIiz-Ipdr4MiYLOL7-GsHgrjxL5ivYw9YdWnruT7g';
    
            if (!token) {
                toast.error('JWT token not found');
                // Handle the case when the token is not available
                return;
            }
    
            // Replace the URL with your actual MongoDB endpoint
            const apiUrl = '/api/new/channel';
    
            // Make a POST request to store the channel name with the JWT token in the headers
            axios.post(apiUrl, { channelName }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response => {
                console.log('Channel added successfully:', response.data);
            })
            .catch(error => {
                console.error('Error adding channel:',error);
                toast.error('Error adding channel');
            });
        }
    };
    

    return (
        <div className='sidebar' >
            <div className="sidebar__top">
                <h3>Clever Programmer</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon onClick={handleAddChannel} className='sidebar__addChannel' />
                </div>
                <div className="sidebar__channelsList">
                    {
                       channels.map(channel => (
                            <SidebarChannel key={channel.id} id={channel._id} channelName={channel.channelName} />
                        ))
                        
                    }
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon className='sidebar__voiceIcons' fontSize='large' />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar src={user.photo} onClick={() => auth.signOut()} />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 5)}</p>
                </div>

                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
