import img202512241127283 from "figma:asset/5896f57db98375b0cba81cbd2c9df1d6f148a178.png";
import img202512251151161 from "figma:asset/cb660c2bb73152f9bc267ed57cba98f9fa914b97.png";
import img202512241127281 from "figma:asset/2c1d0558d965ea5ac85ac39bc1a35c3e9f9d3bf8.png";

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

function Date() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] p-[10px] relative shrink-0 size-[100px] text-[32px] text-black text-nowrap" data-name="date">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0">12/23</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>
        (水)
      </p>
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

function CategoriesArea() {
  return (
    <div className="content-start flex flex-wrap gap-[10px] items-start px-0 py-[10px] relative shrink-0 w-full" data-name="categoriesArea">
      <Tag />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function Title1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="title">
      <div className="flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] h-[54px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
      <CategoriesArea />
    </div>
  );
}

function TitleDate() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="titleDate">
      <Date />
      <Title1 />
    </div>
  );
}

function Picturethum() {
  return (
    <div className="content-stretch flex h-[433px] items-start overflow-clip relative shrink-0 w-[764px]" data-name="picturethum">
      <div className="h-[433px] relative shrink-0 w-[764px]" data-name="スクリーンショット 2025-12-24 11.27.28 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512241127283} />
      </div>
    </div>
  );
}

function TextArea() {
  return (
    <div className="relative shrink-0 w-full" data-name="textArea">
      <div className="content-stretch flex items-start p-[15px] relative w-full">
        <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wght' 400" }}>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
    </div>
  );
}

function Raikan() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[10px] grow items-center leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px]" data-name="raikan">
      <p className="relative shrink-0 text-[#9f941d] text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        【来館特典】
      </p>
      <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト235
      </p>
    </div>
  );
}

function Seiyaku() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[10px] grow items-center leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px]" data-name="seiyaku">
      <p className="relative shrink-0 text-[#9f941d] text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        【成約特典】
      </p>
      <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </div>
  );
}

function PresentArea() {
  return (
    <div className="content-center flex flex-wrap gap-[30px] items-center justify-center px-0 py-[15px] relative shrink-0 w-full" data-name="presentArea">
      <Raikan />
      <Seiyaku />
    </div>
  );
}

function Attention() {
  return (
    <div className="content-stretch flex flex-col items-center px-0 py-[15px] relative shrink-0 w-full" data-name="attention">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト180
      </p>
    </div>
  );
}

function TextArea1() {
  return (
    <div className="bg-[rgba(159,148,29,0.1)] relative shrink-0 w-full" data-name="textArea">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[35px] py-[25px] relative w-full">
          <PresentArea />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 574 1">
                <line id="Line 2" stroke="var(--stroke-0, black)" x2="574" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Attention />
        </div>
      </div>
    </div>
  );
}

function TokutenWrap() {
  return (
    <div className="relative shrink-0 w-full" data-name="tokutenWrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[60px] py-0 relative w-full">
          <TextArea1 />
        </div>
      </div>
    </div>
  );
}

function FlowTitle() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="flowTitle">
      <div className="flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9f941d] text-[25px] text-center w-full">
        <p className="leading-[normal]">当日の流れ</p>
      </div>
    </div>
  );
}

function FlowFair() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[10px] pt-[30px] px-0 relative shrink-0 w-full" data-name="flowFair">
      <FlowTitle />
    </div>
  );
}

function ItemSubTitle() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[10px] pt-0 px-0 relative shrink-0 w-full" data-name="itemSubTitle">
      <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-full">あああああ</p>
    </div>
  );
}

function ItemText() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="itemText">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ120
      </p>
    </div>
  );
}

function ItemTitle() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="itemTitle">
      <ItemSubTitle />
      <ItemText />
    </div>
  );
}

