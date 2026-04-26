import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Cpu } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "Product",
      items: ["Features", "Use Cases", "API", "Pricing"]
    },
    {
      title: "Company",
      items: ["About", "Blog", "Careers", "Security"]
    },
    {
      title: "Legal",
      items: ["Privacy", "Terms", "Cookie Policy"]
    }
  ];

  return (
    <footer className="pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">CallScribe</span>
            </Link>
            <p className="text-slate-400 text-sm max-w-xs mb-8">
              Turning raw audio into structured intelligence for high-performance teams.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {links.map((group, i) => (
            <div key={i}>
              <h4 className="text-white font-bold text-sm mb-6">{group.title}</h4>
              <ul className="space-y-4">
                {group.items.map((item, j) => (
                  <li key={j}>
                    <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {currentYear} CallScribe Inc. All rights reserved. Built with precision for the modern web.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <Cpu size={14} />
            <span>Infrastructure by Vercel Edge</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
