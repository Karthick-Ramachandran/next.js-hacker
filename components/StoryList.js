import Link from 'next/link';
export default function StoryList({ stories }) {
    return (
        <div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <h2 className="story-title">
                        <a href={story.url}>{story.title}</a>
                    </h2>
                    <div className="story-details">
                        <span>{story.points || 0} Points</span>
                        <Link href={`/story?id=${story.id}`}>
                            <a>{story.comments_count || 0} comments</a>

                        </Link>
                    </div>
                </div>
            ))}

            <style jsx>{`
             .story {

                background:wheat;
                padding:5px;

             }

             .story a {
                 text-decoration:none;
             }
             .story a:hover {
                 color:green;
                text-decoration:underline;
            }
            span {
                font-weight:bold;
                display:inline:block;
                padding:8px;
            }
            `}</style>
        </div>
    )
}