function Pic() {
  return (
    <div className="basis-0 grow h-[224.201px] min-h-px min-w-px relative shrink-0" data-name="pic">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[38px] py-0 relative size-full">
          <div className="h-[346px] relative shrink-0 w-[274px]" data-name="スクリーンショット 2025-12-25 11.51.16 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512251151161} />
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowItem() {
  return (
    <div className="bg-white content-start flex flex-wrap gap-[15px] items-start justify-center px-[40px] py-[30px] relative rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[600px]" data-name="flowItem">
      <ItemTitle />
      <Pic />
    </div>
  );
}

function ContactBtn() {
  return (
    <div className="bg-[#a72727] content-stretch flex items-center justify-center p-[15px] relative rounded-[30px] shrink-0" data-name="contactBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[27px] leading-[normal] relative shrink-0 text-[20px] text-center text-white w-[300px]" style={{ fontVariationSettings: "'wght' 400" }}>
        フェアを予約する
      </p>
    </div>
  );
}

function Inner() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center px-[30px] py-[50px] relative shrink-0 w-[824px]" data-name="inner">
      <TitleDate />
      <Picturethum />
      <TextArea />
      <TokutenWrap />
      <FlowFair />
      {[...Array(3).keys()].map((_, i) => (
        <FlowItem key={i} />
      ))}
      <ContactBtn />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Frame">
      <Inner />
    </div>
  );
}

function FairMainContents() {
  return (
    <div className="relative shrink-0 w-full" data-name="fairMainContents">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[100px] py-[30px] relative w-full">
          <Frame />
        </div>
      </div>
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

function Tag3() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        少人数向け
      </p>
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        ドレス試着
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
        試食会
      </p>
    </div>
  );
}

function Categories() {
  return (
    <div className="content-center flex flex-wrap gap-[10px] items-center relative shrink-0 w-full" data-name="categories">
      <Tag3 />
      <Tag4 />
      <Tag5 />
      <Tag6 />
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

function Inner1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="inner">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[15px] py-[20px] relative w-full">
          <Time />
          <PictureThum />
          <Categories />
          <Title2 />
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
      <Inner1 />
    </div>
  );
}

function FairRecommend() {
  return (
    <div className="relative shrink-0 w-full" data-name="fairRecommend">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-start flex flex-wrap gap-[40px] items-start p-[30px] relative w-full">
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
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="fairReco">
      <Subtitle />
      <FairRecommend />
    </div>
  );
}

function BackBtn() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[30px] relative shrink-0 w-full" data-name="backBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_Symbols:Regular',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        ←戻る
      </p>
    </div>
  );
}

function Wrap() {
  return (
    <div className="relative shrink-0 w-full" data-name="wrap">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[128px] py-0 relative w-full">
          <Title />
          <FairMainContents />
          <FairReco />
          <BackBtn />
        </div>
      </div>
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

function Title3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] pb-[50px] pt-0 px-0 relative shrink-0 text-black text-center w-full" data-name="title">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Bridal Fair</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        ブライダルフェア
      </p>
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] p-[10px] relative shrink-0 size-[100px] text-[32px] text-black text-nowrap" data-name="date">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0">12/23</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>
        (水)
      </p>
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
        ドレス試着
      </p>
    </div>
  );
}

function Tag9() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        平日開催
      </p>
    </div>
  );
}

function CategoriesArea1() {
  return (
    <div className="content-start flex flex-wrap gap-[10px] items-start px-0 py-[10px] relative shrink-0 w-full" data-name="categoriesArea">
      <Tag7 />
      <Tag8 />
      <Tag9 />
    </div>
  );
}

function Title4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="title">
      <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <CategoriesArea1 />
    </div>
  );
}

function TitleDate1() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="titleDate">
      <Date1 />
      <Title4 />
    </div>
  );
}

function Picturethum1() {
  return (
    <div className="content-stretch flex h-[433px] items-start overflow-clip relative shrink-0 w-full" data-name="picturethum">
      <div className="h-[433px] relative shrink-0 w-[764px]" data-name="スクリーンショット 2025-12-24 11.27.28 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512241127283} />
      </div>
    </div>
  );
}

function TextArea2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="textArea">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wght' 400" }}>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </div>
  );
}

function Raikan1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[10px] grow items-center leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px]" data-name="raikan">
      <p className="relative shrink-0 text-[#9f941d] text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        【来館特典】
      </p>
      <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト235
      </p>
    </div>
  );
}

