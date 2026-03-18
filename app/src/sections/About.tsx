import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Factory, Shield, Award, Users, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: '50+', label: '年行业经验', icon: TrendingUp },
  { number: '1000+', label: '合作伙伴', icon: Users },
  { number: '30万', label: '年产能(立方米)', icon: Factory },
  { number: '99.8%', label: '合格率', icon: Award },
];

const features = [
  { icon: Shield, label: '国企背书' },
  { icon: Globe, label: '全球采购' },
  { icon: Factory, label: '德系设备' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          duration: 1.2,
          ease: 'expo.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        statsRef.current?.children || [],
        { scale: 0.8, y: 50, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#f5f5f5]"
    >
      <div className="w-full section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div ref={titleRef} className="mb-8 opacity-0">
              <span className="text-[#ff6b35] text-sm font-medium tracking-wider uppercase mb-2 block">
                About Humsan
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                关于悍山
              </h2>
            </div>

            <div ref={contentRef} className="opacity-0">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#333] mb-6">
                自然呼吸 · 整装未来
              </h3>
              
              <p className="text-[#666] leading-relaxed mb-6">
                悍山品牌隶属于重庆物流集团旗下中欧木业，是国资委控股的国有企业。我们秉承"尊重自然、环保先行"的理念，致力于为全球客户提供高品质的板材产品。
              </p>
              
              <p className="text-[#666] leading-relaxed mb-8">
                依托中欧班列的国际物流优势，我们从欧洲、俄罗斯、泰国等地精选优质原材料，引进德国温康纳等世界顶尖生产设备，以国企的严谨标准打造每一块板材。更延伸至全屋定制、外墙系统等一体化整装解决方案，实现从材料到应用的全链条服务。
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-4 mb-10">
                {features.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    <feature.icon className="w-5 h-5 text-[#ff6b35]" />
                    <span className="text-sm font-medium text-[#333]">{feature.label}</span>
                  </div>
                ))}
              </div>

              <button className="btn-outline flex items-center gap-2 group">
                了解更多
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className="relative opacity-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-image.jpg"
                alt="悍山板材"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ff6b35]/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#ff6b35]/20 rounded-full -z-10"></div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <stat.icon className="w-8 h-8 text-[#ff6b35] mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-[#666]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
