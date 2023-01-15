import CloseIcon from '@material-ui/icons/Close';
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
        <CloseIcon />
      </IconButton>
    </Tooltip> 
  );
}

export default SendButton