import ListItems from "../listItem";

function List({ list, setList }) {
    function deleteItems(index) {
        let itemDeletedList = [...list.slice(0, index), ...list.slice(index+1)];
        setList(itemDeletedList);
    }
   
  return (
      <div> 
      <ul> 
       {list.map((item, index) => (
           <li key = {index}>{item}
            <ListItems class="list-items" deletedItems={deleteItems} index={index}/>
            </li> 
       ))}
      </ul>
      </div>
  );
       }  
export default List;