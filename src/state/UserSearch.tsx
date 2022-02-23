import { useState } from 'react';

const users = [
   { name: 'Sarah', age: 20 },
   { name: 'Alex', age: 21 },
   { name: 'Michael', age: 23 },
   { name: 'Tina', age: 18 }
];

interface user {
   name: string;
   age: number;
}


const UserSearch: React.FC = () => {
   const [name, setName] = useState('');
   const [userFound, setFoundedUser] = useState<user | undefined>();  // userFound = "undefined || {name, age}"

   const onClick = () => {
      const foundUser = users.find((user) => {
         return user.name === name;
      });
      setFoundedUser(foundUser); 
   }; 

   return(
      <div>
         <h1>UserSearch</h1>
         <input value={name} onChange={e => setName(e.target.value)} placeholder="Find a name" />
         <button onClick={onClick}>Find User</button>
         <div>
            { userFound && 'Found: '+ userFound.name +' (age: '+ userFound.age + ')' || 'not found'} 
            {/* { userFound !== undefined && 'No user'} */}
         </div>

      </div>
   );
}

export default UserSearch;