/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  name: string,
  content?: string | null,
};

export type UpdatePostInput = {
  id: string,
  name?: string | null,
  content?: string | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type CreateNoteInput = {
  id?: string | null,
  title: string,
  content?: string | null,
};

export type UpdateNoteInput = {
  id: string,
  title?: string | null,
  content?: string | null,
};

export type DeleteNoteInput = {
  id?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  content?: ModelStringFilterInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelNoteFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  content?: ModelStringFilterInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost:  {
    __typename: "Post",
    id: string,
    name: string,
    content: string | null,
    owner: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost:  {
    __typename: "Post",
    id: string,
    name: string,
    content: string | null,
    owner: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
};

export type DeletePostMutation = {
  deletePost:  {
    __typename: "Post",
    id: string,
    name: string,
    content: string | null,
    owner: string | null,
  } | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
};

export type CreateNoteMutation = {
  createNote:  {
    __typename: "Note",
    id: string,
    title: string,
    content: string | null,
    owner: string | null,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
};

export type UpdateNoteMutation = {
  updateNote:  {
    __typename: "Note",
    id: string,
    title: string,
    content: string | null,
    owner: string | null,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
};

export type DeleteNoteMutation = {
  deleteNote:  {
    __typename: "Note",
    id: string,
    title: string,
    content: string | null,
    owner: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost:  {
    __typename: "Post",
    id: string,
    name: string,
    content: string | null,
    owner: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      name: string,
      content: string | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote:  {
    __typename: "Note",
    id: string,
    title: string,
    content: string | null,
    owner: string | null,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      title: string,
      content: string | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  owner: string,
};

export type OnCreatePostSubscription = {
  onCreatePost:  {
    __typename: "Post",
    id: string,
    name: string,
    content: string | null,
    owner: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  owner: string,
};

export type OnUpdatePostSubscription = {
  onUpdatePost:  {
    __typename: "Post",
    id: string,
    name: string,
    content: string | null,
    owner: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  owner: string,
};

export type OnDeletePostSubscription = {
  onDeletePost:  {
    __typename: "Post",
    id: string,
    name: string,
    content: string | null,
    owner: string | null,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  owner: string,
};

export type OnCreateNoteSubscription = {
  onCreateNote:  {
    __typename: "Note",
    id: string,
    title: string,
    content: string | null,
    owner: string | null,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  owner: string,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote:  {
    __typename: "Note",
    id: string,
    title: string,
    content: string | null,
    owner: string | null,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  owner: string,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote:  {
    __typename: "Note",
    id: string,
    title: string,
    content: string | null,
    owner: string | null,
  } | null,
};
