import { useState } from 'react';
import { ChevronRight, ShoppingBag, Truck, Lock, Star, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from "react-router-dom";
import Background from "../assets/back.png"
import cat1 from "../assets/cat1.jpg"
import cat2 from "../assets/cat2.webp"
import cat3 from "../assets/cat3.jpeg"
import Logo from "../assets/logo.png"

function Landing() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    { id: 1, name: 'Premium Collection', price: '$89.99', image: cat1, category: 'Best Seller', rating: 4.8 },
    { id: 2, name: 'Exclusive Series', price: '$129.99', image: cat2, category: 'Popular', rating: 4.9 },
    { id: 3, name: 'Signature Line', price: '$159.99', image: cat3, category: 'Pro Choice', rating: 4.7 },
  ];

  const stats = [
    { label: 'Active Customers', value: '50K+', icon: Users },
    { label: 'Successful Orders', value: '100K+', icon: TrendingUp },
    { label: 'Customer Rating', value: '4.9/5', icon: Star },
    { label: 'Award Winning', value: '15+', icon: Award },
  ];

  const benefits = [
    { icon: Truck, title: 'Fast Delivery', desc: '24-48 hour shipping worldwide' },
    { icon: Lock, title: 'Secure Payment', desc: 'SSL encrypted & PCI compliant' },
    { icon: ShoppingBag, title: '30-Day Returns', desc: 'Hassle-free return policy' },
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold text-gray-900">ShopMax</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-gray-600 hover:text-blue-600 transition">Products</a>
              <a href="#products" className="text-gray-600 hover:text-blue-600 transition">Categories</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
            </div>
            <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200">
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
                  ✨ Latest Trends & Exclusive Offers
                </span>
              </div>
              
              <h1 className="max-[500px]:text-[25px] text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover <span className="text-blue-600">Premium</span> Shopping
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-md">
                Experience next-generation shopping with curated collections, fast delivery, and unbeatable prices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/login" className="group px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
                  Shop Now
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#about" className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 cursor-pointer text-center">
                  Explore More
                </a>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">Trusted by millions worldwide</p>
                <div className="flex gap-6 flex-wrap">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">50K+</div>
                    <div className="text-xs text-gray-600">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">99.9%</div>
                    <div className="text-xs text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 hidden lg:flex items-center justify-center mt-[-80px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl"></div>
              <img src={Background} className="relative w-full h-full rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-[60px] bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ShopMax</h2>
            <p className="text-lg text-gray-600">Industry-leading service with proven reliability</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border flex flex-col items-center md:items-start border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <benefit.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-[60px] bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600">Find what you love in our curated collections</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wider">
                    {product.category}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{product.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({Math.floor(Math.random() * 200) + 50} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <button
                      className={`p-3 rounded-lg transition-all duration-300 ${
                        hoveredProduct === product.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Shop?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of satisfied customers and discover your new favorites today.</p>
          <Link to="/login" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
            Start Shopping Now
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={Logo} className="w-10 h-10 rounded-lg" />
                <span className="font-bold text-white text-lg">ShopMax</span>
              </div>
              <p className="text-sm">Your destination for premium shopping with exceptional service.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">All Products</a></li>
                <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition">Sale Items</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Track Order</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
            <p>&copy; 2025 ShopMax. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;