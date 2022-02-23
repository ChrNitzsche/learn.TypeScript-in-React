import { Child, ChildAsFC } from './Child';

const Parent = () => {
   return(
      <>
         <Child color="#ff99cc" onClick={() => console.log(`clicked: ${new Date().toLocaleString('de-DE')}`)} />
         
         <ChildAsFC color="#99ffcc" onClick={() => console.log(`clicked: ${new Date().toLocaleString('de-DE')}`)}>
            <div>I'm a Children-DIV</div>
         </ChildAsFC>
      </>
   );
};

export default Parent;