
import axios from 'axios';


export const getNextFeed = async (numberToSkip?:number) => {
  try {
    const response = await axios.get(`https://backend.tedooo.com/hw/feed.json${numberToSkip?`?skip=${numberToSkip}`:''}`);
    return response.data;
  } catch (error) {
    console.error( error);
    throw error;
  }
};


export const sendImpression = async (itemId?:string) => {
  console.log('sending impression!!!!!',itemId)
  try {
   axios.get(`https://backend.tedooo.com/?itemId=${itemId}`);
   
  } catch (error) {
    console.error( error);
    throw error;
  }
};