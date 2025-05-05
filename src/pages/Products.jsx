import { useEffect, useState } from "react";
import fetcher from "../utils/fetcher";
import useSWR from "swr";
import { Link } from "react-router";

const Products = () => {
    const { data, error, isLoading } = useSWR('https://fakestoreapi.com/products', fetcher);
    const [sortMode, setSortMode] = useState('default');

    if (isLoading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Failed to load products.</div>;

    const generateList = (list) => {
        let toRet = [...list];
        if(sortMode === 'price') {
            toRet = toRet.sort((a,b) => a.price-b.price);
        }
        else if(sortMode === 'title'){
            toRet = toRet.sort((a, b) => {
                const nameA = a.title.toUpperCase();
                const nameB = b.title.toUpperCase();
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
              
                return 0;}
            )
        }

        return toRet;
    }
    return (
        <>
            <label className="select">
                <span className="label">Sortowanie</span>
                <select className="select select-primary" value={sortMode}
                onChange={(e) => setSortMode(e.target.value)}>
                    <option value="price">Cena</option>
                    <option value="title">Nazwa</option>
                    <option value="default">Default</option>
                </select>
            </label>
            <ul className="list list-inside space-y-4">
                {generateList(data).map(product => (
                    <li key={product.id} className="list-row grid-cols-none">
                        <Link to={"/products/" + product.id} className="bg-base-200 p-4 rounded flex items-center gap-4 cursor-pointer shadow transition-all duration-200 ease-in-out
    hover:bg-base-300" >
                            <img src={product.image} alt={product.title} className="w-20 h-20 object-contain" />
                            <div>
                                <h2 className="font-bold">{product.title}</h2>
                                <p className="text-sm text-gray-500">${product.price}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
        
      );
  };
  
  export default Products;
  