import React,{createContext, useEffect, useState} from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

export const UrlShortenContext=createContext();

const UrlShortenContextProvider=(props)=>{


//const [url,setUrl]=useState(['https://sehitsaimcelikmtal.meb.k12.tr/icerikler/kar-tatili_10839204.html']);

//const [url,setUrl]=useState('');

const [urlList,setUrlList]=useState([]);

const sendPostRequest=async ()=>{
  try{
      let data=await axios({
          method:'get',
          url:'https://api.shrtco.de/v2/shorten?url='+`${urlList.url}`,
          headers:{
            'X-auth-key':"token123"
          }
      }).then(({data})=>data);
      setCourses([...courses,data])
  }catch(err){
      console.log(err);
  }
}

/* const sendPostRequest = async () => {
    try {
        const resp = await axios.get('https://api.shrtco.de/v2/shorten?url='+urlList.url)
        console.log(resp.data.result);
        setUrlList([...urlList,{id:uuidv4(),url:resp.data.result}]);
        return urlList;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}; */
 
useEffect(()=>{
  sendPostRequest();
},[urlList])

/* const addUrl=(u)=>{
  setUrl([...url,u])
}

const removeUrl=(id)=>{
  return url.filter((u)=>u.id!==id);
} */

  return (

    <UrlShortenContext.Provider value={{urlList,setUrlList,sendPostRequest}}>
        {props.children}
    </UrlShortenContext.Provider>

   /* <div>
      <form>
          <input type="text" value="" placeholder="Shorten a link here"/>
          <input type="submit" value="Shorten It!" onClick={sendPostRequest}/>
      </form>
            <p>{url.original_link}</p>
            <p>{url.full_short_link}</p>

   </div> */
     
  )
};

export default UrlShortenContextProvider;
