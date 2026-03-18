import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Cog, Leaf, Lightbulb, Settings, Building2 } from 'lucide-react';

const advantages = [
  {
    name: '全球采购',
    nameEn: 'Global Sourcing',
    icon: Globe,
    description: '从欧洲、俄罗斯、泰国等优质林区精选原材料，确保每一块板材的源头品质。',
  },
  {
    name: '先进机械',
    nameEn: 'Advanced Machinery',
    icon: Cog,
    description: '引进德国温康纳、意大利SCM等世界顶尖生产设备，实现精密制造。',
  },
  {
    name: '环保实践',
    nameEn: 'Eco-Friendly',
    icon: Leaf,
    description: '严格执行E0/E1环保标准，采用无醛添加工艺，守护家人健康。',
  },
  {
    name: '研发创新',
    nameEn: 'R&D Innovation',
    icon: Lightbulb,
    description: '持续投入研发，开发新型板材产品，引领行业技术发展方向。',
  },
  {
    name: '定制方案',
    nameEn: 'Custom Solutions',
    icon: Settings,
    description: '根据客户需求提供个性化产品定制服务，满足不同应用场景。',
  },
  {
    name: '国企背景',
    nameEn: 'SOE Background',
    icon: Building2,
    description: '国资委控股企业，品质保障、供应稳定、合规经营，值得信赖。',
  },
];

const certifications = [
  { name: 'ISO 9001', description: '质量管理体系' },
  { name: 'ISO 14001', description: '环境管理体系' },
  { name: 'CARB P2', description: '美国环保认证' },
  { name: 'FSC', description: '森林认证' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-secondary section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-wood text-sm tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
              为什么选择我们
            </h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              国企品质保障，中欧合作优势，全球供应链体系
            </p>
          </div>
        </ScrollReveal>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <ScrollReveal key={advantage.name} delay={index * 0.1}>
                <Card className="bg-white border-0 shadow-card card-hover h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-wood/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-wood" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-1">{advantage.name}</h3>
                    <p className="text-wood text-sm mb-3">{advantage.nameEn}</p>
                    <p className="text-dark/60 leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Certifications */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col items-center px-6 py-4 bg-white rounded-lg shadow-sm"
              >
                <span className="text-lg font-bold text-dark">{cert.name}</span>
                <span className="text-sm text-dark/50">{cert.description}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
