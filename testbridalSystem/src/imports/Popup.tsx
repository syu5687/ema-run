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

function TextArea() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="textArea">
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

function Close() {
  return (
    <div className="absolute right-[30px] size-[65px] top-[-25px]" data-name="close">
      <div className="absolute inset-[0_-6.15%_-6.15%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 69">
          <g>
            <g filter="url(#filter0_d_4_3980)" id="Ellipse 1">
              <circle cx="32.5" cy="32.5" fill="var(--fill-0, white)" r="32.5" />
            </g>
            <g id="Group 1">
              <line id="Line 3" stroke="var(--stroke-0, black)" strokeWidth="3" x1="18.5609" x2="47.1675" y1="18.4392" y2="47.0459" />
              <line id="Line 4" stroke="var(--stroke-0, black)" strokeWidth="3" x1="18.0459" x2="46.6525" y1="47.0459" y2="18.4393" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="69" id="filter0_d_4_3980" width="69" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="2" dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4_3980" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4_3980" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function TokutenWrap() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-1/2 px-[60px] py-0 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[764px]" data-name="tokutenWrap">
      <TextArea />
      <Close />
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] h-[1080px] left-[64px] overflow-x-clip overflow-y-auto top-[100px] w-[1280px]" data-name="Desktop">
      <TokutenWrap />
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
    <div className="content-center flex flex-wrap gap-[30px] items-center justify-center px-0 py-[15px] relative shrink-0 w-full" data-name="presentArea">
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

function TextArea1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="textArea">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[35px] py-[25px] relative w-full">
          <PresentArea1 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 574 1">
                <line id="Line 2" stroke="var(--stroke-0, black)" x2="574" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Attention1 />
        </div>
      </div>
    </div>
  );
}

function Close1() {
  return (
    <div className="absolute right-[30px] size-[65px] top-[-25px]" data-name="close">
      <div className="absolute inset-[0_-6.15%_-6.15%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 69">
          <g>
            <g filter="url(#filter0_d_4_3980)" id="Ellipse 1">
              <circle cx="32.5" cy="32.5" fill="var(--fill-0, white)" r="32.5" />
            </g>
            <g id="Group 1">
              <line id="Line 3" stroke="var(--stroke-0, black)" strokeWidth="3" x1="18.5609" x2="47.1675" y1="18.4392" y2="47.0459" />
              <line id="Line 4" stroke="var(--stroke-0, black)" strokeWidth="3" x1="18.0459" x2="46.6525" y1="47.0459" y2="18.4393" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="69" id="filter0_d_4_3980" width="69" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="2" dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4_3980" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4_3980" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function TokutenWrap1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-1/2 px-[60px] py-0 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[764px]" data-name="tokutenWrap">
      <TextArea1 />
      <Close1 />
    </div>
  );
}

function Tablet() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] h-[1080px] left-[1408px] overflow-x-clip overflow-y-auto top-[100px] w-[800px]" data-name="Tablet">
      <TokutenWrap1 />
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
    <div className="content-stretch flex flex-col gap-[30px] items-center px-0 py-[15px] relative shrink-0 w-full" data-name="presentArea">
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

function TextArea2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="textArea">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[33px] py-[25px] relative w-full">
          <PresentArea2 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221 1">
                <line id="Line 2" stroke="var(--stroke-0, black)" x2="221" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Attention2 />
        </div>
      </div>
    </div>
  );
}

function Close2() {
  return (
    <div className="absolute right-[30px] size-[65px] top-[30px]" data-name="close">
      <div className="absolute inset-[0_-6.15%_-6.15%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 69">
          <g>
            <g filter="url(#filter0_d_4_3980)" id="Ellipse 1">
              <circle cx="32.5" cy="32.5" fill="var(--fill-0, white)" r="32.5" />
            </g>
            <g id="Group 1">
              <line id="Line 3" stroke="var(--stroke-0, black)" strokeWidth="3" x1="18.5609" x2="47.1675" y1="18.4392" y2="47.0459" />
              <line id="Line 4" stroke="var(--stroke-0, black)" strokeWidth="3" x1="18.0459" x2="46.6525" y1="47.0459" y2="18.4393" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="69" id="filter0_d_4_3980" width="69" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="2" dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4_3980" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4_3980" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function TokutenWrap2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-0.5px_-120px_0.5px] items-center px-[44px] py-[50px]" data-name="tokutenWrap">
      <TextArea2 />
      <Close2 />
    </div>
  );
}

function Mobile() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] h-[1296px] left-[2272px] overflow-x-clip overflow-y-auto top-[100px] w-[375px]" data-name="Mobile">
      <TokutenWrap2 />
    </div>
  );
}

export default function Popup() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] relative size-full" data-name="/popup">
      <Desktop />
      <Tablet />
      <Mobile />
    </div>
  );
}