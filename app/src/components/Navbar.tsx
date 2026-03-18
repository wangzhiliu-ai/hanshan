import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: '整装服务', href: '#services' },
  { name: '全屋定制', href: '#custom' },
  { name: '成品家具', href: '#furniture' },
  { name: '地板系统', href: '#flooring' },
  { name: '洁具卫浴', href: '#bathroom' },
  { name: '家电系统', href: '#appliances' },
  { name: '材料选配', href: '#materials' },
  { name: '外墙系统', href: '#wall-system' },
  { name: '工厂直供', href: '#factory' },
  { name: '合作加盟', href: '#partnership' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="w-full section-padding">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>
                悍山
              </div>
              <div className={`text-xs font-medium tracking-wider transition-colors ${isScrolled ? 'text-[#ff6b35]' : 'text-white/80'}`}>
                HUMSAN
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded hover:bg-[#ff6b35]/10 ${
                    isScrolled
                      ? 'text-[#333] hover:text-[#ff6b35]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button
                className={`hidden md:block px-4 py-2 text-sm font-medium rounded transition-all duration-300 ${
                  isScrolled
                    ? 'bg-[#ff6b35] text-white hover:bg-[#e55a2b]'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                样品申请
              </button>
              
              {/* Mobile Menu Button */}
              <button
                className="xl:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className={`w-6 h-6 ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-500 xl:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 pb-6 px-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="py-3 px-4 text-left text-lg font-medium text-[#1a1a1a] hover:bg-[#f5f5f5] rounded transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button className="w-full btn-primary">样品申请</button>
          </div>
        </div>
      </div>
    </>
  );
}
