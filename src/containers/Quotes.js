import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
import uuid from 'uuid';


class Quotes extends Component {

  createQuotes = () => {
    return this.props.quotes.map((quote)=>{
    return < QuoteCard key={uuid()} remove={this.props.removeQuote} upvote={this.props.upvoteQuote} downvote={this.props.downvoteQuote} quote={{...quote}} /> 
    })
  }

  render(){
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:
                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.createQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: () => dispatch(removeQuote()),
    upvoteQuote: () => dispatch(upvoteQuote()),
    downvoteQuote: () => dispatch(downvoteQuote())
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
