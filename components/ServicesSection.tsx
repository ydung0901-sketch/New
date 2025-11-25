import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "family_history",
      title: "Xét nghiệm ADN huyết thống",
      desc: "Giải tỏa nghi ngờ, làm giấy khai sinh, bảo lãnh di dân..."
    },
    {
      icon: "genetics",
      title: "Xét nghiệm bệnh lý di truyền",
      desc: "Thalassemia (Tan máu bẩm sinh), Thrombophilia (Tăng đông máu)..."
    },
    {
      icon: "pregnant_woman",
      title: "Xét nghiệm NIPT-PRECARE",
      desc: "Sàng lọc dị tật thai nhi trước sinh với độ chính xác đến 99.99%, an toàn 100% cho mẹ và bé"
    },
    {
      icon: "biotech",
      title: "Xét nghiệm tầm soát ung thư",
      desc: "Phát hiện sớm ung thư phổi, ung thư vú, trực tràng..."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-10 w-full scroll-mt-20" id="dich-vu">
      <div className="flex flex-col items-center gap-10 bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 p-6 sm:p-10">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold leading-tight text-center">
          Các dịch vụ khác tại GenLab
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed text-center max-w-2xl">
          GenLab không chỉ cung cấp xét nghiệm ADN không xâm lấn mà còn là đối tác tin cậy cho nhiều nhu cầu xét nghiệm di truyền khác.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 pt-0 w-full">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-slate-200 hover:shadow-md transition-shadow">
              <div className="p-3 bg-light-green-tint rounded-lg text-primary self-start">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
              <p className="text-slate-500">{service.desc}</p>
            </div>
          ))}
        </div>
        <a 
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-colors mt-4" 
          href="#form-dang-ky"
        >
          <span className="truncate">Khám phá các dịch vụ</span>
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;