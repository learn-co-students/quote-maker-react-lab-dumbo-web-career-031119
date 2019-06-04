


export default (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      const newQuote = state.filter(quote=>{
         return quote.id !== action.quoteId
        })
      return newQuote
    case 'UPVOTE_QUOTE':
      // debugger;
      const newUpvote = state.map((quote)=>{
        if (quote.id === action.quoteId){
          quote.votes++
          return quote
        }
        else{
          return quote
        }}
      )
      return newUpvote
    case 'DOWNVOTE_QUOTE':
      const newDownvote = state.map((quote)=>{
        if ((quote.id === action.quoteId) && (quote.votes>0)){
          quote.votes--
          return quote
        }
        else{
          return quote
        }}
      )
      return newDownvote
    default: 
      return state;
  }
}

