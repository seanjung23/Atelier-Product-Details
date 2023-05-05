import react, {useState, useEffect} from 'react';
import axios from 'axios';

export default function RelatedItem({item}) {


  return (
    <div>
      <p>{item.name}</p>

    </div>
  )

}