import React from 'react';

export const ContryInformation = (props) =>
{
    const { data } = props;
    return (
        <>
        <b><label>Capital :</label></b> <label>{data.capital}</label><br/><br/>
        <b><label>Population :</label></b> <label>{data.population}</label><br/><br/>
        <b><label>Latlng :</label></b> <label>{data.latlng}</label><br/><br/>
        <b><label>Flag :</label></b> <img url={data.flag}></img><br/><br/>
        </>
    )
}