import svgPaths from "./svg-mvzs8tlsue";
import img202512241127281 from "figma:asset/2c1d0558d965ea5ac85ac39bc1a35c3e9f9d3bf8.png";
import img202512251528572 from "figma:asset/bd10158297bc77e0a85e96c79fdd80f38c570bcf.png";
import img202512241127282 from "figma:asset/5896f57db98375b0cba81cbd2c9df1d6f148a178.png";

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] pb-[50px] pt-0 px-0 relative shrink-0 text-black text-center w-full" data-name="title">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Bridal Fair</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        ブライダルフェア
      </p>
    </div>
  );
}

function Subtitle() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] gap-[10px] items-center leading-[normal] not-italic pb-[10px] pt-0 px-0 relative shrink-0 text-black text-center w-[1024px]" data-name="subtitle">
      <p className="relative shrink-0 text-[32px] w-full">Recommend Fair</p>
      <p className="relative shrink-0 text-[16px] w-full">おすすめのブライダルフェア</p>
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex font-['Noto_Serif_JP:Bold',sans-serif] gap-[10px] items-end leading-[normal] not-italic relative shrink-0 text-black text-center text-nowrap w-full" data-name="time">
      <p className="relative shrink-0 text-[28px]">12/26</p>
      <p className="relative shrink-0 text-[22px]">（金）</p>
    </div>
  );
}

function PictureThum() {
  return (
    <div className="content-stretch flex flex-col h-[210px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="pictureThum">
      <div className="aspect-[410/320] relative shrink-0 w-full" data-name="スクリーンショット 2025-12-24 11.27.28 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512241127281} />
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        少人数向け
      </p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        ドレス試着
      </p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        平日開催
      </p>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        試食会
      </p>
    </div>
  );
}

function Categories() {
  return (
    <div className="content-center flex flex-wrap gap-[10px] items-center relative shrink-0 w-full" data-name="categories">
      <Tag />
      <Tag1 />
      <Tag2 />
      <Tag3 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="title">
      <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
    </div>
  );
}

function Time1() {
  return (
    <div className="content-stretch flex font-['Noto_Serif_JP:Regular',sans-serif] items-center justify-between leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center w-full" data-name="time">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">10:30</p>
      <p className="relative shrink-0 text-nowrap">/</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">11:30</p>
      <p className="relative shrink-0 text-nowrap">/</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">14:00</p>
    </div>
  );
}

function MoreBtn() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-0 pt-[5px] px-0 relative shrink-0 w-full" data-name="moreBtn">
      <p className="[text-underline-position:from-font] decoration-solid font-['Noto_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_Symbols:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#9f941d] text-[16px] text-nowrap text-right underline" style={{ fontVariationSettings: "'wght' 400" }}>
        詳しく見る→
      </p>
    </div>
  );
}

function Inner() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="inner">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[15px] py-[20px] relative w-full">
          <Time />
          <PictureThum />
          <Categories />
          <Title1 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263 1">
                <line id="Line 1" stroke="var(--stroke-0, black)" x2="263" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Time1 />
          <MoreBtn />
        </div>
      </div>
    </div>
  );
}

function FairContents() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[293px]" data-name="fairContents">
      <Inner />
    </div>
  );
}

function FairRecommend() {
  return (
    <div className="relative shrink-0 w-full" data-name="fairRecommend">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-start flex flex-wrap gap-[40px] items-start justify-center p-[30px] relative w-full">
          {[...Array(3).keys()].map((_, i) => (
            <FairContents key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FairReco() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="fairReco">
      <Subtitle />
      <FairRecommend />
    </div>
  );
}

function Subtitle1() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] gap-[10px] items-center leading-[normal] not-italic pb-[10px] pt-0 px-0 relative shrink-0 text-black text-center w-[1024px]" data-name="subtitle">
      <p className="relative shrink-0 text-[32px] w-full">Search Fair</p>
      <p className="relative shrink-0 text-[16px] w-full">検索</p>
    </div>
  );
}

function MiniTitle() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[5px] relative shrink-0 w-full" data-name="miniTitle">
      <div aria-hidden="true" className="absolute border-[#9f941d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[20px] text-black text-center" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">ご希望日を選択</p>
      </div>
    </div>
  );
}

function SelectCal() {
  return (
    <div className="content-stretch flex flex-col items-start px-[10px] py-0 relative shrink-0" data-name="selectCal">
      <div className="h-[362px] relative shrink-0 w-[366px]" data-name="スクリーンショット 2025-12-25 15.28.57 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.1%] max-w-none top-0 w-[201.84%]" src={img202512251528572} />
        </div>
      </div>
    </div>
  );
}

function CalenderSelect() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[15px] grow items-center min-h-px min-w-px relative shrink-0" data-name="calenderSelect">
      <MiniTitle />
      <SelectCal />
    </div>
  );
}

function MiniTitle1() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[5px] relative shrink-0 w-full" data-name="miniTitle">
      <div aria-hidden="true" className="absolute border-[#9f941d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[20px] text-black text-center" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">カテゴリーを選択</p>
      </div>
    </div>
  );
}

function SelectCat() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">平日開催</p>
      </div>
    </div>
  );
}

function SelectCat1() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">土日祝開催</p>
      </div>
    </div>
  );
}

function SelectCat2() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">試食会</p>
      </div>
    </div>
  );
}

function SelectCat3() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">ギフト券つき</p>
      </div>
    </div>
  );
}

function SelectCat4() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">ドレス試着</p>
      </div>
    </div>
  );
}

function SelectCat5() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">相談会</p>
      </div>
    </div>
  );
}

function SelectCatego() {
  return (
    <div className="relative shrink-0 w-full" data-name="selectCatego">
      <div className="content-start flex flex-wrap gap-[10px] items-start p-[10px] relative w-full">
        <SelectCat />
        <SelectCat1 />
        <SelectCat2 />
        <SelectCat3 />
        <SelectCat4 />
        <SelectCat5 />
      </div>
    </div>
  );
}

function CategotiesSelect() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[15px] grow items-center min-h-px min-w-px relative shrink-0" data-name="categotiesSelect">
      <MiniTitle1 />
      <SelectCatego />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-start flex flex-wrap gap-[30px] items-start justify-center px-[30px] py-[10px] relative w-full">
          <CalenderSelect />
          <CategotiesSelect />
        </div>
      </div>
    </div>
  );
}

