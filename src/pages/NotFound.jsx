import { Link } from "react-router";

const NotFound = () => {
    return <>
        <h1>Nie znaleziono strony</h1>
        <Link to="/">Strona główna</Link>
    </>;
}

export default NotFound;