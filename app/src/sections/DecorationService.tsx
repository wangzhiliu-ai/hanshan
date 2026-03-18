import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Hammer, Zap, Paintbrush, Square } from 'lucide-react';

const services = [
  {
    name: '基础装修',
    icon: Hammer,
    items: ['拆除', '砌墙', '找平', '防水'],
  },
  {
    name: '水电改造',
    icon: Zap,
    items: ['强弱电布管', '给排水', '智能布线'],
  },
  {
    name: '墙面地面',
    icon: Paintbrush,
    items: ['墙面粉刷', '贴砖', '地面找平'],
  },
  {
    name: '吊顶工程',
    icon: Square,
    items: ['轻钢龙骨', '石膏板', '造型吊顶'],
  },
];

export default function DecorationService() {
  return (
    <section id="decoration-service" className="bg-secondary section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-wood text-sm tracking-wider uppercase mb-4 block">
              Decoration Service
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
              整装服务 · <span className="text-wood">基础施工全流程</span>
            </h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              从毛坯到精装，一站式基础工程服务
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.name} delay={index * 0.1}>
                <Card className="bg-white border-0 shadow-card card-hover h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-wood/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-wood" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-4">{service.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-secondary text-dark/70 text-sm rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
