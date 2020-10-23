export interface User {
  name?: string,
  surname?: string,
  faculty?: string,
  course?: string,
  email: string,
  password: string,
};

export interface Story {
  id: number,
  publicationDate: string,
  story: string,
  storyTitle: string, 
  storyPreview: string,
  authorId: number,
  authorName: string,
  authorSurname: string,
  amountOfLikes: number,
  comments: Comment[],
};

export interface Comment {
  id: number,
  authorId: number,
  authorName: string,
  authorSurname: string,
  publicationDate: string,
  text: string,
  amountOfLikes: number,
}
