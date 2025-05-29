import { useEffect, useState } from "react";
import { Users } from "lucide-react"; // Add lucide-react if not installed
import { Link } from "react-router-dom";

export default function QuizPopup() {
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    if (showQuiz ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showQuiz]);

  return (
    <>
      <div className="fixed bottom-16 right-8 z-50 flex flex-col gap-4">
         <div className="group relative">
          <div className="fixed bottom-44 right-12 z-50 flex flex-col gap-4">
         <Link to="/quiz-dashboard"
          style={{ animationDelay: '0.5s' }}
        >
          <Users size={40} className="rounded-full shadow-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-500 animate-float ring-2 ring-white ring-opacity-20 hover:ring-opacity-50 hover:scale-110" />
        </Link>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
              Quiz Dashboard
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>
          </div>
       </div>
          
         </div>

        <button
          onClick={() => setShowQuiz(true)}
          className="relative p-6 rounded-full shadow-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 transition-all duration-500 animate-float ring-2 ring-white ring-opacity-30 hover:ring-opacity-60"
        >
          <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-green-400 animate-ping"></span>
          <span className="text-3xl text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.9)]">Growth test</span>
        </button>
      </div>

      {showQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative w-[95%] max-w-[600px] rounded-lg shadow-lg">
            <button
              onClick={() => setShowQuiz(false)}
              className="absolute top-32 right-10 sm:top-10 sm:right-14 w-8 h-8 bg-red-500 text-white rounded-full text-xl font-bold flex items-center justify-center shadow-lg z-10 hover:bg-red-600 transition-colors"
            >
              &times;
            </button>

            <iframe
              src="https://bussiness-quiz-app.vercel.app/"
              title="Quiz App"
              className="w-full h-[75vh] sm:h-[400px] border-none rounded-lg"
              scrolling="no"
            />
          </div>
        </div>
      )}


      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}