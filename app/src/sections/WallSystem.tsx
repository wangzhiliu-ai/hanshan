import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Shield, Paintbrush, Square, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const wallSystems = [
  {
    icon: Layers,
    title: '外墙装饰板',
    description: '多样材质与花色选择，包括木纹、石纹、金属质感等，满足不同建筑风格需求',
    features: ['100+花色', '耐候性强', '易安装'],
  },
  {
    icon: Shield,
    title: '保温一体化系统',
    description: '集保温、装饰、防护于一体，实现建筑节能与美观的双重目标',
    features: ['A级防火', '保温节能', '长效耐用'],
  },
  {
    icon: Paintbrush,
    title: '仿石漆/艺术涂料',
    description: '真石漆、质感涂料、氟碳漆等，呈现天然石材效果，性价比更高',
    features: ['仿真度高', '色彩持久', '防水透气'],
  },
  {
    icon: Square,
    title: '干挂石材/砖饰系统',
    description: '天然石材、陶瓷薄板、软瓷等干挂系统，打造高端建筑外立面',
    features: ['高端质感', '安全可靠', '维护便捷'],
  },
];

export default function WallSystem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
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
      id="wall-system"
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#1a1a1a] grain-overlay"
    >
      <div className="w-full section-padding">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <span className="text-[#ff6b35] text-sm font-medium tracking-wider uppercase mb-2 block">
            Wall System
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            外墙系统
          </h2>
          <p className="text-xl text-white/80 mb-4">
            建筑外立面整体解决方案
          </p>
          <p className="text-white/60 max-w-3xl mx-auto">
            为别墅、自建房及旧房改造提供从装饰板、保温材料到外墙涂料的系统化服务，实现建筑美学与节能防护的统一
          </p>
        </div>

        {/* Hero Image */}
        <div ref={imageRef} className="relative mb-16 rounded-2xl overflow-hidden opacity-0">
          <img
            src="/images/wall-system.jpg"
            alt="外墙系统"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
          
          {/* Overlay Content */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  现代建筑外立面专家
                </h3>
                <p className="text-white/70 max-w-xl">
                  依托国企品质保障，整合全球优质资源，为各类建筑提供专业的外墙系统解决方案
                </p>
              </div>
              <button className="btn-primary flex items-center gap-2 group whitespace-nowrap">
                咨询方案
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Wall System Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {wallSystems.map((system) => (
            <div
              key={system.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#ff6b35]/30 transition-all duration-500 opacity-0"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#ff6b35]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff6b35] transition-colors">
                <system.icon className="w-7 h-7 text-[#ff6b35] group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {system.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {system.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {system.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-white mb-1">
                获取专属外墙解决方案
              </h4>
              <p className="text-sm text-white/60">
                专业工程师免费上门测量，提供定制化设计方案
              </p>
            </div>
            <button className="btn-primary whitespace-nowrap">
              预约咨询
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