function SelectBtn() {
  return (
    <div className="bg-[#a72727] content-stretch flex items-center justify-center p-[15px] relative rounded-[30px] shrink-0" data-name="selectBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[27px] leading-[normal] relative shrink-0 text-[20px] text-center text-white w-[300px]" style={{ fontVariationSettings: "'wght' 400" }}>
        検索する
      </p>
    </div>
  );
}

function Wrap() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[30px] items-center px-0 py-[45px] relative shrink-0 w-full" data-name="wrap">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none" />
      <Subtitle1 />
      <Frame />
      <SelectBtn />
    </div>
  );
}

function FairSelect() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="fairSelect">
      <Wrap />
    </div>
  );
}

function SearchDate() {
  return (
    <div className="bg-black content-stretch flex items-center relative shrink-0" data-name="searchDate">
      <div className="flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[40px] justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white w-[156px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">日付</p>
      </div>
    </div>
  );
}

function SearchSelectDate() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[5px] pr-0 py-0 relative self-stretch shrink-0" data-name="searchSelectDate">
      <div className="flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px] text-black w-[668px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">日付</p>
      </div>
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="date">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <SearchDate />
      <SearchSelectDate />
    </div>
  );
}

function SearchDate1() {
  return (
    <div className="bg-black content-stretch flex items-center relative shrink-0" data-name="searchDate">
      <div className="flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[40px] justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white w-[156px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">カテゴリー</p>
      </div>
    </div>
  );
}

function SearchSelectDate1() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[5px] pr-0 py-0 relative self-stretch shrink-0" data-name="searchSelectDate">
      <div className="flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px] text-black w-[668px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">平日開催,試食会,ドレス試着</p>
      </div>
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="date">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <SearchDate1 />
      <SearchSelectDate1 />
    </div>
  );
}

function SearchAreaResult() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="searchAreaResult">
      <Date />
      <Date1 />
    </div>
  );
}

function FairDate() {
  return (
    <div className="content-stretch flex items-start p-[10px] relative shrink-0" data-name="fairDate">
      <div className="font-['Noto_Serif_JP:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center text-nowrap">
        <p className="mb-0">12/26</p>
        <p>(木)</p>
      </div>
    </div>
  );
}

function Time2() {
  return (
    <div className="bg-[rgba(159,148,29,0.15)] content-stretch flex flex-col items-start justify-center px-0 py-[30px] relative rounded-br-[10px] shrink-0" data-name="time">
      <FairDate />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="title">
      <p className="basis-0 font-['Noto_Serif_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[0px] text-[20px] text-black">60タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        少人数向け
      </p>
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        平日開催
      </p>
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        ドレス試着
      </p>
    </div>
  );
}

function CategotiesArea() {
  return (
    <div className="content-center flex flex-wrap gap-[5px_20px] h-[26px] items-center px-0 py-[10px] relative shrink-0 w-full" data-name="categotiesArea">
      <Tag4 />
      <Tag5 />
      <Tag6 />
    </div>
  );
}

function PictureArea() {
  return (
    <div className="bg-[#3c1b1b] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[230px]" data-name="pictureArea">
      <div className="h-[224px] relative shrink-0 w-[395px]" data-name="スクリーンショット 2025-12-24 11.27.28 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512241127282} />
      </div>
    </div>
  );
}

function TimeValue() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[normal] relative shrink-0 text-[16px] text-black" data-name="timeValue">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols:Regular',sans-serif] relative shrink-0 w-[18px]" style={{ fontVariationSettings: "'wght' 400" }}>
        ◯
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-nowrap">11:00~</p>
    </div>
  );
}

function ReservBtn() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[5px] relative rounded-[5px] shrink-0" data-name="reservBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_Symbols:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#9f941d] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        この時間に予約する→
      </p>
    </div>
  );
}

function TimeShift() {
  return (
    <div className="relative shrink-0 w-full" data-name="timeShift">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-dashed inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap items-center justify-between p-[10px] relative w-full">
          <TimeValue />
          <ReservBtn />
        </div>
      </div>
    </div>
  );
}

function FairText() {
  return (
    <div className="bg-[rgba(159,148,29,0.15)] relative shrink-0 w-full" data-name="fairText">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[15px] py-[20px] relative w-full">
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            【開催時間】
          </p>
          {[...Array(3).keys()].map((_, i) => (
            <TimeShift key={i} />
          ))}
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-right w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            所要時間　3時間
          </p>
        </div>
      </div>
    </div>
  );
}

function FairBtn7() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0" data-name="fairBtn02">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[5px] relative rounded-[inherit]">
        <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#a72727] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          特典の表示
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a72727] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function FairBtn8() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[35px] items-center justify-center overflow-clip px-[20px] py-[5px] relative rounded-[10px] shrink-0 w-[130px]" data-name="fairBtn03">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        詳しく見る
      </p>
    </div>
  );
}

function BtnArea() {
  return (
    <div className="content-center flex flex-wrap gap-[27px] items-center justify-end relative shrink-0 w-full" data-name="btnArea">
      <FairBtn7 />
      <FairBtn8 />
    </div>
  );
}

function FairTextArea() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[25px] grow items-start min-h-px min-w-px relative shrink-0" data-name="fairTextArea">
      <FairText />
      <BtnArea />
    </div>
  );
}

function FairContent() {
  return (
    <div className="content-start flex flex-wrap gap-[24px_10px] items-start relative shrink-0 w-full" data-name="fairContent">
      <PictureArea />
      <FairTextArea />
    </div>
  );
}

function ItemWrap() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="itemWrap">
      <Title2 />
      <CategotiesArea />
      <FairContent />
    </div>
  );
}

function MoreBtn1() {
  return (
    <div className="relative shrink-0 w-full" data-name="moreBtn">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[15px] items-center justify-center px-[180px] py-[5px] relative w-full">
          <div className="flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">
            <p className="leading-[normal]">他2件のフェアを表示</p>
          </div>
          <div className="h-[8px] relative shrink-0 w-[15px]">
            <div className="absolute inset-[-4.27%_-2.43%_-9.14%_-2.43%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7295 9.07303">
                <path d={svgPaths.p3845abc0} id="Vector 1" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FairBox() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="fairBox">
      <div className="content-stretch flex flex-col gap-[19px] items-start p-[20px] relative w-full">
        <ItemWrap />
        <MoreBtn1 />
      </div>
    </div>
  );
}

