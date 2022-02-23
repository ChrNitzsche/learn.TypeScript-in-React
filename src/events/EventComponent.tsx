import { ChangeEvent } from "react";

const EventComponent: React.FC = () => {

   const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event);
   }

   const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
      console.log('I\'m being draged!');
   }

   return(
      <div>
         <input placeholder="type in something" onChange={onChange} />
         <div draggable onDragStart={onDragStart}>Drag Me!</div>
      </div>
   );

}

export default EventComponent;