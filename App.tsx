import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import ProcessSection from './components/ProcessSection';
import TrustSection from './components/TrustSection';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesSection from './components/ServicesSection';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display bg-slate-50">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <main className="flex flex-1 justify-center py-5 sm:py-10 px-0">
          <div className="layout-content-container flex flex-col w-full flex-1 gap-12 sm:gap-16">
            
            <Hero />

            <FeatureSection 
              id="cau-chuyen-1"
              badge="An toàn & Sớm nhất"
              title="Yên tâm từ những ngày đầu tiên"
              description="Với công nghệ xét nghiệm ADN không xâm lấn, bạn có thể xác định quan hệ huyết thống chính xác từ tuần thai thứ 7. Phương pháp này an toàn tuyệt đối, không gây rủi ro cho mẹ và bé, mang lại sự bình yên sớm nhất cho gia đình."
              points={[
                { icon: 'health_and_safety', text: 'An toàn 100% cho thai nhi' },
                { icon: 'calendar_month', text: 'Thực hiện sớm từ tuần thứ 7' }
              ]}
              buttonText="Tìm hiểu thêm"
              buttonLink="#form-dang-ky"
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuArhYjK3m9WmXqXp2LyMg2zvLXPGTU47ltf2qoUXjdlAPDC95DifajtH35NiWtc_sSN4USAten1kFqzJuRWRS-loROu_RdTyFXTWccTQih8APOE5498ZO17jMzsi25EH5JcTEV9hx134Y4ATGYRvuNFncyqOpIkmbXxChwPTj6zsNN9vPMKaF9fCxJJX7v8YYYFqQ6S7j_iN9cnYsNt2cTqvQwQmBOIYwBuYSC2iw0UOhC_D61quCwljoz3e4_KmH1CQcDOkoK_xN8"
              imageAlt="Pregnant woman smiling"
            />

            <FeatureSection 
              id="cau-chuyen-2"
              badge="Đơn giản & Tiện lợi"
              title="Phương pháp lấy mẫu đơn giản và an toàn"
              description="Việc lấy mẫu ADN tại GenLab vô cùng đơn giản và thuận tiện. Chỉ cần 10ml máu của người mẹ và mẫu từ người cha giả định (máu, tóc, móng tay...), chúng tôi sẽ thực hiện phần còn lại. Quy trình nhanh chóng, đảm bảo sự thoải mái tối đa."
              points={[
                { icon: 'bloodtype', text: '10ml máu thai phụ đơn giản' },
                { icon: 'science', text: 'Đa dạng mẫu cha giả định' },
                { icon: 'support_agent', text: 'GenLab hỗ trợ thu mẫu tại nhà 24/7' }
              ]}
              buttonText="Liên hệ ngay"
              buttonLink="#form-dang-ky"
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBCc1n3hj4O9x8dA4IEoe4AJMDYs6OQ6jFi6jZ_EDYAbd_hHviRpSpQMAHQqE1CS58dqp4aSrA8YG4GTyVpZQc7C4UlDphaolWlD1R1e-YJ_tXUHW7D2EcmyJpCFUMkRs17cZ9MLssVAvf-8Km-CSKCsAJzQWPLExrEZ8tgVxS9LCupI1KEmjHSszWzkr_7ZeaO9ej9z5c0UIpyRGJ_vkYEd7DDrPkp6SFXIC05K0nH60u0Cc2ReQ-C3cSiijbL4ZDBqtZzokXTyi4"
              imageAlt="Doctor holding sample"
              reversed={true}
            />

            <ProcessSection />

            <TrustSection />

            <WhyChooseUs />

            <ServicesSection />

            <LeadForm />

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;