function Inner1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="inner">
      <Time2 />
      <FairBox />
    </div>
  );
}

function FairArchiveItem() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="fairArchiveItem">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Inner1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FairDate1() {
  return (
    <div className="content-stretch flex items-start p-[10px] relative shrink-0" data-name="fairDate">
      <div className="font-['Noto_Serif_JP:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center text-nowrap">
        <p className="mb-0">12/27</p>
        <p>(金)</p>
      </div>
    </div>
  );
}

function Time3() {
  return (
    <div className="bg-[rgba(159,148,29,0.15)] content-stretch flex flex-col items-start justify-center px-0 py-[30px] relative rounded-br-[10px] shrink-0" data-name="time">
      <FairDate1 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="title">
      <p className="basis-0 font-['Noto_Serif_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[0px] text-[20px] text-black">60タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
    </div>
  );
}

function Tag7() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        少人数向け
      </p>
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        平日開催
      </p>
    </div>
  );
}

function Tag9() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        ドレス試着
      </p>
    </div>
  );
}

function CategotiesArea1() {
  return (
    <div className="content-center flex flex-wrap gap-[5px_20px] h-[26px] items-center px-0 py-[10px] relative shrink-0 w-full" data-name="categotiesArea">
      <Tag7 />
      <Tag8 />
      <Tag9 />
    </div>
  );
}

function PictureArea1() {
  return (
    <div className="bg-[#3c1b1b] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[230px]" data-name="pictureArea">
      <div className="h-[224px] relative shrink-0 w-[395px]" data-name="スクリーンショット 2025-12-24 11.27.28 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512241127282} />
      </div>
    </div>
  );
}

function TimeValue1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[normal] relative shrink-0 text-[16px] text-black" data-name="timeValue">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols:Regular',sans-serif] relative shrink-0 w-[18px]" style={{ fontVariationSettings: "'wght' 400" }}>
        ◯
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-nowrap">11:00~</p>
    </div>
  );
}

function ReservBtn1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[5px] relative rounded-[5px] shrink-0" data-name="reservBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_Symbols:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#9f941d] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        この時間に予約する→
      </p>
    </div>
  );
}

function TimeShift1() {
  return (
    <div className="relative shrink-0 w-full" data-name="timeShift">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-dashed inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap items-center justify-between p-[10px] relative w-full">
          <TimeValue1 />
          <ReservBtn1 />
        </div>
      </div>
    </div>
  );
}

function FairText1() {
  return (
    <div className="bg-[rgba(159,148,29,0.15)] relative shrink-0 w-full" data-name="fairText">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[15px] py-[20px] relative w-full">
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            【開催時間】
          </p>
          {[...Array(3).keys()].map((_, i) => (
            <TimeShift1 key={i} />
          ))}
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-right w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            所要時間　3時間
          </p>
        </div>
      </div>
    </div>
  );
}

function FairBtn() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0" data-name="fairBtn02">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[5px] relative rounded-[inherit]">
        <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#a72727] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          特典の表示
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a72727] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function FairBtn1() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[35px] items-center justify-center overflow-clip px-[20px] py-[5px] relative rounded-[10px] shrink-0 w-[130px]" data-name="fairBtn03">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        詳しく見る
      </p>
    </div>
  );
}

function BtnArea1() {
  return (
    <div className="content-center flex flex-wrap gap-[27px] items-center justify-end relative shrink-0 w-full" data-name="btnArea">
      <FairBtn />
      <FairBtn1 />
    </div>
  );
}

function FairTextArea1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[25px] grow items-start min-h-px min-w-px relative shrink-0" data-name="fairTextArea">
      <FairText1 />
      <BtnArea1 />
    </div>
  );
}

function FairContent1() {
  return (
    <div className="content-start flex flex-wrap gap-[24px_10px] items-start relative shrink-0 w-full" data-name="fairContent">
      <PictureArea1 />
      <FairTextArea1 />
    </div>
  );
}

function ItemWrap1() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="itemWrap">
      <Title3 />
      <CategotiesArea1 />
      <FairContent1 />
    </div>
  );
}

function MoreBtn2() {
  return (
    <div className="relative shrink-0 w-full" data-name="moreBtn">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[15px] items-center justify-center px-[180px] py-[5px] relative w-full">
          <div className="flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">
            <p className="leading-[normal]">他2件のフェアを表示</p>
          </div>
          <div className="h-[8px] relative shrink-0 w-[15px]">
            <div className="absolute inset-[-4.27%_-2.43%_-9.14%_-2.43%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7295 9.07303">
                <path d={svgPaths.p3845abc0} id="Vector 1" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FairBox1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="fairBox">
      <div className="content-stretch flex flex-col gap-[19px] items-start p-[20px] relative w-full">
        <ItemWrap1 />
        <MoreBtn2 />
      </div>
    </div>
  );
}

function Inner2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="inner">
      <Time3 />
      <FairBox1 />
    </div>
  );
}

function FairArchiveItem1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="fairArchiveItem">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Inner2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FairAll() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="fairAll">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-center px-[100px] py-[50px] relative w-full">
          <SearchAreaResult />
          <FairArchiveItem />
          <FairArchiveItem1 />
        </div>
      </div>
    </div>
  );
}

function Wrap1() {
  return (
    <div className="relative shrink-0 w-full" data-name="wrap">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[128px] py-[30px] relative w-full">
          <Title />
          <FairReco />
          <FairSelect />
          <FairAll />
        </div>
      </div>
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute bg-[#ececec] content-stretch flex flex-col items-start left-[64px] overflow-x-clip overflow-y-auto px-0 py-[30px] top-[100px] w-[1280px]" data-name="Desktop">
      <Wrap1 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] pb-[50px] pt-0 px-0 relative shrink-0 text-black text-center w-full" data-name="title">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Bridal Fair</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        ブライダルフェア
      </p>
    </div>
  );
}

function Subtitle2() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] gap-[10px] items-center leading-[normal] not-italic pb-[10px] pt-0 px-0 relative shrink-0 text-black text-center w-[700px]" data-name="subtitle">
      <p className="relative shrink-0 text-[32px] w-full">Recommend Fair</p>
      <p className="relative shrink-0 text-[16px] w-full">おすすめのブライダルフェア</p>
    </div>
  );
}

function FairRecommend1() {
  return <div className="shrink-0 w-full" data-name="fairRecommend" />;
}

