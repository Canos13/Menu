import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav className="text-center py-2 bg-dark">
                <div className="container">
                <Link href="/">
                    <a className='text-decoration-none text-white'>
                        <h1>La Patrona🍻​</h1>
                    </a>
                </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
