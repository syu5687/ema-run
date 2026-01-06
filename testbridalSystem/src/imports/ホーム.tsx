import img202512241127281 from "figma:asset/2c1d0558d965ea5ac85ac39bc1a35c3e9f9d3bf8.png";

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] relative shrink-0 text-black text-center w-full" data-name="title">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Bridal Fair</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        ブライダルフェア
      </p>
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

function Time2() {
  return (
    <div className="content-stretch flex font-['Noto_Serif_JP:Bold',sans-serif] gap-[10px] items-end leading-[normal] not-italic relative shrink-0 text-black text-center text-nowrap w-full" data-name="time">
      <p className="relative shrink-0 text-[28px]">12/27</p>
      <p className="relative shrink-0 text-[22px]">（土）</p>
    </div>
  );
}

function PictureThum1() {
  return (
    <div className="content-stretch flex flex-col h-[210px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="pictureThum">
      <div className="aspect-[410/320] relative shrink-0 w-full" data-name="スクリーンショット 2025-12-24 11.27.28 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512241127281} />
      </div>
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
        ドレス試着
      </p>
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        平日開催
      </p>
    </div>
  );
}

function Tag7() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        試食会
      </p>
    </div>
  );
}

function Categories1() {
  return (
    <div className="content-center flex flex-wrap gap-[10px] items-center relative shrink-0 w-full" data-name="categories">
      <Tag4 />
      <Tag5 />
      <Tag6 />
      <Tag7 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="title">
      <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
    </div>
  );
}

function Time3() {
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

function MoreBtn1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-0 pt-[5px] px-0 relative shrink-0 w-full" data-name="moreBtn">
      <p className="[text-underline-position:from-font] decoration-solid font-['Noto_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_Symbols:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#9f941d] text-[16px] text-nowrap text-right underline" style={{ fontVariationSettings: "'wght' 400" }}>
        詳しく見る→
      </p>
    </div>
  );
}

function Inner1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="inner">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[15px] py-[20px] relative w-full">
          <Time2 />
          <PictureThum1 />
          <Categories1 />
          <Title2 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263 1">
                <line id="Line 1" stroke="var(--stroke-0, black)" x2="263" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Time3 />
          <MoreBtn1 />
        </div>
      </div>
    </div>
  );
}

function FairContents1() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[293px]" data-name="fairContents">
      <Inner1 />
    </div>
  );
}

function Time4() {
  return (
    <div className="content-stretch flex font-['Noto_Serif_JP:Bold',sans-serif] gap-[10px] items-end leading-[normal] not-italic relative shrink-0 text-black text-center text-nowrap w-full" data-name="time">
      <p className="relative shrink-0 text-[28px]">12/28</p>
      <p className="relative shrink-0 text-[22px]">（日）</p>
    </div>
  );
}

function PictureThum2() {
  return (
    <div className="content-stretch flex flex-col h-[210px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="pictureThum">
      <div className="aspect-[410/320] relative shrink-0 w-full" data-name="スクリーンショット 2025-12-24 11.27.28 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512241127281} />
      </div>
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        少人数向け
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

function Tag10() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        平日開催
      </p>
    </div>
  );
}

function Tag11() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        試食会
      </p>
    </div>
  );
}

function Categories2() {
  return (
    <div className="content-center flex flex-wrap gap-[10px] items-center relative shrink-0 w-full" data-name="categories">
      <Tag8 />
      <Tag9 />
      <Tag10 />
      <Tag11 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="title">
      <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
    </div>
  );
}

function Time5() {
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

function MoreBtn2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-0 pt-[5px] px-0 relative shrink-0 w-full" data-name="moreBtn">
      <p className="[text-underline-position:from-font] decoration-solid font-['Noto_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_Symbols:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#9f941d] text-[16px] text-nowrap text-right underline" style={{ fontVariationSettings: "'wght' 400" }}>
        詳しく見る→
      </p>
    </div>
  );
}

function Inner2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="inner">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[15px] py-[20px] relative w-full">
          <Time4 />
          <PictureThum2 />
          <Categories2 />
          <Title3 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263 1">
                <line id="Line 1" stroke="var(--stroke-0, black)" x2="263" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Time5 />
          <MoreBtn2 />
        </div>
      </div>
    </div>
  );
}

