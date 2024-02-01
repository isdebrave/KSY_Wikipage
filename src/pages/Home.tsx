import React from "react";
import { Link, useLocation } from "react-router-dom";

import { offset } from "../db/data";
import Pagination from "../components/Pagination";
import Container from "../components/Container";
import usePosts from "../hooks/usePosts";

const Home = () => {
  const { search } = useLocation();

  const page = new URLSearchParams(search).get("page") ?? "1";

  const start = (+page - 1) * offset;
  const end = start + offset;
  const posts = usePosts();
  const slicedPosts = posts.data.slice(start, end);

  return (
    <Container>
      <Pagination
        hasPrevPage={start > 0}
        hasNextPage={end < posts.data.length}
      />
      {slicedPosts.map((post) => (
        <div key={post.id} className="space-y-3">
          <Link to={`/post/${post.id}`}>
            <div className="my-2 p-4 mx-auto w-full rounded-xl bg-slate-400">
              {post.title}
            </div>
          </Link>
        </div>
      ))}
    </Container>
  );
};

export default Home;
