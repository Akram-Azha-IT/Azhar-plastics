"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Building2, Linkedin, Facebook, Instagram } from "lucide-react";
import { cn } from "@/components/ui/button"; // Reusing cn from button if exported there natively or manually

export function Contact() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("Name"),
      email: formData.get("Email"),
      company: formData.get("Company"),
      message: formData.get("Message"),
      target: "Azhar Plastics Website"
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 pt-8 border-t border-slate-200"
          >
            <h2 className="text-4xl lg:text-5xl font-normal text-black tracking-normal mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-gray-800 text-lg mb-12 max-w-md font-normal leading-relaxed">
              {t("cta.desc")}
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white flex items-center justify-center border border-slate-200 text-gray-800 transition-colors group-hover:bg-white group-hover:text-black">
                  <MapPin className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <p className="text-base font-semibold text-primary uppercase tracking-wider mb-1">Office Location</p>
                  <p className="text-black text-base font-normal">Kamal Park Center Imm B, Bureau 30, Mohammedia, Morocco</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white flex items-center justify-center border border-slate-200 text-gray-800 transition-colors group-hover:bg-white group-hover:text-black">
                  <Phone className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <p className="text-base font-semibold text-primary uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-black text-base font-normal">+212 521 226 130</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white flex items-center justify-center border border-slate-200 text-gray-800 transition-colors group-hover:bg-white group-hover:text-black">
                  <Mail className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <p className="text-base font-semibold text-primary uppercase tracking-wider mb-1">Email Support</p>
                  <p className="text-black text-base font-normal">info@azhar-cons.com</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <button key={i} className="w-12 h-12 flex items-center justify-center bg-white text-gray-800 hover:bg-white border hover:border-transparent hover:text-black border-slate-200 transition-colors rounded-none">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="bg-white p-8 lg:p-12 border border-slate-200">
              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-base font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                      <Send className="w-3 h-3 text-gray-700" /> {t("contact.name")}
                    </label>
                    <input 
                      name="Name" 
                      type="text" 
                      required 
                      className="w-full h-12 bg-white px-4 text-base font-normal text-black outline-none focus:ring-1 focus:ring-white transition-all border border-slate-200 rounded-none" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-base font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                      <Mail className="w-3 h-3 text-gray-700" /> {t("contact.email")}
                    </label>
                    <input 
                      name="Email" 
                      type="email" 
                      required 
                      className="w-full h-12 bg-white px-4 text-base font-normal text-black outline-none focus:ring-1 focus:ring-white transition-all border border-slate-200 rounded-none" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-base font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                    <Building2 className="w-3 h-3 text-gray-700" /> {t("contact.company")}
                  </label>
                  <input 
                    name="Company" 
                    type="text" 
                    className="w-full h-12 bg-white px-4 text-base font-normal text-black outline-none focus:ring-1 focus:ring-white transition-all border border-slate-200 rounded-none" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-base font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                    <MessageSquare className="w-3 h-3 text-gray-700" /> {t("contact.msg")}
                  </label>
                  <textarea 
                    name="Message" 
                    required 
                    className="w-full h-32 bg-white p-4 text-base font-normal text-black outline-none focus:ring-1 focus:ring-white transition-all border border-slate-200 resize-none rounded-none" 
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full"
                  size="lg"
                  variant="primary"
                >
                  {loading ? "SENDING..." : t("contact.send").toUpperCase()}
                </Button>

                {status === "success" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-black text-center font-normal text-base tracking-wider pt-4">
                    Message Sent Successfully!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-700 text-center font-normal text-base tracking-wider pt-4">
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
