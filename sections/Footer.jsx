import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex 
      justify-between items-start gap-20
      flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img 
            src={footerLogo} 
            width={150}
            height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
          Get shoes ready for the new term at 
          your nearest Nike store. Find Your 
          perfect Size In Store. Get Rewards
          </p>

        </div>
        <div className="flex flex-1 
        justify-between lg:gap-10 gap-20
        flex-wrap">
          {
            footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white 
                font-montserrat text-2xl 
                leading-normal font-medium mb-6">{section.title}</h4>
                <ul>
                  {
                    section.links.map((link) => (
                      <li className="text-white-400 
                      font-montserrat text-base 
                      leading-normal hover:text-slate-gray cursor-pointer"
                      key={link.name}>
                        <a href={link.link}>{link.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex justify-between 
      text-white-400 mt-24 max-sm:flex-col 
      max-sm:items-center">
        <div className="flex flex-1 
        justify-start items-center gap-2
        font-montserrat cursor-pointer hover:text-white">
          <img src={copyrightSign} 
          alt="Copy right sign" 
          width={20}
          height={20}
          className="rounded-full m-0"
          />
          <p>
            Copyright. All rights reserved.
          </p>
        </div>
        <p className="font-montserrat cursor-pointer hover:text-white">
          Terms & Conditions
        </p>
      </div>
    </footer>
  )
}

export default Footer