import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function FooterTest() {
  return (
    <footer className="bg-[#090509] text-white pt-12 pb-6 px-6 md:px-20">
      <div className=" mx-auto flex flex-col md:flex-row justify-between gap-10">

        <div className='me-10 w-72 h-72'>
          <img src="/images/bot-new-white-logo.png" alt="logo" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[14px]">
          <div>
            <h3 className="text-pink-400 font-semibold mb-3">Services</h3>
            <ul className="space-y-1">
              <li>Marketing Strategies</li>
              <li>Predictive Market Analysis</li>
              <li>Lead Generation</li>
              <li>Branding</li>
              <li>Web Development</li>
              <li>Social Media Management</li>
              <li>Tech Development</li>
              <li>Seo</li>
              <li>Website in 3 days</li>
            </ul>
          </div>


          <div>
            <h3 className="text-pink-400 font-semibold mb-3">Industries</h3>
            <ul className="space-y-1">
              <li>B2B Businesses</li>
              <li>B2C Businesses</li>
              <li>Logistics Businesses</li>
              <li>Saas Company</li>
              <li>Start Up</li>
              <li>B2B Exporter</li>
            </ul>
          </div>


          <div>
            <h3 className="text-pink-400 font-semibold mb-3">Company</h3>
            <ul className="space-y-1">
              <Link to="/about"><li>About Us</li></Link>
              <Link to="/services"><li>Services</li></Link>
              <Link to="/blog"><li>Blog</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
            </ul>
          </div>


          <div>
            <h3 className="text-pink-400 font-semibold mb-3">Follow Us On</h3>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/evangelinglen" target="_blank"
                rel="noopener noreferrer"><FaFacebookF size={30} className="text-white text-lg bg-black p-2 rounded-md " /></a>
              <a href="https://www.instagram.com/evangelingladin/" target="_blank"
                rel="noopener noreferrer"><FaInstagram size={30} className="text-white text-lg bg-black p-2 rounded-md " /></a>
              <a href="https://www.linkedin.com/in/evangelin-gladin-profile/" target="_blank"
                rel="noopener noreferrer"><FaLinkedinIn size={30} className="text-white text-lg bg-black p-2 rounded-md " /></a>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-12 flex border-t gap-2 border-gray-700 pt-4 text-start text-xl text-gray-400">
        <span className='font-bold text-white'>© 2024 TheBot. All rights reserved.</span>
        <div className="">
          <a href="" className="hover:underline">Privacy Policy</a>
          <a href="" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}