function FairReco1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="fairReco">
      <Subtitle2 />
      <FairRecommend1 />
    </div>
  );
}

function Subtitle3() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] gap-[10px] items-center leading-[normal] not-italic pb-[10px] pt-0 px-0 relative shrink-0 text-black text-center w-full" data-name="subtitle">
      <p className="relative shrink-0 text-[32px] w-full">Search Fair</p>
      <p className="relative shrink-0 text-[16px] w-full">検索</p>
    </div>
  );
}

function MiniTitle2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[5px] relative shrink-0 w-full" data-name="miniTitle">
      <div aria-hidden="true" className="absolute border-[#9f941d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px] text-black text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">ご希望日を選択</p>
      </div>
    </div>
  );
}

function SelectCal1() {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0" data-name="selectCal">
      <div className="h-[362px] relative shrink-0 w-[366px]" data-name="スクリーンショット 2025-12-25 15.28.57 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.1%] max-w-none top-0 w-[201.84%]" src={img202512251528572} />
        </div>
      </div>
    </div>
  );
}

function CalenderSelect1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="calenderSelect">
      <MiniTitle2 />
      <SelectCal1 />
    </div>
  );
}

function MiniTitle3() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[5px] relative shrink-0 w-full" data-name="miniTitle">
      <div aria-hidden="true" className="absolute border-[#9f941d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[20px] text-black text-center" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">カテゴリーを選択</p>
      </div>
    </div>
  );
}

function SelectCat6() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">平日開催</p>
      </div>
    </div>
  );
}

function SelectCat7() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">土日祝開催</p>
      </div>
    </div>
  );
}

function SelectCat8() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">試食会</p>
      </div>
    </div>
  );
}

function SelectCat9() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">ギフト券つき</p>
      </div>
    </div>
  );
}

function SelectCat10() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">ドレス試着</p>
      </div>
    </div>
  );
}

function SelectCat11() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">相談会</p>
      </div>
    </div>
  );
}

function SelectCatego1() {
  return (
    <div className="relative shrink-0 w-full" data-name="selectCatego">
      <div className="flex flex-row justify-center size-full">
        <div className="content-start flex flex-wrap gap-[15px_10px] items-start justify-center px-[10px] py-0 relative w-full">
          <SelectCat6 />
          <SelectCat7 />
          <SelectCat8 />
          <SelectCat9 />
          <SelectCat10 />
          <SelectCat11 />
        </div>
      </div>
    </div>
  );
}

function CategotiesSelect1() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full" data-name="categotiesSelect">
      <MiniTitle3 />
      <SelectCatego1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-center px-[30px] py-[10px] relative w-full">
          <CalenderSelect1 />
          <CategotiesSelect1 />
        </div>
      </div>
    </div>
  );
}

function SelectBtn1() {
  return (
    <div className="bg-[#a72727] content-stretch flex items-center justify-center p-[15px] relative rounded-[30px] shrink-0" data-name="selectBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[27px] leading-[normal] relative shrink-0 text-[20px] text-center text-white w-[300px]" style={{ fontVariationSettings: "'wght' 400" }}>
        検索する
      </p>
    </div>
  );
}

function Wrap2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="wrap">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-center px-[30px] py-[45px] relative w-full">
          <Subtitle3 />
          <Frame1 />
          <SelectBtn1 />
        </div>
      </div>
    </div>
  );
}

function FairSelect1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="fairSelect">
      <Wrap2 />
    </div>
  );
}

function SearchDate2() {
  return (
    <div className="bg-black content-stretch flex items-center relative shrink-0" data-name="searchDate">
      <div className="flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[40px] justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white w-[156px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">日付</p>
      </div>
    </div>
  );
}

function SearchSelectDate2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="searchSelectDate">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[5px] pr-0 py-0 relative size-full">
          <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[20px] text-black" style={{ fontVariationSettings: "'wght' 400" }}>
            日付
          </p>
        </div>
      </div>
    </div>
  );
}

function Date2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="date">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <SearchDate2 />
      <SearchSelectDate2 />
    </div>
  );
}

function SearchDate3() {
  return (
    <div className="bg-black content-stretch flex items-center relative shrink-0" data-name="searchDate">
      <div className="flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[40px] justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white w-[156px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">カテゴリー</p>
      </div>
    </div>
  );
}

function SearchSelectDate3() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[5px] pr-0 py-0 relative self-stretch shrink-0" data-name="searchSelectDate">
      <div className="flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px] text-black w-[668px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">平日開催,試食会,ドレス試着</p>
      </div>
    </div>
  );
}

function Date3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="date">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <SearchDate3 />
      <SearchSelectDate3 />
    </div>
  );
}

function SearchAreaResult1() {
  return (
    <div className="relative shrink-0 w-full" data-name="searchAreaResult">
      <div className="content-stretch flex flex-col gap-[20px] items-start px-[20px] py-0 relative w-full">
        <Date2 />
        <Date3 />
      </div>
    </div>
  );
}

function FairDate2() {
  return (
    <div className="content-stretch flex items-start p-[10px] relative shrink-0" data-name="fairDate">
      <div className="font-['Noto_Serif_JP:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center text-nowrap">
        <p className="mb-0">12/26</p>
        <p>(木)</p>
      </div>
    </div>
  );
}

function Time4() {
  return (
    <div className="bg-[rgba(159,148,29,0.15)] content-stretch flex flex-col items-start justify-center px-0 py-[30px] relative rounded-br-[10px] shrink-0" data-name="time">
      <FairDate2 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="title">
      <p className="basis-0 font-['Noto_Serif_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[0px] text-[20px] text-black">60タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
    </div>
  );
}

function Tag10() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        少人数向け
      </p>
    </div>
  );
}

function Tag11() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        平日開催
      </p>
    </div>
  );
}

function Tag12() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        ドレス試着
      </p>
    </div>
  );
}

function CategotiesArea2() {
  return (
    <div className="content-center flex flex-wrap gap-[5px_20px] h-[26px] items-center px-0 py-[10px] relative shrink-0 w-full" data-name="categotiesArea">
      <Tag10 />
      <Tag11 />
      <Tag12 />
    </div>
  );
}

function PictureArea2() {
  return (
    <div className="bg-[#3c1b1b] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[230px]" data-name="pictureArea">
      <div className="h-[224px] relative shrink-0 w-[395px]" data-name="スクリーンショット 2025-12-24 11.27.28 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512241127282} />
      </div>
    </div>
  );
}

