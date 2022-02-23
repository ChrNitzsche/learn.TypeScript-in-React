interface ChildProps {
   color: string;
   onClick: () => void;
}

/* Wenn ich in Child mit Children arbeiten möchte: Children in interface ChildProps hinzufügen!    */
/* ChildAsFC arbeitet ohne Probleme mit Children                                                   */ 

// export const Child = (props: ChildProps) => {
export const Child = ({ color, onClick }: ChildProps) => {        // destructoring
   return(
      <div style={{backgroundColor: `${color}`}}>
         <h1>Hi there!</h1>
         <div>color: { color }</div>
         <button onClick={onClick}>Click me!</button>
      </div>
   );
};

/* Alternativ und besser:                                                                           */
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
   return(
      <div style={{backgroundColor: `${color}`}}>
         <h1>Hi there!</h1>
         <div>color: { color }</div>
         <div>
            {children}
         </div>
         <button onClick={onClick}>Click me!</button>
      </div>
   );
};
