import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function FooterTest() {
  return (
    <footer className="bg-[#090509] text-white pt-12 pb-6 px-6 md:px-20">
      <div className=" mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="me-10 w-72 h-72 group">
          <img
            src="/images/bot-new-white-logo.png"
            alt="logo"
            className="w-full h-full object-contain transition-all duration-500 ease-in-out group-hover:contrast-[50%] group-hover:brightness-[0.7]"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-[14px]">
          <div className='flex flex-col'>
            <h3 className="text-pink-400 font-semibold mb-3">Services</h3>
            <ul className="space-y-1">
              <li><a href='https://www.thebot.agency/services/marketing-strategies' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 cursor-pointer'>Marketing Strategies</a></li>
              <li><a href='https://www.thebot.agency/services/predictive-analysis' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 cursor-pointer'>Predictive Market Analysis</a></li>
              <li><a href='https://www.thebot.agency/services/lead-generation' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 cursor-pointer'>Lead Generation</a></li>
              <li><a href='https://www.thebot.agency/services/branding' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 cursor-pointer'>Branding</a></li>
              <li><a href='https://www.thebot.agency/services/web-development' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 cursor-pointer'>Web Development</a></li>
              <li><a href='https://www.thebot.agency/services/social-media-management' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 cursor-pointer'>Social Media Management</a></li>
              <li><a href='https://www.thebot.agency/services/tech-development' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 cursor-pointer'>Tech Development</a></li>
              <li><a href='https://www.thebot.agency/services/seo' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 cursor-pointer'>Seo</a></li>
              <li><a href='https://www.thebot.agency/services/web-development/3-days-delivery' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 cursor-pointer'>Website in 3 days</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-pink-400 font-semibold mb-3">Industries</h3>
            <ul className="space-y-1">
              <li><a href='https://www.thebot.agency/industries/b2b-business' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 cursor-pointer'>B2B Businesses</a></li>
              <li><a href='https://www.thebot.agency/industries/b2c-business' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 cursor-pointer'>B2C Businesses</a></li>
              <li><a href='https://www.thebot.agency/industries/logistics-businesses' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 cursor-pointer'>Logistics Businesses</a></li>
              <li><a href='https://www.thebot.agency/industries/saas-company' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 cursor-pointer'>Saas Company</a></li>
              <li><a href='https://www.thebot.agency/industries/start-up' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 cursor-pointer'>Start Up</a></li>
              <li><a href='https://www.thebot.agency/industries/b2b-exporter' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 cursor-pointer'>B2B Exporter</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-pink-400 font-semibold mb-3">Company</h3>
            <ul className="space-y-1">
              <a href="https://www.thebot.agency/about-us" target='_blank' rel='noopener noreferrer'><li className='hover:text-pink-400'>About Us</li></a>
              <a href="https://www.thebot.agency/" target='_blank' rel='noopener noreferrer' ><li className='hover:text-pink-400'>Services</li></a>
              <a href="https://www.thebot.agency/blogs" target='_blank' rel='noopener noreferrer' ><li className='hover:text-pink-400'>Blog</li></a>
              <a href="https://www.thebot.agency/contact-us" target='_blank' rel='noopener noreferrer'><li className='hover:text-pink-400'>Contact</li></a>
            </ul>
          </div>


          <div>
            <h3 className="text-pink-400 font-semibold mb-3">Follow Us On</h3>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/evangelinglen" target="_blank"
                rel="noopener noreferrer"><FaFacebookF size={30} className="text-white hover:text-pink-400 text-lg bg-black p-2 rounded-md " /></a>
              <a href="https://www.instagram.com/thebot.agency/" target="_blank"
                rel="noopener noreferrer"><FaInstagram size={30} className="text-white hover:text-pink-400 text-lg bg-black p-2 rounded-md " /></a>
              <a href="https://www.linkedin.com/in/evangelin-gladin-profile/" target="_blank"
                rel="noopener noreferrer"><FaLinkedinIn size={30} className="text-white hover:text-pink-400 text-lg bg-black p-2 rounded-md " /></a>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-12 flex border-t gap-2 border-gray-700 pt-4 text-start text-xl text-gray-400">
        <span className='font-bold text-white'>© 2024 TheBot. All rights reserved.</span>
        <div>
          <a href="https://www.thebot.agency/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="https://www.thebot.agency/terms-and-condition" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}
