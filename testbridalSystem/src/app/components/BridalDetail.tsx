import img202512241127283 from "figma:asset/5896f57db98375b0cba81cbd2c9df1d6f148a178.png";
import img202512251151161 from "figma:asset/cb660c2bb73152f9bc267ed57cba98f9fa914b97.png";
import img202512241127281 from "figma:asset/2c1d0558d965ea5ac85ac39bc1a35c3e9f9d3bf8.png";

function Tag({ label }: { label: string }) {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        {label}
      </p>
    </div>
  );
}

function FlowItem({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="bg-white content-start flex flex-wrap gap-[15px] items-start justify-center px-[40px] py-[30px] relative rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full max-w-[600px]">
      <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="content-stretch flex flex-col items-center justify-center pb-[10px] pt-0 px-0 relative shrink-0 w-full">
          <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-full">{title}</p>
        </div>
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            {description}
          </p>
        </div>
      </div>
      <div className="basis-0 grow h-[224.201px] min-h-px min-w-px relative shrink-0">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[38px] py-0 relative size-full">
            <div className="h-[346px] relative shrink-0 w-[274px]">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecommendFairCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full max-w-[293px]">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[15px] py-[20px] relative w-full">
            <div className="content-stretch flex font-['Noto_Serif_JP:Bold',sans-serif] gap-[10px] items-end leading-[normal] not-italic relative shrink-0 text-black text-center text-nowrap w-full">
              <p className="relative shrink-0 text-[28px]">12/26</p>
              <p className="relative shrink-0 text-[22px]">（金）</p>
            </div>
            
            <div className="content-stretch flex flex-col h-[210px] items-center justify-center overflow-clip relative shrink-0 w-full">
              <div className="aspect-[410/320] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512241127281} />
              </div>
            </div>
            
            <div className="content-center flex flex-wrap gap-[10px] items-center relative shrink-0 w-full">
              <Tag label="少人数向け" />
              <Tag label="ドレス試着" />
              <Tag label="平日開催" />
              <Tag label="試食会" />
            </div>
            
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
              <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
            </div>
            
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263 1">
                  <line stroke="var(--stroke-0, black)" x2="263" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
            
            <div className="content-stretch flex font-['Noto_Serif_JP:Regular',sans-serif] items-center justify-between leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center w-full">
              <p className="basis-0 grow min-h-px min-w-px relative shrink-0">10:30</p>
              <p className="relative shrink-0 text-nowrap">/</p>
              <p className="basis-0 grow min-h-px min-w-px relative shrink-0">11:30</p>
              <p className="relative shrink-0 text-nowrap">/</p>
              <p className="basis-0 grow min-h-px min-w-px relative shrink-0">14:00</p>
            </div>
            
            <button
              onClick={onClick}
              className="content-stretch flex flex-col items-center justify-center pb-0 pt-[5px] px-0 relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
            >
              <p className="[text-underline-position:from-font] decoration-solid font-['Noto_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_Symbols:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#9f941d] text-[16px] text-nowrap text-right underline" style={{ fontVariationSettings: "'wght' 400" }}>
                詳しく見る→
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BridalDetail({ onBack, onOpenContact }: { onBack: () => void; onOpenContact: () => void }) {
  const flowItems = [
    {
      title: "あああああ",
      description: "あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ120",
      image: img202512251151161,
    },
    {
      title: "あああああ",
      description: "あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ120",
      image: img202512251151161,
    },
    {
      title: "あああああ",
      description: "あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ120",
      image: img202512251151161,
    },
  ];

  return (
    <div className="bg-[#ececec] content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto px-0 py-[30px] w-full min-h-screen">
      <div className="relative shrink-0 w-full">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center px-4 md:px-[128px] py-0 relative w-full">
            <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] pb-[50px] pt-0 px-0 relative shrink-0 text-black text-center w-full">
              <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Bridal Fair</p>
              <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                ブライダルフェア
              </p>
            </div>
            
            <div className="relative shrink-0 w-full">
              <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center px-4 md:px-[100px] py-[30px] relative w-full">
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center px-4 md:px-[30px] py-[50px] relative shrink-0 w-full max-w-[824px] mx-auto">
                      <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-center justify-center leading-[normal] p-[10px] relative shrink-0 size-[100px] text-[32px] text-black text-nowrap">
                          <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0">12/23</p>
                          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>
                            (水)
                          </p>
                        </div>
                        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                          <div className="flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] h-[54px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
                            <p className="leading-[normal]">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                          </div>
                          <div className="content-start flex flex-wrap gap-[10px] items-start px-0 py-[10px] relative shrink-0 w-full">
                            <Tag label="少人数向け" />
                            <Tag label="ドレス試着" />
                            <Tag label="平日開催" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="content-stretch flex h-[433px] items-start overflow-clip relative shrink-0 w-full max-w-[764px]">
                        <div className="h-[433px] relative shrink-0 w-full">
                          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512241127283} />
                        </div>
                      </div>
                      
                      <div className="relative shrink-0 w-full">
                        <div className="content-stretch flex items-start p-[15px] relative w-full">
                          <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wght' 400" }}>
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                          </p>
                        </div>
                      </div>
                      
                      <div className="relative shrink-0 w-full">
                        <div className="flex flex-col items-center size-full">
                          <div className="content-stretch flex flex-col items-center px-4 md:px-[60px] py-0 relative w-full">
                            <div className="bg-[rgba(159,148,29,0.1)] relative shrink-0 w-full">
                              <div className="flex flex-col items-center size-full">
                                <div className="content-stretch flex flex-col items-center px-[35px] py-[25px] relative w-full">
                                  <div className="content-center flex flex-wrap gap-[30px] items-center justify-center px-0 py-[15px] relative shrink-0 w-full">
                                    <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[10px] grow items-center leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px]">
                                      <p className="relative shrink-0 text-[#9f941d] text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                                        【来館特典】
                                      </p>
                                      <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト235
                                      </p>
                                    </div>
                                    <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[10px] grow items-center leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px]">
                                      <p className="relative shrink-0 text-[#9f941d] text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                                        【成約特典】
                                      </p>
                                      <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                      </p>
                                    </div>
                                  </div>
                                  <div className="h-0 relative shrink-0 w-full">
                                    <div className="absolute inset-[-1px_0_0_0]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 574 1">
                                        <line stroke="black" x2="574" y1="0.5" y2="0.5" />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="content-stretch flex flex-col items-center px-0 py-[15px] relative shrink-0 w-full">
                                    <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト180
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="content-stretch flex flex-col items-center pb-[10px] pt-[30px] px-0 relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                          <div className="flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9f941d] text-[25px] text-center w-full">
                            <p className="leading-[normal]">当日の流れ</p>
                          </div>
                        </div>
                      </div>
                      
                      {flowItems.map((item, index) => (
                        <FlowItem key={index} title={item.title} description={item.description} image={item.image} />
                      ))}
                      
                      <button
                        onClick={onOpenContact}
                        className="bg-[#a72727] content-stretch flex items-center justify-center p-[15px] relative rounded-[30px] shrink-0 cursor-pointer hover:bg-[#8a1f1f] transition-colors"
                      >
                        <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[27px] leading-[normal] relative shrink-0 text-[20px] text-center text-white w-[300px]" style={{ fontVariationSettings: "'wght' 400" }}>
                          フェアを予約する
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="content-stretch flex flex-col items-center relative shrink-0">
              <div className="content-stretch flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] gap-[10px] items-center leading-[normal] not-italic pb-[10px] pt-0 px-0 relative shrink-0 text-black text-center w-full max-w-[1024px]">
                <p className="relative shrink-0 text-[32px] w-full">Recommend Fair</p>
                <p className="relative shrink-0 text-[16px] w-full">おすすめのブライダルフェア</p>
              </div>
              
              <div className="relative shrink-0 w-full">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-start flex flex-wrap gap-[40px] items-start justify-center p-[30px] relative w-full">
                    {[1, 2, 3].map((i) => (
                      <RecommendFairCard key={i} onClick={() => {}} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <button
              onClick={onBack}
              className="content-stretch flex items-center justify-center px-0 py-[30px] relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
            >
              <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_Symbols:Regular',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                ←戻る
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}