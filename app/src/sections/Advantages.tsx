import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Cog, Leaf, Lightbulb, Settings, Shield, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    icon: Globe,
    title: '全球采购',
    subtitle: 'Global Sourcing',
    description: '从欧洲、俄罗斯、泰国等优质林区精选原材料，确保每一块板材的源头品质。依托中欧班列实现高效物流。',
    color: '#ff6b35',
  },
  {
    icon: Cog,
    title: '先进机械',
    subtitle: 'Advanced Machinery',
    description: '引进德国温康纳、意大利SCM等世界顶尖生产设备，实现精密制造，确保产品尺寸精度和表面质量。',
    color: '#4a90d9',
  },
  {
    icon: Leaf,
    title: '环保实践',
    subtitle: 'Eco-Friendly',
    description: '严格执行E0/E1环保标准，采用无醛添加工艺，守护家人健康。通过FSC森林认证，践行可持续发展。',
    color: '#5cb85c',
  },
  {
    icon: Lightbulb,
    title: '研发创新',
    subtitle: 'R&D Innovation',
    description: '持续投入研发，开发新型板材产品，引领行业技术发展方向。拥有多项国家专利技术。',
    color: '#f0ad4e',
  },
  {
    icon: Settings,
    title: '定制方案',
    subtitle: 'Custom Solutions',
    description: '根据客户需求提供个性化产品定制服务，满足不同应用场景。从材料到整装，一站式解决方案。',
    color: '#9b59b6',
  },
  {
    icon: Shield,
    title: '国企背景',
    subtitle: 'SOE Background',
    description: '国资委控股企业，品质保障、供应稳定、合规经营，值得信赖。重庆物流集团旗下，中欧木业品牌。',
    color: '#e74c3c',
  },
];

const certifications = [
  { name: 'ISO 9001', desc: '质量管理体系' },
  { name: 'ISO 14001', desc: '环境管理体系' },
  { name: 'CARB P2', desc: '美国环保认证' },
  { name: 'FSC', desc: '森林认证' },
];

export default function Advantages() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

      // Cards animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Certs animation
      gsap.fromTo(
        certsRef.current?.children || [],
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: certsRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="advantages"
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#1a1a1a] grain-overlay"
    >
      <div className="w-full section-padding">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <span className="text-[#ff6b35] text-sm font-medium tracking-wider uppercase mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            为什么选择我们
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            国企品质保障，中欧合作优势，全球供应链体系
          </p>
        </div>

        {/* Advantages Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={`group relative p-6 rounded-xl border transition-all duration-500 cursor-pointer opacity-0 ${
                hoveredIndex === index
                  ? 'bg-[#ff6b35] border-[#ff6b35]'
                  : hoveredIndex !== null
                  ? 'bg-white/5 border-white/10 opacity-50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                  hoveredIndex === index ? 'bg-white/20' : 'bg-white/10'
                }`}
              >
                <advantage.icon
                  className={`w-7 h-7 transition-colors ${
                    hoveredIndex === index ? 'text-white' : 'text-[#ff6b35]'
                  }`}
                />
              </div>

              {/* Content */}
              <div className="mb-2">
                <span
                  className={`text-xs uppercase tracking-wider transition-colors ${
                    hoveredIndex === index ? 'text-white/70' : 'text-[#999]'
                  }`}
                >
                  {advantage.subtitle}
                </span>
              </div>
              <h3
                className={`text-xl font-bold mb-3 transition-colors ${
                  hoveredIndex === index ? 'text-white' : 'text-white'
                }`}
              >
                {advantage.title}
              </h3>
              <p
                className={`text-sm leading-relaxed transition-colors ${
                  hoveredIndex === index ? 'text-white/80' : 'text-white/60'
                }`}
              >
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-white/80 mb-6">权威认证</h3>
        </div>
        <div
          ref={certsRef}
          className="flex flex-wrap justify-center gap-6"
        >
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full opacity-0"
            >
              <CheckCircle className="w-5 h-5 text-[#ff6b35]" />
              <div className="text-left">
                <div className="text-sm font-semibold text-white">{cert.name}</div>
                <div className="text-xs text-white/50">{cert.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
