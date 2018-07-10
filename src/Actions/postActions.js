import uuid from 'uuid';
//ADD_POST_ACTION
export const addPost = ({
    title='',
    category='',
    post='',
    createdAt=0,
    id=uuid()
}={})=>({
    type:'ADD_POST',
    post:{
        title,
        category,
        post,
        createdAt,
        id:uuid()
    }
});

//REMOVE_POST_ACTION
export const removePost = ({id}={})=>({
    type:'REMOVE_POST',
    id
});

//EDIT_POST_ACTION
export const editPost = (id, updates)=>({
    type:'EDIT_POST',
    id,
    updates
})
