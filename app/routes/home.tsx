import type { Route } from "./+types/home";
import Navbar from "~/component/Navbar";
import {resumes} from "~/constants";
import ResumeCard from "~/component/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import { useNavigate} from "react-router";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Resume Analyzer" },
    { name: "description", content: "The smart analyzer for your resume!" },
  ];
}

export default function Home() {
    const { auth } = usePuterStore()
    const navigate = useNavigate()

    useEffect(()=>{
        if (!auth.isAuthenticated) navigate('/auth?next=/')
    },[auth.isAuthenticated])

    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar />
        <section className="main-section">
            <div className="page-heading py-16">
                <h1>Track your Application & Resume Rating</h1>
                <h2>Review your submission and check AI-powered feedback.</h2>
            </div>
            {resumes.length > 0 && (
                <div className="resumes-section">
                    {
                        resumes.map((resume)=>(
                            <ResumeCard key={resume.id} resume={resume} />
                        ))
                    }
                </div>
            )}
        </section>
    </main>;
}
