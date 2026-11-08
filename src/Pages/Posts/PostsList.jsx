import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Producttwo from "../Products/Producttwo";
import Productslayout from "../../layout/Products/Productslayout";
import { Link } from "react-router";

const PostsList = () => {
  const [posts, setPosts] = useState({
    loading: true,
    error: "",
    data: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/posts");
        const data = await res.json();
        setPosts({
          loading: false,
          error: "",
          data: [...data],
        });
      } catch (error) {
        setPosts({
          loading: false,
          error: error.message,
          data: [],
        });
      }
    })();
  }, []);

  if (Posts.loading) {
    return (
      <div className="flex justify-center items-center my-4">
        <FaSpinner className="animate-spin" size={44} />
      </div>
    );
  }
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {products.data.map((post) => {
        return (
          <div className="w-full max-w-[300px] flex flex-wrap justify-center items-center gap-3 p-3 shadow-lg rounded-lg">
            <h1 className="text-xl text-ellipsis">{post.title}</h1>
            <Link
              className="w-full p-3 bg-blue-500 text-white text-center"
              to={`/products/${post.id}`}
            >
              Read-more
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PostsList;
