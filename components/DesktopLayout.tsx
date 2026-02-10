
import React, { useRef, useState, useEffect } from 'react';
import { DESKTOP_PRICE_GROUPS, DOCTORS, FAQ, CONDITIONS } from '../constants';

const useDragScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;
    setIsDown(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDown(false);
  const onMouseUp = () => setIsDown(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return { ref, onMouseDown, onMouseLeave, onMouseUp, onMouseMove };
};

const DesktopLayout: React.FC = () => {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <WhatHappened />
      <Prices />
      <DoctorsScroll />
      <FAQSection />
      <Persuasion />
      <ConditionsScroll />
      <Footer />
    </div>
  );
};

const Header: React.FC = () => (
  <header className="h-[100rem] flex items-center justify-between bg-white px-[50rem] sticky top-0 z-50 border-b border-gray-50">
    <div className="flex items-center gap-[30rem]">
      <div className="flex items-center gap-[3rem]">
        <div className="font-medium text-[32rem] leading-[130%] tracking-[-0.03em]">health</div>
        <div className="w-[26rem] h-[24rem]">
          <svg width="100%" height="100%" viewBox="0 0 26 24" fill="none">
            <path d="M13 0L26 12L13 24L0 12L13 0Z" fill="#269EFF"/>
          </svg>
        </div>
        <div className="font-medium text-[32rem] leading-[130%] tracking-[-0.03em]">center</div>
      </div>
      <div className="flex items-center gap-[8rem] cursor-pointer">
        <svg width="10rem" height="6rem" viewBox="0 0 10 6" fill="none">
          <path d="M5 6L0 0H10L5 6Z" fill="#223442"/>
        </svg>
        <div className="font-light text-[22rem] leading-[140%] whitespace-nowrap">Н. Новгород</div>
      </div>
    </div>
    <nav>
      <ul className="flex gap-[25rem]">
        {["Услуги", "О клинике", "Цены", "Отзывы", "Врачи", "Контакты"].map((item, i) => (
          <li key={item} className="font-light text-[22rem] leading-[140%] cursor-pointer flex items-center gap-[9rem] whitespace-nowrap">
            {i === 0 && (
              <svg width="10rem" height="6rem" viewBox="0 0 10 6" fill="none">
                <path d="M5 6L0 0H10L5 6Z" fill="#223442"/>
              </svg>
            )}
            {item}
          </li>
        ))}
      </ul>
    </nav>
    <div className="flex items-center gap-[30rem]">
      <div className="flex items-center gap-[9rem] font-light text-[22rem] whitespace-nowrap">
        <svg width="10rem" height="6rem" viewBox="0 0 10 6" fill="none">
          <path d="M5 6L0 0H10L5 6Z" fill="#223442"/>
        </svg>
        8 999 333 10 74
      </div>
      <button className="w-[216rem] h-[58rem] bg-[#269EFF] rounded-[20rem] text-white font-normal text-[22rem] flex items-center justify-center pb-[2rem] hover:opacity-90 transition-opacity">
        вызвать врача
      </button>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="h-[819rem] pt-[50rem] relative gradient-bg-1 px-[100rem]">
    <div className="flex gap-[114rem]">
      <div className="w-[507rem] pt-[130rem] flex flex-col gap-[30rem]">
        <h1 className="font-medium text-[58rem] leading-[110%] tracking-[-0.03em]">анонимная наркологическая помощь</h1>
        <div className="flex flex-col gap-[15rem]">
          <div className="font-light text-[22rem] leading-[140%] tracking-[-0.02em]">Врач у вас дома через 30–45 минут</div>
          <div className="font-light text-[22rem] leading-[140%] tracking-[-0.02em]">Без постановки на учет</div>
        </div>
      </div>
      <img src="https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/20f2622f-d892-4e65-ba81-28564177b09b.png" className="w-[1099rem] h-[769rem] object-cover object-bottom" />
    </div>
  </section>
);

