import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Factory, Video, FileText, ArrowRight } from 'lucide-react';

const services = [
  {
    name: '工厂展示',
    icon: Factory,
    description: '厂区实景/生产线/检测中心',
    feature: '可预约参观',
    image: '/images/factory-1.jpg',
    buttonText: null,
  },
  {
    name: '实景参观',
    icon: Video,
    description: 'VR看厂/视频直播/现场预约',
    feature: null,
    image: '/images/factory-2.jpg',
    buttonText: '立即预约',
  },
  {
    name: '定制预约',
    icon: FileText,
    description: '板材定制/系统定制/OEM合作',
    feature: null,
    image: '/images/factory-3.jpg',
    buttonText: '提交需求',
  },
];

export default function FactoryDirect() {
  return (
    <section id="factory" className="bg-secondary section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-wood text-sm tracking-wider uppercase mb-4 block">
              Factory Direct
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
              工厂直供 · <span className="text-wood">透明制造</span>
            </h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              国企工厂开放参观，从原材料到成品全程可溯
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.name} delay={index * 0.1}>
              <Card className="bg-white border-0 shadow-card card-hover overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-wood/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-wood" />
                    </div>
                    <h3 className="text-xl font-bold text-dark">{service.name}</h3>
                  </div>
                  <p className="text-dark/60 mb-3">{service.description}</p>
                  {service.feature && (
                    <p className="text-wood text-sm mb-4">{service.feature}</p>
                  )}
                  {service.buttonText && (
                    <Button
                      variant="outline"
                      className="w-full border-wood text-wood hover:bg-wood hover:text-dark"
                    >
                      {service.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
