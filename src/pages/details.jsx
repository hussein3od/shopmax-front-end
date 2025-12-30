import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API_URL from "../api";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`${API_URL}/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-[22px]">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-20 text-[22px] text-red-600">Product not found</div>;
  }
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!Array.isArray(cart)) {
      cart = [];
    }

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div className="min-h-screen bg-[#f9f9fb] py-[40px] px-[20px]">
      <div className="max-w-[800px] mx-auto bg-white p-[30px] rounded-[20px] shadow-lg flex flex-col items-center">
        <div className="w-full h-[350px] overflow-hidden mb-6 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="min-w-[350px] h-full rounded-[15px]"
          />
        </div>

        <h1 className="text-[32px] font-bold mb-3">{product.name}</h1>
        <h2 className="text-[24px] text-green-600 font-semibold mb-3">${product.price}</h2>
        
        <p className="text-[18px] text-[#444] leading-[1.6] mb-6">
          {product.description}
        </p>

        <p className="text-[16px] bg-[#f0f0f0] inline-block px-4 py-1 rounded-[8px]">
          Category: <span className="font-semibold">{product.category}</span>
        </p>
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full bg-green-500 text-white cursor-pointer py-2 rounded-lg c"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;