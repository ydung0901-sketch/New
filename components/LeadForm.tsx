import React from 'react';

const LeadForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn! Chúng tôi đã nhận được thông tin và sẽ liên hệ sớm nhất.");
  };

  return (
    <section 
      className="bg-white p-6 sm:p-12 rounded-xl max-w-6xl mx-auto w-full scroll-mt-20 border-2 border-primary shadow-2xl mb-10" 
      id="form-dang-ky"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold leading-tight tracking-[-0.015em]">
          Đừng bỏ lỡ! Ưu đãi có hạn sắp kết thúc!
        </h2>
        <p className="mt-4 text-slate-500 text-lg leading-relaxed">
          Đây là cơ hội CUỐI CÙNG để bạn nhận ưu đãi đặc biệt: <strong className="text-primary">Chỉ từ 15.900.000đ</strong> cho xét nghiệm ADN không xâm lấn và <strong className="text-primary">giảm đến 20%</strong> dịch vụ NIPT. Điền thông tin ngay bây giờ để KHÔNG BỎ LỠ cơ hội vàng này!
        </p>
        <form className="mt-8 space-y-4 text-left" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-slate-900" htmlFor="name">Họ và tên</label>
            <input 
              className="mt-1 block w-full rounded-lg border-slate-200 bg-white text-slate-900 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2 border" 
              id="name" 
              name="name" 
              placeholder="Nguyễn Văn A" 
              type="text" 
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-900" htmlFor="phone">Số điện thoại</label>
            <input 
              className="mt-1 block w-full rounded-lg border-slate-200 bg-white text-slate-900 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2 border" 
              id="phone" 
              name="phone" 
              placeholder="09xxxxxxxx" 
              type="tel" 
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-900" htmlFor="email">Email</label>
            <input 
              className="mt-1 block w-full rounded-lg border-slate-200 bg-white text-slate-900 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2 border" 
              id="email" 
              name="email" 
              placeholder="email@example.com" 
              type="email" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-900" htmlFor="message">Lời nhắn</label>
            <textarea 
              className="mt-1 block w-full rounded-lg border-slate-200 bg-white text-slate-900 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2 border" 
              id="message" 
              name="message" 
              placeholder="Tôi cần tư vấn thêm về gói ưu đãi đặc biệt này..." 
              rows={4}
            ></textarea>
          </div>
          <button 
            className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors mx-auto" 
            type="submit"
          >
            <span className="truncate">NHẬN ƯU ĐÃI ĐỘC QUYỀN NGAY!</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;