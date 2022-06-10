function ListItems ({className, deletedItems, index, item}) {
    return (
        <>
            <li key = {index} className={className}>
            <div>{item}</div>
            <div className="button-check">
            <button id="deleteB" onClick={() => deletedItems(index) } > Delete </button>
            <input type="checkbox"></input>
            </div>
            </li>
        </>
    );
}

export default ListItems;