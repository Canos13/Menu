import Navbar from '../components/Navbar';
import Head from 'next/head';

const Layout = ({ children, title }) => {
    
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <main className='container py-4'>
                {children}
            </main>
            <footer className='bg-dark text-light text-center'>
                <div className='container p-3'>
                    <h3>&copy; Sergio Cano Martínez</h3>
                    <p> Todos los derechos reservados. 2000 - {new Date().getFullYear()} </p>
                </div>
            </footer>
        </>
    )
}

export default Layout