import profileReducer, { deletePost } from "./profileReducer";

let state = {
  posts: [
    { postText: "Lorem Ipsum Lorem Ipsum", id: 1 },
    { postText: "Lorem Lorem Ipsum Ipsum", id: 2 },
    { postText: "Lorem Ipsum Lorem Ipsum", id: 3 },
  ],
};

test("after deleting length of posts should be decremented", () => {
  let action = deletePost(2);
});
