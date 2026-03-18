import { Building2 } from 'lucide-react';

const footerLinks = [
  { label: '首页', href: '#' },
  { label: '产品系统', href: '#system-overview' },
  { label: '合作加盟', href: '#partnership' },
  { label: '联系我们', href: '#contact' },
];

const socialLinks = [
  { name: '微信', icon: 'wechat' },
  { name: '抖音', icon: 'douyin' },
  { name: '小红书', icon: 'xiaohongshu' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(href.replace('#', ''));
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
    <footer className="bg-dark border-t border-white/10">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-wood" />
              <div>
                <span className="text-white font-bold text-lg">悍山易装</span>
                <span className="text-white/50 text-xs ml-2">Humsan</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              国企品质 · 整装系统服务商
            </p>
            <p className="text-white/40 text-sm mt-2">
              重庆物流集团旗下 · 中欧木业
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-white/60 hover:text-wood text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">关注我们</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <div
                  key={social.name}
                  className="w-10 h-10 bg-dark-light rounded-lg flex items-center justify-center hover:bg-wood/20 transition-colors cursor-pointer"
                  title={social.name}
                >
                  <span className="text-white/60 text-xs">{social.name.charAt(0)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 悍山易装 · 国企品质 整装系统服务商
          </p>
          <p className="text-white/40 text-sm">
            国资委控股企业
          </p>
        </div>
      </div>
    </footer>
  );
}
