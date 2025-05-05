import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import { Link } from "react-router";
import fetcher from "../utils/fetcher";
import { useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error } = useSWR(`https://fakestoreapi.com/products/${id}`, fetcher);
  
  useEffect(() => {
    if (product) {
      localStorage.setItem("lastViewedProduct", JSON.stringify(product));
    }
  }, [product]);
  
  if (error) return <div className="text-red-500">Błąd ładowania danych produktu.</div>;
  if (!product) return <div className="loading loading-spinner text-primary">Ładowanie...</div>;

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 bg-base-200 shadow-xl rounded-xl p-6">
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[400px] object-contain rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-primary mb-4">{product.title}</h1>
          <p className="text-base-content mb-4">{product.description}</p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Cena:</span> ${product.price}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Kategoria:</span> {product.category}
          </p>
          <p className="text-lg mb-6">
            <span className="font-semibold">Ocena:</span> {product.rating?.rate} / 5 ({product.rating?.count} ocen)
          </p>
          <Link to="/products" className="btn btn-outline">
            ← Wróć do listy produktów
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
