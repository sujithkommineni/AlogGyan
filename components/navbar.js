import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/images/algogyan_vector.svg';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/"><Image src={Logo} alt="AlgoGyan logo" width="auto" height={70}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse custom" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}