const WhatHappened: React.FC = () => (
  <section className="h-[916rem] p-[50rem_100rem] flex justify-between gradient-bg-2">
    <img src="https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/f69ce99d-8c17-48b8-b4cf-5047b38d3886.png" className="w-[1135rem] h-[816rem] object-cover" />
    <div className="pt-[130rem] w-[455rem] flex flex-col gap-[60rem]">
      <h2 className="font-medium text-[58rem] leading-[120%] tracking-[-0.03em] whitespace-nowrap">что случилось?</h2>
      <div className="flex flex-col gap-[30rem]">
        {["запой или похмелье", "хочу бросить пить", "наркотическая ломка", "психические расстройства", "зависимость у близкого"].map(item => (
          <div key={item} className="font-medium text-[32rem] leading-[130%] tracking-[-0.03em] text-[#269EFF] cursor-pointer hover:underline">
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Prices: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  return (
    <section className="p-[90rem_100rem_100rem] bg-white">
      <div className="flex items-start gap-[8rem] mb-[60rem]">
        <h2 className="font-medium text-[58rem] leading-[120%] tracking-[-0.03em]">стоимость услуг</h2>
        <span className="text-[22rem] font-light mt-[5rem]">₽</span>
      </div>
      <div className="flex gap-[154rem]">
        {DESKTOP_PRICE_GROUPS.map((group, idx) => (
          <div key={idx} className="w-[469rem] flex flex-col gap-[38rem]">
            <div className="font-medium text-[32rem] mb-[20rem]">{group.title}</div>
            <div className="flex flex-col gap-[25rem]">
              {group.items.map((item, i) => (
                <div key={i} className="flex justify-between font-light text-[22rem] text-[#7A858E]">
                  <span>{item.label}</span>
                  <span className="text-[#223442]">{item.price}</span>
                </div>
              ))}
              {expanded[idx] && [1,2,3,4,5,6].slice(0, group.moreCount).map(i => (
                 <div key={i} className="flex justify-between font-light text-[22rem] text-[#7A858E]">
                    <span>Доп. услуга {i}</span>
                    <span className="text-[#223442]">1 000</span>
                 </div>
              ))}
              <div 
                className="text-[#269EFF] font-light text-[22rem] cursor-pointer" 
                onClick={() => setExpanded(prev => ({...prev, [idx]: !prev[idx]}))}
              >
                {expanded[idx] ? 'Свернуть' : `+ ещё ${group.moreCount}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const DoctorsScroll: React.FC = () => {
  const { ref, ...dragProps } = useDragScroll();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = () => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 400, behavior: 'smooth' });
  };

  return (
    <section className="p-[90rem_100rem] bg-white relative">
      <div className="flex justify-between items-center mb-[40rem]">
        <h2 className="font-medium text-[58rem] leading-[120%] tracking-[-0.03em]">наши врачи</h2>
        <div className="flex gap-[20rem]">
          <button 
            onClick={() => scroll(-1)}
            className={`w-[60rem] h-[63rem] flex items-center justify-center transition-colors ${canScrollLeft ? 'bg-[#E7F5FF] cursor-pointer' : 'bg-[#E7F5FF]/50 cursor-default'}`}
          >
            <svg width="60rem" height="63rem" viewBox="0 0 60 63"><path d="M40 20L20 31.5L40 43" stroke="#269EFF" strokeWidth="2" fill="none"/></svg>
          </button>
          <button 
            onClick={() => scroll(1)}
            className={`w-[60rem] h-[63rem] flex items-center justify-center transition-colors ${canScrollRight ? 'bg-[#E7F5FF] cursor-pointer' : 'bg-[#E7F5FF]/50 cursor-default'}`}
          >
            <svg width="60rem" height="63rem" viewBox="0 0 60 63"><path d="M20 20L40 31.5L20 43" stroke="#269EFF" strokeWidth="2" fill="none"/></svg>
          </button>
        </div>
      </div>
      <div 
        ref={ref} 
        onScroll={updateButtons}
        {...dragProps}
        className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing select-none"
      >
        <div className="flex gap-[30rem] w-max">
          {DOCTORS.map((doc, i) => (
            <div key={i} className="w-[370rem] flex flex-col gap-[30rem]">
              <img src={doc.image} className="w-[370rem] h-[370rem] object-cover pointer-events-none" />
              <div className="flex flex-col gap-[13rem]">
                <div className="font-medium text-[22rem]">{doc.name}</div>
                <div className="font-light text-[22rem]">{doc.role}</div>
                <div className="font-light text-[22rem] text-[#7A858E]">{doc.exp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  return (
    <section className="p-[90rem_100rem] bg-white">
      <h2 className="font-medium text-[58rem] leading-[120%] tracking-[-0.03em]">частые вопросы</h2>
      <div className="mt-[60rem] flex flex-col gap-[45rem]">
        {FAQ.map((item, i) => (
          <div key={i} className="border-b border-transparent">
            <div 
              className="flex items-start gap-[32rem] cursor-pointer" 
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
            >
              <div className={`w-[26rem] h-[26rem] mt-[5rem] transition-transform duration-300 ${activeIdx === i ? 'rotate-45' : ''}`}>
                <svg viewBox="0 0 26 26" fill="none"><path d="M13 0V26M0 13H26" stroke="#269EFF" strokeWidth="3"/></svg>
              </div>
              <div className="font-medium text-[32rem] leading-[130%] text-[#269EFF]">{item.question}</div>
            </div>
            <div 
              className="overflow-hidden transition-[max-height] duration-300 pl-[58rem]" 
              style={{ maxHeight: activeIdx === i ? '500px' : '0px' }}
            >
              <div className="pt-[15rem] font-light text-[22rem] leading-[150%]">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Persuasion: React.FC = () => (
  <section className="p-[50rem_100rem] flex gap-[100rem] h-[916rem] gradient-bg-2">
    <img src="https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/497e7403-f9ce-443b-8106-aa1527717618.png" className="w-[1135rem] h-[816rem] object-cover" />
    <div className="pt-[130rem] w-[500rem] flex flex-col gap-[30rem]">
      <h2 className="font-medium text-[58rem] leading-[110%] tracking-[-0.03em]">уговорим вашего близкого на лечение</h2>
      <div className="font-light text-[22rem] leading-[140%] tracking-[-0.02em]">Без давления и принуждения</div>
      <button className="w-[253rem] h-[58rem] bg-[#E7F5FF] text-[#269EFF] rounded-[20rem] font-normal text-[22rem] flex items-center justify-center pb-[2rem] mt-[30rem]">
        получить помощь
      </button>
    </div>
  </section>
);

const ConditionsScroll: React.FC = () => {
  const { ref, ...dragProps } = useDragScroll();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = () => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 800, behavior: 'smooth' });
  };

  return (
    <section className="p-[90rem_100rem] gradient-bg-1">
      <div className="flex justify-between items-center mb-[40rem]">
        <h2 className="font-medium text-[58rem] leading-[120%] tracking-[-0.03em]">комфортные условия лечения</h2>
        <div className="flex gap-[20rem]">
          <button 
            onClick={() => scroll(-1)}
            className={`w-[60rem] h-[63rem] flex items-center justify-center transition-colors ${canScrollLeft ? 'bg-[#E7F5FF] cursor-pointer' : 'bg-[#E7F5FF]/50 cursor-default'}`}
          >
            <svg width="60rem" height="63rem" viewBox="0 0 60 63"><path d="M40 20L20 31.5L40 43" stroke="#269EFF" strokeWidth="2" fill="none"/></svg>
          </button>
          <button 
            onClick={() => scroll(1)}
            className={`w-[60rem] h-[63rem] flex items-center justify-center transition-colors ${canScrollRight ? 'bg-[#E7F5FF] cursor-pointer' : 'bg-[#E7F5FF]/50 cursor-default'}`}
          >
            <svg width="60rem" height="63rem" viewBox="0 0 60 63"><path d="M20 20L40 31.5L20 43" stroke="#269EFF" strokeWidth="2" fill="none"/></svg>
          </button>
        </div>
      </div>
      <div 
        ref={ref} 
        onScroll={updateButtons}
        {...dragProps}
        className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing select-none"
      >
        <div className="flex gap-[30rem] w-max">
          {CONDITIONS.map((img, i) => (
            <img key={i} src={img} className="w-[835rem] h-[547rem] object-cover flex-shrink-0 pointer-events-none" />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="p-[90rem_353rem] bg-white">
    <div className="font-light text-[22rem] leading-[150%] mb-[80rem]">
      Медицинский сайт наркологической клиники помощи людям с алкогольной и наркотической зависимостью<br/>
      Вся представленная на сайте информация, касающаяся медицинских услуг, носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ<br/>
      Имеются противопоказания, необходимо проконсультироваться со специалистом<br/>
      Информация на сайте предназначена для лиц старше 18 лет
    </div>
    <div className="flex justify-between">
      <div className="flex flex-col gap-[15rem]">
        {["Конфиденциальность", "Условия использования", "Лицензии", "группа Vkontakte"].map(link => (
          <a key={link} href="#" className="font-light text-[22rem] leading-[150%] text-[#269EFF]">{link}</a>
        ))}
      </div>
      <div className="flex flex-col gap-[15rem] grid grid-cols-[max-content_auto] gap-x-[30rem] gap-y-[15rem]">
        <div className="text-[#7A858E] font-light text-[22rem] text-right">ООО</div> <div className="text-[#223442] font-light text-[22rem]">ЮгЭкоСервис</div>
        <div className="text-[#7A858E] font-light text-[22rem] text-right">ИНН</div> <div className="text-[#223442] font-light text-[22rem]">6161060788</div>
        <div className="text-[#7A858E] font-light text-[22rem] text-right">ОГРН</div> <div className="text-[#223442] font-light text-[22rem]">1116193001540</div>
        <div className="text-[#7A858E] font-light text-[22rem] text-right">Лицензия</div> <div className="text-[#223442] font-light text-[22rem]">№ Л041-01050-61/00357506<br/>от 29 октября 2020</div>
      </div>
      <div className="flex flex-col gap-[15rem]">
        <span className="font-medium text-[22rem] text-[#223442] mb-[5rem]">Способы оплаты</span>
        {["Банковские карты", "Банковские переводы", "Наличные"].map(p => (
          <span key={p} className="font-light text-[22rem] text-[#223442]">{p}</span>
        ))}
      </div>
    </div>
  </footer>
);

export default DesktopLayout;
