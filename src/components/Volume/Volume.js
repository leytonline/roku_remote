import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import './Volume.css';
import { IconButton } from '@mui/material';
import axios from 'axios';

const Volume = () => {

    const sendVolumeChange = (change) => {
        axios.post(`http://10.0.0.19:8060/keypress/volume${change}`).then(() => {console.log("successful select")}).catch(() => {console.log('sent volume', change)});
    }

    return (
        <div className="volume">
            <div>
                <IconButton onClick={() => {sendVolumeChange('up')}}>
                    <VolumeUpIcon />
                </IconButton>
            </div>
            <div>
                <IconButton onClick={() => {sendVolumeChange('down')}}>
                    <VolumeDownIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Volume;