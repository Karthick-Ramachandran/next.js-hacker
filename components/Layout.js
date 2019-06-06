import Link from 'next/link';
import Head from 'next/head';

export default function Layout({title, children}) {
    
    return (
        <div>
            <Head>
        <title>{title}</title>
    </Head>
    <div className="nav">
            <h2 className="link"> Hacker news with React and Next</h2>
            </div>
            {children}

            <style jsx> {`
            
            h2 {
                color:white; 
                text-align:center;
                text-decoration:none;

            }
            .nav {
                background:#EF6437;
                margin-top:0;
                padding:3px;
            }
            `}

            </style>
        </div>
    )
}
