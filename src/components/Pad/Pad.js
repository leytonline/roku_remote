import { IconButton } from '@mui/material';
import './Pad.css';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import axios from 'axios';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Pad = () => {
    const sendKeypress = (key) => {
        axios.post(`http://10.0.0.19:8060/keypress/${key}`).then(() => {console.log("successful select")}).catch(() => {console.log('sent', key)});
    }

    return (
        <div className="pad">
            <IconButton onClick={() => {sendKeypress('up')}}>
                <KeyboardArrowUpIcon />
            </IconButton>
            <div>
                <IconButton onClick={() => {sendKeypress('left')}}>
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <IconButton onClick={() => {sendKeypress('select')}}>
                    <RadioButtonCheckedIcon />
                </IconButton>
                <IconButton onClick={() => {sendKeypress('right')}}>
                    <KeyboardArrowRightIcon />
                </IconButton>
            </div>
            <IconButton onClick={() => {sendKeypress('down')}}>
                <KeyboardArrowDownIcon />
            </IconButton>
        </div>
    );
}

export default Pad;