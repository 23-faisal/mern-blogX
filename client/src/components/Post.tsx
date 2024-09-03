import React, { useEffect, useState } from "react";
import axios from "axios";

interface PostType {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Post = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const url: string = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(url);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div>
        {posts?.map((post: PostType) => (
          <div className="flex md:gap-10 my-4 bg-slate-50 p-2 rounded-md hover:scale-105 transition ease-in duration-50" key={post.id}>
            <div className=" w-full md:w-[30%]">
              <img
                className="w-full h-auto rounded-md object-cover "
                src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"
                alt={post.title}
              />
            </div>
            <div className="w-full md:w-[70%]">
              <h1>{post.title}</h1>
              <div className="flex items-center justify-start gap-10">
                <p>author</p>
                <p>Date</p>
              </div>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