function Seiyaku1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[10px] grow items-center leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px]" data-name="seiyaku">
      <p className="relative shrink-0 text-[#9f941d] text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        【成約特典】
      </p>
      <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </div>
  );
}

function PresentArea1() {
  return (
    <div className="content-start flex flex-wrap gap-[20px] items-start justify-center px-0 py-[15px] relative shrink-0 w-full" data-name="presentArea">
      <Raikan1 />
      <Seiyaku1 />
    </div>
  );
}

function Attention1() {
  return (
    <div className="content-stretch flex flex-col items-center px-0 py-[15px] relative shrink-0 w-full" data-name="attention">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト180
      </p>
    </div>
  );
}

function TextArea3() {
  return (
    <div className="bg-[rgba(159,148,29,0.1)] relative shrink-0 w-full" data-name="textArea">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[30px] relative w-full">
          <PresentArea1 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 520 1">
                <line id="Line 2" stroke="var(--stroke-0, black)" x2="520" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Attention1 />
        </div>
      </div>
    </div>
  );
}

function TokutenWrap1() {
  return (
    <div className="relative shrink-0 w-full" data-name="tokutenWrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[30px] py-0 relative w-full">
          <TextArea3 />
        </div>
      </div>
    </div>
  );
}

function FlowTitle1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="flowTitle">
      <div className="flex flex-col font-['Noto_Serif_JP:Regular',sans-serif] h-[55px] justify-center leading-[0] not-italic relative shrink-0 text-[#9f941d] text-[25px] text-center w-[221px]">
        <p className="leading-[normal]">当日の流れ</p>
      </div>
    </div>
  );
}

function FlowFair1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[10px] pt-[30px] px-0 relative shrink-0 w-full" data-name="flowFair">
      <FlowTitle1 />
    </div>
  );
}

function ItemSubTitle1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[10px] pt-0 px-0 relative shrink-0 w-full" data-name="itemSubTitle">
      <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-full">あああああ</p>
    </div>
  );
}

function ItemText1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="itemText">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ120
      </p>
    </div>
  );
}

function ItemTitle1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="itemTitle">
      <ItemSubTitle1 />
      <ItemText1 />
    </div>
  );
}

function Pic1() {
  return (
    <div className="basis-0 grow h-[224.201px] min-h-px min-w-px relative shrink-0" data-name="pic">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[38px] py-0 relative size-full">
          <div className="h-[346px] relative shrink-0 w-[274px]" data-name="スクリーンショット 2025-12-25 11.51.16 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512251151161} />
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowItem1() {
  return (
    <div className="bg-white content-start flex flex-wrap gap-[15px] items-start justify-center px-[40px] py-[30px] relative rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[600px]" data-name="flowItem">
      <ItemTitle1 />
      <Pic1 />
    </div>
  );
}

function ContactBtn1() {
  return (
    <div className="bg-[#a72727] content-stretch flex items-center justify-center p-[15px] relative rounded-[30px] shrink-0" data-name="contactBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[27px] leading-[normal] relative shrink-0 text-[20px] text-center text-white w-[300px]" style={{ fontVariationSettings: "'wght' 400" }}>
        フェアを予約する
      </p>
    </div>
  );
}

function Inner2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center px-[30px] py-[50px] relative shrink-0 w-[700px]" data-name="inner">
      <TitleDate1 />
      <Picturethum1 />
      <TextArea2 />
      <TokutenWrap1 />
      <FlowFair1 />
      {[...Array(3).keys()].map((_, i) => (
        <FlowItem1 key={i} />
      ))}
      <ContactBtn1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Frame">
      <Inner2 />
    </div>
  );
}

function FairMainContents1() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-0 py-[30px] relative shrink-0 w-full" data-name="fairMainContents">
      <Frame1 />
    </div>
  );
}

function Subtitle1() {
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
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="fairReco">
      <Subtitle1 />
      <FairRecommend1 />
    </div>
  );
}

function BackBtn1() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[30px] relative shrink-0 w-full" data-name="backBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        ←戻る
      </p>
    </div>
  );
}