function TimeValue2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[normal] relative shrink-0 text-[16px] text-black" data-name="timeValue">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols:Regular',sans-serif] relative shrink-0 w-[18px]" style={{ fontVariationSettings: "'wght' 400" }}>
        ◯
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-nowrap">11:00~</p>
    </div>
  );
}

function ReservBtn2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[5px] relative rounded-[5px] shrink-0" data-name="reservBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_Symbols:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#9f941d] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        この時間に予約する→
      </p>
    </div>
  );
}

function TimeShift2() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_10px] items-center px-0 py-[10px] relative shrink-0 w-full" data-name="timeShift">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-dashed inset-0 pointer-events-none" />
      <TimeValue2 />
      <ReservBtn2 />
    </div>
  );
}

function FairText2() {
  return (
    <div className="bg-[rgba(159,148,29,0.15)] relative shrink-0 w-full" data-name="fairText">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[15px] py-[20px] relative w-full">
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            【開催時間】
          </p>
          {[...Array(3).keys()].map((_, i) => (
            <TimeShift2 key={i} />
          ))}
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-right w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            所要時間　3時間
          </p>
        </div>
      </div>
    </div>
  );
}

function FairBtn2() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0" data-name="fairBtn02">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[5px] relative rounded-[inherit]">
        <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#a72727] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          特典の表示
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a72727] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function FairBtn3() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[35px] items-center justify-center overflow-clip px-[20px] py-[5px] relative rounded-[10px] shrink-0 w-[130px]" data-name="fairBtn03">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        詳しく見る
      </p>
    </div>
  );
}

function BtnArea2() {
  return (
    <div className="content-center flex flex-wrap gap-[27px] items-center justify-end relative shrink-0 w-full" data-name="btnArea">
      <FairBtn2 />
      <FairBtn3 />
    </div>
  );
}

function FairTextArea2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[25px] grow items-start min-h-px min-w-px relative shrink-0" data-name="fairTextArea">
      <FairText2 />
      <BtnArea2 />
    </div>
  );
}

function FairContent2() {
  return (
    <div className="content-start flex flex-wrap gap-[24px_10px] items-start relative shrink-0 w-full" data-name="fairContent">
      <PictureArea2 />
      <FairTextArea2 />
    </div>
  );
}

function ItemWrap2() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="itemWrap">
      <Title5 />
      <CategotiesArea2 />
      <FairContent2 />
    </div>
  );
}

function MoreBtn3() {
  return (
    <div className="relative shrink-0 w-full" data-name="moreBtn">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[15px] items-center justify-center px-[180px] py-[5px] relative w-full">
          <div className="flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">
            <p className="leading-[normal]">他2件のフェアを表示</p>
          </div>
          <div className="h-[8px] relative shrink-0 w-[15px]">
            <div className="absolute inset-[-4.27%_-2.43%_-9.14%_-2.43%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7295 9.07303">
                <path d={svgPaths.p3845abc0} id="Vector 1" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FairBox2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="fairBox">
      <div className="content-stretch flex flex-col gap-[19px] items-start p-[20px] relative w-full">
        <ItemWrap2 />
        <MoreBtn3 />
      </div>
    </div>
  );
}

function Inner3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="inner">
      <Time4 />
      <FairBox2 />
    </div>
  );
}

function FairArchiveItem2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="fairArchiveItem">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Inner3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FairDate3() {
  return (
    <div className="content-stretch flex items-start p-[10px] relative shrink-0" data-name="fairDate">
      <div className="font-['Noto_Serif_JP:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center text-nowrap">
        <p className="mb-0">12/27</p>
        <p>(金)</p>
      </div>
    </div>
  );
}

function Time5() {
  return (
    <div className="bg-[rgba(159,148,29,0.15)] content-stretch flex flex-col items-start justify-center px-0 py-[30px] relative rounded-br-[10px] shrink-0" data-name="time">
      <FairDate3 />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="title">
      <p className="basis-0 font-['Noto_Serif_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[0px] text-[20px] text-black">60タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
    </div>
  );
}

function Tag13() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        少人数向け
      </p>
    </div>
  );
}

function Tag14() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        平日開催
      </p>
    </div>
  );
}

function Tag15() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        ドレス試着
      </p>
    </div>
  );
}

function CategotiesArea3() {
  return (
    <div className="content-center flex flex-wrap gap-[5px_20px] h-[26px] items-center px-0 py-[10px] relative shrink-0 w-full" data-name="categotiesArea">
      <Tag13 />
      <Tag14 />
      <Tag15 />
    </div>
  );
}

function PictureArea3() {
  return (
    <div className="bg-[#3c1b1b] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[230px]" data-name="pictureArea">
      <div className="h-[224px] relative shrink-0 w-[395px]" data-name="スクリーンショット 2025-12-24 11.27.28 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512241127282} />
      </div>
    </div>
  );
}

function TimeValue3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[normal] relative shrink-0 text-[16px] text-black" data-name="timeValue">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols:Regular',sans-serif] relative shrink-0 w-[18px]" style={{ fontVariationSettings: "'wght' 400" }}>
        ◯
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-nowrap">11:00~</p>
    </div>
  );
}

function ReservBtn3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[5px] relative rounded-[5px] shrink-0" data-name="reservBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_Symbols:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#9f941d] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        この時間に予約する→
      </p>
    </div>
  );
}

function TimeShift3() {
  return (
    <div className="relative shrink-0 w-full" data-name="timeShift">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-dashed inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap items-center justify-between p-[10px] relative w-full">
          <TimeValue3 />
          <ReservBtn3 />
        </div>
      </div>
    </div>
  );
}

function FairText3() {
  return (
    <div className="bg-[rgba(159,148,29,0.15)] relative shrink-0 w-full" data-name="fairText">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[15px] py-[20px] relative w-full">
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            【開催時間】
          </p>
          {[...Array(3).keys()].map((_, i) => (
            <TimeShift3 key={i} />
          ))}
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-right w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            所要時間　3時間
          </p>
        </div>
      </div>
    </div>
  );
}

function FairBtn4() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0" data-name="fairBtn02">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[5px] relative rounded-[inherit]">
        <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#a72727] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          特典の表示
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a72727] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function FairBtn5() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[35px] items-center justify-center overflow-clip px-[20px] py-[5px] relative rounded-[10px] shrink-0 w-[130px]" data-name="fairBtn03">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        詳しく見る
      </p>
    </div>
  );
}

