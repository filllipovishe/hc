
import React, { useState } from 'react';
import { MOBILE_PRICES, DOCTORS, FAQ, CONDITIONS } from '../constants';

const MobileLayout: React.FC = () => {
  return (
    <div className="w-full pb-[100rem]">
      <MobileHero />
      <MobileWhatHappened />
      <MobilePrices />
      <MobileDoctors />
      <MobileFAQ />
      <MobilePersuasion />
      <MobileConditions />
      <MobileFixedBar />
    </div>
  );
};

const MobileHero: React.FC = () => (
  <section className="h-[640rem] pt-[40rem] pb-[40rem] flex flex-col items-center gradient-bg-1">
    <div className="w-[300rem] flex flex-col gap-[20rem] mb-[40rem]">
      <div className="flex flex-col">
        <h1 className="font-medium text-[34rem] leading-[110%] tracking-[-0.03em] text-[#223442]">анонимная наркологическая помощь</h1>
      </div>
      <div className="flex flex-col gap-[5rem]">
        <div className="font-light text-[16rem] leading-[150%] text-[#223442]">Врач у вас дома через 30–45 минут</div>
        <div className="font-light text-[16rem] leading-[150%] text-[#223442]">Без постановки на учет</div>
      </div>
    </div>
    <img src="https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/20f2622f-d892-4e65-ba81-28564177b09b.png" className="w-[360rem] h-[336rem] object-cover object-bottom" />
  </section>
);

const MobileWhatHappened: React.FC = () => (
  <section className="h-[663rem] pt-[40rem] pb-[40rem] flex flex-col items-center gradient-bg-2">
    <div className="w-[300rem] flex flex-col gap-[30rem] mb-[40rem]">
      <h2 className="font-medium text-[34rem] leading-[110%] tracking-[-0.03em] text-[#223442]">что случилось?</h2>
      <div className="flex flex-col gap-[20rem]">
        {["запой или похмелье", "хочу бросить пить", "наркотическая ломка", "психические расстройства", "зависимость у близкого"].map(item => (
          <div key={item} className="font-medium text-[22rem] leading-[130%] text-[#269EFF]">{item}</div>
        ))}
      </div>
    </div>
    <img src="https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/f69ce99d-8c17-48b8-b4cf-5047b38d3886.png" className="w-[360rem] h-[251rem] object-cover" />
  </section>
);

const MobilePrices: React.FC = () => (
  <section className="pt-[40rem] pb-[40rem] px-[30rem] flex flex-col items-center bg-white">
    <div className="w-[300rem] flex flex-col gap-[30rem]">
      <div className="flex items-center gap-[8rem]">
        <h2 className="font-medium text-[34rem] leading-[110%] tracking-[-0.03em] text-[#223442]">cтоимость услуг</h2>
        <span className="text-[17rem] font-light text-[#223442]">₽</span>
      </div>
      <div className="flex flex-col gap-[20rem]">
        <div className="flex flex-col gap-[20rem]">
          {MOBILE_PRICES.map((item, i) => (
            <div key={i} className="flex justify-between items-center gap-[15rem]">
              <div className="font-light text-[16rem] leading-[140%] text-[#7A858E]">{item.label}</div>
              <div className="font-light text-[16rem] leading-[140%] text-[#223442]">{item.price}</div>
            </div>
          ))}
        </div>
        <div className="font-light text-[17rem] leading-[140%] text-[#269EFF] cursor-pointer">смотреть все</div>
      </div>
    </div>
  </section>
);

const MobileDoctors: React.FC = () => (
  <section className="pt-[40rem] pb-[40rem] bg-white">
    <div className="flex flex-col gap-[30rem]">
      <h2 className="font-medium text-[34rem] leading-[110%] tracking-[-0.03em] text-[#223442] px-[30rem]">наши врачи</h2>
      <div className="mobile-horizontal-scroll flex gap-[30rem] pl-[30rem]">
        {DOCTORS.slice(0, 8).map((doc, i) => (
          <div key={i} className="flex-shrink-0 w-[190rem] flex flex-col gap-[20rem]">
            <img src={doc.image} className="w-[190rem] h-[190rem] object-cover" />
            <div className="flex flex-col gap-[13rem]">
              <div className="flex flex-col gap-[10rem]">
                <div className="font-medium text-[16rem] leading-[140%] text-[#223442]">{doc.name}</div>
                <div className="font-light text-[16rem] leading-[140%] text-[#223442]">{doc.role}</div>
              </div>
              <div className="font-light text-[16rem] leading-[140%] text-[#7A858E]">{doc.exp}</div>
            </div>
          </div>
        ))}
        {/* Invisible spacer to maintain layout flow to the very edge while allowing items to hit the right side */}
        <div className="flex-shrink-0 w-[30rem] h-full invisible"></div>
      </div>
    </div>
  </section>
);

