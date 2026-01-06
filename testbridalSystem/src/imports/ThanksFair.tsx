function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] pb-[50px] pt-0 px-0 relative shrink-0 text-black text-center w-full" data-name="title">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Contactform</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        お問い合わせ
      </p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="title">
      <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9f941d] text-[32px] text-center w-full">送信完了</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="textArea">
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
  );
}

function AddressArea() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[15px] pt-[25px] px-[15px] relative shrink-0 w-[350px]" data-name="addressArea">
      <div aria-hidden="true" className="absolute border-[#9f941d] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-black text-center w-full">
        <p className="leading-[normal] mb-0 text-[16px]">◯◯◯◯◯◯◯◯◯</p>
        <p className="leading-[normal]">
          <span className="text-[16px]">TEL:</span>
          <span className="text-[20px]">0000-00-0000</span>
        </p>
      </div>
    </div>
  );
}

function Inner() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="inner">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[30px] py-[50px] relative w-full">
          <Title1 />
          <TextArea />
          <AddressArea />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative rounded-[10px] shrink-0 w-full" data-name="Frame">
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

function BackBtn() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[30px] relative shrink-0 w-full" data-name="backBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
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
          <BackBtn />
        </div>
      </div>
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col items-start left-[64px] overflow-x-clip overflow-y-auto px-0 py-[30px] top-[100px] w-[1280px]" data-name="Desktop">
      <Wrap />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] pb-[50px] pt-0 px-0 relative shrink-0 text-black text-center w-full" data-name="title">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Contactform</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        お問い合わせ
      </p>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="title">
      <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9f941d] text-[32px] text-center w-full">送信完了</p>
    </div>
  );
}

function TextArea1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="textArea">
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
  );
}

function AddressArea1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[15px] pt-[25px] px-[15px] relative shrink-0 w-[350px]" data-name="addressArea">
      <div aria-hidden="true" className="absolute border-[#9f941d] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-black text-center w-full">
        <p className="leading-[normal] mb-0 text-[16px]">◯◯◯◯◯◯◯◯◯</p>
        <p className="leading-[normal]">
          <span className="text-[16px]">TEL:</span>
          <span className="text-[20px]">0000-00-0000</span>
        </p>
      </div>
    </div>
  );
}

function Inner1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="inner">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[30px] py-[50px] relative w-full">
          <Title3 />
          <TextArea1 />
          <AddressArea1 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative rounded-[10px] shrink-0 w-full" data-name="Frame">
      <Inner1 />
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
          <Title2 />
          <FairMainContents1 />
          <BackBtn1 />
        </div>
      </div>
    </div>
  );
}

function Tablet() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col items-start left-[1408px] overflow-x-clip overflow-y-auto px-0 py-[30px] top-[100px] w-[800px]" data-name="Tablet">
      <Wrap1 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] pb-[50px] pt-0 px-0 relative shrink-0 text-black text-center w-full" data-name="title">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Contactform</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        お問い合わせ
      </p>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="title">
      <p className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9f941d] text-[32px] text-center w-full">送信完了</p>
    </div>
  );
}

function TextArea2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="textArea">
      <div className="font-['Noto_Serif_JP:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center w-full">
        <p className="mb-0">ブライダルフェアのご予約</p>
        <p className="mb-0">ありがとうございました。</p>
        <p className="mb-0">内容を確認でき次第、</p>
        <p className="mb-0">担当者から電話、メールにて</p>
        <p className="mb-0">ご連絡させていただきます。</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">2営業日経っても返信がない場合は</p>
        <p className="mb-0">メールが正常に届いていない場合も</p>
        <p className="mb-0">あります。</p>
        <p className="mb-0">その場合には大変お手数ですが、</p>
        <p className="mb-0">下記連絡先へお電話いただけますと</p>
        <p className="mb-0">幸いです。</p>
        <p>今後ともよろしくお願い致します。</p>
      </div>
    </div>
  );
}

function AddressArea2() {
  return (
    <div className="relative shrink-0 w-full" data-name="addressArea">
      <div aria-hidden="true" className="absolute border-[#9f941d] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[15px] pt-[25px] px-[15px] relative w-full">
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
  );
}

function Inner2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="inner">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[30px] py-[50px] relative w-full">
          <Title5 />
          <TextArea2 />
          <AddressArea2 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative rounded-[10px] shrink-0 w-full" data-name="Frame">
      <Inner2 />
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
      <Title4 />
      <FairMainContents2 />
      <BackBtn2 />
    </div>
  );
}

function Mobile() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col items-start left-[2272px] overflow-x-clip overflow-y-auto px-0 py-[30px] top-[100px] w-[375px]" data-name="Mobile">
      <Wrap2 />
    </div>
  );
}

export default function ThanksFair() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] relative size-full" data-name="/thanks-fair">
      <Desktop />
      <Tablet />
      <Mobile />
    </div>
  );
}