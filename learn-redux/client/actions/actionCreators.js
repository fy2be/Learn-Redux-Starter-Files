// increment
const increment = (index) => ({
    type: 'INCREMENT_LIKES',
    index
});

// comment
const addComment = (postId, author, comment) => ({
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
});

// remove comment
const removeComment = (postId, index) => ({
    type: 'REMOVE_COMMENT',
    index,
    postId
});

export { increment, addComment, removeComment };