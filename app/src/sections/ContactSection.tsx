import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: '运营中心',
    value: '重庆市沙坪坝区西部物流园 · 中欧板材中国运营中心',
    href: null,
  },
  {
    icon: Phone,
    label: '业务咨询',
    value: '+86 136 6804 6708',
    subValue: '工作日 9:00-18:00',
    href: 'tel:13668046708',
  },
  {
    icon: Mail,
    label: '电子邮箱',
    value: '330884984@qq.com',
    href: 'mailto:330884984@qq.com',
  },
  {
    icon: Clock,
    label: '工作时间',
    value: '周一至周五 9:00-18:00',
    subValue: '节假日除外',
    href: null,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('咨询已提交，我们会尽快与您联系！');
  };

  return (
    <section id="contact" className="bg-secondary section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-wood text-sm tracking-wider uppercase mb-4 block">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
              联系我们
            </h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              期待与您的合作，欢迎咨询洽谈
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <ScrollReveal>
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <Card className="bg-white border-0 shadow-card card-hover">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-10 h-10 bg-wood/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-wood" />
                      </div>
                      <div>
                        <p className="text-dark/50 text-sm mb-1">{info.label}</p>
                        <p className="text-dark font-medium">{info.value}</p>
                        {info.subValue && (
                          <p className="text-dark/50 text-sm">{info.subValue}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );

                return info.href ? (
                  <a key={info.label} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <Card className="bg-white border-0 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark mb-6">在线咨询</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-dark/70 text-sm mb-2 block">姓名</label>
                    <Input
                      placeholder="请输入您的姓名"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-secondary border-0 text-dark placeholder:text-dark/40 focus:ring-wood"
                    />
                  </div>
                  <div>
                    <label className="text-dark/70 text-sm mb-2 block">电话</label>
                    <Input
                      placeholder="请输入您的电话"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-secondary border-0 text-dark placeholder:text-dark/40 focus:ring-wood"
                    />
                  </div>
                  <div>
                    <label className="text-dark/70 text-sm mb-2 block">需求类型</label>
                    <Input
                      placeholder="请输入您的需求"
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="bg-secondary border-0 text-dark placeholder:text-dark/40 focus:ring-wood"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-wood hover:bg-wood-dark text-dark font-semibold py-6"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    提交咨询
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
