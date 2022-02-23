import React, { Component } from 'react';

interface User {
   name: string;
   age: number;
}

interface UserSearchProps {
   users: User[];
}

interface UserSearchState {
   name: string;
   userFound: User | undefined;
}


class UserSearchClass extends Component<UserSearchProps> {
   
   componentDidMount() {
      console.log(this.props.users);
   }
   
   state: UserSearchState = {
      name: '',
      userFound: undefined
   };

   onClick = () => {
      const foundUser = this.props.users.find((user) => {
         return user.name === this.state.name;
      });
     
      console.log('foundUser:', foundUser);
      this.setState({ userFound: foundUser }); 
   }
   
   render() {
      const { name, userFound } = this.state; // falls das nicht gemacht wird, müssen alle Variablen mit this.state... angesprochen werden!

      return(
         <div>
            <h1>UserSearch</h1>
            <input value={ name } onChange={e => this.setState({ name: e.target.value })} 
                   placeholder="Find a name"    />
            <button onClick={this.onClick}>Find User</button>
            <div>
               { userFound && 'Found: '+ userFound.name +' (age: '+ userFound.age + ')'} 
               {/* { this.state.userFound !== undefined && 'No user'} */}
            </div>
   
         </div>
      );
   }
   
   
}

export default UserSearchClass;