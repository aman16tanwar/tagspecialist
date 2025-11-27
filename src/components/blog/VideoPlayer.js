import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiLockClosed, HiPlay, HiClock, HiDownload, HiCode } from 'react-icons/hi';
import { FaYoutube, FaGithub } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';

const VideoPlayer = () => {
  const { id } = useParams();
  const [timeWatched, setTimeWatched] = useState(0);
  const [showPaywall, setShowPaywall] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false); // Check from auth/payment system

  // Sample video data - in production, fetch from API
  const video = {
    id: 1,
    title: "Complete GA4 Server-Side Tracking Setup",
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual
    duration: '15:42',
    freeMinutes: 5,
    description: `Learn how to implement server-side tracking with GA4 and GTM for better data accuracy and privacy compliance. 
    
    In this comprehensive tutorial, we'll cover:
    - Setting up server-side GTM container
    - Configuring GA4 for server-side tracking
    - Implementing proper cookie consent
    - Testing and debugging your setup`,
    chapters: [
      { time: '00:00', title: 'Introduction & Prerequisites' },
      { time: '02:15', title: 'Server Container Setup' },
      { time: '05:00', title: 'GA4 Configuration (Premium)' },
      { time: '08:30', title: 'Cookie Consent Implementation (Premium)' },
      { time: '12:00', title: 'Testing & Debugging (Premium)' },
      { time: '14:30', title: 'Best Practices (Premium)' }
    ],
    resources: [
      { name: 'GTM Container Template', type: 'download', isPremium: true },
      { name: 'GA4 Configuration Guide', type: 'pdf', isPremium: true },
      { name: 'Sample Code', type: 'github', isPremium: false, url: 'https://github.com/...' }
    ],
    relatedVideos: [
      { id: 2, title: 'Advanced GA4 Event Tracking', thumbnail: '/api/placeholder/320/180' },
      { id: 3, title: 'Meta CAPI Integration', thumbnail: '/api/placeholder/320/180' }
    ]
  };

  useEffect(() => {
    // Simulate tracking watch time
    const interval = setInterval(() => {
      setTimeWatched(prev => {
        const newTime = prev + 1;
        // Show paywall after free minutes
        if (newTime >= video.freeMinutes * 60 && !isSubscribed) {
          setShowPaywall(true);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSubscribed, video.freeMinutes]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
              {!showPaywall ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0&modestbranding=1&rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-8 max-w-md"
                  >
                    <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <HiLockClosed className="w-10 h-10 text-gray-900" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Premium Content
                    </h3>
                    <p className="text-gray-400 mb-6">
                      You've watched the free {video.freeMinutes}-minute preview. 
                      Subscribe to access the full tutorial and downloadable resources.
                    </p>
                    
                    <div className="space-y-4">
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform transition-all duration-200 hover:scale-105">
                        Subscribe for $60/month
                      </button>
                      <p className="text-sm text-gray-500">
                        Instant access to all tutorials • Cancel anytime
                      </p>
                    </div>
                  </motion.div>
                </div>
              )}
              
              {/* Progress Bar */}
              {!isSubscribed && !showPaywall && (
                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 p-2">
                  <div className="text-xs text-gray-400 mb-1">
                    Free preview: {formatTime(timeWatched)} / {video.freeMinutes}:00
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000"
                      style={{ width: `${Math.min((timeWatched / (video.freeMinutes * 60)) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Video Info */}
            <div className="mt-6 bg-gray-800 rounded-xl p-6">
              <h1 className="text-2xl font-bold text-white mb-4">{video.title}</h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-2">
                  <HiClock className="w-4 h-4" />
                  Duration: {video.duration}
                </span>
                <span className="flex items-center gap-2">
                  <FaYoutube className="w-4 h-4 text-red-500" />
                  12.5K views
                </span>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 whitespace-pre-line">{video.description}</p>
              </div>

              {/* Chapters */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-white mb-4">Video Chapters</h3>
                <div className="space-y-2">
                  {video.chapters.map((chapter, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-4 p-3 rounded-lg ${
                        chapter.title.includes('Premium') && !isSubscribed
                          ? 'bg-gray-900 opacity-60'
                          : 'bg-gray-700 hover:bg-gray-600 cursor-pointer'
                      }`}
                    >
                      <span className="text-blue-400 font-mono text-sm">{chapter.time}</span>
                      <span className="text-gray-300 flex-1">{chapter.title}</span>
                      {chapter.title.includes('Premium') && !isSubscribed && (
                        <HiLockClosed className="w-4 h-4 text-yellow-500" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resources */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <HiDownload className="w-5 h-5" />
                Resources
              </h3>
              <div className="space-y-3">
                {video.resources.map((resource, index) => (
                  <button
                    key={index}
                    disabled={resource.isPremium && !isSubscribed}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                      resource.isPremium && !isSubscribed
                        ? 'bg-gray-900 opacity-60 cursor-not-allowed'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {resource.type === 'github' ? (
                        <FaGithub className="w-5 h-5 text-gray-400" />
                      ) : resource.type === 'download' ? (
                        <HiDownload className="w-5 h-5 text-gray-400" />
                      ) : (
                        <HiCode className="w-5 h-5 text-gray-400" />
                      )}
                      <span className="text-gray-300">{resource.name}</span>
                    </div>
                    {resource.isPremium && !isSubscribed && (
                      <HiLockClosed className="w-4 h-4 text-yellow-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Premium CTA */}
            {!isSubscribed && (
              <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-xl p-6 border border-blue-700">
                <h3 className="text-lg font-bold text-white mb-2">Get Full Access</h3>
                <ul className="space-y-2 text-sm text-gray-300 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Complete tutorial library</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Download all code & templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Private Discord community</span>
                  </li>
                </ul>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform transition-all duration-200 hover:scale-105">
                  Subscribe - $60/month
                </button>
              </div>
            )}

            {/* Related Videos */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Related Tutorials</h3>
              <div className="space-y-3">
                {video.relatedVideos.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.id}`}
                    className="block group"
                  >
                    <div className="flex gap-3">
                      <div className="w-32 h-20 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={related.thumbnail} 
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors">
                          {related.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;