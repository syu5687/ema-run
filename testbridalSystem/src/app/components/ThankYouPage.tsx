interface ThankYouPageProps {
  onBack: () => void;
}

export default function ThankYouPage({ onBack }: ThankYouPageProps) {
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
                      <div className="content-stretch flex flex-col gap-[40px] items-center px-4 md:px-[30px] py-[50px] relative w-full">
                        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                          <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9f941d] text-[32px] text-center w-full">送信完了</p>
                        </div>
                        
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center w-full">
                            <p className="mb-0">ブライダルフェアのご予約</p>
                            <p className="mb-0">ありがとうございました。</p>
                            <p className="mb-0">内容を確認でき次第、担当者から電話、メールにて</p>
                            <p className="mb-0">ご連絡させていただきます。</p>
                            <p className="mb-0">&nbsp;</p>
                            <p className="mb-0">2営業日経っても返信がない場合はメールが正常に届いていない場合もあります。</p>
                            <p className="mb-0">その場合には大変お手数ですが、下記連絡先へお電話いただけますと幸いです。</p>
                            <p>今後ともよろしくお願い致します。</p>
                          </div>
                        </div>
                        
                        <div className="content-stretch flex flex-col items-center pb-[15px] pt-[25px] px-[15px] relative shrink-0 w-full max-w-[350px] border-t border-[#9f941d]">
                          <div className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-black text-center w-full">
                            <p className="leading-[normal] mb-0 text-[16px]">◯◯◯◯◯◯◯◯◯</p>
                            <p className="leading-[normal]">
                              <span className="text-[16px]">TEL:</span>
                              <span className="text-[20px]">0000-00-0000</span>
                            </p>
                          </div>
                        </div>
                      </div>
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
