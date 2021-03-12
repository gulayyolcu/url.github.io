import React,{useEffect,useState} from 'react';
import axios from 'axios';
import ClipboardJS from 'clipboard';



const UrlList=()=>{

    const [adrss,setAdrss]=useState([]);
    const [urlList,setUrlList]=useState([]);
    const [show,setShow]=useState(false);
    
    
    useEffect(()=>{
        axios.get(`https://api.shrtco.de/v2/shorten?url=${adrss}`)
        .then((response)=>setUrlList([...urlList,response.data.result]))
        .catch(err=>console.error(err))
     })

     const handleChange=(e)=>{
        setAdrss(...adrss,e.target.value);  
        e.target.value="";
        setTimeout(()=>setAdrss(""),3000)
      }
    
     const handleClick=()=>{
        setShow(true); 
      }

     const copyToClipboard=(e)=>{

        var clipboard = new ClipboardJS('.copybtn');

        clipboard.on('success', function(e) {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);
            
            e.clearSelection();
        });

        clipboard.on('error', function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
        e.target.value="Copied!"
        document.querySelector('.copybtn').value="Copied!";
        document.querySelector('.copybtn').style.backgroundColor="var(--darkViolet)";      
        
     }

     const [span,setSpan]=useState(false);

     const handleFocus=()=>{
         setSpan(true);
     }

    return(
        <div className="w-full p-10 ">
         
            
            <div className="urlBackground mb-10 px-4 py-6 rounded rounded-lg lg:pt-8 lg:mx-16 sm:py-10 md:py-10 lg:py-2 lg:flex lg:flex-row lg:justify-between lg:items-center">
                <div className=" lg:flex-grow">
                    <div className="">
                        <input type="text" value={adrss} name="url" onChange={handleChange} onFocus={handleFocus} placeholder="Shorten a link here" className="rounded rounded-lg border-2 outline-none border-gray-500 border-opacity-10 focus:ring-2 focus:ring-red-400 focus:ring-opacity-30 w-full px-4 py-2 lg:-mt-2"/>
                    </div>
                    <div className="h-12">
                    {
                            span?(<span className="text-sm text-red-400 italic font-bold lg:text-sm pl-4">Please add a link</span>):""
                    }
                    </div>
                </div>
               
                <div className="">
                    <div style={{backgroundColor:"var(--cyan)"}} className=" rounded rounded-lg text-center lg:rounded  lg:ml-2 lg:-mt-12">
                        
                        <input type="submit" value="Shorten It!" style={{backgroundColor:"var(--cyan)"}} onClick={handleClick}  className="text-white  focus:outline-none active:bg-purple-900 px-2 py-2 text-md font-bold rounded rounded-lg sm:rounded sm:rounded-lg md:rounded md:rounded-lg"/>
                    </div>
                </div>

               
            </div>
            <div className="">
            {
                
                show?(urlList.map((url)=>{
                    
                    const {code,original_link,full_short_link}=url;

                   /*  const changeValue=(e)=>{
                        document.querySelector('.copybtn').value="Copied!";
                        document.querySelector('.copybtn').style.backgroundColor="#3730A3";    
                    } */
                   
                     return(
                        <div key={code}  className="mb-6 lg:mb-6 xl:mb-6 bg-white shadow-2xl rounded-lg text-left border-2 border-gray-300 border-opacity-10 px-4 py-4 space-y-4 lg:mx-16 lg:grid lg:grid-cols-6 lg:gap-x-4">
                            <p style={{color:'var(--darkBlue)'}} className="text-sm truncate font-bold border-b-2 pb-4 border-gray-300 border-opacity-50 lg:border-none lg:pl-4 lg:pt-4 lg:col-span-3">
                                {original_link}
                            </p>
                            <p style={{color:'var(--cyan)'}} id={code} className="copiedText text-sm font-bold text-white lg:inline-block lg:col-span-2">
                                {full_short_link}
                            </p>
                            <div className="lg:inline-block lg:w-1/6">
                            <div className="">
                                    <input type="submit" style={{backgroundColor:"var(--cyan)"}} data-clipboard-text={full_short_link} data-clipboard-action="copy" onClick={copyToClipboard} value="Copy" className="copybtn w-full text-center px-4 py-2 text-white focus:outline-none active:bg-purple-900 rounded-md text-md font-bold lg:w-28 lg:-mt-4"/>
                            </div>
                            </div>
                        </div>
                    ) 
                     })):""
                     
            }
            </div>
          
            
        </div>
        
       
    )
}

export default UrlList;


<div className="shadow-lg rounded-lg mx-auto p-4 w-full lg:flex lg:flex-row lg:justify-between lg:items-center lg:max-w-screen-2xl lg:mx-auto lg:ml-40"></div>