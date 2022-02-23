import ReactDOM from 'react-dom';
import './styles.css';

import EventComponent from './events/EventComponent';
import UserSearch from './state/UserSearch';
import GuestList from './state/GuestList';
import Parent from './props/Parent';
import UserSearchClass from './classes/UserSearchClass';
import UserSearchRef from './refs/UserSearchRef';

const users = [
   { name: 'Sarah', age: 20 },
   { name: 'Alex', age: 21 },
   { name: 'Michael', age: 23 },
   { name: 'Tina', age: 18 }
];


const App = () => {
   return(
      <div>
         <UserSearchRef />
         {/* <EventComponent /> */}
         {/* <UserSearchClass users={users}/> */}
         {/* <UserSearch /> */}
         {/* <GuestList /> */}
         {/* <Parent /> */}
      </div>
   )
};

ReactDOM.render(<App />, document.querySelector('#root'));