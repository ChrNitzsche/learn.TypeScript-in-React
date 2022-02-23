import { useState } from "react";

const GuestList: React.FC = () => {
   const [name, setName] = useState<string>('');
   const [guests, setGuests] = useState<string[]>([]);

   const onclick = () => {
      setName('');
      setGuests([...guests, name]);
      console.log(guests);
 
   }

   return(
      <div id='guestlist'>
         <h1>Guest List</h1>

         <input value={name} onChange={(e) => setName(e.target.value)} 
                placeholder="type in a name" />
         <button onClick={onclick}>Add Guest</button>

         <ul>
            { guests.map(guest => 
               <li key={guest}>{guest}</li>
            )}
         </ul>
      </div>
   );
};

export default GuestList;