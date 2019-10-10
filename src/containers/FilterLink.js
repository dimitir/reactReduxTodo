import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/link';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFiter
})

const mapDispatchProps = (dispatch, ownProps) => {
    return ({ onClick: () => {} })

}

// dispatch(setVisibilityFilter(ownProps.filter))

const FilterLink = connect(
    mapStateToProps,
    mapDispatchProps
)(Link);


export default FilterLink;