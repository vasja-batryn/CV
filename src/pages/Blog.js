import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const blogCollection = collection(db, 'blog');

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(blogCollection);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getPosts();
  }, []);

  return (
    <div className="wrapper wrapper_centered flex-col container mx-auto">
      <h3 className="header header_second text-center pb-7 my-10">
        MY <span className="header header_second header_span">BLOG</span>
      </h3>

      {posts.reverse().map((post) => (
        <div key={post.id} className="blog_block">
          <div className="blog_block_text">
            <h3 className="header mt-10">{post.title}</h3>
            <p className="paragraph paragraph_third my-8">{post.description}</p>
          </div>
          {post.img && (
            <img className="blog_block_img" src={post.img} alt="post" />
          )}
        </div>
      ))}
    </div>
  );
};
