import svgPaths from "../../imports/svg-mvzs8tlsue";
import img202512241127281 from "figma:asset/2c1d0558d965ea5ac85ac39bc1a35c3e9f9d3bf8.png";
import img202512251528572 from "figma:asset/bd10158297bc77e0a85e96c79fdd80f38c570bcf.png";
import { useState } from "react";

function Tag({ label }: { label: string }) {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        {label}
      </p>
    </div>
  );
}

function RecommendFairCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full max-w-[293px]">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[15px] py-[20px] relative w-full">
            <div className="content-stretch flex font-['Shippori_Mincho',sans-serif] gap-[10px] items-end leading-[normal] not-italic relative shrink-0 text-black text-center text-nowrap w-full">
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
              <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
            </div>
            
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263 1">
                  <line stroke="var(--stroke-0, black)" x2="263" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
            
            <div className="content-stretch flex font-['Shippori_Mincho',sans-serif] items-center justify-between leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center w-full">
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

function SearchResultCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip p-[20px] relative rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="content-stretch flex gap-[20px] items-start relative w-full">
        <div className="content-stretch flex flex-col font-['Shippori_Mincho',sans-serif] items-center justify-center leading-[normal] not-italic p-[10px] relative shrink-0 size-[80px] text-black text-center text-nowrap">
          <p className="relative shrink-0 text-[25px]">12/26</p>
          <p className="relative shrink-0 text-[16px]">（金）</p>
        </div>
        
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col gap-[15px] items-start relative w-full">
            <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                  12/23 サブタイトルサブタイトルサブタイトルサブタイトルサブタイトルサブタイトルサブタイトルサブタイトルサブタイトルサブタイトルサブタイトルサブタイトルサブタイトルサブタイトルサブタイトル
                </p>
                
                <div className="content-center flex flex-wrap gap-[10px] items-center relative shrink-0 w-full">
                  <Tag label="少人数向け" />
                  <Tag label="試食会" />
                </div>
              </div>
              
              <div className="relative shrink-0 size-[100px]">
                <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="aspect-[410/320] relative shrink-0 w-full">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512241127281} />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 574 1">
                  <line stroke="black" x2="574" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
            
            <div className="content-stretch flex gap-[30px] items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex font-['Shippori_Mincho',sans-serif] gap-[10px] items-center leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
                <p className="relative shrink-0">10:30</p>
                <p className="relative shrink-0">/</p>
                <p className="relative shrink-0">11:30</p>
                <p className="relative shrink-0">/</p>
                <p className="relative shrink-0">14:00</p>
              </div>
              
              <button
                onClick={onClick}
                className="bg-[#a72727] content-stretch flex items-center justify-center p-[10px] relative rounded-[30px] shrink-0 cursor-pointer hover:bg-[#8a1f1f] transition-colors"
              >
                <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
                  詳しく見る
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BridalArchive({ onViewDetail, onBack }: { onViewDetail: (id: number) => void; onBack: () => void }) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const categories = ["平日開催", "土日祝開催", "試食会", "ギフト券つき", "ドレス試着", "相談会"];
  
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Calendar data for December 2025
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const calendarDays = [
    [null, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, null, null, null]
  ];

  const handleSearch = () => {
    // Search logic here
    console.log('Selected date:', selectedDate);
    console.log('Selected categories:', selectedCategories);
  };

  return (
    <div className="bg-[#ececec] content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto px-0 py-[30px] w-full min-h-screen">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-4 md:px-[128px] py-0 relative w-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] pb-[50px] pt-0 px-0 relative shrink-0 text-black text-center w-full">
            <p className="font-['Shippori_Mincho',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Bridal Fair</p>
            <p className="font-['Shippori_Mincho',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
              ブライダルフェア
            </p>
          </div>
          
          <div className="content-stretch flex flex-col font-['Shippori_Mincho',sans-serif] gap-[10px] items-center leading-[normal] not-italic pb-[10px] pt-0 px-0 relative shrink-0 text-black text-center w-full max-w-[1024px]">
            <p className="relative shrink-0 text-[32px] w-full">Recommend Fair</p>
            <p className="relative shrink-0 text-[16px] w-full">おすすめのブライダルフェア</p>
          </div>
          
          <div className="relative shrink-0 w-full mb-8">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-start flex flex-wrap gap-[40px] items-start justify-center p-[30px] relative w-full">
                {[1, 2, 3].map((i) => (
                  <RecommendFairCard key={i} onClick={() => onViewDetail(i)} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white content-stretch flex flex-col gap-[30px] items-center px-4 md:px-[30px] py-[40px] relative rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full max-w-[824px]">
            <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full">
              <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9f941d] text-[25px] text-center w-full">
                Search Fair
              </p>
              <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                検索
              </p>
            </div>
            
            {/* Date Selection */}
            <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full border-t border-black pt-[20px]">
              <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full text-center" style={{ fontVariationSettings: "'wght' 400" }}>
                ご希望日を選択
              </p>
              
              {/* Calendar */}
              <div className="bg-[#e5e5e5] content-stretch flex flex-col gap-[10px] items-center p-[20px] relative rounded-[5px] shrink-0 w-full max-w-[400px]">
                <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-black text-center w-full">
                  December 2025
                </p>
                
                {/* Days of week header */}
                <div className="grid grid-cols-7 gap-[5px] w-full">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="content-stretch flex items-center justify-center p-[5px]">
                      <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] text-[14px] text-black text-center">
                        {day}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Calendar grid */}
                {calendarDays.map((week, weekIndex) => (
                  <div key={weekIndex} className="grid grid-cols-7 gap-[5px] w-full">
                    {week.map((day, dayIndex) => {
                      if (day === null) {
                        return <div key={dayIndex} className="aspect-square" />;
                      }
                      
                      const isSelected = selectedDate === day;
                      const is27 = day === 27;
                      const is28 = day === 28;
                      
                      return (
                        <button
                          key={dayIndex}
                          onClick={() => setSelectedDate(day)}
                          className={`aspect-square border border-black flex items-center justify-center cursor-pointer transition-colors ${
                            isSelected ? 'bg-[#9f941d]' : 'bg-white'
                          }`}
                        >
                          <p className={`font-['Shippori_Mincho',sans-serif] leading-[normal] text-[16px] text-center ${
                            is27 ? 'text-[#0000ff]' : is28 ? 'text-[#ff0000]' : isSelected ? 'text-white' : 'text-[#999]'
                          }`} style={{ fontVariationSettings: "'wght' 400" }}>
                            {day}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Category Selection */}
            <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full border-t border-black pt-[20px]">
              <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full text-center" style={{ fontVariationSettings: "'wght' 400" }}>
                カテゴリーを選択
              </p>
              
              <div className="grid grid-cols-3 gap-[20px] w-full max-w-[650px]">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`content-stretch flex items-center justify-center px-[20px] py-[15px] relative rounded-[5px] shrink-0 cursor-pointer transition-colors ${
                      selectedCategories.includes(category)
                        ? 'bg-[#9f941d]'
                        : 'bg-[#666]'
                    }`}
                  >
                    <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
                      {category}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={handleSearch}
              className="bg-[#a72727] content-stretch flex items-center justify-center px-[40px] py-[15px] relative rounded-[30px] shrink-0 cursor-pointer hover:bg-[#8a1f1f] transition-colors"
            >
              <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
                検索する
              </p>
            </button>
          </div>
          
          <div className="content-stretch flex flex-col items-center px-0 py-[30px] relative shrink-0 w-full">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1024 1">
                  <line stroke="black" x2="1024" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="content-stretch flex flex-col gap-[10px] items-start px-0 py-[10px] relative shrink-0 w-full max-w-[824px]">
            <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
              □□ 件が該当しました
            </p>
            <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
              フェアがある日は以下の様に表示されます
            </p>
          </div>
          
          <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full max-w-[824px] mb-8">
            {[1, 2, 3].map((i) => (
              <SearchResultCard key={i} onClick={() => onViewDetail(i)} />
            ))}
          </div>
          
          <button
            onClick={onBack}
            className="content-stretch flex items-center justify-center px-0 py-[30px] relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
          >
            <p className="font-['Shippori_Mincho',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              ←戻る
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}