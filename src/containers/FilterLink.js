import {connect} from 'react-redux';
import {setVisibilityFilter } from '../reducers';
import Link from '../components/link';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFiter
    }
}

const mapDispatchProps = (ownProps, state) => {
    return{
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchProps
)(Link);


export default FilterLink;