import axios from 'axios';

export const getApiData = (url, data) =>
{
    return new Promise(async (resolve,reject) => {
        try{
            const response = await axios.get(url, { param : data});
            return resolve(response);
        }
        catch(err){
            console.log(err);
            return reject(err);
        }
    })
}