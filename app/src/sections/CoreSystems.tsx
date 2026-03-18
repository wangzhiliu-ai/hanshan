import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Layers, Bath, Zap, Box, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const systems = [
  {
    icon: Home,
    title: '全屋定制',
    subtitle: 'Custom Furniture',
    description: '从设计到安装，提供衣柜、橱柜、书柜等一站式定制服务',
    image: '/hanshan/images/system-custom.jpg',
    href: '#custom',
  },
  {
    icon: Layers,
    title: '地板系统',
    subtitle: 'Flooring System',
    description: '实木地板、复合地板、SPC石塑地板等多种选择',
    image: '/hanshan/images/system-flooring.jpg',
    href: '#flooring',
  },
  {
    icon: Bath,
    title: '洁具卫浴',
    subtitle: 'Bathroom Solutions',
    description: '马桶、浴室柜、淋浴房、龙头花洒等全品类配套',
    image: '/hanshan/images/system-bathroom.jpg',
    href: '#bathroom',
  },
  {
    icon: Zap,
    title: '家电系统',
    subtitle: 'Home Appliances',
    description: '厨电、热水器、净水系统等智能家电集成方案',
    image: '/hanshan/images/system-appliance.jpg',
    href: '#appliances',
  },
  {
    icon: Box,
    title: '材料选配',
    subtitle: 'Materials',
    description: '欧松板、颗粒板、三聚氰胺板等高端板材精选',
    image: '/hanshan/images/product-osb.jpg',
    href: '#materials',
  },
  {
    icon: Building2,
    title: '外墙系统',
    subtitle: 'Wall Systems',
    description: '外墙装饰板、保温系统、仿石漆等建筑外立面方案',
    image: '/hanshan/images/wall-system.jpg',
    href: '#wall-system',
  },
];

export default function CoreSystems() {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
    >
      <div className="w-full section-padding">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <span className="text-[#ff6b35] text-sm font-medium tracking-wider uppercase mb-2 block">
            Core Systems
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            核心系统展示
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            从板材到整装，从室内到外墙，悍山易装为您提供一站式建材解决方案
          </p>
        </div>

        {/* Systems Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {systems.map((system) => (
            <a
              key={system.title}
              href={system.href}
              className="group relative bg-[#f5f5f5] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 opacity-0"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={system.image}
                  alt={system.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#ff6b35] rounded-lg flex items-center justify-center">
                  <system.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#ff6b35] transition-colors">
                    {system.title}
                  </h3>
                  <span className="text-xs text-[#999] uppercase tracking-wider">
                    {system.subtitle}
                  </span>
                </div>
                <p className="text-sm text-[#666] leading-relaxed">
                  {system.description}
                </p>
                
                {/* Arrow */}
                <div className="mt-4 flex items-center gap-2 text-[#ff6b35] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>了解详情</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
