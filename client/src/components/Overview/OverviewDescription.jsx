import react,  {useState, useEffect, useRef, useContext}from 'react';
import axios from 'axios';
import {InteractionAPIContext} from './../InteractionAPI.jsx';
import {Facebook, Twitter, Pinterest} from './../icons/OverviewShareIconsSVG.jsx'

export default function({itemInfo}) {
  const [slogan, setSlogan] = useState(itemInfo.slogan);
  const [description, setDescription] = useState(itemInfo.description);
  const [features, setFeatures] = useState(itemInfo.features)
  const interactionAPI = useContext(InteractionAPIContext);
  useEffect(()=> {
    setSlogan(itemInfo.slogan);
    setDescription(itemInfo.description);
    setFeatures(itemInfo.features);
  }, [itemInfo])

  const facbookCurrentURL = `http://www.facebook.com/sharer.php?u=${window.location.href}`
  const twitterCurrentURL = `https://twitter.com/intent/tweet?url='${window.location.href}'`;
  const pinterestCurrentURL = `http://pinterest.com/pin/create/button/?url=${window.location.href}`

  return (
    <>
      <div className="sloganDiv">
        <b>{slogan}</b>
      </div>

      <div className="descriptionDiv">
        <p>{description}</p>
      </div>

      <div className="shareDiv" >
        <b>Share:  &nbsp;</b>
        <div className="facebookShareDiv" >
          <a href={facbookCurrentURL} onClick={()=>{interactionAPI('share on facebook button', 'overview')}} target="_blank"><Facebook/></a>
        </div>
        &nbsp;
        <div className="twitterShareDiv"  >
          <a href={twitterCurrentURL} onClick={()=>{interactionAPI('share on twitter button', 'overview')}} target="_blank"><Twitter/></a>
        </div>
        &nbsp;
        <div className="pinterestShareDiv">
        <a href={pinterestCurrentURL}  onClick={()=>{interactionAPI('share on pinterest button', 'overview')}} target="_blank"><Pinterest/></a>
        </div>
      </div>

      <div className="featuresDiv">
        {features.map((e, index) => {
          return (
            <p key={index}><b>{e.feature}: </b><span>{e.value}</span></p>

          )
        })}
      </div>

    </>
  )
}