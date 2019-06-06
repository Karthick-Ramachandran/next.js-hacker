import Error from 'next/error';
import Layout from '../components/Layout';
export default class Story extends React.Component {
    static async getInitialProps({ req, res, query }) {
        const storyId = query.id;
        let story;
        try {
            const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
            story = await response.json();

        } catch (error) {
            console.log('error')
            story = null;
        }


        return { story };
    }
    render() {
        const { story } = this.props;
        if (!story) {
            return <Error statusCode={503} />
        }
        return (
            <Layout title={story.title}>
                <div>
                    <h1><a href={story.url}>{story.title}</a></h1>
                    <div><center>
                        <strong className="strings"> {story.comments_count || 0} comments |</strong>
                        <strong className="strings">Published {story.time_ago || "unknown"} |</strong>
                        <strong className="strings">{story.points || 0} Points</strong>
                        <p><b> Story by: <span style={{ color:'teal' }}>{story.user}</span></b></p>

                        </center>
                    </div>

                    <div>
                        <div style={{ borderBottom:'2px solid green', width:'100%', padding:'0', margin:'0' }}/>
                        <h3 style={{ textAlign:'center' }}>Comments</h3>

                        {story.comments.map(comment => {
                            return(
                             <div key={comment.id} className="comment">
                                 <b>{comment.content.replace(/(<([^>]+)>)/ig,"")}</b><br/> <br/>

                                 <span style={{ color:'red' }}>{comment.user}</span> | <span>{comment.time_ago}</span><br/> <br/>
                             </div>
                            );
                        })}
                    </div>
                </div>

                <style jsx>
                    {`
                    h1 {
                        text-align:center;
                        color:black;
                    }
                    a {
                        text-decoration:none;
                        color:blue;
                    }
                    a:hover {
                        text-decoration:underline;
                        color:green;
                    }

                    .strings {
                        display:inline-block;
                        padding:3px;
                    }
                    .comment {
                        padding:4px;
                
                    }
                    `}

                </style>
            </Layout>
        )
    }
}
