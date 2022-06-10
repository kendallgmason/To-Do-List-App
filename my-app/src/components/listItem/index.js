function ListItems ({text, deletedItems, index}) {
    return (
        <>
            <button onClick={() => deletedItems(index) } > 0 </button>
        </>
    );
}

export default ListItems;