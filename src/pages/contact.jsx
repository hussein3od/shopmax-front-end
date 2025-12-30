import Header from "../components/header"
function Contact() {
  return (
    <>
        <Header />
        <div className="min-h-screen bg-[#f7f7f9] flex justify-center items-center px-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
            <h1 className="text-3xl font-bold text-center mb-2">Contact Us</h1>
            <p className="text-center text-gray-600 mb-6">
            We’d love to hear from you! Fill out the form below.
            </p>

            <form className="space-y-4">
            <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-black"
                placeholder="Your name"
                />
            </div>

            <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-black"
                placeholder="Your email"
                />
            </div>

            <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                className="w-full border border-gray-300 rounded-lg p-3 outline-none h-32 resize-none focus:border-black"
                placeholder="Write your message here..."
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
                Send Message
            </button>
            </form>
        </div>
        </div>
    </>
  );
}

export default Contact;