import React, { useState } from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import { CountryInformation } from '../Components/ContryInformation';
import { WeatherInformation } from '../Components/WeatherInformation';
import { AccessKey, HTTPSTATUS, ErrorAlertMessage} from '../Helpers/Constant';

export const DisplayInfo = (props) => {
    const [showCountry, setShowCountry] = useState(true);
    const [data,setData] = useState(props.location.state);

    GetWeatherInformation = () =>
    {
        const url = 'http://api.weatherstack.com/current';
        const urlData = {
            access_key: AccessKey,
            query:data.capital
        }
        const response = getApiData(url,urlData); 
        if(response.status === HTTPSTATUS.Success)
        {
            setData(response.data);
            setShowCountry(false);
        }
        else
        {
            alert(ErrorAlertMessage);
        }

    }
    
    return(
        <>
        <HeaderComponent title={showCountry ? `${data.name} : Country Information`  : `${data.name} : Weather Information`}></HeaderComponent>
        {(showCountry) ? (<>
                         <CountryInformation data={data}></CountryInformation>
                         <Button variant="contained" color="primary" onClick={GetWeatherInformation}>
                             Capital Weather
                         </Button>
                         </>
        )
                        :
                        (<WeatherInformation data={data}></WeatherInformation>)
        }
        </>
    )
}