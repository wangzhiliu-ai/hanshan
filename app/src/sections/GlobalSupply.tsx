import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Train } from 'lucide-react';

export default function GlobalSupply() {
  return (
    <section
      id="global-supply"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url(/images/supply-chain.jpg)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/80" />

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Train className="w-8 h-8 text-wood" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              中欧班列 · <span className="text-wood">全球供应</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              依托重庆物流集团的中欧班列优势，实现原材料全球采购、产品快速交付，
              为客户提供稳定可靠的供应链保障。
            </p>
            <Button
              variant="outline"
              className="border-wood text-wood hover:bg-wood hover:text-dark px-8"
            >
              了解供应链
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
