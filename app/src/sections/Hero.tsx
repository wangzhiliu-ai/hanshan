import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Background text animation
      tl.fromTo(
        bgTextRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 0.05, duration: 1.5 }
      );

      // Image animation
      tl.fromTo(
        imageRef.current,
        { y: 100, rotateX: 10, opacity: 0 },
        { y: 0, rotateX: 0, opacity: 1, duration: 1.2 },
        '-=1'
      );

      // Title animation
      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.8'
      );

      // Subtitle animation
      tl.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      );

      // Description animation
      tl.fromTo(
        descRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        '-=0.4'
      );

      // Badge animation
      tl.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      );

      // Buttons animation
      tl.fromTo(
        buttonsRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.2'
      );

      // Floating animation for image
      gsap.to(imageRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[#1a1a1a] overflow-hidden grain-overlay"
    >
      {/* Background Text */}
      <div
        ref={bgTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[30vw] text-white opacity-0">悍山</span>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full section-padding py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1
                ref={titleRef}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 opacity-0"
              >
                悍山<span className="text-[#ff6b35]">易装</span>
              </h1>
              
              <p
                ref={subtitleRef}
                className="text-xl md:text-2xl text-white/90 mb-6 opacity-0"
              >
                国企品质 · 整装系统服务商
              </p>
              
              <p
                ref={descRef}
                className="text-base md:text-lg text-white/70 mb-8 max-w-lg opacity-0"
              >
                工业美学与有机温暖的完美融合。探索我们精选的欧松板、颗粒板与三聚氰胺板系列，为现代空间带来自然呼吸。
              </p>

              <div
                ref={badgeRef}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 opacity-0"
              >
                <span className="w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse"></span>
                <span className="text-sm text-white/80">国企品质 · 中欧合作 · 全球供应</span>
              </div>

              <div ref={buttonsRef} className="flex flex-wrap gap-4 opacity-0">
                <button
                  onClick={() => scrollToSection('#products')}
                  className="btn-primary flex items-center gap-2 group"
                >
                  探索系列
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="btn-outline border-white/30 text-white hover:bg-white hover:text-[#1a1a1a]"
                >
                  了解更多
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div
                ref={imageRef}
                className="relative w-full max-w-md lg:max-w-lg opacity-0"
                style={{ perspective: '1000px' }}
              >
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/hanshan/images/hero-products.jpg"
                    alt="悍山板材产品"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-xl">
                  <div className="text-3xl font-bold text-[#ff6b35]">30万+</div>
                  <div className="text-sm text-[#666]">年产能(立方米)</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-[#ff6b35] rounded-lg p-4 shadow-xl">
                  <div className="text-3xl font-bold text-white">99.8%</div>
                  <div className="text-sm text-white/80">合格率</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <span className="text-xs tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f5f5] to-transparent"></div>
    </section>
  );
}
