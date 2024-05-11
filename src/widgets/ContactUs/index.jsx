const ContactUs = ({data}) => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container">
        <div className="flex flex-wrap -mx-4 lg:items-center">
          <div className="w-full lg:w-5/12 px-4 mb-7 lg:mb-0">
              <h2 className="h2 font-medium font-serif mb-8 text-center lg:text-start">{data?.title}</h2>
              <div className="flex flex-col items-start mb-7">
                <span className="opacity-50 inline-block mb-1 font-medium">Email</span>
                <a href="mailto:noaktechnologies@gmail.com" className="font-semibold transition-colors duration-300 xl:hover:text-primary">noaktechnologies@gmail.com</a>
              </div>
              <div className="flex flex-col items-start">
                <span className="opacity-50 inline-block mb-1 font-medium">Phone</span>
                <a href="tel:+9717345532453@gmail.com" className="font-semibold transition-colors duration-300 xl:hover:text-primary">+971 7345532453</a>
              </div>
          </div>
          <div className="w-full lg:w-7/12 px-4">
            <div className="flex flex-wrap -mx-2 mb-5 lg:mb-10">
              <div className="px-2 w-full lg:w-1/2 mb-5 lg:mb-0">
                <input className="border w-full border-[#E9E9E9] border-b-2 border-b-primary px-5 py-4 min-h-[55px] font-medium !shadow-none !outline-none" placeholder="Full name"/>
              </div>
              <div className="px-2 w-full lg:w-1/2">
                <input className="border w-full border-[#E9E9E9] border-b-2 border-b-primary px-5 py-4 min-h-[55px] font-medium !shadow-none !outline-none" placeholder="Email"/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-full">
                <textarea className="border w-full border-[#E9E9E9] border-b-2 border-b-primary px-5 py-4 min-h-[160px] font-medium !shadow-none !outline-none resize-none" placeholder="Message"/>
              </div>
            </div>
            <div className="flex justify-start pt-12">
              <button className="btn btn-primary !inline-flex group font-bold xs:w-full justify-center">
                <span>Send Message</span>
                <svg className="ml-5 transition-transform will-change-transform duration-300 group-hover:translate-x-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.49219 12.0017H20.5026M20.5026 12.0017L12.8479 4.91406M20.5026 12.0017L12.8479 19.0894" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;