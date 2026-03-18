import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: '欧松板',
    subtitle: 'OSB Board',
    description: '定向结构刨花板，采用优质原木刨片定向铺装，具有强度高、稳定性好、环保等级高等特点。',
    specs: [
      { label: '厚度', value: '9-25mm' },
      { label: '规格', value: '1220×2440mm' },
      { label: '环保', value: 'E0/E1级' },
    ],
    image: '/hanshan/images/product-osb.jpg',
  },
  {
    id: 2,
    name: '颗粒板',
    subtitle: 'Particle Board',
    description: '优质刨花板，表面平整光滑，内部结构均匀，是家具制造和装修工程的理想基材。',
    specs: [
      { label: '厚度', value: '12-25mm' },
      { label: '规格', value: '1220×2440mm' },
      { label: '密度', value: '650-750kg/m³' },
    ],
    image: '/hanshan/images/product-particle.jpg',
  },
  {
    id: 3,
    name: '三聚氰胺板',
    subtitle: 'Melamine Board',
    description: '表面覆贴三聚氰胺浸渍纸，耐磨耐刮、防水防潮，多种花色可选，即装即用。',
    specs: [
      { label: '花色', value: '100+种' },
      { label: '耐磨', value: '≥350转' },
      { label: '耐污', value: '等级5' },
    ],
    image: '/hanshan/images/product-melamine.jpg',
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Carousel animation
      gsap.fromTo(
        carouselRef.current,
        { rotateY: 30, opacity: 0 },
        {
          rotateY: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#f5f5f5]"
    >
      <div className="w-full section-padding">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <span className="text-[#ff6b35] text-sm font-medium tracking-wider uppercase mb-2 block">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            我们的产品
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            精密工程板材，为现代空间带来自然呼吸
          </p>
        </div>

        {/* Product Carousel */}
        <div
          ref={carouselRef}
          className="relative max-w-6xl mx-auto opacity-0"
          style={{ perspective: '1000px' }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full flex-shrink-0 grid md:grid-cols-2"
                >
                  {/* Image */}
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-2">
                      <span className="text-xs text-[#999] uppercase tracking-wider">
                        {product.subtitle}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
                      {product.name}
                    </h3>
                    <p className="text-[#666] leading-relaxed mb-8">
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {product.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="text-center p-4 bg-[#f5f5f5] rounded-lg"
                        >
                          <div className="text-sm text-[#999] mb-1">{spec.label}</div>
                          <div className="text-lg font-semibold text-[#1a1a1a]">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="btn-primary w-fit flex items-center gap-2 group">
                      了解详情
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-[#ff6b35] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-[#ff6b35] hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#ff6b35] w-8'
                    : 'bg-[#ddd] hover:bg-[#bbb]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-outline inline-flex items-center gap-2 group">
            查看全部产品
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
