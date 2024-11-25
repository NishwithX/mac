import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { posts } from "../data/posts";

const BlogPost = () => {
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const post = posts.find(p => p.id === parseInt(id));
    if (!post) {
      navigate('/');
      return;
    }

    fetch(post.file)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [id, navigate]);

  return (
    <article className="bg-white rounded-lg shadow-sm p-8">
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      <button
        onClick={() => navigate('/blog')}
        className="mt-8 px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-300 flex items-center gap-2 text-gray-700"
      >
        <span>←</span> Back to Posts
      </button>
    </article>
  );
};

export default BlogPost;
