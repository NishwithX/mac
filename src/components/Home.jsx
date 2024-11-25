import { Link } from "react-router-dom";
import { posts } from "../data/posts";

const Home = () => {
  const recentPosts = [...posts].sort((a, b) =>
    new Date(b.date) - new Date(a.date)
  ).slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Hello World</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">Recent Blog Posts</h2>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              to={`/post/${post.id}`}
              key={post.id}
              className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300 hover:translate-x-2 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <span className="text-blue-600 text-sm">Read more →</span>
            </Link>
          ))}
        </div>
        <Link
          to="/blog"
          className="block w-fit mx-auto mt-8 px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
        >
          View All Posts
        </Link>
      </section>
    </div>
  );
};

export default Home;
