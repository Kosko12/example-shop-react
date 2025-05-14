import { priceFormatter } from "../utils/formatters";
import { Link } from "react-router";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

const Home = () => {
  const lastViewedId = localStorage.getItem("lastViewedProduct") ? localStorage.getItem("lastViewedProduct") : null;
  const { data } = useSWR(lastViewedId ? `https://fakestoreapi.com/products/${lastViewedId}` : null, fetcher)
  
    return <>
        <div className="min-h-screen bg-base-100 flex flex-col items-center p-4 gap-4">
          <div className="max-w-2xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Witamy w naszym sklepie!
              </h1>
              <p className="text-lg text-base-content mb-8">
                Oferujemy szeroki wybór produktów w świetnych cenach. Przeglądaj naszą ofertę i znajdź coś dla siebie!
              </p>
              <Link to="/products" className="btn text-lg px-8">
                Przeglądaj produkty
              </Link>
            </div>
          {data && (
            <section className="card bg-base-200 shadow p-4 mb-6">
              <h2 className="text-xl font-semibold mb-2">Ostatnio oglądany produkt</h2>
              <div className="flex items-center gap-4">
                <img src={data.image} alt={data.title} className="w-24 h-24 object-contain" />
                <div>
                  <h3 className="font-medium">{data.title}</h3>
                  <p className="text-sm text-gray-500">{priceFormatter(data.price)}</p>
                  <Link
                    to={`/products/${data.id}`}
                    className="mt-2 inline-block text-blue-600 hover:underline"
                  >
                    Wróć do oglądania
                  </Link>
                </div>
              </div>
            </section>
          )}
        </div>
    </>;
};
  
  export default Home;