function Wrap1() {
  return (
    <div className="relative shrink-0 w-full" data-name="wrap">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[50px] py-0 relative w-full">
          <Title3 />
          <FairMainContents1 />
          <FairReco1 />
          <BackBtn1 />
        </div>
      </div>
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
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] pb-[50px] pt-0 px-0 relative shrink-0 text-black text-center w-full" data-name="title">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Bridal Fair</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        ブライダルフェア
      </p>
    </div>
  );
}

function Date2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] p-[10px] relative shrink-0 size-[100px] text-[32px] text-black text-nowrap" data-name="date">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0">12/23</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>
        (水)
      </p>
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
        ドレス試着
      </p>
    </div>
  );
}

function Tag12() {
  return (
    <div className="bg-[rgba(159,148,29,0.7)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#9f941d] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        平日開催
      </p>
    </div>
  );
}

function CategoriesArea2() {
  return (
    <div className="content-start flex flex-wrap gap-[10px] items-start px-0 py-[10px] relative shrink-0 w-full" data-name="categoriesArea">
      <Tag10 />
      <Tag11 />
      <Tag12 />
    </div>
  );
}

function Title6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="title">
      <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <CategoriesArea2 />
    </div>
  );
}

function TitleDate2() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="titleDate">
      <Date2 />
      <Title6 />
    </div>
  );
}

function Picturethum2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="picturethum">
      <div className="aspect-[434/246] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="スクリーンショット 2025-12-24 11.27.28 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512241127283} />
      </div>
    </div>
  );
}

function TextArea4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="textArea">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wght' 400" }}>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </div>
  );
}

function Raikan2() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[10px] items-center leading-[normal] relative shrink-0 text-[16px] w-full" data-name="raikan">
      <p className="relative shrink-0 text-[#9f941d] text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        【来館特典】
      </p>
      <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト235
      </p>
    </div>
  );
}

function Seiyaku2() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[10px] items-center leading-[normal] relative shrink-0 text-[16px] w-full" data-name="seiyaku">
      <p className="relative shrink-0 text-[#9f941d] text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        【成約特典】
      </p>
      <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </div>
  );
}

function PresentArea2() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center px-0 py-[30px] relative shrink-0 w-full" data-name="presentArea">
      <Raikan2 />
      <Seiyaku2 />
    </div>
  );
}

function Attention2() {
  return (
    <div className="content-stretch flex flex-col items-center px-0 py-[15px] relative shrink-0 w-full" data-name="attention">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト180
      </p>
    </div>
  );
}

function TextArea5() {
  return (
    <div className="bg-[rgba(159,148,29,0.1)] relative shrink-0 w-full" data-name="textArea">
      <div className="content-stretch flex flex-col items-start px-[15px] py-0 relative w-full">
        <PresentArea2 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 265 1">
              <line id="Line 2" stroke="var(--stroke-0, black)" x2="265" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Attention2 />
      </div>
    </div>
  );
}

function TokutenWrap2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="tokutenWrap">
      <TextArea5 />
    </div>
  );
}

function FlowTitle2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="flowTitle">
      <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9f941d] text-[20px] text-center w-full">当日の流れ</p>
    </div>
  );
}

function FlowFair2() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[10px] pt-[30px] px-0 relative shrink-0 w-full" data-name="flowFair">
      <FlowTitle2 />
    </div>
  );
}

function ItemSubTitle2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[10px] pt-0 px-0 relative shrink-0 w-full" data-name="itemSubTitle">
      <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-full">あああああ</p>
    </div>
  );
}

function ItemText2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="itemText">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ120
      </p>
    </div>
  );
}

function ItemTitle2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="itemTitle">
      <ItemSubTitle2 />
      <ItemText2 />
    </div>
  );
}

function Pic2() {
  return (
    <div className="content-stretch flex flex-col h-[224.201px] items-center overflow-clip relative shrink-0 w-[252.5px]" data-name="pic">
      <div className="h-[346px] relative shrink-0 w-[274px]" data-name="スクリーンショット 2025-12-25 11.51.16 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512251151161} />
      </div>
    </div>
  );
}

