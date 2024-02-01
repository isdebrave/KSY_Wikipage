import { create } from "zustand";

import data, { dataType } from "../db/data";

interface postsStore {
  data: dataType[];
  addData: (post: dataType) => void;
  updateData: (post: dataType) => void;
}

const usePosts = create<postsStore>((set) => ({
  data,
  addData: (post) => set(({ data }) => ({ data: [post, ...data] })),
  updateData: (post) =>
    set(({ data }) => ({
      data: data.map((item) => {
        if (item.id === post.id) {
          return post;
        }

        return item;
      }),
    })),
}));

export default usePosts;
