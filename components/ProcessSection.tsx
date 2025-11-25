import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyvQcYEiu-x4JAlT7iZXi9zezZ5kaG3x1qz7--YT4r7ZWHh2wrqkEKEECCajCnK3ELRIXMIBgiejeMQ6ylYZDKxlnzV_Yme0bTs4ZPR1cKHP_By8K9C4EEb7eR58LJoh6S-wfJaD49yOmMNR9j1XxOi54OhAcfyifQ7A9VMmuhrgM6hKk6Z_DKvevWzUuAiEd0Vu9BSeopKNEN5SWoTYAiwul-slTjbH7iFBb7jtHOEa1KIIA-Y0z4o2HfA4zaFw7Ea7P8jdgHEqQ",
      title: "1. Tiếp nhận & Tư vấn",
      desc: "Lắng nghe và giải đáp mọi thắc mắc của bạn với sự tận tâm."
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7vyF5d1PNyxeinCBz7w6utOIpeYLt_WYtofzWjItiKsO2RAduO9hy6cVmPpaKRFvCP2a4n_I5cCiuqs4IrFakh8nO097ku5NF0qyWLR6NQxkAbNfJ4X0iR4N7bmUTdSG4fMCJzP9CGX1wUX1qsJaTxB2ry3d306OSzonDBd36PCMGhGXJ4yLbK2NwwIBK12-UCsWqSMeVCgnNPAAcCobrnMyoG7CvAVp-HYIu8-jwzetPHbQtxc9jQsqdPIJHR5ggMB0FehIc0Mc",
      title: "2. Thu mẫu xét nghiệm",
      desc: "Quy trình lấy mẫu nhanh chóng, an toàn và riêng tư."
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdHtn9Hg9D9FU0FrtQbkD0LTiiDqXpQM1lNy473kuYvnt3LuB4erZUaNjLyF5jsmm2LQ2SxMhSlMbcJLPeX-v7X9rRtu50HG8S0xTH91AoFOMHcPTnWUbp8T1pnv-DI16rvx-WwptJPkgaHWVquSD7qJIA5e_hbB1kWlVCjbYwNB17jkuqUMUrSoYSxfL6BFCCnOAvnxlzH-HNihj3l-hDux4xKfJL6SJJ3KS87EN_Bsz843Fv0jqit2k8FEDV0yaOBZ43zS3ly6A",
      title: "3. Phân tích Gen",
      desc: "Sử dụng công nghệ hiện đại nhất để đảm bảo độ chính xác."
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI_Sl7SdDUgWmLWLlfwrJoDR6jwtBGiKiiBl6jNczp5uyAAk8ZJCumszlI4pO1VpIEV98YcROvGBSK07u4wC6K8njBXWl8q3THm7UlU08cBY6ljt1rCII63HQ4S9IMVWDKb0p1Q7G21gKiMVpFkr_cYP_QTLkneXOIj-IvQa_79XvG6fW3iee7U8iTzH1xc-xTn46Ak0N1a6RzHqu6rB3X2jH-BG8-r7OhPYajSHvL_PDEZ25ybnD6hT7ECmnV7boQl8hWq8DM1eg",
      title: "4. Trả kết quả",
      desc: "Kết quả được gửi đến bạn một cách bảo mật và nhanh chóng."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-10 w-full scroll-mt-20" id="cau-chuyen-3">
      <div className="flex flex-col items-center gap-10 bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 p-6 sm:p-10">
        <span className="text-primary text-sm font-semibold tracking-wide uppercase">Minh bạch & Hiệu quả</span>
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold leading-tight text-center">
          Hành trình từ tư vấn đến kết quả
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4">
              <img 
                className="w-full h-48 object-cover rounded-lg shadow-md" 
                alt={step.title} 
                src={step.img} 
              />
              <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>
        <a 
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-colors mt-4" 
          href="#form-dang-ky"
        >
          <span className="truncate">Bắt đầu hành trình của bạn</span>
        </a>
      </div>
    </section>
  );
};

export default ProcessSection;