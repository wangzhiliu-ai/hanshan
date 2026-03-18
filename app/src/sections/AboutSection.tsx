import ScrollReveal from '@/components/ScrollReveal';
import CountUp from '@/components/CountUp';

const stats = [
  { value: 50, suffix: '+', label: '年行业经验', decimals: 0 },
  { value: 1000, suffix: '+', label: '合作伙伴', decimals: 0 },
  { value: 30, suffix: '万', label: '年产能(立方米)', decimals: 0 },
  { value: 99.9, suffix: '%', label: '合格率', decimals: 1 },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-dark section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <ScrollReveal>
            <div>
              <span className="text-wood text-sm tracking-wider uppercase mb-4 block">
                About Humsan
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                关于悍山 · <span className="text-wood">自然呼吸</span>
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  悍山品牌隶属于重庆物流集团旗下中欧木业，是国资委控股的国有企业。我们秉承"尊重自然、环保先行"的理念，致力于为全球客户提供高品质的板材产品与整装系统服务。
                </p>
                <p>
                  依托中欧班列的国际物流优势，我们从欧洲、俄罗斯、泰国等地精选优质原材料，引进德国温康纳等世界顶尖生产设备。今天，悍山已从单一板材供应商，升级为涵盖全屋定制、成品家具、地板、洁具、家电、外墙系统等在内的整装系统服务商。
                </p>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['国企背书', '全球采购', '德系设备'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-dark-light border border-white/10 text-white/80 text-sm rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Stats */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-dark-light border border-white/10 rounded-xl p-6 lg:p-8 text-center card-hover"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wood mb-2">
                    <CountUp end={stat.value} duration={2000} decimals={stat.decimals} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
