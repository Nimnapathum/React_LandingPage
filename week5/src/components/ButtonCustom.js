import React from 'react'
import { Button } from '@mui/material'
import {styled} from '@mui/material'
import CampaignIcon from '@mui/icons-material/Campaign';

const MyButton = styled(Button)({
  backgroundColor: '#1976d2',
  color: 'black',
  margin: '20px',
  padding: '10px 20px',
  borderRadius: '8px',
  display: 'flex',
  '&:hover': {
    backgroundColor: '#115293',
  },
  '&:active': {
    backgroundColor: '#0d3c73',
  },
  '&.Mui-disabled': {
    backgroundColor: '#cccccc',
    color: '#666666',
  },
});

function ButtonCustom({onClick}) {
  return (
    <div>
        <MyButton variant='contained' size='large' onClick={onClick} startIcon={<CampaignIcon />} endIcon={<CampaignIcon/>}>Click Me</MyButton> 
    </div>
  )
}

export default ButtonCustom