const MobileFAQ: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  return (
    <section className="pt-[40rem] pb-[40rem] px-[30rem] bg-white">
      <div className="w-full flex flex-col gap-[30rem]">
        <h2 className="font-medium text-[34rem] leading-[110%] tracking-[-0.03em] text-[#223442]">частые вопросы</h2>
        <div className="flex flex-col gap-[20rem]">
          {FAQ.map((item, i) => (
            <div key={i} className="flex flex-col gap-[10rem]">
              <div 
                className="flex items-start gap-[20rem] cursor-pointer"
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              >
                <div className="w-[15rem] flex-shrink-0 pt-[9rem]">
                  <svg viewBox="0 0 15 15" className={`w-[15rem] h-[15rem] transition-transform ${activeIdx === i ? 'rotate-45' : ''}`} fill="none">
                    <path d="M7.5 0V15M0 7.5H15" stroke="#269EFF" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="font-medium text-[22rem] leading-[130%] text-[#269EFF]">{item.question}</div>
              </div>
              {activeIdx === i && (
                <div className="pl-[35rem]">
                  <div className="font-light text-[16rem] leading-[150%] text-[#223442]">{item.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MobilePersuasion: React.FC = () => (
  <section className="pt-[40rem] pb-[40rem] flex flex-col items-center gradient-bg-1">
    <div className="w-[300rem] flex flex-col gap-[20rem] mb-[40rem]">
      <h2 className="font-medium text-[34rem] leading-[110%] tracking-[-0.03em] text-[#223442]">уговорим вашего близкого на лечение</h2>
      <div className="font-light text-[16rem] leading-[150%] text-[#223442]">Без давления и принуждения</div>
      <button className="w-[199rem] h-[55rem] bg-[#E7F5FF] rounded-[20rem] flex items-center justify-center p-[13rem_25rem_16rem] text-[#269EFF] font-light text-[17rem] leading-[150%]">
        получить помощь
      </button>
    </div>
    <img src="https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/497e7403-f9ce-443b-8106-aa1527717618.png" className="w-[360rem] h-[269rem] object-cover" />
  </section>
);

const MobileConditions: React.FC = () => (
  <section className="pt-[40rem] pb-[40rem] bg-white">
    <div className="flex flex-col gap-[30rem]">
      <h2 className="font-medium text-[34rem] leading-[110%] tracking-[-0.03em] text-[#223442] px-[30rem]">комфортные условия лечения</h2>
      <div className="mobile-horizontal-scroll flex gap-[20rem] pl-[30rem]">
        {CONDITIONS.map((img, i) => (
          <img key={i} src={img} className="w-[280rem] h-[230rem] object-cover flex-shrink-0" />
        ))}
        {/* Spacer */}
        <div className="flex-shrink-0 w-[30rem] h-full invisible"></div>
      </div>
    </div>
  </section>
);

const MobileFixedBar: React.FC = () => (
  <div className="fixed bottom-0 left-0 w-full h-[75rem] bg-white border-t border-gray-100 flex items-center justify-center z-[100] px-[10rem] py-[10rem]">
    <div className="w-full flex items-center justify-between">
      <div className="w-[55rem] h-[55rem] bg-[#E7F5FF] rounded-[20rem] flex-shrink-0 flex items-center justify-center">
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
          <path d="M12 0L24 11L12 22L0 11L12 0Z" fill="#269EFF"/>
        </svg>
      </div>
      <button className="flex-1 mx-[10rem] h-[55rem] bg-[#269EFF] rounded-[20rem] flex items-center justify-center text-white font-normal text-[17rem] leading-[110%] whitespace-nowrap">
        вызвать врача
      </button>
      <div className="w-[55rem] h-[55rem] bg-[#E7F5FF] rounded-[20rem] flex-shrink-0 flex items-center justify-center mr-[10rem]">
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
          <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#269EFF"/>
        </svg>
      </div>
      <div className="w-[55rem] h-[55rem] bg-[#E7F5FF] rounded-[20rem] flex-shrink-0 flex flex-col items-center justify-center gap-[4rem]">
        <div className="w-[23rem] h-[3rem] bg-[#269EFF]"></div>
        <div className="w-[23rem] h-[3rem] bg-[#269EFF]"></div>
        <div className="w-[23rem] h-[3rem] bg-[#269EFF]"></div>
      </div>
    </div>
  </div>
);

export default MobileLayout;
