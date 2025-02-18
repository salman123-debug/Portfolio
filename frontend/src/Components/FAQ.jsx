import React, { forwardRef, useState } from "react";
import "./Responsive.css";

const FAQ=forwardRef((props, ref) => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I specialize in web development, UI/UX design, and e-commerce solutions. My skills include front-end development with React, responsive web design, and creating user-friendly, visually engaging interfaces.",
    },
    {
      question: "What tools and technologies do you use?",
      answer:
        "I primarily use JavaScript, React, Tailwind CSS, Node.js, and MongoDB, along with design tools like Figma and Adobe XD. I continually update my skills to incorporate the latest technologies.",
    },
    {
      question: "Can you customize your services based on project needs?",
      answer:
        "Yes! I’m flexible in adapting my skills to meet unique project requirements, whether it's a simple landing page or a complex e-commerce site.",
    },
    {
      question: "What is your process for starting a new project?",
      answer:
        "I start with a consultation to understand your goals and vision. From there, I create a project roadmap, including design drafts and timelines, to ensure alignment at every step.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can reach out through the Contact section on my portfolio, where you’ll find a contact form, email, and social media links. I typically respond within 24 hours.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  // Toggle question display
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-5" ref={ref}>
      <p className="text-center">
        <span className="text-xl px-4 py-2 font-bold bg-[#000033] text-white rounded-lg">
          FAQ
        </span>
      </p>
      <h1 className="text-4xl text-center font-bold font-serif mt-4">
        Have some questions?
      </h1>

      <div className="faqs flex flex-col md:flex-row h-[600px] items-center justify-center mt-8">
        {/* FAQ Section */}
        <div className="faq-section max-w-2xl w-full p-5">
          <h2 className="text-3xl font-bold text-center mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item border border-gray-300 rounded-md p-4 shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left font-semibold text-lg flex justify-between items-center"
                >
                  <span className="text-gray-800">{faq.question}</span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ⌄
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Image */}
        <div className="faq-image mt-8 md:mt-0  md:ml-10">
          <img src="faq.png" alt="FAQ" className="w-72 md:w-96 h-auto rounded-lg  mix-blend-multiply" />
        </div>
      </div>
    </div>
  );
}
)
export default FAQ;
