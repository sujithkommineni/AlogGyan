import styles from './layout.module.css';
import Navbar from './navbar';

export default function Layout({ children }) {
    return (
        <div className="row">
        <div className="col-10 mx-auto">
            <Navbar />
            <div>{children}</div>
        </div>
        </div>
    );
}