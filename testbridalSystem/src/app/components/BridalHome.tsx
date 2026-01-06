import img202512241127281 from "figma:asset/2c1d0558d965ea5ac85ac39bc1a35c3e9f9d3bf8.png";

interface FairData {
  id: number;
  date: string;
  dayOfWeek: string;
  title: string;
  tags: string[];
  times: string[];
  image: string;
}

const fairsData: FairData[] = [
  {
    id: 1,
    date: "12/26",
    dayOfWeek: "金",
    title: "タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル",
    tags: ["少人数向け", "ドレス試着", "平日開催", "試食会"],
    times: ["10:30", "11:30", "14:00"],
    image: img202512241127281,
  },
  {
    id: 2,
    date: "12/27",
    dayOfWeek: "土",
    title: "タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル",
    tags: ["少人数向け", "ドレス試着", "平日開催", "試食会"],
    times: ["10:30", "11:30", "14:00"],
    image: img202512241127281,
  },
  {
    id: 3,
    date: "12/28",
    dayOfWeek: "日",
    title: "タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル",
    tags: ["少人数向け", "ドレス試着", "平日開催", "試食会"],
    times: ["10:30", "11:30", "14:00"],
    image: img202512241127281,
  },
];

function FairCard({ fair, onClick }: { fair: FairData; onClick: () => void }) {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full max-w-[293px]">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[15px] py-[20px] relative w-full">
            <div className="content-stretch flex font-['Shippori_Mincho',sans-serif] gap-[10px] items-end leading-[normal] not-italic relative shrink-0 text-black text-center text-nowrap w-full">
              <p className="relative shrink-0 text-[28px]">{fair.date}</p>
              <p className="relative shrink-0 text-[22px]">（{fair.dayOfWeek}）</p>
            </div>
            
            <div className="content-stretch flex flex-col h-[210px] items-center justify-center overflow-clip relative shrink-0 w-full">
              <div className="aspect-[410/320] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={fair.image} />
              </div>
            </div>
            
            <div className="content-center flex flex-wrap gap-[10px] items-center relative shrink-0 w-full">
              {fair.tags.map((tag, index) => (
                <div key={index} className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
                  <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
                    {tag}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
              <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">{fair.title}</p>
            </div>
            
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263 1">
                  <line stroke="var(--stroke-0, black)" x2="263" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
            
            <div className="content-stretch flex font-['Shippori_Mincho',sans-serif] items-center justify-between leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center w-full">
              {fair.times.flatMap((time, index) => {
                const elements = [<p key={`time-${index}`} className="basis-0 grow min-h-px min-w-px relative shrink-0">{time}</p>];
                if (index < fair.times.length - 1) {
                  elements.push(<p key={`sep-${index}`} className="relative shrink-0 text-nowrap">/</p>);
                }
                return elements;
              })}
            </div>
            
            <button
              onClick={onClick}
              className="content-stretch flex flex-col items-center justify-center pb-0 pt-[5px] px-0 relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
            >
              <p className="[text-underline-position:from-font] decoration-solid font-['Shippori_Mincho',sans-serif] leading-[normal] relative shrink-0 text-[#9f941d] text-[16px] text-nowrap text-right underline" style={{ fontVariationSettings: "'wght' 400" }}>
                詳しく見る→
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BridalHome({ onViewDetail, onViewArchive }: { onViewDetail: (id: number) => void; onViewArchive: () => void }) {
  return (
    <div className="bg-[#ececec] content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto px-0 py-[30px] w-full min-h-screen">
      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] relative shrink-0 text-black text-center w-full">
          <p className="font-['Shippori_Mincho',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Bridal Fair</p>
          <p className="font-['Shippori_Mincho',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            ブライダルフェア
          </p>
        </div>
        
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-start flex flex-wrap gap-[40px] items-start justify-center p-[30px] relative w-full">
              {fairsData.map((fair) => (
                <FairCard key={fair.id} fair={fair} onClick={() => onViewDetail(fair.id)} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="content-stretch flex flex-col items-center px-0 py-[30px] relative shrink-0 w-full">
          <button
            onClick={onViewArchive}
            className="bg-[#a72727] content-stretch flex items-center justify-center p-[15px] relative rounded-[30px] shrink-0 cursor-pointer hover:bg-[#8a1f1f] transition-colors"
          >
            <p className="font-['Shippori_Mincho',sans-serif] h-[27px] leading-[normal] relative shrink-0 text-[20px] text-center text-white w-[300px]" style={{ fontVariationSettings: "'wght' 400" }}>
              全てのブライダルフェアを見る
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
