// TODO: Create action creators as defined in tests
function addQuote(quote){
    return { quote, type: "ADD_QUOTE"}
}

function removeQuote(quoteId){
    return { quoteId, type: "REMOVE_QUOTE"}
}

function upvoteQuote(quoteId){
    return { quoteId, type: "UPVOTE_QUOTE"}
}

function downvoteQuote(quoteId){
    return { quoteId, type: "DOWNVOTE_QUOTE"}
}

export {addQuote, removeQuote, upvoteQuote, downvoteQuote}