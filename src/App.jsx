import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <i className="fas fa-layer-group text-indigo-600 text-2xl mr-2"></i>
                <span className="font-bold text-xl text-gray-800">SoftSell</span>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a href="#features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-indigo-600 cursor-pointer whitespace-nowrap">Features</a>
                <a href="#how-it-works" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-indigo-600 cursor-pointer whitespace-nowrap">How It Works</a>
                <a href="#testimonials" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-indigo-600 cursor-pointer whitespace-nowrap">Testimonials</a>
                <a href="#pricing" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-indigo-600 cursor-pointer whitespace-nowrap">Pricing</a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium border border-indigo-600 hover:bg-indigo-50 mr-3 cursor-pointer !rounded-button whitespace-nowrap">Log In</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 cursor-pointer !rounded-button whitespace-nowrap">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-cover bg-center" style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20abstract%20technology%20background%20with%20soft%20blue%20and%20purple%20gradient%2C%20geometric%20shapes%2C%20floating%20elements%2C%20clean%20design%20with%20space%20for%20text%20on%20the%20left%20side%2C%20professional%20business%20atmosphere&width=1440&height=600&seq=1&orientation=landscape')`,
        height: '600px'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center h-full">
            <div className="w-full md:w-1/2 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Turn Unused Software Licenses Into Revenue
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                SoftSell helps businesses resell unused or excess software licenses securely and effortlessly. Maximize your ROI on digital assets you no longer need.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-indigo-700 shadow-md cursor-pointer !rounded-button whitespace-nowrap">
                  Get License Quote
                </button>
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-md text-base font-medium border border-indigo-600 hover:bg-indigo-50 cursor-pointer !rounded-button whitespace-nowrap">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-indigo-600 text-4xl font-bold mb-2">$2.5M+</div>
              <p className="text-gray-600">Recovered value for our clients</p>
            </div>
            <div className="text-center">
              <div className="text-indigo-600 text-4xl font-bold mb-2">500+</div>
              <p className="text-gray-600">Businesses using our platform</p>
            </div>
            <div className="text-center">
              <div className="text-indigo-600 text-4xl font-bold mb-2">10,000+</div>
              <p className="text-gray-600">Licenses successfully resold</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SoftSell?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform makes it easy to turn unused software licenses into revenue with these powerful features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-shield-alt text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Transactions</h3>
              <p className="text-gray-600">
                All license transfers are securely verified and authenticated to protect both buyers and sellers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Analytics</h3>
              <p className="text-gray-600">
                Get real-time pricing insights and market demand data to maximize your license resale value.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-file-contract text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Legal Compliance</h3>
              <p className="text-gray-600">
                Our platform ensures all transactions comply with software licensing agreements and regulations.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-bolt text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Matching</h3>
              <p className="text-gray-600">
                Our intelligent matching algorithm connects sellers with potential buyers quickly and efficiently.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-wallet text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Escrow Payments</h3>
              <p className="text-gray-600">
                Funds are held securely until license transfers are verified and completed to everyone's satisfaction.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-headset text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Our team of licensing experts is available to help with any questions or issues throughout the process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How SoftSell Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes it easy to turn unused licenses into cash in just a few simple steps.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-indigo-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold shadow-lg">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">List Your Licenses</h3>
                <p className="text-gray-600 text-center">
                  Upload details about your unused software licenses to our secure platform.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold shadow-lg">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Get Matched</h3>
                <p className="text-gray-600 text-center">
                  Our system matches your licenses with interested buyers based on market demand.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold shadow-lg">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Secure Transfer</h3>
                <p className="text-gray-600 text-center">
                  We facilitate the secure transfer of licenses following all legal requirements.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold shadow-lg">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Get Paid</h3>
                <p className="text-gray-600 text-center">
                  Receive payment directly to your account once the transfer is complete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from businesses that have successfully recovered value from their unused software licenses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Professional%20business%20woman%20with%20short%20dark%20hair%2C%20business%20attire%2C%20smiling%20confidently%2C%20headshot%20portrait%20with%20neutral%20background%2C%20high%20quality%20professional%20photo&width=100&height=100&seq=2&orientation=squarish" 
                    alt="Sarah Johnson" 
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">CTO, TechGrowth Inc.</p>
                </div>
              </div>
              <div className="mb-4 text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-600 italic">
                "SoftSell helped us recover over $50,000 from enterprise licenses we weren't using after downsizing. The process was incredibly smooth and secure."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Professional%20business%20man%20with%20glasses%2C%20business%20suit%2C%20confident%20expression%2C%20headshot%20portrait%20with%20neutral%20background%2C%20high%20quality%20professional%20photo&width=100&height=100&seq=3&orientation=squarish" 
                    alt="David Chen" 
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">David Chen</h4>
                  <p className="text-sm text-gray-600">CFO, Innovate Solutions</p>
                </div>
              </div>
              <div className="mb-4 text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <p className="text-gray-600 italic">
                "As a CFO, I'm always looking for ways to optimize our software spend. SoftSell not only helped us sell unused licenses but also find discounted ones for new projects."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Professional%20business%20woman%20with%20blonde%20hair%2C%20business%20casual%20attire%2C%20friendly%20smile%2C%20headshot%20portrait%20with%20neutral%20background%2C%20high%20quality%20professional%20photo&width=100&height=100&seq=4&orientation=squarish" 
                    alt="Emily Rodriguez" 
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Emily Rodriguez</h4>
                  <p className="text-sm text-gray-600">IT Director, Global Retail</p>
                </div>
              </div>
              <div className="mb-4 text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-600 italic">
                "After a merger left us with duplicate software licenses, SoftSell helped us recover nearly $100,000 in value. Their legal team made the compliance process painless."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
              <div className="md:w-0 md:flex-1">
                <h2 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">
                  Ready to unlock the value of your unused licenses?
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-indigo-100">
                  Join hundreds of businesses already saving money and generating revenue through SoftSell.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:ml-8">
                <div className="rounded-md shadow">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 cursor-pointer !rounded-button whitespace-nowrap">
                    Get Started Free
                  </button>
                </div>
                <div className="mt-3 text-center text-sm text-indigo-100">
                  No credit card required. 14-day free trial.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <i className="fas fa-layer-group text-indigo-400 text-2xl mr-2"></i>
                <span className="font-bold text-xl">SoftSell</span>
              </div>
              <p className="text-gray-400 mb-4">
                The secure marketplace for software license resale. Turn unused licenses into revenue.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
              <form onSubmit={handleSubmit}>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="px-4 py-2 w-full rounded-l-md text-gray-900 text-sm border-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-r-md text-sm font-medium hover:bg-indigo-700 cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              &copy; 2025 SoftSell. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );





  

  
}

export default App
