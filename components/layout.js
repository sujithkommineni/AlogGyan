import styles from './layout.module.css';
import Navbar from './navbar';

export default function Layout({ children }) {
    return (
        <div className="container">
        <div className="row">
        <div className="mx-auto col-md-10">
            <Navbar />
            <div className="">{children}</div>
        </div>
        </div>
        </div>
    );
}