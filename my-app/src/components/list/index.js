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
            <ListItems className="list-items" deletedItems={deleteItems} index={index} item={item}/>
       ))}
      </ul>
      </div>
    );
}

export default List;