function BtnArea3() {
  return (
    <div className="content-center flex flex-wrap gap-[27px] items-center justify-end relative shrink-0 w-full" data-name="btnArea">
      <FairBtn4 />
      <FairBtn5 />
    </div>
  );
}

function FairTextArea3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[25px] grow items-start min-h-px min-w-px relative shrink-0" data-name="fairTextArea">
      <FairText3 />
      <BtnArea3 />
    </div>
  );
}

function FairContent3() {
  return (
    <div className="content-start flex flex-wrap gap-[24px_10px] items-start relative shrink-0 w-full" data-name="fairContent">
      <PictureArea3 />
      <FairTextArea3 />
    </div>
  );
}

function ItemWrap3() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="itemWrap">
      <Title6 />
      <CategotiesArea3 />
      <FairContent3 />
    </div>
  );
}

function MoreBtn4() {
  return (
    <div className="relative shrink-0 w-full" data-name="moreBtn">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[15px] items-center justify-center px-[180px] py-[5px] relative w-full">
          <div className="flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">
            <p className="leading-[normal]">他2件のフェアを表示</p>
          </div>
          <div className="h-[8px] relative shrink-0 w-[15px]">
            <div className="absolute inset-[-4.27%_-2.43%_-9.14%_-2.43%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7295 9.07303">
                <path d={svgPaths.p3845abc0} id="Vector 1" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FairBox3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="fairBox">
      <div className="content-stretch flex flex-col gap-[19px] items-start p-[20px] relative w-full">
        <ItemWrap3 />
        <MoreBtn4 />
      </div>
    </div>
  );
}

function Inner4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="inner">
      <Time5 />
      <FairBox3 />
    </div>
  );
}

function FairArchiveItem3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="fairArchiveItem">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Inner4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FairAll1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="fairAll">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-center px-[10px] py-[30px] relative w-full">
          <SearchAreaResult1 />
          <FairArchiveItem2 />
          <FairArchiveItem3 />
        </div>
      </div>
    </div>
  );
}

function Wrap3() {
  return (
    <div className="relative shrink-0 w-full" data-name="wrap">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[50px] py-[30px] relative w-full">
          <Title4 />
          <FairReco1 />
          <FairSelect1 />
          <FairAll1 />
        </div>
      </div>
    </div>
  );
}

function Tablet() {
  return (
    <div className="absolute bg-[#ececec] content-stretch flex flex-col items-start left-[1408px] overflow-x-clip overflow-y-auto px-0 py-[30px] top-[100px] w-[800px]" data-name="Tablet">
      <Wrap3 />
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] pb-[50px] pt-0 px-0 relative shrink-0 text-black text-center w-full" data-name="title">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Bridal Fair</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        ブライダルフェア
      </p>
    </div>
  );
}

function Subtitle4() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] gap-[10px] items-center leading-[normal] not-italic pb-[10px] pt-0 px-0 relative shrink-0 text-black text-center w-[375px]" data-name="subtitle">
      <p className="relative shrink-0 text-[32px] w-full">Recommend Fair</p>
      <p className="relative shrink-0 text-[16px] w-full">おすすめのブライダルフェア</p>
    </div>
  );
}

function FairRecommend2() {
  return <div className="shrink-0 w-full" data-name="fairRecommend" />;
}

function FairReco2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="fairReco">
      <Subtitle4 />
      <FairRecommend2 />
    </div>
  );
}

function Subtitle5() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] gap-[10px] items-center leading-[normal] not-italic pb-[10px] pt-0 px-0 relative shrink-0 text-black text-center w-[1024px]" data-name="subtitle">
      <p className="relative shrink-0 text-[32px] w-full">Search Fair</p>
      <p className="relative shrink-0 text-[16px] w-full">検索</p>
    </div>
  );
}

function MiniTitle4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[5px] relative shrink-0 w-full" data-name="miniTitle">
      <div aria-hidden="true" className="absolute border-[#9f941d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px] text-black text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">ご希望日を選択</p>
      </div>
    </div>
  );
}

function SelectCal2() {
  return (
    <div className="relative shrink-0 w-full" data-name="selectCal">
      <div className="content-stretch flex flex-col items-start px-[10px] py-0 relative w-full">
        <div className="aspect-[366/362] relative shrink-0 w-full" data-name="スクリーンショット 2025-12-25 15.28.57 2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-0.1%] max-w-none top-0 w-[201.84%]" src={img202512251528572} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CalenderSelect2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full" data-name="calenderSelect">
      <MiniTitle4 />
      <SelectCal2 />
    </div>
  );
}

function MiniTitle5() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[5px] relative shrink-0 w-full" data-name="miniTitle">
      <div aria-hidden="true" className="absolute border-[#9f941d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[20px] text-black text-center" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">カテゴリーを選択</p>
      </div>
    </div>
  );
}

function SelectCat12() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">平日開催</p>
      </div>
    </div>
  );
}

function SelectCat13() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">土日祝開催</p>
      </div>
    </div>
  );
}

function SelectCat14() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">試食会</p>
      </div>
    </div>
  );
}

function SelectCat15() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">ギフト券つき</p>
      </div>
    </div>
  );
}

function SelectCat16() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">ドレス試着</p>
      </div>
    </div>
  );
}

function SelectCat17() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[5px] py-[10px] relative rounded-[5px] shrink-0 w-[140px]" data-name="selectCat">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">相談会</p>
      </div>
    </div>
  );
}

function SelectCatego2() {
  return (
    <div className="relative shrink-0 w-full" data-name="selectCatego">
      <div className="content-start flex flex-wrap gap-[15px_10px] items-start px-[10px] py-0 relative w-full">
        <SelectCat12 />
        <SelectCat13 />
        <SelectCat14 />
        <SelectCat15 />
        <SelectCat16 />
        <SelectCat17 />
      </div>
    </div>
  );
}

function CategotiesSelect2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full" data-name="categotiesSelect">
      <MiniTitle5 />
      <SelectCatego2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-center px-[30px] py-[10px] relative w-full">
          <CalenderSelect2 />
          <CategotiesSelect2 />
        </div>
      </div>
    </div>
  );
}

