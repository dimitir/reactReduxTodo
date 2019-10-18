import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/link';





const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return (
        {
            active: ownProps.filter === state.visibilityFilter
        }
    )
}
const mapDispatchProps = (dispatch, ownProps) => {
    return ({
        onClick: () => { dispatch(setVisibilityFilter(ownProps.filter)) }
    })

}


const FilterLink = connect(
    mapStateToProps,
    mapDispatchProps
)(Link);


export default FilterLink;