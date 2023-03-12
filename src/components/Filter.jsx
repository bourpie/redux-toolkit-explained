import { useSelector, useDispatch } from "react-redux"
import { setFilter } from '../redux/slices/filterSlice'

function Filter() {
    const filter = useSelector(
        state => state.productFilter.filter
    );
    const dispatch = useDispatch();
    
    return (
        <div>
            <input 
                onChange={e => 
                    dispatch(setFilter(e.target.value))}
                value={filter}
                placeholder='filter by name'
            />
        </div>
    )
}

export default Filter