function SelectBtn2() {
  return (
    <div className="bg-[#a72727] content-stretch flex items-center justify-center p-[15px] relative rounded-[30px] shrink-0" data-name="selectBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[27px] leading-[normal] relative shrink-0 text-[20px] text-center text-white w-[300px]" style={{ fontVariationSettings: "'wght' 400" }}>
        検索する
      </p>
    </div>
  );
}

function Wrap4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[30px] items-center px-0 py-[45px] relative shrink-0 w-full" data-name="wrap">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none" />
      <Subtitle5 />
      <Frame2 />
      <SelectBtn2 />
    </div>
  );
}

function FairSelect2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="fairSelect">
      <Wrap4 />
    </div>
  );
}

function SearchDate4() {
  return (
    <div className="bg-black content-stretch flex items-center relative shrink-0" data-name="searchDate">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[40px] leading-[normal] relative shrink-0 text-[20px] text-black text-center w-[156px]" style={{ fontVariationSettings: "'wght' 400" }}>
        日付
      </p>
    </div>
  );
}

function SearchSelectDate4() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[5px] pr-0 py-0 relative self-stretch shrink-0" data-name="searchSelectDate">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-black text-center w-[156px]" style={{ fontVariationSettings: "'wght' 400" }}>
        日付
      </p>
    </div>
  );
}

function Date4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="date">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <SearchDate4 />
      <SearchSelectDate4 />
    </div>
  );
}

function SearchDate5() {
  return (
    <div className="bg-black content-stretch flex items-center relative shrink-0" data-name="searchDate">
      <div className="flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[40px] justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white w-[156px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">カテゴリー</p>
      </div>
    </div>
  );
}

function SearchSelectDate5() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[5px] pr-0 py-0 relative self-stretch shrink-0" data-name="searchSelectDate">
      <div className="flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px] text-black w-[668px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">平日開催,試食会,ドレス試着</p>
      </div>
    </div>
  );
}

function Date5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="date">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <SearchDate5 />
      <SearchSelectDate5 />
    </div>
  );
}

function SearchAreaResult2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[312px]" data-name="searchAreaResult">
      <Date4 />
      <Date5 />
    </div>
  );
}

function FairDate4() {
  return (
    <div className="content-stretch flex items-start p-[10px] relative shrink-0" data-name="fairDate">
      <div className="font-['Noto_Serif_JP:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center text-nowrap">
        <p className="mb-0">12/26</p>
        <p>(木)</p>
      </div>
    </div>
  );
}

function Time6() {
  return (
    <div className="bg-[rgba(159,148,29,0.15)] content-stretch flex flex-col items-start justify-center px-0 py-[30px] relative rounded-br-[10px] shrink-0" data-name="time">
      <FairDate4 />
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="title">
      <p className="basis-0 font-['Noto_Serif_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[0px] text-[20px] text-black">60タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
    </div>
  );
}

function Tag16() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        少人数向け
      </p>
    </div>
  );
}

function Tag17() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        平日開催
      </p>
    </div>
  );
}

function Tag18() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        ドレス試着
      </p>
    </div>
  );
}

function CategotiesArea4() {
  return (
    <div className="content-center flex flex-wrap gap-[5px_20px] h-[26px] items-center px-0 py-[10px] relative shrink-0 w-full" data-name="categotiesArea">
      <Tag16 />
      <Tag17 />
      <Tag18 />
    </div>
  );
}

function PictureArea4() {
  return (
    <div className="bg-[#3c1b1b] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[230px]" data-name="pictureArea">
      <div className="h-[224px] relative shrink-0 w-[395px]" data-name="スクリーンショット 2025-12-24 11.27.28 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512241127282} />
      </div>
    </div>
  );
}

function TimeValue4() {
  return (
    <div className="content-stretch flex items-center leading-[normal] relative shrink-0 text-[16px] text-black" data-name="timeValue">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols:Regular',sans-serif] relative shrink-0 w-[18px]" style={{ fontVariationSettings: "'wght' 400" }}>
        ◯
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-nowrap">11:00~</p>
    </div>
  );
}

function ReservBtn4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[3px] py-[5px] relative rounded-[5px] shrink-0" data-name="reservBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_Symbols:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#9f941d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        この時間に予約する→
      </p>
    </div>
  );
}

function TimeShift4() {
  return (
    <div className="content-center flex flex-wrap items-center justify-between px-0 py-[10px] relative shrink-0 w-full" data-name="timeShift">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-dashed inset-0 pointer-events-none" />
      <TimeValue4 />
      <ReservBtn4 />
    </div>
  );
}

function FairText4() {
  return (
    <div className="bg-[rgba(159,148,29,0.15)] relative shrink-0 w-full" data-name="fairText">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[8px] py-[20px] relative w-full">
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            【開催時間】
          </p>
          {[...Array(3).keys()].map((_, i) => (
            <TimeShift4 key={i} />
          ))}
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-right w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            所要時間　3時間
          </p>
        </div>
      </div>
    </div>
  );
}

function FairBtn6() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0" data-name="fairBtn02">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[5px] relative rounded-[inherit]">
        <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#a72727] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          特典の表示
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a72727] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function FairBtn9() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[35px] items-center justify-center overflow-clip px-[20px] py-[5px] relative rounded-[10px] shrink-0 w-[130px]" data-name="fairBtn03">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        詳しく見る
      </p>
    </div>
  );
}

function BtnArea4() {
  return (
    <div className="content-center flex flex-wrap gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="btnArea">
      <FairBtn6 />
      <FairBtn9 />
    </div>
  );
}

function FairTextArea4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[25px] grow items-start min-h-px min-w-px relative shrink-0" data-name="fairTextArea">
      <FairText4 />
      <BtnArea4 />
    </div>
  );
}

function FairContent4() {
  return (
    <div className="content-start flex flex-wrap gap-[24px_10px] items-start justify-center relative shrink-0 w-full" data-name="fairContent">
      <PictureArea4 />
      <FairTextArea4 />
    </div>
  );
}

function ItemWrap4() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="itemWrap">
      <Title8 />
      <CategotiesArea4 />
      <FairContent4 />
    </div>
  );
}

function MoreBtn5() {
  return (
    <div className="relative shrink-0 w-full" data-name="moreBtn">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[15px] items-center justify-center px-[180px] py-[5px] relative w-full">
          <div className="flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">
            <p className="leading-[normal]">他2件のフェアを表示</p>
          </div>
          <div className="h-[8px] relative shrink-0 w-[15px]">
            <div className="absolute inset-[-4.27%_-2.43%_-9.14%_-2.43%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7295 9.07303">
                <path d={svgPaths.p3845abc0} id="Vector 1" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FairBox4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="fairBox">
      <div className="content-stretch flex flex-col gap-[30px] items-start p-[20px] relative w-full">
        <ItemWrap4 />
        <MoreBtn5 />
      </div>
    </div>
  );
}

