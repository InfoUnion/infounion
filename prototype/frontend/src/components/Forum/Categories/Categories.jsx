import React, {Component } from "react";
import {connect} from "react-redux"
import {fetchCategories} from 'actions/forum'

class Categories extends Component {
    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        console.log(this.props.categories)
        return;
    }
}

function mapStateToProps({ forum }) {
    return {
        categories: forum.categories
    };
}

export const fetchCategories = () => async dispatch => {
    const res = await axios.get(`https://infounion.nodebb.com//api/`);
    console.log(res.data)
    dispatch({ type: Types.FETCH_CATEGORIES, payload: res.data.categories });
}

const baseState = { categories: [] };

export default (state = baseState, action) => {
    switch (action.type) {
        case Types.FETCH_CATEGORIES:
            return { ...state, categories: action.payload }
        default:
            return state;
    }
}
export default connect(mapStateToProps, { fetchCategories })(Categories);
