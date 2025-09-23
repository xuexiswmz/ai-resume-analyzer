import React, {type FormEvent, useState} from 'react'
import Navbar from "~/component/Navbar";

const Upload = () => {
    const [isProcessing,setIsProcessing] = useState(false)
    const [statusText,setStatusText] = useState('')
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {

    }
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />
            <section className="main-section">
                <div className="page-heading py-16">
                    <h1>AI Resume Analyzer</h1>
                    {
                        isProcessing?(
                            <>
                                <h2>{statusText}</h2>
                                <img src='/images/resume-scan.gif' className="w-full"/>
                            </>
                        ):(
                            <h2>Drop your resume for an ATS score and improvement tips</h2>
                        )
                    }
                    {!isProcessing&&(
                        <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                            <div className="form-div">
                                <label htmlFor="company-name">Company Name</label>
                                <input type="text" name="company-name" placeholder="Company Name" />
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </main>
    )
}
export default Upload
