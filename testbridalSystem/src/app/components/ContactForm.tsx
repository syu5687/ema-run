import { useState } from "react";

interface ContactFormProps {
  onSubmit: () => void;
  onBack: () => void;
}

export default function ContactForm({ onSubmit, onBack }: ContactFormProps) {
  const [formData, setFormData] = useState({
    inquiry: "",
    visitDate: "",
    visitTime: "",
    name: "",
    furigana: "",
    phone: "",
    email: "",
    question: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto px-0 py-[30px] w-full min-h-screen">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-4 md:px-[128px] py-0 relative w-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] pb-[50px] pt-0 px-0 relative shrink-0 text-black text-center w-full">
            <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Contactform</p>
            <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
              お問い合わせ
            </p>
          </div>
          
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center px-4 md:px-[100px] py-[30px] relative w-full">
                <div className="content-stretch flex items-center relative rounded-[10px] shrink-0 w-full">
                  <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0">
                    <div className="flex flex-col items-center size-full">
                      <form onSubmit={handleSubmit} className="content-stretch flex flex-col items-center px-4 md:px-[30px] py-[50px] relative w-full">
                        <div className="flex flex-col gap-0 w-full max-w-[764px]">
                          {/* お問い合わせ */}
                          <div className="content-start flex flex-wrap gap-[5px] items-start px-[8px] py-[30px] relative shrink-0 w-full border-b border-black">
                            <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]">
                              <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
                                必須
                              </p>
                            </div>
                            <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0">
                              <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                                お問い合わせ
                              </p>
                            </div>
                            <select
                              value={formData.inquiry}
                              onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                              className="bg-white content-stretch flex items-center justify-between px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-full md:w-[543px] border border-black shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]"
                              required
                            >
                              <option value="">選択してください</option>
                              <option value="fair">ブライダルフェア予約</option>
                              <option value="inquiry">その他のお問い合わせ</option>
                            </select>
                          </div>

                          {/* 来館時間 */}
                          <div className="content-start flex flex-wrap gap-[5px] items-start px-[8px] py-[30px] relative shrink-0 w-full border-b border-black">
                            <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]">
                              <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
                                必須
                              </p>
                            </div>
                            <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0">
                              <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                                来館時間
                              </p>
                            </div>
                            <select
                              value={formData.visitTime}
                              onChange={(e) => setFormData({ ...formData, visitTime: e.target.value })}
                              className="bg-white content-stretch flex items-center justify-between px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-full md:w-[543px] border border-black shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]"
                              required
                            >
                              <option value="">選択してください</option>
                              <option value="10:30">10:30</option>
                              <option value="11:30">11:30</option>
                              <option value="14:00">14:00</option>
                            </select>
                          </div>

                          {/* 来館希望日 */}
                          <div className="content-start flex flex-wrap gap-[5px] items-start px-[8px] py-[30px] relative shrink-0 w-full border-b border-black">
                            <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]">
                              <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
                                必須
                              </p>
                            </div>
                            <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0">
                              <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                                来館希望日
                              </p>
                            </div>
                            <select
                              value={formData.visitDate}
                              onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                              className="bg-white content-stretch flex items-center justify-between px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-full md:w-[543px] border border-black shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]"
                              required
                            >
                              <option value="">選択してください</option>
                              <option value="2025-12-26">12/26 (金)</option>
                              <option value="2025-12-27">12/27 (土)</option>
                              <option value="2025-12-28">12/28 (日)</option>
                            </select>
                          </div>

                          {/* 氏名 */}
                          <div className="content-start flex flex-wrap gap-[5px] items-start px-[8px] py-[30px] relative shrink-0 w-full border-b border-black">
                            <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]">
                              <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
                                必須
                              </p>
                            </div>
                            <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0">
                              <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                                氏名
                              </p>
                            </div>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="山本花子"
                              className="bg-white px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-full md:w-[543px] border border-black shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)] font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px]"
                              required
                            />
                          </div>

                          {/* ふりがな */}
                          <div className="content-start flex flex-wrap gap-[5px] items-start px-[8px] py-[30px] relative shrink-0 w-full border-b border-black">
                            <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]">
                              <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
                                必須
                              </p>
                            </div>
                            <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0">
                              <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                                ふりがな
                              </p>
                            </div>
                            <input
                              type="text"
                              value={formData.furigana}
                              onChange={(e) => setFormData({ ...formData, furigana: e.target.value })}
                              placeholder="ひらがな"
                              className="bg-white px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-full md:w-[543px] border border-black shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)] font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px]"
                              required
                            />
                          </div>

                          {/* 連絡先電話 */}
                          <div className="content-start flex flex-wrap gap-[5px] items-start px-[8px] py-[30px] relative shrink-0 w-full border-b border-black">
                            <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]">
                              <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
                                必須
                              </p>
                            </div>
                            <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0">
                              <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                                連絡先電話
                              </p>
                            </div>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="00000000000"
                              className="bg-white px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-full md:w-[543px] border border-black shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)] font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px]"
                              required
                            />
                          </div>

                          {/* メールアドレス */}
                          <div className="content-start flex flex-wrap gap-[5px] items-start px-[8px] py-[30px] relative shrink-0 w-full border-b border-black">
                            <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]">
                              <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
                                必須
                              </p>
                            </div>
                            <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0">
                              <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                                メールアドレス
                              </p>
                            </div>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="example@email.com"
                              className="bg-white px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-full md:w-[543px] border border-black shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)] font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px]"
                              required
                            />
                          </div>

                          {/* その他、お問い合わせ内容 */}
                          <div className="content-start flex flex-wrap gap-[5px] items-start px-[8px] py-[30px] relative shrink-0 w-full">
                            <div className="bg-[#d9d9d9] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]">
                              <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-black text-center" style={{ fontVariationSettings: "'wght' 400" }}>
                                任意
                              </p>
                            </div>
                            <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0">
                              <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wght' 400" }}>
                                その他<br />お問い合わせ内容
                              </p>
                            </div>
                            <textarea
                              value={formData.question}
                              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                              placeholder="お問い合わせ"
                              rows={4}
                              className="bg-white px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-full md:w-[543px] border border-black shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)] font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] resize-none"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="bg-[#a72727] content-stretch flex items-center justify-center mt-[30px] p-[15px] relative rounded-[30px] shrink-0 w-[320px] cursor-pointer hover:bg-[#8a1f1f] transition-colors"
                        >
                          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
                            送信する
                          </p>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={onBack}
            className="content-stretch flex items-center justify-center px-0 py-[30px] relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
          >
            <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              ←戻る
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}