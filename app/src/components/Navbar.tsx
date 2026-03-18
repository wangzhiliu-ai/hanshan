import { useState, useEffect } from 'react';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { id: 'decoration-service', label: '整装服务' },
  { id: 'custom-furniture', label: '全屋定制' },
  { id: 'ready-made', label: '成品家具' },
  { id: 'flooring', label: '地板系统' },
  { id: 'bathroom', label: '洁具卫浴' },
  { id: 'appliances', label: '家电系统' },
  { id: 'materials', label: '材料选配' },
  { id: 'exterior-wall', label: '外墙系统' },
  { id: 'factory', label: '工厂直供' },
  { id: 'partnership', label: '合作加盟' },
];

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-white">
              <span className="text-xl font-bold tracking-tight">悍山易装</span>
              <span className="text-xs text-white/60 ml-2 font-light tracking-wider">Humsan</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link px-3 py-2 text-sm text-white/80 hover:text-white transition-colors ${
                  activeSection === item.id ? 'active text-white' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-wood hover:bg-wood-dark text-dark font-medium px-6"
            >
              <Phone className="w-4 h-4 mr-2" />
              联系我们
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-dark border-dark-lighter w-[300px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-white">
                    <span className="text-lg font-bold">悍山易装</span>
                    <span className="text-xs text-white/60 ml-2">Humsan</span>
                  </div>
                </div>
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-3 text-left text-white/80 hover:text-white hover:bg-dark-light rounded-lg transition-colors ${
                        activeSection === item.id ? 'bg-dark-light text-white' : ''
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                <div className="mt-auto pb-8">
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-wood hover:bg-wood-dark text-dark font-medium"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    联系我们
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
