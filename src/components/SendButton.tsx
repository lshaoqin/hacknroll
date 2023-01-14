import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';

type Props = {
    onClick: () => void;
}
const SendButton: React.FC<Props> = 
    ({onClick}) => {
  return (
    <Tooltip title="Submit">
      <IconButton aria-label="submit" onClick={onClick}>
        <SendIcon />
      </IconButton>
    </Tooltip> 
  );
}

export default SendButton