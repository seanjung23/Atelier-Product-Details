import react, {createContext} from 'react';

const interactionAPI = (element, widget) => {
  let time = new Date();
  let params =
    {
      element: element,
      widget: widget,
      time: time
    };


  axios.post('/interactions', params)
  .then(result => console.log(result))
  .catch(err => console.log(err));
}

export const InteractionAPIContext = createContext(interactionAPI);