function FlowItem2() {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="flowItem">
      <div className="flex flex-row justify-center size-full">
        <div className="content-start flex flex-wrap gap-[15px] items-start justify-center px-[20px] py-[30px] relative w-full">
          <ItemTitle2 />
          <Pic2 />
        </div>
      </div>
    </div>
  );
}

function ItemSubTitle3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[10px] pt-0 px-0 relative shrink-0 w-full" data-name="itemSubTitle">
      <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-full">あああああ</p>
    </div>
  );
}

function ItemText3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="itemText">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ120
      </p>
    </div>
  );
}

function ItemTitle3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="itemTitle">
      <ItemSubTitle3 />
      <ItemText3 />
    </div>
  );
}

function Pic3() {
  return (
    <div className="content-stretch flex flex-col h-[224.201px] items-center justify-center overflow-clip px-[38px] py-0 relative shrink-0 w-[252.5px]" data-name="pic">
      <div className="h-[346px] relative shrink-0 w-[274px]" data-name="スクリーンショット 2025-12-25 11.51.16 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512251151161} />
      </div>
    </div>
  );
}

function FlowItem3() {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="flowItem">
      <div className="flex flex-row justify-center size-full">
        <div className="content-start flex flex-wrap gap-[15px] items-start justify-center px-[20px] py-[30px] relative w-full">
          <ItemTitle3 />
          <Pic3 />
        </div>
      </div>
    </div>
  );
}

function ItemSubTitle4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[10px] pt-0 px-0 relative shrink-0 w-full" data-name="itemSubTitle">
      <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-full">あああああ</p>
    </div>
  );
}

function ItemText4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="itemText">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ120
      </p>
    </div>
  );
}

function ItemTitle4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="itemTitle">
      <ItemSubTitle4 />
      <ItemText4 />
    </div>
  );
}

function Pic4() {
  return (
    <div className="content-stretch flex flex-col h-[224.201px] items-center overflow-clip px-[38px] py-0 relative shrink-0 w-[252.5px]" data-name="pic">
      <div className="h-[346px] relative shrink-0 w-[274px]" data-name="スクリーンショット 2025-12-25 11.51.16 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202512251151161} />
      </div>
    </div>
  );
}

function FlowItem4() {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="flowItem">
      <div className="flex flex-row justify-center size-full">
        <div className="content-start flex flex-wrap gap-[15px] items-start justify-center px-[20px] py-[30px] relative w-full">
          <ItemTitle4 />
          <Pic4 />
        </div>
      </div>
    </div>
  );
}

function ContactBtn2() {
  return (
    <div className="bg-[#a72727] content-stretch flex items-center justify-center p-[15px] relative rounded-[30px] shrink-0" data-name="contactBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[27px] leading-[normal] relative shrink-0 text-[20px] text-center text-white w-[300px]" style={{ fontVariationSettings: "'wght' 400" }}>
        フェアを予約する
      </p>
    </div>
  );
}

function Inner3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center px-[30px] py-[50px] relative shrink-0 w-[355px]" data-name="inner">
      <TitleDate2 />
      <Picturethum2 />
      <TextArea4 />
      <TokutenWrap2 />
      <FlowFair2 />
      <FlowItem2 />
      <FlowItem3 />
      <FlowItem4 />
      <ContactBtn2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Frame">
      <Inner3 />
    </div>
  );
}

function FairMainContents2() {
  return (
    <div className="relative shrink-0 w-full" data-name="fairMainContents">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[10px] py-[30px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Subtitle2() {
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
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="fairReco">
      <Subtitle2 />
      <FairRecommend2 />
    </div>
  );
}

function BackBtn2() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[30px] relative shrink-0 w-full" data-name="backBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        ←戻る
      </p>
    </div>
  );
}

function Wrap2() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="wrap">
      <Title5 />
      <FairMainContents2 />
      <FairReco2 />
      <BackBtn2 />
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

export default function Single() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] relative size-full" data-name="/single">
      <Desktop />
      <Tablet />
      <Mobile />
    </div>
  );
}