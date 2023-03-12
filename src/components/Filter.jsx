function Filter({filter, setFilter}) {
    return (
        <div>
            <input 
                onChange={e => setFilter(e.target.value)}
                value={filter}
                placeholder='filter by name'
            />
        </div>
    )
}

export default Filter