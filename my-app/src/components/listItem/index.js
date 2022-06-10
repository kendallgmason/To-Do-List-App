function ListItems ({className, deletedItems, index, item}) {
    return (
        <>
            <li key = {index} className={className}>{item}</li>
            <button onClick={() => deletedItems(index) } > Delete </button>
            <input type="checkbox"></input>
        </>
    );
}

export default ListItems;