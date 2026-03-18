import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const footerLinks = {
  products: {
    title: '产品中心',
    links: [
      { name: '欧松板', href: '#products' },
      { name: '颗粒板', href: '#products' },
      { name: '三聚氰胺板', href: '#products' },
      { name: '产品选型工具', href: '#' },
    ],
  },
  about: {
    title: '关于我们',
    links: [
      { name: '关于悍山', href: '#about' },
      { name: '品牌故事', href: '#' },
      { name: '荣誉资质', href: '#' },
      { name: '新闻动态', href: '#' },
    ],
  },
  service: {
    title: '客户服务',
    links: [
      { name: '联系我们', href: '#contact' },
      { name: '样品申请', href: '#' },
      { name: '经销商查询', href: '#' },
      { name: '技术支持', href: '#' },
    ],
  },
  legal: {
    title: '法律信息',
    links: [
      { name: '隐私政策', href: '#' },
      { name: '使用条款', href: '#' },
      { name: '国企信息公开', href: '#' },
    ],
  },
};

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="w-full section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold">悍山</span>
              <span className="text-xs text-[#ff6b35] tracking-wider">HUMSAN</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              工业美学与有机温暖的完美融合。依托国企背景与中欧合作优势，为全球客户提供高品质板材产品及整装系统服务。
            </p>
            <div className="flex items-center gap-2 text-sm text-white/40">
              <span>重庆物流集团旗下</span>
              <span className="text-[#ff6b35]">·</span>
              <span>中欧木业</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-white/60 hover:text-[#ff6b35] transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-[#ff6b35]" />
                <span>重庆市沙坪坝区西部物流园</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="w-4 h-4 text-[#ff6b35]" />
                <span>+86 23 8888 8888</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="w-4 h-4 text-[#ff6b35]" />
                <span>contact@humsan.com</span>
              </div>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-[#ff6b35] rounded-lg text-sm font-medium hover:bg-[#e55a2b] transition-colors">
              在线咨询
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full section-padding py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm text-white/40">
              © 2026 悍山 HUMSAN. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-sm text-white/40">
              <span>渝ICP备XXXXXXXX号</span>
              <span className="px-3 py-1 bg-white/10 rounded text-white/60">
                国资委控股企业
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
