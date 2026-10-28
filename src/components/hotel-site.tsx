'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Coffee, MapPin, Menu, MessageCircle, Phone, Sparkles, UtensilsCrossed, Wifi, WashingMachine, X, BedDouble, } from 'lucide-react';
import { site, rooms, roomPrice, roomInquiry, whatsappUrl } from '@/lib/site';

type Lang = 'en'|'sw';
const copy = {
  en: {
    nav: ['Home', 'Our story', 'Our Rooms', 'Food & drinks', 'Find us'],
    book: 'Book your stay', smallTop: 'A WARM WELCOME AWAITS',
    heroBody: 'Your Stay, Your Taste, Your Comfort.',
    explore: 'Discover Our Menu', scroll: 'Discover The Great Rotale', strip: ['Comfortable stays', 'Free Wi-Fi', 'Laundry service', 'Delicious dining'],
    introEyebrow: 'MORE THAN A PLACE TO STAY', introTitle: 'Come for the comfort. Stay for the feeling.', introBody: 'Whether you are checking in for a restful night or joining us for a memorable meal, we bring together warm hospitality, everyday convenience, and the food you love.',
    signature: 'OUR SIGNATURE TABLE', sigTitle: 'Not just food. A reason to visit.', sigDesc: 'Made to share, made to remember. Two favourites that bring people together at The Great Rotale.',
    kis: 'The sharing experience', kisDesc: 'Gather around the table for our signature Kisinia — a generous dish made for good company and great moments.',
    bir: 'Friday favourite', birDesc: 'Make Fridays delicious with our much-loved Ijumaa Biriani. A special tradition worth looking forward to.',
    askFood: 'Ask about this dish', menuEyebrow: 'SOMETHING FOR EVERY CRAVING', menuTitle: 'Good food, good mood.', menuDesc: 'From everyday classics to something extra special, find your next favourite.',
    pizza: 'Pizza', burger: 'Burgers', breakfast: 'Breakfast', menuChat: 'Order / inquire on WhatsApp',
    servicesEyebrow: 'MADE FOR YOUR COMFORT', servicesTitle: 'Little extras. A better stay.',
    services: [['Complimentary Wi-Fi','Stay connected wherever your day takes you.'], ['Laundry service','Travel light and leave the laundry to us.'], ['Comfortable rooms','A welcoming space to rest and recharge.'], ['Breakfast & meals','Start your day well and enjoy delicious meals.']],
    roomEyebrow: 'STAY A LITTLE LONGER', roomTitle: 'Your space to slow down.', roomBody: 'Settle in, recharge and enjoy a comfortable stay. Get in touch to ask about available rooms and rates.', roomButton: 'Ask about rooms',
    visitEyebrow: 'COME SAY HELLO', visitTitle: 'Find your way to us.', visitBody: 'Planning a visit? Use Google Maps for directions or send us a message. We would love to welcome you.', directions: 'Open Google Maps', contact: 'Chat on WhatsApp',
    footerTag: 'Stay well. Eat well. Feel at home.', quick: 'Explore', contactTitle: 'Get in touch', maps: 'Find us on Google Maps', rights: 'All rights reserved.',
    messageStay: 'Hello THE GREAT ROTALE! I would like to inquire about room availability and prices.', messageKis: 'Hello THE GREAT ROTALE! I would like to inquire about Kisinia.', messageBir: 'Hello THE GREAT ROTALE! I would like to inquire about Ijumaa Biriani.', messageFood: 'Hello THE GREAT ROTALE! I would like to inquire about your food menu and ordering.', messageContact: 'Hello THE GREAT ROTALE! I would like more information about your services.',
    mobileMenu: 'Toggle navigation', language: 'Switch to Swahili',
    exploreRooms: 'Explore Our Rooms', roomsTitle: 'Our Rooms', roomsEyebrow: 'MAKE YOURSELF AT HOME',
    roomsBody: 'Two ways to settle in. Choose your room and speak with our team about your stay.',
    perNight: 'Per night', bookNow: 'Book Now',
    bookingNote: 'Bookings begin with an inquiry. Our team will confirm availability on WhatsApp.',
    fridayTitle: 'Friday Biriani Special', fridayBody: 'Make Ijumaa Biriani part of your Friday. Message our team to ask about availability and ordering.',
    order: 'Order on WhatsApp', signatureLabel: 'Signature favourite', hotelDining: 'HOTEL & RESTAURANT',
    stayDine: 'Stay & dine', amenities: ['Free Wi-Fi', 'Laundry', 'Accommodation'],
    mapTitle: 'Find us on the map', footerLine: 'Hospitality · Food · Comfort',
    heroAlt: 'The Great Rotale hotel exterior and landscaped entrance',
    roomAlt: 'Guest room at The Great Rotale with a bed beside the window',
    kisiniaAlt: 'The Great Rotale Kisinia served on a large sharing platter',
    birianiAlt: 'Illustrative Biriani served on a plate; not verified as the hotel’s dish',
    illustrative: 'Illustrative photograph', birianiCaption: 'Illustrative photograph; not verified as our own Biriani.',
    credits: 'Photography credits', creditsBody: 'Hotel, room, logo and Kisinia images supplied by THE GREAT ROTALE. The supplied Biriani image is illustrative; its photographer and source are unverified. Pizza, burgers and breakfast use the original illustrative Unsplash photographs.',
    skip: 'Skip to content', navigation: 'Main navigation',
  },
  sw: {
    nav: ['Mwanzo','Kuhusu sisi','Vyumba Vyetu','Chakula na vinywaji','Mahali tulipo'],
    book: 'Ulizia vyumba', smallTop: 'KARIBU SANA', heroBody: 'Malazi Yako, Ladha Yako, Starehe Yako.',
    explore: 'Gundua Menyu Yetu', scroll: 'Gundua The Great Rotale', strip: ['Malazi yenye starehe','Wi-Fi ya bure','Huduma ya kufua','Chakula kitamu'],
    introEyebrow: 'ZAIDI YA MALAZI', introTitle: 'Njoo kwa starehe. Baki kwa ukarimu.', introBody: 'Ukiwa unatafuta sehemu ya kulala au kufurahia mlo mzuri, tunakuletea ukarimu, huduma bora na chakula unachokipenda.',
    signature: 'VYAKULA VYETU MAALUM', sigTitle: 'Zaidi ya chakula. Sababu ya kututembelea.', sigDesc: 'Vyakula vya kufurahia pamoja na marafiki na familia. Mapishi mawili tunayojivunia The Great Rotale.',
    kis: 'Furahia pamoja', kisDesc: 'Kusanyika pamoja kwa Kisinia yetu maalum — chakula cha ukarimu kwa familia na marafiki.', bir: 'Chakula maalum cha Ijumaa', birDesc: 'Fanya Ijumaa yako iwe tamu kwa Biriani yetu ya Ijumaa. Ladha ya kuisubiri kila wiki.',
    askFood: 'Ulizia chakula hiki', menuEyebrow: 'CHAKULA KWA KILA LADHA', menuTitle: 'Chakula kizuri, furaha tele.', menuDesc: 'Kutoka vyakula vya kila siku hadi maalum, chagua unachokipenda.',
    pizza: 'Pizza', burger: 'Burger', breakfast: 'Kifungua kinywa', menuChat: 'Agiza / uliza kwa WhatsApp', servicesEyebrow: 'KWA STAREHE YAKO', servicesTitle: 'Huduma nzuri. Mapumziko bora.',
    services: [['Wi-Fi ya bure','Endelea kuwasiliana na wapendwa wako.'],['Huduma ya kufua','Safari nyepesi, shughuli za kufua ni jukumu letu.'],['Vyumba vya starehe','Pumzika katika mazingira mazuri.'],['Kifungua kinywa na milo','Anza siku yako vizuri kwa chakula kitamu.']],
    roomEyebrow: 'PUMZIKA NASI', roomTitle: 'Sehemu yako ya mapumziko.', roomBody: 'Pumzika kwa starehe. Wasiliana nasi kuuliza upatikanaji wa vyumba na bei.', roomButton: 'Ulizia vyumba',
    visitEyebrow: 'KARIBU UTUTEMBELEE', visitTitle: 'Tufikie kwa urahisi.', visitBody: 'Unapanga kututembelea? Tumia Google Maps kupata maelekezo au tutumie ujumbe.', directions: 'Fungua Google Maps', contact: 'Wasiliana kwa WhatsApp',
    footerTag: 'Lala vizuri. Kula vizuri. Jisikie nyumbani.', quick: 'Viungo', contactTitle: 'Wasiliana nasi', maps: 'Tupate Google Maps', rights: 'Haki zote zimehifadhiwa.',
    messageStay: 'Habari THE GREAT ROTALE! Naomba kujua upatikanaji na bei za vyumba.', messageKis: 'Habari THE GREAT ROTALE! Naomba maelezo kuhusu Kisinia.', messageBir: 'Habari THE GREAT ROTALE! Naomba maelezo kuhusu Biriani ya Ijumaa.', messageFood: 'Habari THE GREAT ROTALE! Naomba menyu na maelezo ya kuagiza chakula.', messageContact: 'Habari THE GREAT ROTALE! Naomba maelezo zaidi kuhusu huduma zenu.',
    mobileMenu: 'Fungua au funga menyu', language: 'Badili kwenda Kiingereza',
    exploreRooms: 'Gundua Vyumba Vyetu', roomsTitle: 'Vyumba Vyetu', roomsEyebrow: 'JISIKIE NYUMBANI',
    roomsBody: 'Chagua chumba unachopenda, kisha wasiliana na timu yetu kuhusu malazi yako.',
    perNight: 'Kwa usiku', bookNow: 'Weka nafasi',
    bookingNote: 'Kuweka nafasi huanza kwa kuulizia. Timu yetu itathibitisha upatikanaji kupitia WhatsApp.',
    fridayTitle: 'Biriani Maalum ya Ijumaa', fridayBody: 'Furahia Ijumaa kwa Biriani yetu. Wasiliana na timu yetu kuulizia upatikanaji na jinsi ya kuagiza.',
    order: 'Agiza kupitia WhatsApp', signatureLabel: 'Chakula chetu maalum', hotelDining: 'HOTELI NA MGHAHAWA',
    stayDine: 'Malazi na chakula', amenities: ['Wi-Fi ya bure', 'Huduma ya kufua', 'Malazi'],
    mapTitle: 'Tupate kwenye ramani', footerLine: 'Ukarimu · Chakula · Starehe',
    heroAlt: 'Mwonekano wa nje na lango la hoteli ya The Great Rotale',
    roomAlt: 'Chumba cha wageni cha The Great Rotale chenye kitanda karibu na dirisha',
    kisiniaAlt: 'Kisinia cha The Great Rotale kwenye sinia kubwa la kushirikiana',
    birianiAlt: 'Picha ya mfano ya Biriani kwenye sahani; haijathibitishwa kuwa ya hoteli',
    illustrative: 'Picha ya mfano', birianiCaption: 'Picha ya mfano; haijathibitishwa kuwa ya Biriani yetu.',
    credits: 'Taarifa za picha', creditsBody: 'Picha za hoteli, vyumba, nembo na Kisinia zimetolewa na THE GREAT ROTALE. Picha ya Biriani iliyotolewa ni ya mfano; mpiga picha na chanzo chake havijathibitishwa. Picha za pizza, burger na kifungua kinywa ni picha za mfano za awali kutoka Unsplash.',
    skip: 'Ruka hadi maudhui', navigation: 'Menyu kuu',
  }
};
const navAnchors = ['home','about','rooms','food','location'];
function Photo({ src, alt, className = '', sizes = '(min-width: 1024px) 50vw, 100vw' }: {
  src: string; alt: string; className?: string; sizes?: string;
}) {
  const [failed, setFailed] = useState(false);
  // Load the original food placeholders directly, as the starter did.
  // Proxying Unsplash through the server can time out on local networks.
  const useDirectSource = src.startsWith('https://images.unsplash.com/');
  return <div className={`relative overflow-hidden bg-[#eadbd3] ${className}`}>
    {failed
      ? <div role="img" aria-label={alt} className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-[#5c423b]">{alt}</div>
      : <Image src={src} alt={alt} fill sizes={sizes} unoptimized={useDirectSource} className="object-cover" onError={() => setFailed(true)} />}
  </div>;
}
export default function HotelSite() {
  const [lang,setLang] = useState<Lang>('en');
  const [mobileOpen,setMobileOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const switchLanguage = () => {
    const nextLang = lang === 'en' ? 'sw' : 'en';
    setLang(nextLang);
    document.documentElement.lang = nextLang;
  };
  const t = copy[lang];
  const chat = (text:string) => whatsappUrl(text);
  return <div>
    <a href="#main-content" className="skip-link">{t.skip}</a>
    <div className="bg-[#8d1720] text-white text-[11px] sm:text-xs"><div className="container-site flex justify-center sm:justify-between items-center py-2.5 gap-3"><span className="flex items-center gap-2"><Sparkles size={13}/> {t.smallTop}</span><a href={`tel:+${site.phoneInternational}`} className="hidden sm:flex items-center gap-2"><Phone size={12}/>{site.phoneDisplay}</a></div></div>
    <header onKeyDown={(event) => { if (event.key === 'Escape' && mobileOpen) { setMobileOpen(false); menuButton.current?.focus(); } }} className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#ede5df]"><div className="container-site h-[82px] flex justify-between items-center gap-3">
      <a href="#home" className="flex items-center gap-2 sm:gap-3 shrink-0" aria-label={`${site.name} · ${t.nav[0]}`}>
        <Image src={site.images.logo} alt="" width={56} height={56} priority className="size-11 sm:size-14 object-contain" />
        <span className="leading-tight"><strong className="block tracking-[.08em] text-[11px] sm:text-[13px]">THE GREAT</strong><strong className="block tracking-[.18em] text-[14px] sm:text-[17px] text-[#a41922]">ROTALE</strong></span>
      </a>
      <nav aria-label={t.navigation} className="hidden xl:flex items-center gap-6">{t.nav.map((n,i)=><a className="nav-link" href={`#${navAnchors[i]}`} key={i}>{n}</a>)}</nav>
      <div className="flex items-center gap-2.5"><button onClick={switchLanguage} aria-label={t.language} className="border border-[#e9dbd5] rounded-full min-h-11 px-3 py-2 text-xs font-bold hover:bg-[#fbf4ef] flex items-center gap-1">{lang==='en'?'EN':'SW'} <ChevronDown size={13}/></button><a href="#rooms" className="pill btn-red hidden sm:flex">{t.book}<ArrowUpRight size={15}/></a><button ref={menuButton} aria-label={t.mobileMenu} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={()=>setMobileOpen(!mobileOpen)} className="xl:hidden rounded-lg p-2.5 border border-[#eee1dc]">{mobileOpen?<X size={22}/>:<Menu size={22}/>}</button></div>
    </div>{mobileOpen&&<nav id="mobile-navigation" aria-label={t.navigation} className="xl:hidden max-h-[calc(100dvh-120px)] overflow-y-auto border-t border-[#eee1dc] bg-white container-site pb-5 pt-3 flex flex-col gap-1">{t.nav.map((n,i)=><a key={i} href={`#${navAnchors[i]}`} onClick={()=>setMobileOpen(false)} className="px-2 py-3 font-semibold text-sm">{n}</a>)}<a className="pill btn-red justify-center" href="#rooms" onClick={()=>setMobileOpen(false)}>{t.book}</a></nav>}</header>
    <main id="main-content" tabIndex={-1}>
      <section id="home" className="relative isolate min-h-[620px] lg:min-h-[710px] flex items-center bg-[#271c19]">
        <Image src={site.images.hero} alt={t.heroAlt} fill priority sizes="100vw" className="object-cover object-[center_48%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <div className="container-site relative z-10 text-white py-20 sm:py-28">
          <div className="max-w-[800px]">
            <p className="flex items-center gap-3 text-xs tracking-[.23em] font-bold text-white/90 mb-7"><span className="h-px w-10 bg-white/70" />{t.hotelDining}</p>
            <h1 className="text-[clamp(2.8rem,7.5vw,6.9rem)] leading-[1.04] tracking-[-.035em]">THE GREAT<br />ROTALE</h1>
            <p className="mt-7 max-w-lg text-lg sm:text-2xl leading-relaxed text-white">{t.heroBody}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-9 items-start">
              <a href="#rooms" className="pill btn-red">{t.exploreRooms}<ArrowUpRight size={17} /></a>
              <a href="#food" className="pill border border-white/70 bg-black/25 hover:bg-black/45 text-white">{t.explore}<ArrowRight size={17} /></a>
            </div>
          </div>
        </div>
        <a href="#about" className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/90 text-[11px] tracking-[.15em] uppercase hidden sm:block whitespace-nowrap">{t.scroll} ↓</a>
      </section>
      <section className="bg-[#9c1924] text-white"><div className="container-site grid grid-cols-2 md:grid-cols-4">{[BedDouble,Wifi,WashingMachine,UtensilsCrossed].map((Icon,i)=><div key={i} className="flex items-center justify-center gap-3 py-6 border-white/20 odd:border-r md:[&:not(:last-child)]:border-r"><Icon size={21} strokeWidth={1.7} className="shrink-0"/><span className="text-xs sm:text-sm font-semibold">{t.strip[i]}</span></div>)}</div></section>
      <section id="about" className="py-24 lg:py-32 bg-[#fcf8f3]"><div className="container-site grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-center"><div><span className="eyebrow">{t.introEyebrow}</span><h2 className="section-heading mt-5 max-w-xl">{t.introTitle}</h2><p className="text-[#716560] leading-8 mt-7 max-w-xl">{t.introBody}</p><div className="flex gap-6 mt-9 flex-wrap"><span className="text-sm flex gap-2 items-center font-semibold"><Check className="text-[#a41922]" size={18}/> {t.amenities[0]}</span><span className="text-sm flex gap-2 items-center font-semibold"><Check className="text-[#a41922]" size={18}/> {t.amenities[1]}</span><span className="text-sm flex gap-2 items-center font-semibold"><Check className="text-[#a41922]" size={18}/> {t.amenities[2]}</span></div></div><div className="relative"><Photo src={site.images.breakfast} alt={`${t.breakfast} — ${t.illustrative}`} className="h-[350px] sm:h-[470px] rounded-[3px]"/><div className="absolute -bottom-6 left-4 md:-left-5 bg-[#ac1822] text-white p-7 md:p-9 shadow-lg"><span className="serif text-3xl block">{t.stayDine}</span><span className="text-white/85 text-xs tracking-[.17em] uppercase mt-2 block">THE GREAT ROTALE</span></div></div></div></section>
      <section id="rooms" aria-labelledby="rooms-title" className="bg-[#fff] py-24 lg:py-28">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div><span className="eyebrow">{t.roomsEyebrow}</span><h2 id="rooms-title" className="section-heading mt-4">{t.roomsTitle}</h2></div>
            <p className="max-w-md text-[#716560] leading-7">{t.roomsBody}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-7">
            {rooms.map(room => <article key={room.id} aria-labelledby={`${room.id}-title`} className="group rounded-2xl border border-[#eee3dd] bg-white overflow-hidden shadow-[0_8px_30px_#48171709] card-hover">
              <Photo src={room.image} alt={`${room.name[lang]} · ${site.name}`} sizes="(min-width: 1280px) 586px, (min-width: 768px) 46vw, 100vw" className="aspect-[4/3] sm:aspect-[3/2]" />
              <div className="p-6 sm:p-8">
                <h3 id={`${room.id}-title`} className="text-3xl sm:text-4xl">{room.name[lang]}</h3>
                <div className="flex flex-wrap items-end justify-between gap-5 mt-6 pt-6 border-t border-[#eee3dd]">
                  <p><strong className="block text-2xl sm:text-3xl font-semibold text-[#a41922] tracking-tight">{roomPrice(room.price)}</strong><span className="block mt-1 text-sm text-[#716560]">{t.perNight}</span></p>
                  <a href={chat(roomInquiry(room, lang))} target="_blank" rel="noopener noreferrer" aria-label={`${t.bookNow} · ${room.name[lang]}`} className="pill btn-red">{t.bookNow}<ArrowUpRight size={17} /></a>
                </div>
              </div>
            </article>)}
          </div>
          <p className="mt-7 flex items-start gap-2 text-sm text-[#716560] leading-6"><MessageCircle size={18} className="shrink-0 mt-1 text-[#a41922]" />{t.bookingNote}</p>
        </div>
      </section>
      <section id="food" className="py-24 lg:py-28 bg-[#fcf8f3]">
        <div className="container-site">
          <div className="max-w-[720px] mx-auto text-center mb-14"><span className="eyebrow">{t.signature}</span><h2 className="section-heading mt-5">{t.sigTitle}</h2><p className="text-[#716560] mt-6 leading-7">{t.sigDesc}</p></div>
          <article className="grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="relative">
              <Photo src={site.images.kisinia} alt={t.kisiniaAlt} className="h-[390px] sm:h-[500px] md:h-full md:min-h-[540px]" />
              <span className="absolute top-5 left-5 right-5 w-fit bg-[#a41922] text-white rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-widest">{t.signatureLabel}</span>
            </div>
            <div className="p-7 sm:p-12 lg:p-16 flex flex-col justify-center items-start">
              <span className="eyebrow">{t.kis}</span><h3 className="text-5xl sm:text-6xl mt-4">Kisinia</h3>
              <p className="text-[#70635d] leading-8 mt-6">{t.kisDesc}</p>
              <a href={chat(t.messageKis)} target="_blank" rel="noopener noreferrer" className="pill btn-red mt-8">{t.askFood}<MessageCircle size={18} /></a>
            </div>
          </article>
          <article className="grid md:grid-cols-[1.05fr_1fr] rounded-2xl overflow-hidden bg-[#821520] text-white mt-9">
            <div className="p-7 sm:p-12 lg:p-14 flex flex-col justify-center items-start">
              <span className="text-xs tracking-[.2em] font-bold uppercase text-[#f9d5cf]">Ijumaa Biriani</span>
              <h3 className="text-4xl sm:text-5xl leading-[1.1] mt-5">{t.fridayTitle}</h3>
              <p className="mt-6 text-white/90 leading-8">{t.fridayBody}</p>
              <a href={chat(t.messageBir)} target="_blank" rel="noopener noreferrer" className="pill btn-white mt-8">{t.order}<ArrowUpRight size={18} /></a>
            </div>
            <figure className="relative min-h-[350px] md:min-h-[470px]">
              <Image src={site.images.biriani} alt={t.birianiAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              <figcaption className="absolute bottom-0 inset-x-0 bg-black/80 px-5 py-3 text-xs leading-5 text-white">{t.birianiCaption} <a className="underline underline-offset-4" href="#photo-credits">{t.credits}<span aria-hidden="true"> ↗</span></a></figcaption>
            </figure>
          </article>
        </div>
      </section>
      <section className="bg-[#fcf8f3] py-24"><div className="container-site"><div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10"><div><span className="eyebrow">{t.menuEyebrow}</span><h2 className="section-heading mt-4">{t.menuTitle}</h2><p className="text-[#716560] leading-7 mt-4">{t.menuDesc}</p></div><a href={chat(t.messageFood)} target="_blank" rel="noopener noreferrer" className="pill btn-red w-fit">{t.menuChat}<ArrowUpRight size={17}/></a></div><div className="grid sm:grid-cols-3 gap-5">{[{name:t.pizza,image:site.images.pizza},{name:t.burger,image:site.images.burger},{name:t.breakfast,image:site.images.breakfast}].map(item=><a href={chat(`${t.messageFood} (${item.name})`)} target="_blank" rel="noopener noreferrer" key={item.name} className="group relative overflow-hidden h-[290px] sm:h-[340px] block"><Photo src={item.image} alt={`${item.name} — ${t.illustrative}`} sizes="(min-width: 1280px) 387px, (min-width: 640px) 32vw, 100vw" className="h-full group-hover:scale-105 transition-transform duration-500"/><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-transparent"/><div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white"><h3 className="text-[2rem]">{item.name}</h3><span className="rounded-full bg-white/25 backdrop-blur p-2"><ArrowUpRight size={20}/></span></div></a>)}</div></div></section>
      <section id="experience" className="py-24 lg:py-32"><div className="container-site"><div className="max-w-2xl mb-12"><span className="eyebrow">{t.servicesEyebrow}</span><h2 className="section-heading mt-5">{t.servicesTitle}</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{[Wifi,WashingMachine,BedDouble,Coffee].map((Icon,i)=><article key={i} className="border border-[#f0e7e2] p-8 min-h-64 card-hover"><div className="size-14 rounded-full bg-[#f9e9e5] text-[#a41922] flex items-center justify-center mb-7"><Icon size={26} strokeWidth={1.6}/></div><h3 className="text-xl">{t.services[i][0]}</h3><p className="text-sm leading-7 text-[#766a64] mt-3">{t.services[i][1]}</p></article>)}</div></div></section>
      <section className="bg-[#821520] text-white"><div className="grid lg:grid-cols-2"><Photo src={site.images.room} alt={t.roomAlt} className="h-[400px] lg:h-[540px]"/><div className="px-8 sm:px-14 lg:px-20 py-20 flex flex-col justify-center"><span className="text-white/75 text-xs font-bold tracking-[.24em]">{t.roomEyebrow}</span><h2 className="section-heading mt-6">{t.roomTitle}</h2><p className="mt-6 text-white/80 leading-8 max-w-lg">{t.roomBody}</p><a href="#rooms" className="pill btn-white w-fit mt-9">{t.roomsTitle}<ArrowUpRight size={18}/></a></div></div></section>
      <section id="location" className="py-24 lg:py-32 bg-[#fcf8f3]"><div className="container-site grid lg:grid-cols-2 items-center gap-12"><div><span className="eyebrow">{t.visitEyebrow}</span><h2 className="section-heading mt-5">{t.visitTitle}</h2><p className="mt-6 text-[#766a64] leading-8 max-w-lg">{t.visitBody}</p><div className="mt-8 flex items-center gap-3"><MapPin size={22} className="text-[#a41922]"/><span className="font-bold">THE GREAT ROTALE · Google Maps</span></div><div className="flex flex-wrap gap-3 mt-9"><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="pill btn-red">{t.directions}<ArrowUpRight size={16}/></a><a href={chat(t.messageContact)} target="_blank" rel="noopener noreferrer" className="pill border border-[#d9c7bf] hover:bg-white">{t.contact}<MessageCircle size={16}/></a></div></div><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="relative min-h-[340px] sm:min-h-[430px] bg-[#eee1d9] rounded-sm flex items-center justify-center overflow-hidden group"><div className="absolute inset-0 opacity-40" style={{backgroundImage:'linear-gradient(30deg,#baa799 12%,transparent 12.5%,transparent 87%,#baa799 87.5%,#baa799),linear-gradient(150deg,#baa799 12%,transparent 12.5%,transparent 87%,#baa799 87.5%,#baa799)',backgroundSize:'90px 156px'}}/><div className="relative z-10 bg-white shadow-xl p-8 text-center max-w-[280px]"><div className="mx-auto rounded-full size-16 flex items-center justify-center bg-[#a41922] text-white mb-4"><MapPin size={27}/></div><h3 className="text-2xl">{t.mapTitle}</h3><p className="text-sm text-[#716560] mt-3">{site.name}</p><span className="text-[#a41922] text-sm mt-5 inline-flex items-center gap-1 font-bold">Google Maps <ArrowUpRight size={14}/></span></div></a></div></section>
    </main>
    <footer className="bg-[#231c1a] text-white py-16"><div className="container-site grid md:grid-cols-[1.5fr_1fr_1fr] gap-12"><div><div className="text-xs tracking-[.27em] text-white/75">THE GREAT</div><div className="text-3xl tracking-[.17em] serif mt-1">ROTALE</div><p className="text-white/75 mt-5">{t.footerTag}</p></div><div><h3 className="font-bold text-sm mb-5">{t.quick}</h3><div className="flex flex-col gap-3">{t.nav.map((n,i)=><a href={`#${navAnchors[i]}`} key={i} className="text-sm text-white/75 hover:text-white">{n}</a>)}</div></div><div><h3 className="font-bold text-sm mb-5">{t.contactTitle}</h3><a href={`tel:+${site.phoneInternational}`} className="text-white/75 flex gap-2 items-center text-sm mb-4"><Phone size={16}/>{site.phoneDisplay}</a><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-white/75 flex gap-2 items-center text-sm mb-4"><MapPin size={16}/>{t.maps}</a><a href={chat(t.messageContact)} target="_blank" rel="noopener noreferrer" className="text-white/75 flex gap-2 items-center text-sm"><MessageCircle size={16}/>WhatsApp</a></div></div><div className="container-site border-t border-white/15 mt-14 pt-7 text-xs text-white/70 flex justify-between flex-wrap gap-4"><span>© {new Date().getFullYear()} THE GREAT ROTALE. {t.rights}</span><span>{t.footerLine}</span></div><div id="photo-credits" className="container-site border-t border-white/15 mt-7 pt-6 pb-8 text-xs text-white/75 leading-6"><p className="font-bold text-white mb-2">{t.credits}</p><p className="max-w-4xl">{t.creditsBody} <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Unsplash</a></p></div></footer>
    <a href={chat(t.messageContact)} target="_blank" rel="noopener noreferrer" aria-label={t.contact} className="fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full bg-[#147a49] text-white shadow-2xl size-14 hover:scale-105 transition-transform"><MessageCircle size={27}/></a>
  </div>;
}
