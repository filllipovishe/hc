
import { Doctor, PriceGroup, FAQItem } from './types';

export const DOCTORS: Doctor[] = [
  { 
    name: "Лапшин Артём", 
    role: "главный врач клиники, нарколог, психиатр", 
    exp: "30 лет стажа",
    image: "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/58742845-a4f7-4148-8df0-73892718cfd1.png"
  },
  { 
    name: "Родионова Мария", 
    role: "анестезиолог-реаниматолог, нарколог", 
    exp: "7 лет стажа",
    image: "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/94f7193d-82d8-4f22-bb71-8608e0b04c10.png"
  },
  { 
    name: "Лапшин Артём", 
    role: "врач-психиатр, нарколог", 
    exp: "10 лет стажа",
    image: "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/7542d46e-090c-40b9-87c7-c1d094396f48.png"
  },
  { 
    name: "Никитина Ирина", 
    role: "главный врач клиники, нарколог, психиатр", 
    exp: "5 лет стажа",
    image: "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/56b4618e-4b2a-4318-ae8e-0af14e5a95b3.png"
  },
  { 
    name: "Недова Мария", 
    role: "главный врач клиники, нарколог, психиатр", 
    exp: "12 лет стажа",
    image: "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/f12e84ec-b8f9-4677-9477-802c6762391b.png"
  },
  { 
    name: "Иванов Иван", 
    role: "психиатр-нарколог", 
    exp: "15 лет стажа",
    image: "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/58742845-a4f7-4148-8df0-73892718cfd1.png"
  },
  { 
    name: "Петров Петр", 
    role: "клинический психолог", 
    exp: "8 лет стажа",
    image: "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/94f7193d-82d8-4f22-bb71-8608e0b04c10.png"
  },
  { 
    name: "Сидоров Сидор", 
    role: "реаниматолог", 
    exp: "20 лет стажа",
    image: "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/7542d46e-090c-40b9-87c7-c1d094396f48.png"
  },
  { 
    name: "Смирнова Анна", 
    role: "нарколог", 
    exp: "6 лет стажа",
    image: "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/56b4618e-4b2a-4318-ae8e-0af14e5a95b3.png"
  },
  { 
    name: "Кузнецов Олег", 
    role: "психотерапевт", 
    exp: "11 лет стажа",
    image: "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/f12e84ec-b8f9-4677-9477-802c6762391b.png"
  },
  { 
    name: "Попова Елена", 
    role: "медсестра", 
    exp: "5 лет стажа",
    image: "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/58742845-a4f7-4148-8df0-73892718cfd1.png"
  },
  { 
    name: "Васильев Василий", 
    role: "нарколог", 
    exp: "9 лет стажа",
    image: "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/94f7193d-82d8-4f22-bb71-8608e0b04c10.png"
  },
  { 
    name: "Михайлов Михаил", 
    role: "психиатр", 
    exp: "14 лет стажа",
    image: "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/7542d46e-090c-40b9-87c7-c1d094396f48.png"
  },
  { 
    name: "Новикова Ольга", 
    role: "психолог", 
    exp: "7 лет стажа",
    image: "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/56b4618e-4b2a-4318-ae8e-0af14e5a95b3.png"
  },
  { 
    name: "Федоров Федор", 
    role: "зав. отделением", 
    exp: "25 лет стажа",
    image: "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/f12e84ec-b8f9-4677-9477-802c6762391b.png"
  }
];

export const MOBILE_PRICES = [
  { label: "Выезд нарколога на дом", price: "3 000" },
  { label: "Вывод из запоя", price: "3 500" },
  { label: "Снятие похмелья", price: "5 500" },
  { label: "Снятие ломки", price: "4 000" },
  { label: "Кодирование уколом", price: "4 000" },
  { label: "Кодирование вшиванием", price: "8 000" },
  { label: "Сутки в стационаре", price: "5 000" }
];

export const DESKTOP_PRICE_GROUPS: PriceGroup[] = [
  {
    title: "экстренно",
    items: [
      { label: "Выезд нарколога на дом", price: "3 000" },
      { label: "Вывод из запоя капельницей", price: "3 500" },
      { label: "Снятие похмелья капельницей", price: "5 500" },
      { label: "Снятие ломки", price: "4 000" },
      { label: "Тест на наркотики", price: "40 000" },
      { label: "Снятие похмелья", price: "3 000" }
    ],
    moreCount: 6
  },
  {
    title: "кодирование",
    items: [
      { label: "Уколом, на 6 – 12 мес", price: "4 000" },
      { label: "Вшивание препарата", price: "8 000" },
      { label: "Кодирование гипнозом", price: "8 000" },
      { label: "Двойной блок", price: "40 000" },
      { label: "Кодирование иглоукалыванием", price: "8 000" },
      { label: "Иглоукалыванием", price: "8 000" }
    ],
    moreCount: 6
  },
  {
    title: "лечение в клинике",
    items: [
      { label: "Сутки (всё включено)", price: "5 000" },
      { label: "Детоксикация", price: "6 500" },
      { label: "Опиоидная детоксикация", price: "40 000" },
      { label: "Сутки с питанием", price: "5 000" },
      { label: "Сутки с питанием и осмотром", price: "5 000" },
      { label: "Сутки с питанием и осмотром", price: "5 000" }
    ],
    moreCount: 2
  }
];

export const FAQ: FAQItem[] = [
  {
    question: "узнают ли соседи, что к нам приезжал нарколог?",
    answer: "Нет, никто не догадается. Наша бригада приезжает на обычном автомобиле без медицинских наклеек, «крестов» и мигалок. Врач поднимается в квартиру в гражданской одежде (халат он надевает уже внутри, помыв руки). Для соседей это будет выглядеть как визит гостя или родственника"
  },
  {
    question: "поставите ли вы на учет?",
    answer: "Мы частная клиника и гарантируем полную анонимность. Данные о пациентах никуда не передаются, на учет в государственный диспансер мы не ставим."
  },
  {
    question: "возможно ли принудительное лечение?",
    answer: "По закону РФ принудительное лечение возможно только по решению суда. Однако наши психологи владеют методиками интервенции (убеждения), которые помогают пациенту самостоятельно согласиться на лечение в 9 из 10 случаев."
  },
  {
    question: "может ли цена вырасти после приезда врача?",
    answer: "Базовая стоимость озвучивается оператором. Цена может измениться только в случае, если на месте выяснится, что состояние пациента тяжелее описанного (требуются дополнительные препараты) или требуются дополнительные услуги, не оговоренные ранее. Все согласовывается до начала процедур."
  },
  {
    question: "безопасно ли ставить капельницу дома?",
    answer: "Да, абсолютно безопасно. Врач привозит с собой все необходимое реанимационное оборудование и сертифицированные препараты. Перед процедурой проводится осмотр и ЭКГ для исключения противопоказаний."
  }
];

export const CONDITIONS = [
  "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/04c35e95-7d52-4752-9596-f33166b26b52.png",
  "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/f69165d7-130f-4310-a299-1bd13fa17316.png",
  "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/04c35e95-7d52-4752-9596-f33166b26b52.png",
  "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/f69165d7-130f-4310-a299-1bd13fa17316.png",
  "https://res.cloudinary.com/subframe/image/upload/v1740924968/uploads/907/04c35e95-7d52-4752-9596-f33166b26b52.png"
];
