import { Link } from "react-router";

const PageWrapper = ({children}) => {
    return <>
        <div className="w-screen h-screen">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">Example shop</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </div>
            </div>
            <main className="flex-1 p-4">{children}</main>
        </div>
    </>;
}

export default PageWrapper;