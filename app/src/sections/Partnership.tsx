import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, ClipboardList, UserPlus, Check, ArrowRight } from 'lucide-react';

const policyItems = [
  { label: '区域保护', value: '独家代理' },
  { label: '装修支持', value: '店面设计/装修补贴' },
  { label: '培训体系', value: '产品/销售/安装培训' },
];

const processSteps = [
  { step: 1, label: '在线申请' },
  { step: 2, label: '资质审核' },
  { step: 3, label: '签约培训' },
  { step: 4, label: '开业支持' },
];

export default function Partnership() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: '',
    requirement: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('申请已提交，我们会尽快与您联系！');
  };

  return (
    <section id="partnership" className="bg-dark section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-wood text-sm tracking-wider uppercase mb-4 block">
              Partnership
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              合作加盟 · <span className="text-wood">共赢未来</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              诚邀全国合作伙伴，共享国企品质与整装蓝海
            </p>
          </div>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Policy Card */}
          <ScrollReveal delay={0.1}>
            <Card className="bg-dark-light border border-white/10 card-hover h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-wood/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-wood" />
                  </div>
                  <h3 className="text-xl font-bold text-white">招商政策</h3>
                </div>
                <div className="space-y-4">
                  {policyItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-wood flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/80 font-medium">{item.label}:</span>
                        <span className="text-white/60 ml-2">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Process Card */}
          <ScrollReveal delay={0.2}>
            <Card className="bg-dark-light border border-white/10 card-hover h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-wood/10 rounded-lg flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-wood" />
                  </div>
                  <h3 className="text-xl font-bold text-white">合作流程</h3>
                </div>
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={step.step} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-wood rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-dark text-sm font-bold">{step.step}</span>
                      </div>
                      <span className="text-white/80">{step.label}</span>
                      {index < processSteps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-white/30 ml-auto" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Application Form */}
          <ScrollReveal delay={0.3}>
            <Card className="bg-dark-light border border-white/10 card-hover h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-wood/10 rounded-lg flex items-center justify-center">
                    <UserPlus className="w-5 h-5 text-wood" />
                  </div>
                  <h3 className="text-xl font-bold text-white">在线申请</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="姓名"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-dark border-white/10 text-white placeholder:text-white/40 focus:border-wood"
                  />
                  <Input
                    placeholder="电话"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-dark border-white/10 text-white placeholder:text-white/40 focus:border-wood"
                  />
                  <Input
                    placeholder="区域"
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="bg-dark border-white/10 text-white placeholder:text-white/40 focus:border-wood"
                  />
                  <Input
                    placeholder="需求"
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="bg-dark border-white/10 text-white placeholder:text-white/40 focus:border-wood"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-wood hover:bg-wood-dark text-dark font-semibold"
                  >
                    立即提交申请
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
