import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Landing/Hero";
import OutputPreview from "../components/Landing/OutputPreview";
import HowItWorks from "../components/Landing/HowItWorks";
import Features from "../components/Landing/Features";
import CTA from "../components/Landing/CTA";
import Footer from "../components/Landing/Footer";
import ProductExperience from "../components/Landing/ProductExperience";

export default function Home() {
    // Smooth scroll behavior
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }, []);

    return (
        <div className="bg-obsidian min-h-screen text-slate-50 font-sans selection:bg-brand-primary/30 selection:text-white overflow-x-hidden">
            <Navbar />
            
            <main>
                {/* Hero Section */}
                <Hero />
                
                {/* Product Experience (Functional Demo) */}
                <ProductExperience />

                {/* Core Section: Output Preview */}
                <OutputPreview />

                {/* How It Works */}
                <HowItWorks />

                {/* Features & Why CallScribe */}
                <Features />

                {/* Final CTA */}
                <CTA />
            </main>

            {/* Footer */}
            <Footer />
            
            {/* Global Background Elements */}
            <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/5 blur-[150px] rounded-full" />
            </div>
        </div>
    );
}
