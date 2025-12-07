const BlogPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch('/data/blogs.json');
                const blogs = await response.json();
                
                const foundPost = blogs.find(b => b.id.toString() === id);
                
                if (foundPost) {
                    setPost(foundPost);
                } else {
                    setError('Post not found');
                }
            } catch (err) {
                console.error("Failed to fetch blog post:", err);
                setError('Failed to load content');
            }
            finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) return <div className="min-h-screen pt-32 text-center">Loading...</div>;
    if (error) return <div className="min-h-screen pt-32 text-center text-red-600">{error}</div>;
    if (!post) return null;

    // --- Polish Fix: Remove first H1 from content & prioritize system date ---
    let displayContent = post.content;
    const firstH1Regex = /^#\s.*(?:\r?\n|$)/; // Matches '# Title' at the beginning of content
    if (displayContent.match(firstH1Regex)) {
        displayContent = displayContent.replace(firstH1Regex, '').trim();
    }
    const displayDate = post.date ? new Date(post.date) : new Date(post.publishDate || Date.now());
    // -------------------------------------------------------------------------

    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <SEOHead 
                title={`${post.title} | TagSpecialist Blog`}
                description={post.excerpt || post.title}
            />
            
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link to="/blogs" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
                        <HiArrowLeft className="mr-2 w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                        <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                            <HiTag className="w-4 h-4" />
                            {post.category || 'Update'}
                        </span>
                        <span className="flex items-center gap-1">
                            <HiCalendar className="w-4 h-4" />
                            {displayDate.toLocaleDateString()}
                        </span>
                        {post.readTime && (
                            <span className="flex items-center gap-1">
                                <HiClock className="w-4 h-4" />
                                {post.readTime}
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
                        {post.title}
                    </h1>
                </motion.div>

                {/* Content - Render Markdown */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-lg prose-blue max-w-none 
                        prose-headings:text-navy-900 prose-headings:font-bold 
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 
                        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                        prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:text-gray-600 prose-li:mb-2
                        prose-strong:text-navy-900 prose-strong:font-bold
                        prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:shadow-lg
                        prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                        hover:prose-a:text-blue-700 transition-all"
                >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {displayContent}
                    </ReactMarkdown>
                </motion.div>
            </article>
        </div>
    );
};

export default BlogPost;
