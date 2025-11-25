import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="min-h-[600px] flex items-center justify-center bg-cover bg-center text-center px-4 sm:px-10 py-20" 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiAoOpd0kh6ZnTL4UHoxF5llRsVjetrhso_FKilSMLw5qaoiAmYh3h7JVXt9q5af0iWUHgZVnpCZQxe-4ecjpCTbEu4JYU0SSo7BWjh-AbnaxRCTtiS_4Wa4B9VI5LkklgmGBAMR2CxoDv2dsgPkXx6T924qSYvzrg2RoTVbeumpxZsqvdgcwBY1WPY8SKrX3XShHyL8d7BnVKBjSdbjiDj-qHNlLWAwjQtAMrTfTZIgjAXfAatG8XDv9pMkFwujlpBIaOnIP1nF8")`
      }}
    >
      <div className="max-w-3xl flex flex-col items-center gap-6">
        <h1 className="text-white text-5xl font-extrabold leading-tight tracking-[-0.03em] sm:text-6xl sm:leading-tight">
          Ưu đãi vàng có hạn: <br className="sm:hidden" /> An tâm chỉ trong tầm tay!
        </h1>
        <p className="text-white text-xl font-medium leading-relaxed">
          Đừng bỏ lỡ! Xác định cha cho thai nhi không xâm lấn <strong className="text-yellow-300">chỉ từ 15.990.000đ</strong> (Giá gốc 25.000.000đ) và tặng kèm <strong className="text-yellow-300">ưu đãi đến 20% dịch vụ xét nghiệm NIPT</strong>. Cơ hội có hạn, an toàn tuyệt đối cho mẹ và bé, mang lại bình yên cho gia đình bạn.
        </p>
        <a 
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors" 
          href="#form-dang-ky"
        >
          <span className="truncate">Đăng ký ngay để nhận ưu đãi!</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;