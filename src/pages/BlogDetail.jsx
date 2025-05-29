import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  const API_URL = `${process.env.REACT_APP_BASE_API}/api/blogs/${slug}?access_key=${process.env.REACT_APP_CLIENT_ID}`;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await res.json();
        const blogs = data.data || [];
        console.log(blogs)

        setBlog(blogs);
      } catch (err) {
        console.error("Failed to fetch blog", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogs();
    }
  }, [slug, API_URL]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-white text-xl">Loading blog post...</div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-4">Error: {error || 'Blog post not found'}</div>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800 transition-colors">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-14">
      <div className="w-[90%] mx-auto bg-[#111826] rounded-xl shadow-lg overflow-hidden">
        <div className="px-8 pt-8">
          {blog.image ? (
            <div className='flex justify-center items-center'>
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full max-w-2xl h-96 object-fill rounded-xl shadow-md"
              />
            </div>
          ) : (
            <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-6xl mb-4">📖</div>
                <div className="text-lg font-medium">Blog Article</div>
              </div>
            </div>
          )}
        </div>


        <div className="px-8 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Calendar size={18} className="text-blue-600" />
              <span className="font-medium">{formatDate(blog.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={18} className="text-green-600" />
              <span className="font-medium">{blog.time_to_read}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User size={18} className="text-purple-600" />
              <span className="font-medium">The Bot Agency</span>
            </div>
            <button 
              onClick={sharePost}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-all duration-200 hover:bg-blue-50 px-3 py-1 rounded-md"
            >
              <Share2 size={18} />
              <span className="font-medium">Share</span>
            </button>
          </div>
        </div>


        <div className="px-8 pb-8">
          {/* {blog.description && (
            <div className="mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border-l-4 border-blue-500">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
                  Introduction
                </h2>
                <p className="text-lg text-gray-900 leading-relaxed font-medium">
                  {blog.description}
                </p>
              </div>
            </div>
          )} */}


          {blog.content && (
            <div className="prose prose-lg prose-gray max-w-none mb-12">
              <div 
                className="text-white leading-relaxed"
                style={{
                  lineHeight: '1.8',
                }}
                dangerouslySetInnerHTML={{ 
                  __html: blog.content.replace(
                    /<p>/g, '<p class="mb-6 text-xl leading-relaxed">'
                  ).replace(
                    /<h([1-6])>/g, '<h$1 class="font-bold text-4xl text-white mt-8 mb-4">'
                  ).replace(
                    /<ul>/g, '<ul class="mb-6 space-y-2">'
                  ).replace(
                    /<ol>/g, '<ol class="mb-6 space-y-2">'
                  ).replace(
                    /<li>/g, '<li class="text-lg leading-relaxed">'
                  ).replace(
                    /<blockquote>/g, '<blockquote class="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-r-lg my-6 italic text-lg">'
                  )
                }} 
              />
            </div>
          )}


          {blog.keywords && (
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-6 bg-green-500  rounded-full mr-3"></span>
                Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {blog.keywords.split(', ').map((keyword, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    #{keyword.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="pt-8 border-t border-gray-200">
            <Link 
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-all duration-200 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to All Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;