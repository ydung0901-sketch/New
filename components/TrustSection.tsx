import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-10 w-full scroll-mt-20" id="cau-chuyen-4">
      <div className="flex flex-col items-center gap-10 bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 p-6 sm:p-10">
        <span className="text-primary text-sm font-semibold tracking-wide uppercase">Minh chứng tin cậy</span>
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold leading-tight text-center">
          Kết quả chính xác, niềm tin vững bền
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed text-center max-w-2xl">
          GenLab cam kết mang đến kết quả xét nghiệm ADN không xâm lấn với độ chính xác lên đến 99.99%, giúp bạn có được sự rõ ràng và yên tâm mà mình xứng đáng.
        </p>
        <img 
          className="w-full max-w-4xl mx-auto rounded-lg shadow-xl border border-slate-200" 
          alt="GenLab DNA test result document sample" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWdKSwUD4B2P8_KaZAVZz0eo5JERZgj-apNI3MsfAMib8PH1cwOM_pqJ3IjTLs_ccWagzPuUON758g74DCizCjBKeIqr6nvWVci1ukAlrtdcbIbj3aVBtCuDcpIJ8UMaDwWlGgDPLahvM2-c5feIQceUQZEeKMlGQqe1qi5wdpmP77vFZ25JcDrZ1AMg0m9S7bL0HQR4qg7NzyiwHq-8ZxoBMcVci6OZ7SlZ9TmW9210e7W-8Fv6b7J0j8o9OoU8PLcm2VaqAho0I" 
        />
        <a 
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-colors mt-4" 
          href="#form-dang-ky"
        >
          <span className="truncate">Nhận kết quả của bạn</span>
        </a>
      </div>
    </section>
  );
};

export default TrustSection;