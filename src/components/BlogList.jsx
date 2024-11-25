import { Link } from "react-router-dom";
import { posts } from "../data/posts";

const BlogList = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">All Blog Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="blog-list-item">
            <Link
              to={`/post/${post.id}`}
              className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300 hover:translate-x-2 hover:shadow-md"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <span className="text-blue-600 text-sm">Read more →</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
