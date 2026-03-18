import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Train, ArrowRight, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const routePoints = [
  { name: '重庆', x: 65, y: 55 },
  { name: '西安', x: 60, y: 45 },
  { name: '乌鲁木齐', x: 35, y: 35 },
  { name: '阿拉山口', x: 30, y: 32 },
  { name: '杜伊斯堡', x: 8, y: 28 },
  { name: '汉堡', x: 10, y: 25 },
];

export default function SupplyChain() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const trainRef = useRef<HTMLDivElement>(null);

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

      // Path drawing animation
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // Train animation along path
      if (trainRef.current && pathRef.current) {
        gsap.to(trainRef.current, {
          motionPath: {
            path: pathRef.current,
            align: pathRef.current,
            alignOrigin: [0.5, 0.5],
          },
          duration: 3,
          ease: 'none',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // Map fade in
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="factory"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="w-full section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div ref={titleRef} className="mb-8 opacity-0">
              <span className="text-[#ff6b35] text-sm font-medium tracking-wider uppercase mb-2 block">
                Global Supply Chain
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
                中欧班列 · 全球供应
              </h2>
              <p className="text-[#666] leading-relaxed">
                依托重庆物流集团的中欧班列优势，实现原材料全球采购、产品快速交付，为客户提供稳定可靠的供应链保障。
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                { title: '欧洲原材料直采', desc: '德国、奥地利、俄罗斯等优质林区' },
                { title: '15天快速交付', desc: '中欧班列直达，比海运节省60%时间' },
                { title: '全程溯源追踪', desc: '从林场到工厂，每批材料可追溯' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 bg-[#f5f5f5] rounded-xl"
                >
                  <div className="w-10 h-10 bg-[#ff6b35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Train className="w-5 h-5 text-[#ff6b35]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#666]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-primary flex items-center gap-2 group">
              了解供应链
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Map */}
          <div ref={mapRef} className="relative opacity-0">
            <div className="relative bg-[#f8f8f8] rounded-2xl p-8">
              {/* Map Title */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#ff6b35]" />
                <span className="text-sm font-medium text-[#333]">中欧班列线路图</span>
              </div>

              {/* SVG Map */}
              <svg
                viewBox="0 0 100 70"
                className="w-full h-auto"
                style={{ minHeight: '300px' }}
              >
                {/* Simplified world map background */}
                <defs>
                  <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                    <circle cx="0.5" cy="0.5" r="0.3" fill="#e0e0e0" />
                  </pattern>
                </defs>
                <rect width="100" height="70" fill="url(#grid)" rx="8" />

                {/* Route Path */}
                <path
                  ref={pathRef}
                  d="M 65 55 Q 62 50 60 45 Q 55 40 35 35 Q 32 33 30 32 Q 20 30 8 28"
                  fill="none"
                  stroke="#ff6b35"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                />

                {/* Route Points */}
                {routePoints.map((point, index) => (
                  <g key={point.name}>
                    {/* Pulse animation for points */}
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="2"
                      fill="#ff6b35"
                      opacity="0.3"
                    >
                      <animate
                        attributeName="r"
                        values="2;4;2"
                        dur="2s"
                        repeatCount="indefinite"
                        begin={`${index * 0.3}s`}
                      />
                      <animate
                        attributeName="opacity"
                        values="0.3;0;0.3"
                        dur="2s"
                        repeatCount="indefinite"
                        begin={`${index * 0.3}s`}
                      />
                    </circle>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="1.5"
                      fill="#ff6b35"
                    />
                    <text
                      x={point.x}
                      y={point.y - 3}
                      textAnchor="middle"
                      fontSize="3"
                      fill="#333"
                      fontWeight="500"
                    >
                      {point.name}
                    </text>
                  </g>
                ))}
              </svg>

              {/* Train Icon */}
              <div
                ref={trainRef}
                className="absolute w-8 h-8 bg-[#ff6b35] rounded-full flex items-center justify-center shadow-lg"
                style={{ top: 0, left: 0 }}
              >
                <Train className="w-4 h-4 text-white" />
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { value: '15天', label: '运输周期' },
                  { value: '11000km', label: '线路全长' },
                  { value: '每周2班', label: '发车频次' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl font-bold text-[#ff6b35]">{stat.value}</div>
                    <div className="text-xs text-[#666]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
