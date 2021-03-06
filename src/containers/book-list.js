import React, {Component} from 'react'
import {connect} from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
    renderList(){
        return this.props.books.map((book)=> {
            return(
                <li 
                onClick={()=> this.props.selectBook(book)}
                key={book.title}
                className="list-group-item">
                {book.title}
                </li>
            )
        })
    }

    render(){
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    // Whenever selectBook is called the result should be passed to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)