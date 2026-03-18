import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sofa, Building, Home, ArrowRight, Users, ThumbsUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const applications = [
  {
    icon: Sofa,
    title: '家具制造',
    subtitle: 'Furniture Manufacturing',
    description: '为衣柜、橱柜、办公家具等提供高品质基材和饰面板材，满足定制化生产需求。并提供成品家具、五金配件等一站式配齐服务。',
    image: '/images/app-furniture.jpg',
    stats: [
      { label: '合作客户', value: '500+', icon: Users },
      { label: '满意度', value: '98%', icon: ThumbsUp },
    ],
  },
  {
    icon: Building,
    title: '商业空间',
    subtitle: 'Commercial Spaces',
    description: '适用于酒店、写字楼、商场等商业空间的装饰装修，打造专业品质空间。整合地板系统、洁具卫浴、家电系统等全品类供应。',
    image: '/images/app-commercial.jpg',
    stats: [
      { label: '合作客户', value: '300+', icon: Users },
      { label: '满意度', value: '99%', icon: ThumbsUp },
    ],
  },
  {
    icon: Home,
    title: '住宅精装',
    subtitle: 'Residential Decoration',
    description: '为房地产开发商提供整体精装解决方案，提升住宅品质与价值。涵盖全屋定制、材料选配、外墙系统等整装服务。',
    image: '/images/app-residential.jpg',
    stats: [
      { label: '合作客户', value: '200+', icon: Users },
      { label: '满意度', value: '97%', icon: ThumbsUp },
    ],
  },
];

export default function Applications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
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

      // Cards animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="applications"
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#f5f5f5]"
    >
      <div className="w-full section-padding">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <span className="text-[#ff6b35] text-sm font-medium tracking-wider uppercase mb-2 block">
            Applications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            应用场景
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            从概念到创作，我们的板材是建筑师、设计师和工匠的画布
          </p>
        </div>

        {/* Application Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {applications.map((app, index) => (
            <div
              key={app.title}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 opacity-0 ${
                index === 1 ? 'lg:translate-y-8' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#ff6b35] rounded-xl flex items-center justify-center">
                  <app.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs text-[#999] uppercase tracking-wider">
                    {app.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#ff6b35] transition-colors">
                  {app.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed mb-6">
                  {app.description}
                </p>

                {/* Stats */}
                <div className="flex gap-4 mb-6">
                  {app.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-2 text-sm"
                    >
                      <stat.icon className="w-4 h-4 text-[#ff6b35]" />
                      <span className="font-semibold text-[#1a1a1a]">{stat.value}</span>
                      <span className="text-[#999]">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 text-[#ff6b35] font-medium text-sm group/btn">
                  查看案例
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
