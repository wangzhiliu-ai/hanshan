import ScrollReveal from '@/components/ScrollReveal';
import {
  Hammer,
  Home,
  Sofa,
  Grid3X3,
  Droplets,
  Tv,
  Layers,
  Building,
  Factory,
  Handshake,
} from 'lucide-react';

const systems = [
  { id: 'decoration-service', name: '整装服务', icon: Hammer },
  { id: 'custom-furniture', name: '全屋定制', icon: Home },
  { id: 'ready-made', name: '成品家具', icon: Sofa },
  { id: 'flooring', name: '地板系统', icon: Grid3X3 },
  { id: 'bathroom', name: '洁具卫浴', icon: Droplets },
  { id: 'appliances', name: '家电系统', icon: Tv },
  { id: 'materials', name: '材料选配', icon: Layers },
  { id: 'exterior-wall', name: '外墙系统', icon: Building },
  { id: 'factory', name: '工厂直供', icon: Factory },
  { id: 'partnership', name: '合作加盟', icon: Handshake },
];

export default function SystemOverview() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="system-overview" className="bg-dark section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-wood text-sm tracking-wider uppercase mb-4 block">
              System Overview
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              整装系统 · <span className="text-wood">一体化解决方案</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              从板材到成品，从室内到外墙，悍山为您整合十大系统
            </p>
          </div>
        </ScrollReveal>

        {/* Systems Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
          {systems.map((system, index) => {
            const Icon = system.icon;
            return (
              <ScrollReveal key={system.id} delay={index * 0.05}>
                <button
                  onClick={() => scrollToSection(system.id)}
                  className="w-full bg-dark-light border border-white/10 rounded-xl p-6 lg:p-8 text-center card-hover group hover:border-wood/50 transition-colors"
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-wood group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-white group-hover:text-wood transition-colors font-medium">
                    {system.name}
                  </span>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
