import React, { useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { HTTPSTATUS, ErrorAlertMessage } from '../Helpers/Constant';
import { getApiData } from '../Services/ApiServices';
import  history  from '../Components/History';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const [text, setText] = useState('');

  handleCountryChange = (value) =>
  {
        setText(value);
  }

  showInformation = async () =>
  {
   const url = 'https://restcountries.eu/rest/v2/name/'+{text};
   const urlData = '';
   const response = getApiData(url,urlData); 
   if(response.status === HTTPSTATUS.Success)
   {
       return history.push( { pathname : '/ShowInformation', state:{data:response.data[0]}});
   }
   else
   {
       alert(ErrorAlertMessage);
   }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
          id="country-name"
          label="Enter Country"
          onChange = {(value) => handleCountryChange(value)}  
        />
        <Button variant="contained" disabled={text} onClick={showInformation}>
             Submit
        </Button>
      </div>
    </form>
  );
}