function Inner5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="inner">
      <Time6 />
      <FairBox4 />
    </div>
  );
}

function FairArchiveItem4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="fairArchiveItem">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Inner5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FairDate5() {
  return (
    <div className="content-stretch flex items-start p-[10px] relative shrink-0" data-name="fairDate">
      <div className="font-['Noto_Serif_JP:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center text-nowrap">
        <p className="mb-0">12/27</p>
        <p>(金)</p>
      </div>
    </div>
  );
}

function Time7() {
  return (
    <div className="bg-[rgba(159,148,29,0.15)] content-stretch flex flex-col items-start justify-center px-0 py-[30px] relative rounded-br-[10px] shrink-0" data-name="time">
      <FairDate5 />
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="title">
      <p className="basis-0 font-['Noto_Serif_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[0px] text-[20px] text-black">60タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
    </div>
  );
}

function Tag19() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        少人数向け
      </p>
    </div>
  );
}

function Tag20() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        平日開催
      </p>
    </div>
  );
}

function Tag21() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        ドレス試着
      </p>
    </div>
  );
}

function CategotiesArea5() {
  return (
    <div className="content-center flex flex-wrap gap-[5px_20px] h-[26px] items-center px-0 py-[10px] relative shrink-0 w-full" data-name="categotiesArea">
      <Tag19 />
      <Tag20 />
      <Tag21 />
    </div>
  );
}

function PictureArea5() {
  return (
    <div className="bg-[#3c1b1b] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[230px]" data-name="pictureArea">
      <div className="h-[224px] relative shrink-0 w-[395px]" data-name="スクリーンショット 2025-12-24 11.27.28 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512241127282} />
      </div>
    </div>
  );
}

function TimeValue5() {
  return (
    <div className="content-stretch flex items-center leading-[normal] relative shrink-0 text-[16px] text-black" data-name="timeValue">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols:Regular',sans-serif] relative shrink-0 w-[18px]" style={{ fontVariationSettings: "'wght' 400" }}>
        ◯
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-nowrap">11:00~</p>
    </div>
  );
}

function ReservBtn5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[3px] py-[5px] relative rounded-[5px] shrink-0" data-name="reservBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_Symbols:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#9f941d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        この時間に予約する→
      </p>
    </div>
  );
}

function TimeShift5() {
  return (
    <div className="content-center flex flex-wrap items-center justify-between px-0 py-[10px] relative shrink-0 w-full" data-name="timeShift">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-dashed inset-0 pointer-events-none" />
      <TimeValue5 />
      <ReservBtn5 />
    </div>
  );
}

function FairText5() {
  return (
    <div className="bg-[rgba(159,148,29,0.15)] relative shrink-0 w-full" data-name="fairText">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[10px] py-[20px] relative w-full">
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            【開催時間】
          </p>
          {[...Array(3).keys()].map((_, i) => (
            <TimeShift5 key={i} />
          ))}
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-right w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            所要時間　3時間
          </p>
        </div>
      </div>
    </div>
  );
}

function FairBtn10() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0" data-name="fairBtn02">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[5px] relative rounded-[inherit]">
        <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#a72727] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          特典の表示
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a72727] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function FairBtn11() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[35px] items-center justify-center overflow-clip px-[20px] py-[5px] relative rounded-[10px] shrink-0 w-[130px]" data-name="fairBtn03">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        詳しく見る
      </p>
    </div>
  );
}

function BtnArea5() {
  return (
    <div className="content-center flex flex-wrap gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="btnArea">
      <FairBtn10 />
      <FairBtn11 />
    </div>
  );
}

function FairTextArea5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[25px] grow items-start min-h-px min-w-px relative shrink-0" data-name="fairTextArea">
      <FairText5 />
      <BtnArea5 />
    </div>
  );
}

function FairContent5() {
  return (
    <div className="content-start flex flex-wrap gap-[24px_10px] items-start justify-center relative shrink-0 w-full" data-name="fairContent">
      <PictureArea5 />
      <FairTextArea5 />
    </div>
  );
}

function ItemWrap5() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="itemWrap">
      <Title9 />
      <CategotiesArea5 />
      <FairContent5 />
    </div>
  );
}

function MoreBtn6() {
  return (
    <div className="relative shrink-0 w-full" data-name="moreBtn">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[15px] items-center justify-center px-[180px] py-[5px] relative w-full">
          <div className="flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">
            <p className="leading-[normal]">他2件のフェアを表示</p>
          </div>
          <div className="h-[8px] relative shrink-0 w-[15px]">
            <div className="absolute inset-[-4.27%_-2.43%_-9.14%_-2.43%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7295 9.07303">
                <path d={svgPaths.p3845abc0} id="Vector 1" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FairBox5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="fairBox">
      <div className="content-stretch flex flex-col gap-[30px] items-start p-[20px] relative w-full">
        <ItemWrap5 />
        <MoreBtn6 />
      </div>
    </div>
  );
}

function Inner6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="inner">
      <Time7 />
      <FairBox5 />
    </div>
  );
}

function FairArchiveItem5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="fairArchiveItem">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Inner6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FairAll2() {
  return (
    <div className="relative shrink-0 w-full" data-name="fairAll">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-center px-[10px] py-[30px] relative w-full">
          <SearchAreaResult2 />
          <FairArchiveItem4 />
          <FairArchiveItem5 />
        </div>
      </div>
    </div>
  );
}

function Wrap5() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-0 py-[30px] relative shrink-0 w-full" data-name="wrap">
      <Title7 />
      <FairReco2 />
      <FairSelect2 />
      <FairAll2 />
    </div>
  );
}

function Mobile() {
  return (
    <div className="absolute bg-[#ececec] content-stretch flex flex-col items-start left-[2272px] overflow-x-clip overflow-y-auto px-0 py-[30px] top-[100px] w-[375px]" data-name="Mobile">
      <Wrap5 />
    </div>
  );
}

export default function Archive() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] relative size-full" data-name="/archive">
      <Desktop />
      <Tablet />
      <Mobile />
    </div>
  );
}