function ListItems ({className, deletedItems, index, item}) {
    return (
        <>
            <li key = {index} className={className}>{item}
            <div class="button-check">
            <button onClick={() => deletedItems(index) } > Delete </button>
            <input type="checkbox"></input>
            </div>
            </li>
        </>
    );
}

export default ListItems;