import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeItem = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    updateCart(newCart);
  };

  const increaseQty = (id) => {
    const newCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(newCart);
  };

  const decreaseQty = (id) => {
    const newCart = cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0);

    updateCart(newCart);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <>
      <Header className="shadow-[0_6px_10px_-2px_rgba(0,0,0,0.25)]" />
      <div className="max-w-[1000px] mx-auto p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Cart</h1>

        {cart.length === 0 ? (
            <div className="text-center">
            <p className="text-xl mb-4">Your cart is empty</p>
            <Link to="/home" className="text-blue-500 underline">
                Go shopping
            </Link>
            </div>
        ) : (
            <>
      <div className="flex flex-col gap-4">
        {cart.map(item => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded shadow"
        >
          <img
          src={item.image}
          alt={item.name}
          className="w-full sm:w-[100px] sm:h-[100px] object-cover rounded"
          />

          <div className="flex-1 text-left">
          <h2 className="text-base md:text-lg font-semibold max-[640px]:text-[24px]">{item.name}</h2>
          <p className="text-gray-600  max-[640px]:text-[20px]">${item.price}</p>
          </div>

          <div className="mt-3 sm:mt-0 flex items-center gap-2">
          <button
            onClick={() => decreaseQty(item.id)}
            className="px-3 py-1 bg-gray-200 rounded cursor-pointer"
          >
            -
          </button>
          <span className="min-w-[24px] text-center">{item.quantity}</span>
          <button
            onClick={() => increaseQty(item.id)}
            className="px-3 py-1 bg-gray-200 rounded cursor-pointer"
          >
            +
          </button>
          </div>

          <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 mt-3 sm:mt-0 sm:ml-4 cursor-pointer"
          >
          Remove
          </button>
        </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h2 className="text-2xl font-bold">
                Total: <span className="text-blue-800">${totalPrice.toFixed(2)}</span>
                </h2>

        <div className="flex gap-4">
                <button
                    onClick={clearCart}
                    className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
                >
                    Clear Cart
                </button>

                <button className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer">
                    Checkout
                </button>
                </div>
            </div>
            </>
        )}
        </div>
    </>
  );
}

export default Cart;