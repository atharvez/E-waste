import Link from 'next/link';
import Head from 'next/head';

export default function Layout({children}) {
    return (
        <div className='min-h-screen bg-white flex flex-col'>
            <Head>
                <title>E waste website</title>
                <link rel='icon' href='favicon.ico'/>
            </Head>
            <main>
                <div>
                    {children}
                </div>
            </main>
        </div>
    );
}