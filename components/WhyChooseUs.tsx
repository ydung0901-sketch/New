import React, { useState } from 'react';

type TabType = 'gioi-thieu' | 'cong-nghe' | 'chuyen-gia';

const WhyChooseUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('gioi-thieu');

  const getTabClass = (tabName: TabType) => {
    return activeTab === tabName
      ? 'text-primary border-b-primary font-bold border-b-2'
      : 'text-slate-900 border-transparent font-medium hover:text-primary transition-colors border-b-2';
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-10 w-full scroll-mt-20" id="why-genlab">
      <div className="flex flex-col items-center gap-8 bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 p-6 sm:p-10">
        <span className="text-primary text-sm font-semibold tracking-wide uppercase">Vì sao lựa chọn GenLab</span>
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold leading-tight text-center">Nền tảng cho sự yên tâm của bạn</h2>
        
        <div className="w-full">
          <div className="border-b border-slate-200">
            <nav aria-label="Tabs" className="-mb-px flex justify-center space-x-4 sm:space-x-8">
              <button 
                onClick={() => setActiveTab('gioi-thieu')} 
                className={`whitespace-nowrap py-4 px-1 text-base sm:text-lg ${getTabClass('gioi-thieu')}`}
              >
                Giới thiệu
              </button>
              <button 
                onClick={() => setActiveTab('cong-nghe')} 
                className={`whitespace-nowrap py-4 px-1 text-base sm:text-lg ${getTabClass('cong-nghe')}`}
              >
                Công nghệ
              </button>
              <button 
                onClick={() => setActiveTab('chuyen-gia')} 
                className={`whitespace-nowrap py-4 px-1 text-base sm:text-lg ${getTabClass('chuyen-gia')}`}
              >
                Đội ngũ chuyên gia
              </button>
            </nav>
          </div>

          <div className="pt-8 min-h-[400px]">
            {activeTab === 'gioi-thieu' && (
              <div className="flex flex-col items-center gap-6 animate-in fade-in duration-300">
                <p className="text-slate-500 text-lg leading-relaxed text-center max-w-3xl">
                  GenLab tự hào là đơn vị tiên phong trong lĩnh vực xét nghiệm di truyền tại Việt Nam, mang đến các giải pháp toàn diện với độ chính xác cao nhất. Chúng tôi hiểu rằng mỗi kết quả xét nghiệm không chỉ là con số mà còn là sự an tâm, là nền tảng cho những quyết định quan trọng. Xem video để hiểu rõ hơn về quy trình, công nghệ và đội ngũ chuyên gia tận tâm tại GenLab.
                </p>
                <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
                  <iframe 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                    className="w-full h-full" 
                    frameBorder="0" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Introduction Video"
                  ></iframe>
                </div>
              </div>
            )}

            {activeTab === 'cong-nghe' && (
              <div className="flex flex-col items-center gap-8 animate-in fade-in duration-300">
                <p className="text-slate-500 text-lg leading-relaxed text-center max-w-3xl">
                  Chúng tôi đầu tư vào hệ thống trang thiết bị hiện đại bậc nhất, được nhập khẩu từ các thương hiệu hàng đầu thế giới như Illumina, Thermo Fisher Scientific. Điều này đảm bảo mọi quy trình phân tích đều đạt tiêu chuẩn quốc tế, mang lại kết quả chính xác và đáng tin cậy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  <div className="flex flex-col gap-4">
                    <img alt="Hệ thống giải trình tự Gen" className="w-full h-56 object-cover rounded-lg shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbVs80613t9ZjrtkionXsHjpjB_Y5be1jrPulRe3ed9tweMcsPkeJ-6sW4mSerlYVIQWAag-RBelFvjyr_x4aivGcS5Uy_N0KqbYvdtOjcyOATPKdG1OBYZHkgxGCuoqPZpKkz6RPD6cK9AFvMgnDCVlhMDwZGylqY5tTvnVziqR0jUE6LtLIfmpV1t4nvTHQPfJGkNUCLI6uwBE_K_zbhXRvi_kg_InmhzES6ZyXqnMt1TlmlRa77qdhtBIuDuvF6rGahweM6jKk" />
                    <h3 className="text-xl font-bold text-slate-900">Hệ thống giải trình tự Gen</h3>
                    <p className="text-slate-500">Công nghệ giải trình tự thế hệ mới (NGS) cho phép phân tích ADN với tốc độ và độ chính xác vượt trội.</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <img alt="Máy Real-time PCR" className="w-full h-56 object-cover rounded-lg shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmnIKrQfr29eza19jP1FEzhJhIyfcxTG4o_fFJRFmj_Dx0gMrnfQ2nI4MBSqm5B5bIVg1HhwrVWMQVZgXpCWPDGY5q5_IiIpmcVdfswoXEweBo009sXyiBINMTjfnbZsWgMjg-JpC7bBKpp_pWVekqNJ9coYfugAJ_0-p1toZtEB2ztJnbjBg5w9rifWVCYtLs-_LzBUJgUDjDNVsE5AoJBVZ02fLeCARkkWoQyX_eH9JjHd9vF3Opjcr3Bbph_6BHDP3qwg7JGGo" />
                    <h3 className="text-xl font-bold text-slate-900">Máy Real-time PCR</h3>
                    <p className="text-slate-500">Hệ thống PCR định lượng, giúp khuếch đại và phát hiện các đoạn ADN đặc hiệu một cách nhanh chóng.</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <img alt="Phòng Lab đạt chuẩn ISO" className="w-full h-56 object-cover rounded-lg shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyfpjHOsCFeZAqz_dSxb2NjETWiD4Sd6gUkJDxt-Ij2WXEawarNGqequM70oDNcw1EJRTGEkiJkQ378VE2rmOh5XRdaYU2wNmBXJlIUHwzskuCaf8DDdpnb-Nf0EpmPTkBtOo5_0keKUvwxCJLlBmNT13sn6apL54BGrZ-OsCOJO7z5yHAw1Lneb2B4qwRdLhowM2Q5H4Lv7un9yXzcLrzoPu5btJJMQyCCDYtMcHEAOGzybAH4x7N2J0Elo_xPCFzw3vaNIiPpT8" />
                    <h3 className="text-xl font-bold text-slate-900">Phòng Lab đạt chuẩn ISO</h3>
                    <p className="text-slate-500">Môi trường phòng sạch được kiểm soát nghiêm ngặt, đảm bảo không xảy ra lây nhiễm chéo mẫu.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'chuyen-gia' && (
              <div className="flex flex-col items-center gap-8 animate-in fade-in duration-300">
                <p className="text-slate-500 text-lg leading-relaxed text-center max-w-3xl">
                  Đội ngũ của GenLab là sự kết hợp giữa các chuyên gia di truyền học, bác sĩ và kỹ thuật viên dày dặn kinh nghiệm. Chúng tôi không ngừng học hỏi và cập nhật những kiến thức mới nhất để mang đến dịch vụ tư vấn và phân tích tốt nhất cho khách hàng.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                  <div className="flex flex-col items-center text-center gap-4">
                    <img alt="GS.TS. Nguyễn Văn A" className="w-36 h-36 rounded-full object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiWTx1L-WmwByr9BQ55orn0Zz0fpMBmIzu5wrEQEUq3nCwIr7oVD0d6jgBk7ebOZ2yU1Q5APcVQ8D_GDI7r-ZKaE4Pz4TxY5VnKUvhYVsnThPvsyw2eaCK_AsoqFfUvorHusuCu6Vr2kYaP2AUdsxPTGbZuvtNQxlTZ9bSHnEiPVOcwJniRz2vJmckGP-KqEYnpFut_nIU9wDyBgcHSWacfiZBSGDfV2uZtVe8AkEqVGkK36BqqQeYjR53a7MWZfD6wjumYoJ3ve0" />
                    <h3 className="text-xl font-bold text-slate-900">GS.TS. Nguyễn Văn A</h3>
                    <p className="text-primary-dark-blue font-semibold">Cố vấn Chuyên môn</p>
                    <p className="text-slate-500">Hơn 20 năm kinh nghiệm trong lĩnh vực Di truyền Y học, từng công tác tại các viện nghiên cứu hàng đầu.</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-4">
                    <img alt="ThS. Trần Thị B" className="w-36 h-36 rounded-full object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxoaY_7fVlw5WAhlZGM-UJ0wHtqHypS-3G_qtvCkDRiiIWJ_Oa8t95i_l_vZTa7wkOlW5D4xw4aiTdqnoju2uU072JBEa-nyHwWgIXf7aTP0gjvdtz8nmO7_jlEwW39dMtw5k12T5tzzCdBAgXI4Q92L4IkNX4sn2fvRazGNJt1XdT0ifqKqdFKahoFIxByjEWt5AUyItSHWALvB0nZ5i_9nc3b3KoRaeppm-H9RD3zNyozz27lLtSvKoRCDBRBBMfylj9fB3qYc0" />
                    <h3 className="text-xl font-bold text-slate-900">ThS. Trần Thị B</h3>
                    <p className="text-primary-dark-blue font-semibold">Trưởng phòng Xét nghiệm</p>
                    <p className="text-slate-500">Chuyên gia về công nghệ giải trình tự gen thế hệ mới, có nhiều công trình nghiên cứu được công bố quốc tế.</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-4">
                    <img alt="BS. Lê Văn C" className="w-36 h-36 rounded-full object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbc4zDJWJkg3ZLIXydl-3Amws2NSM8F7-2acdKLEVH8AkTcye6QeQOmjwZnAILm7HM9m0g9ogd4JQR9rCUqSa0UBEgJmdLJ3K1jizKC_KlaA3Tx48x3kBm3AO2Pu8CY9Oiy2_rTVzDz4OU177akTNzmjx_WuPOfFH9-QQDD2F9Ra7IxVYUKWNZylRIA4VkJvO-gCbCAf-epJMAPPBIiepPm8aurAHnFLuvaJ4bWsbnCkDJ0p4f63aRy28CosQ6d24Owh3mutAQEjU" />
                    <h3 className="text-xl font-bold text-slate-900">BS. Lê Văn C</h3>
                    <p className="text-primary-dark-blue font-semibold">Bác sĩ Tư vấn Di truyền</p>
                    <p className="text-slate-500">Tận tâm và giàu kinh nghiệm trong việc tư vấn các bệnh lý di truyền, giúp hàng ngàn gia đình có lựa chọn đúng đắn.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;