function FairContents2() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[293px]" data-name="fairContents">
      <Inner2 />
    </div>
  );
}

function FairContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="fairContent">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-start flex flex-wrap gap-[40px] items-start justify-center p-[30px] relative w-full">
          <FairContents />
          <FairContents1 />
          <FairContents2 />
        </div>
      </div>
    </div>
  );
}

function ArchiveBtn() {
  return (
    <div className="bg-[#a72727] content-stretch flex items-center justify-center p-[15px] relative rounded-[30px] shrink-0" data-name="archiveBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[27px] leading-[normal] relative shrink-0 text-[20px] text-center text-white w-[300px]" style={{ fontVariationSettings: "'wght' 400" }}>
        全てのブライダルフェアを見る
      </p>
    </div>
  );
}

function BtnArea() {
  return (
    <div className="content-stretch flex flex-col items-center px-0 py-[30px] relative shrink-0 w-full" data-name="btnArea">
      <ArchiveBtn />
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="wrap">
      <Title />
      <FairContent />
      <BtnArea />
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute bg-[#ececec] content-stretch flex flex-col items-start left-[64px] overflow-x-clip overflow-y-auto px-0 py-[30px] top-[100px] w-[1280px]" data-name="Desktop">
      <Wrap />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] relative shrink-0 text-black text-center w-full" data-name="title">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Bridal Fair</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        ブライダルフェア
      </p>
    </div>
  );
}

function FairContent1() {
  return <div className="shrink-0 w-full" data-name="fairContent" />;
}

function ArchiveBtn1() {
  return (
    <div className="bg-[#a72727] content-stretch flex items-center justify-center p-[15px] relative rounded-[30px] shrink-0" data-name="archiveBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[27px] leading-[normal] relative shrink-0 text-[20px] text-center text-white w-[300px]" style={{ fontVariationSettings: "'wght' 400" }}>
        全てのブライダルフェアを見る
      </p>
    </div>
  );
}

function BtnArea1() {
  return (
    <div className="content-stretch flex flex-col items-center px-0 py-[30px] relative shrink-0 w-full" data-name="btnArea">
      <ArchiveBtn1 />
    </div>
  );
}

function Wrap1() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="wrap">
      <Title4 />
      <FairContent1 />
      <BtnArea1 />
    </div>
  );
}

function Tablet() {
  return (
    <div className="absolute bg-[#ececec] content-stretch flex flex-col items-start left-[1408px] overflow-x-clip overflow-y-auto px-0 py-[30px] top-[100px] w-[800px]" data-name="Tablet">
      <Wrap1 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] relative shrink-0 text-black text-center w-full" data-name="title">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Bridal Fair</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        ブライダルフェア
      </p>
    </div>
  );
}

function FairContent2() {
  return <div className="shrink-0 w-full" data-name="fairContent" />;
}

function ArchiveBtn2() {
  return (
    <div className="bg-[#a72727] content-stretch flex items-center justify-center p-[15px] relative rounded-[30px] shrink-0" data-name="archiveBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[27px] leading-[normal] relative shrink-0 text-[20px] text-center text-white w-[300px]" style={{ fontVariationSettings: "'wght' 400" }}>
        全てのブライダルフェアを見る
      </p>
    </div>
  );
}

function BtnArea2() {
  return (
    <div className="content-stretch flex flex-col items-center px-0 py-[30px] relative shrink-0 w-full" data-name="btnArea">
      <ArchiveBtn2 />
    </div>
  );
}

function Wrap2() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="wrap">
      <Title5 />
      <FairContent2 />
      <BtnArea2 />
    </div>
  );
}

function Mobile() {
  return (
    <div className="absolute bg-[#ececec] content-stretch flex flex-col items-start left-[2272px] overflow-x-clip overflow-y-auto px-0 py-[30px] top-[100px] w-[375px]" data-name="Mobile">
      <Wrap2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] relative size-full" data-name="ホーム">
      <Desktop />
      <Tablet />
      <Mobile />
    </div>
  );
}