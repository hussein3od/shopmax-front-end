import React from 'react';
import Header from "../components/header"
import landing from "../assets/landing.jpeg"
import TeamMate1 from "../assets/sulaymaniyah.jpg"
import TeamMate2 from "../assets/young.jpg"
import TeamMate3 from "../assets/aon.jpg"
import TeamMate4 from "../assets/zawraa.jpg"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase">About Us</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight">We build delightful shopping experiences</h2>
            <p className="mt-4 text-gray-600">ShopMax is focused on bringing curated products to people who care about quality and design. We combine thoughtful curation, fast delivery and top-notch support to make shopping simple and enjoyable.</p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold">120k+</div>
                <div className="text-sm text-gray-500">Customers</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-sm text-gray-500">Products</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm text-gray-500">Customer satisfaction</div>
              </div>
            </div>
          </div>

          <div className="h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <img src={landing} alt="Team" className="w-full h-full object-cover" />
          </div>
        </section>

        <section className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-gray-600">Make online shopping feel personal again — high quality, thoughtfully selected items and service you can trust.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Our Values</h3>
            <ul className="mt-3 text-gray-600 space-y-2">
              <li>Customer-first thinking</li>
              <li>Quality over quantity</li>
              <li>Fast, transparent delivery</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Sustainability</h3>
            <p className="mt-3 text-gray-600">We partner with brands that care about materials and packaging — small steps, big impact.</p>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-bold">Meet the team</h3>
          <p className="text-gray-500 mt-2">A small, focused team building the future of shopping.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Hussein in Sulaymaniyah', role: 'Founder & CEO', img:TeamMate1},
              { name: 'Hussein is Young', role: 'Product', img:TeamMate2},
              { name: 'Hussein in Aon', role: 'Engineering', img:TeamMate3},
              { name: 'Hussein in Zawraa', role: 'Customer Success', img:TeamMate4},
            ].map((person) => (
              <div key={person.name} className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-3 font-semibold">{person.name}</div>
                <div className="text-sm text-gray-500">{person.role}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-gradient-to-r from-blue-50 to-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">Want to partner with us?</h3>
            <p className="text-gray-600 mt-2">We’re always looking for great brands and partners. Get in touch to explore opportunities.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="/contact" className="inline-block px-5 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700">Contact us</a>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500 pb-12">
          © {new Date().getFullYear()} ShopMax. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
