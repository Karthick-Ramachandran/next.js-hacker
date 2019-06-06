
import Link from 'next/link';
import fetch from 'isomorphic-fetch';

import Error from 'next/error';
import Storylist from '../components/StoryList';
import Layout from '../components/Layout';
export default class index extends React.Component {
    static async getInitialProps({req, res, query}) {
      let stories;
      console.log(query);
      let page;
        try {
            page = Number(query.page) || 1;
            const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
             stories = await response.json();
             console.log(query);

        } catch (error) {
            console.log('error')
            stories =[];
        }
  

   return {page, stories};
    }
    render() {
        const { stories, page } = this.props;
        if(stories.length === 0) {
            return <Error statusCode={503}></Error>
        }
        return (
            <Layout title="Hacker React">
                 <div>
                     <Storylist stories={stories}/>

                     <Link href={`/?page=${page + 1}`}><a className="footer">Next Page {page + 1}</a></Link>
                 </div>
       <style>
           {`
           .footer {
              text-align:center;
               display:block;
               padding:20px;
               background:#EF6437;
               border-radius:19px;
               color:white;
               text-decoration:none;
               margin:10px;
               margin-bottom:30px;
           }
           `}
       </style>
            </Layout>
        )
    }
}
