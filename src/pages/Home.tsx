import React from "react";
import { Link, useLocation } from "react-router-dom";

import data, { offset } from "../db/data";
import Pagination from "../components/Pagination";
import Container from "../components/Container";

const Home = () => {
  const { search } = useLocation();

  const page = new URLSearchParams(search).get("page") ?? "1";

  const start = (+page - 1) * offset;
  const end = start + offset;
  const posts = data.slice(start, end);

  return (
    <Container>
      <Pagination hasPrevPage={start > 0} hasNextPage={end < data.length} />
      {posts.map((post) => (
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
