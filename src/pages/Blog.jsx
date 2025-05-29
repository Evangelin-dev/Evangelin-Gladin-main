import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

const BlogListing = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `${process.env.REACT_APP_BASE_API}/api/blogs/?access_key=${process.env.REACT_APP_CLIENT_ID}`;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await res.json();
        const sortedBlogs = (data.results || []).sort((a, b) => new Date(b.date) - new Date(a.date));

        setBlogs(sortedBlogs);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [API_URL]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading blogs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-red-400 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white py-12">
      <div className="w-full px-14 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog <span className="text-purple-400">Posts</span>
          </h1>
        </div>

        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <article key={blog.slug} className="w-full bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-gray-800">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full p-6 flex items-center justify-center">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-64 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="text-white text-center" style={{ display: blog.image ? 'none' : 'flex' }}>
                      <div>
                        <div className="text-6xl mb-4">📝</div>
                        <div className="text-sm font-medium">Blog Post</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{formatDate(blog.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{blog.time_to_read}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {blog.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {blog.description}
                  </p>

                  <Link
                    to={`/blog/${blog.slug}`}
                    className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    Read more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {blogs.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListing;