import { useState } from 'react';

export const Form = ({ onAddLang }) => {
const [text,setText] = useState('');

const submitForm = (event) => {
    event.preventDefault();
    onAddLang(text);
}
    return(
        <div>
           <h4>new lang</h4> 
           <form onSubmit={submitForm}>
               <div>
                   <input 
                   type="text" 
                   value={text} 
                   onChange={(a) => setText(a.target.value)}
                   />
               </div>
               <div>
                   <button>add</button>
               </div>
           </form>
        </div>
    )
}
