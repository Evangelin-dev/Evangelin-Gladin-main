// import React, { useState } from 'react';
// import { Calendar, Clock, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// export default function CaseStudiesPage() {
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const caseStudies = [
//     {
//       id: 1,
//       title: "Turning Challenges into Opportunities: Rajog GroundScrew's International Growth Story",
//       description: "We identified an untapped opportunity in the international market where demand for ground screw products was significantly higher. Instead of targeting Indian customers, we repositioned their business to cater to international clients.",
//       category: "International Expansion",
//       date: "1/8/2025",
//       readTime: "20 min",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
//       results: {
//         revenue: "300%",
//         reach: "12 Countries",
//         leads: "450%"
//       },
//       tags: ["B2B", "International", "Manufacturing"]
//     },
//     {
//       id: 2,
//       title: "AI-Powered Customer Service Revolution: TechCorp's Digital Transformation",
//       description: "Implementing advanced chatbot solutions and AI-driven customer support systems resulted in 75% reduction in response time and 90% customer satisfaction improvement.",
//       category: "AI Solutions",
//       date: "25/7/2025",
//       readTime: "15 min",
//       image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
//       results: {
//         revenue: "250%",
//         reach: "24/7 Support",
//         leads: "320%"
//       },
//       tags: ["AI", "Automation", "Customer Service"]
//     },
//     {
//       id: 3,
//       title: "Local Business Goes Global: Traditional Manufacturer's Digital Success",
//       description: "Transforming a traditional manufacturing business through digital marketing strategies, resulting in international client acquisition and sustainable growth.",
//       category: "Digital Marketing",
//       date: "18/7/2025",
//       readTime: "12 min",
//       image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
//       results: {
//         revenue: "400%",
//         reach: "Global",
//         leads: "500%"
//       },
//       tags: ["Traditional", "Manufacturing", "Global"]
//     },
//     {
//       id: 4,
//       title: "E-commerce Optimization: Online Retailer's Conversion Breakthrough",
//       description: "Strategic UX improvements and conversion optimization techniques helped online retailer achieve record-breaking sales and customer retention rates.",
//       category: "E-commerce Growth",
//       date: "10/7/2025",
//       readTime: "18 min",
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
//       results: {
//         revenue: "180%",
//         reach: "Pan-India",
//         leads: "280%"
//       },
//       tags: ["E-commerce", "UX", "Conversion"]
//     },
//     {
//       id: 5,
//       title: "Startup to Scale-up: SaaS Company's Growth Acceleration",
//       description: "Comprehensive growth strategy implementation for SaaS startup, focusing on product-market fit and scalable customer acquisition channels.",
//       category: "SaaS Growth",
//       date: "3/7/2025",
//       readTime: "22 min",
//       image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
//       results: {
//         revenue: "600%",
//         reach: "10+ Industries",
//         leads: "750%"
//       },
//       tags: ["SaaS", "Startup", "Scale-up"]
//     }
//   ];

//   const categories = [
//     { id: 'all', name: 'All Case Studies', count: caseStudies.length },
//     { id: 'international', name: 'International', count: 1 },
//     { id: 'ai', name: 'AI Solutions', count: 1 },
//     { id: 'digital', name: 'Digital Marketing', count: 1 },
//     { id: 'ecommerce', name: 'E-commerce', count: 1 },
//     { id: 'saas', name: 'SaaS', count: 1 }
//   ];

//   const filteredCases = selectedCategory === 'all' 
//     ? caseStudies 
//     : caseStudies.filter(study => 
//         study.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
//         study.category.toLowerCase().replace(/[^a-z]/g, '').includes(selectedCategory.toLowerCase())
//       );

//   return (
//     <div className="min-h-screen bg-gradient-to-br  from-slate-900 via-slate-800 to-slate-900">
//       <div className="relative overflow-hidden py-10">
//         <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-600/20 to-blue-600/20"></div>
//         <div className="max-w-7xl mx-auto px-4 py-20 relative">
//           <div className="text-center">
//             <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
//               The Bot Case Studies
//             </h1>
//             <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
//               Discover how we've transformed businesses across industries through innovative automation, AI solutions, and strategic digital growth initiatives.
//             </p>
//             <div className="flex items-center justify-center space-x-12 text-slate-300">
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-white">150+</div>
//                 <div className="text-sm text-slate-400">Projects Delivered</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-white">₹500Cr+</div>
//                 <div className="text-sm text-slate-400">Revenue Impact</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-white">95%</div>
//                 <div className="text-sm text-slate-400">Success Rate</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="flex flex-wrap gap-3 mb-12 justify-center">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
//                 selectedCategory === category.id
//                   ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-purple-500/25'
//                   : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-purple-500 hover:text-white hover:shadow-md'
//               }`}
//             >
//               {category.name} ({category.count})
//             </button>
//           ))}
//         </div>

//         <div className="space-y-8">
//           {filteredCases.map((study, index) => (
//             <div
//               key={study.id}
//               className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group overflow-hidden"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <div className="flex flex-col lg:flex-row">
//                 <div className="lg:w-80 relative overflow-hidden">
//                   <img
//                     src={study.image}
//                     alt={study.title}
//                     className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-pink-900/30 opacity-60"></div>
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
//                       {study.category}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex-1 p-8">
//                   <div className="flex items-center text-sm text-slate-400 mb-4">
//                     <Calendar className="w-4 h-4 mr-2" />
//                     <span className="mr-6">{study.date}</span>
//                     <Clock className="w-4 h-4 mr-2" />
//                     <span>{study.readTime}</span>
//                   </div>

//                   <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
//                     {study.title}
//                   </h3>
                  
//                   <p className="text-slate-300 mb-6 leading-relaxed text-lg">
//                     {study.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {study.tags.map((tag, tagIndex) => (
//                       <span
//                         key={tagIndex}
//                         className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full border border-slate-600 hover:border-purple-500 transition-colors"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <div className="flex space-x-6">
//                       <div className="text-center">
//                         <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
//                           {study.results.revenue}
//                         </div>
//                         <div className="text-xs text-slate-400">Growth</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
//                           {study.results.reach}
//                         </div>
//                         <div className="text-xs text-slate-400">Reach</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
//                           {study.results.leads}
//                         </div>
//                         <div className="text-xs text-slate-400">Leads</div>
//                       </div>
//                     </div>

//                     <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group">
//                       <span className="flex items-center">
//                         Read more
//                         <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-20 text-center">
//           <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 border border-slate-700 relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-600/10 to-blue-600/10"></div>
//             <div className="relative">
//               <h2 className="text-4xl font-bold text-white mb-4">
//                 Ready to Write Your Success Story?
//               </h2>
//               <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
//                 Join the businesses above who've transformed their operations with our innovative solutions.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
//                 <Link to="/contact">
//                   Start Your Project
//                 </Link>
//                 </button>
//                 <button className="border-2 border-purple-500 text-purple-400 font-semibold py-4 px-8 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105">
//                 <Link to="/services">
//                   View All Services
//                 </Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react'

function CaseStudies() {
  return (
    <div>
      
    </div>
  )
}

export default CaseStudies
