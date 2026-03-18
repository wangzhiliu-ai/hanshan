import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: MapPin,
    title: '运营中心',
    content: '重庆市沙坪坝区西部物流园',
    subContent: '中欧板材中国运营中心',
  },
  {
    icon: Phone,
    title: '业务咨询',
    content: '+86 23 8888 8888',
    subContent: '工作日 9:00-18:00',
  },
  {
    icon: Mail,
    title: '电子邮箱',
    content: 'contact@humsan.com',
    subContent: 'business@humsan.com',
  },
  {
    icon: Clock,
    title: '工作时间',
    content: '周一至周五 9:00-18:00',
    subContent: '节假日除外',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Info animation
      gsap.fromTo(
        infoRef.current?.children || [],
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Form animation
      gsap.fromTo(
        formRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#f5f5f5]"
    >
      <div className="w-full section-padding">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <span className="text-[#ff6b35] text-sm font-medium tracking-wider uppercase mb-2 block">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            联系我们
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            期待与您的合作，欢迎咨询洽谈
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div ref={infoRef} className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow opacity-0"
              >
                <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-[#ff6b35]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">{info.title}</h4>
                  <p className="text-[#333]">{info.content}</p>
                  <p className="text-sm text-[#999]">{info.subContent}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-lg opacity-0"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">提交成功</h3>
                <p className="text-[#666]">我们会尽快与您联系</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">在线咨询</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-[#333] mb-2">
                      姓名
                    </label>
                    <input
                      type="text"
                      required
                      className={`w-full px-4 py-3 bg-[#f5f5f5] border-2 rounded-lg outline-none transition-all ${
                        focusedField === 'name'
                          ? 'border-[#ff6b35] bg-white'
                          : 'border-transparent'
                      }`}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-[#333] mb-2">
                      电话
                    </label>
                    <input
                      type="tel"
                      required
                      className={`w-full px-4 py-3 bg-[#f5f5f5] border-2 rounded-lg outline-none transition-all ${
                        focusedField === 'phone'
                          ? 'border-[#ff6b35] bg-white'
                          : 'border-transparent'
                      }`}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-[#333] mb-2">
                      邮箱
                    </label>
                    <input
                      type="email"
                      className={`w-full px-4 py-3 bg-[#f5f5f5] border-2 rounded-lg outline-none transition-all ${
                        focusedField === 'email'
                          ? 'border-[#ff6b35] bg-white'
                          : 'border-transparent'
                      }`}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-[#333] mb-2">
                      公司名称
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 bg-[#f5f5f5] border-2 rounded-lg outline-none transition-all ${
                        focusedField === 'company'
                          ? 'border-[#ff6b35] bg-white'
                          : 'border-transparent'
                      }`}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="relative mb-6">
                  <label className="block text-sm font-medium text-[#333] mb-2">
                    留言内容
                  </label>
                  <textarea
                    rows={4}
                    className={`w-full px-4 py-3 bg-[#f5f5f5] border-2 rounded-lg outline-none transition-all resize-none ${
                      focusedField === 'message'
                        ? 'border-[#ff6b35] bg-white'
                        : 'border-transparent'
                    }`}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 group"
                >
                  提交咨询
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
