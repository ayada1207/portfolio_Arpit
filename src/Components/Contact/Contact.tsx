import React, { useEffect, useState } from 'react'
import right_arrow_white from '../../Assets/right-arrow-white.png'

const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        // ... (keep the existing onSubmit logic)
    };

    useEffect(() => {
        // ... (keep the existing useEffect logic)
    }, []);

    return (
        <div id="contact" className="w-full px-[12%] py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
            <h4 className="text-center mb-2 text-lg font-Ovo text-blue-300">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-300">I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg">
                <input type="hidden" name="subject" value="New form Submission"/>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition duration-300" 
                        required 
                        name="name"
                    />
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition duration-300" 
                        required 
                        name="email"
                    />
                </div>
                <textarea 
                    rows="6" 
                    placeholder="Enter your message" 
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition duration-300 mb-6" 
                    required 
                    name="message"
                ></textarea>
                <div className="h-captcha mb-6" data-captcha="true" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"></div>
                <button 
                    type='submit' 
                    className="py-3 px-8 w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Submit now
                    <img src={right_arrow_white} alt="" className="w-4"/>
                </button>
                <p className='mt-4 text-center text-blue-300'>{result}</p>
            </form>
        </div>
    )
}

export default Contact