// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreatePost = `subscription OnCreatePost($owner: String!) {
  onCreatePost(owner: $owner) {
    id
    name
    content
    owner
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost($owner: String!) {
  onUpdatePost(owner: $owner) {
    id
    name
    content
    owner
  }
}
`;
export const onDeletePost = `subscription OnDeletePost($owner: String!) {
  onDeletePost(owner: $owner) {
    id
    name
    content
    owner
  }
}
`;
export const onCreateNote = `subscription OnCreateNote($owner: String!) {
  onCreateNote(owner: $owner) {
    id
    title
    content
    owner
  }
}
`;
export const onUpdateNote = `subscription OnUpdateNote($owner: String!) {
  onUpdateNote(owner: $owner) {
    id
    title
    content
    owner
  }
}
`;
export const onDeleteNote = `subscription OnDeleteNote($owner: String!) {
  onDeleteNote(owner: $owner) {
    id
    title
    content
    owner
  }
}
`;
