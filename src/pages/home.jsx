import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import Header from "../components/header";
import Container from "../components/container";
import { useEffect, useState } from "react";
import API_URL from "../api";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { id: "All", label: "All" },
    { id: "Electronics", label: "Electronics" },
    { id: "Clothes", label: "Clothing" },
    { id: "Home", label: "Home" },
  ];

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_URL}/products`);
      const data = await res.json();

      if (Array.isArray(data)) {
        setProducts(data);
      } else if (data && typeof data === "object") {
        setProducts([data]);
      } else {
        setProducts([]);
      }
    } catch (err) {
      console.error(err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = Array.isArray(products)
    ? products.filter((p) => {
        const matchesTab = activeTab === "All" || p.category === activeTab;
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
        return matchesTab && matchesSearch;
      })
    : [];

  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!Array.isArray(cart)) cart = [];

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <>
      <Header />

      <Container>
        <main className="w-[500px] text-center m-auto mt-[70px] max-[500px]:w-full">
          <h1 className="text-[45px] mb-[25px] font-bold">Products</h1>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-[15px] bg-[#ededed] py-3 px-5 pl-10 text-[18px] outline-none shadow-[2px_2px_4px_0px_#adadadba] max-[500px]:w-full"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <LuSearch className="absolute top-[16px] left-[11px] text-[20px] text-[#767676]" />
          </div>

          <div className="mt-[25px] flex items-center max-[415px]:justify-start justify-center gap-4 flex-nowrap overflow-x-auto md:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tabs.map((tab) => (
              <p
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-[8px] px-[12px] text-[19px] rounded-[8px] cursor-pointer transition
                  ${
                    activeTab === tab.id
                      ? "bg-blue-500 text-white"
                      : "bg-[#f7f7f9] text-black hover:bg-gray-200"
                  }`}
              >
                {tab.label}
              </p>
            ))}
          </div>
        </main>

        <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {loading ? (
            <p className="text-center col-span-full">Loading...</p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-center col-span-full">No products found</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group text-blue-500 transition-all duration-300 hover:mt-0 mt-2 inline-block"
              >
                <div className="product bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                  <Link to={`/details/${product.id}`} className="flex flex-col items-center">
                    <div className="w-full h-48 mb-3 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full rounded group-hover:[transform:rotate(-5deg)] group-hover:scale-110 transition-all duration-300"
                      />
                    </div>
                    <div className="info text-center">
                      <h1 className="font-bold text-lg">{product.name}</h1>
                      <h2 className="text-gray-700 mt-1">${product.price}</h2>
                    </div>
                  </Link>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-3 w-full bg-green-500 text-white cursor-pointer py-2 rounded-lg"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
    </>
  );
}

export default Home;