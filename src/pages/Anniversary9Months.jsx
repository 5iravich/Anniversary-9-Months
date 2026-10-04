import { useEffect, useMemo, useState } from "react"; 
import { Heart, Music2, Play, Pause, ChevronDown, Camera, Sparkles, Clock3, Mail, Gift, X, Volume2, } from "lucide-react"; 
import cover from "../assets/anniversary/month-00.jpg"; 
import month01 from "../assets/anniversary/month-01.jpg"; 
import month02 from "../assets/anniversary/month-02.jpg"; 
import month03 from "../assets/anniversary/month-03.jpg"; 
import month04 from "../assets/anniversary/month-04.jpg"; 
import month05 from "../assets/anniversary/month-05.jpg"; 
import month06 from "../assets/anniversary/month-06.jpg"; 
import month07 from "../assets/anniversary/month-07.jpg"; 
import month08 from "../assets/anniversary/month-08.jpg"; 
import month09 from "../assets/anniversary/month-09.jpg"; 

/* ========================================================= แก้ข้อมูลตรงนี้ ========================================================= */ 
const START_DATE = "2026-01-05T16:03:00";
const PERSON_1 = "N'โชสุดหล่อ"; 
const PERSON_2 = "P'มีนสุดสวย"; 
const YOUTUBE_VIDEO_ID = "-BjZmE2gtdo?si=6Mdk0Jt25PtyGAhp"; 
const memories = [ 
    { month: "01", title: "เข้าเดือนหนึ่งพึงบรรจบมาคบรัก", description: "เธอจำไอสมิงงงได้ม้ายย", image: month01, }, 
    { month: "02", title: "เดือนสองนักตะเวนเที่ยวสร้างหรรษา", description: "อยุธยานะเนี่ย", image: month02, }, 
    { month: "03", title: "เข้าเดือนสามครบรอบสองมองลงมา", description: "Hop Hop", image: month03, }, 
    { month: "04", title: "เดือนสี่พาใจไป ตามใจเธอ", description: "เกาะเกร็ด ต้นคริสมาสต์", image: month04, }, 
    { month: "05", title: "เข้าเดือนห้าเกือบถึงครึ่งของทั้งปี", description: "รวมรูปคู่ ปากจู๋", image: month05, }, 
    { month: "06", title: "มองอีกทีถึงเดือนหก ตกใจหนา ", description: "ติดยศ", image: month06, }, 
    { month: "07", title: "เข้าเดือนเจ็ด เค้า 25 ตามเวลา", description: "เฟี้ยวววว", image: month07, }, 
    { month: "08", title: "เดือนแปดมา", description: "อิ่มแปล้", image: month08, }, 
    { month: "09", title: "เดือนเก้าไป เศร้าใจเอย", description: "ขอบคุณนะคะ ช่วยได้เยอะมากจริง ๆ", image: month09, }, 
]; 

/* ========================================================= TIME ========================================================= */ 
function getRelationshipTime() {
  const start = new Date(START_DATE);
  const now = new Date();

  let months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  // ถ้ายังไม่ถึงเวลาเริ่มต้นของวันที่นั้น
  const currentMonthAnniversary = new Date(start);
  currentMonthAnniversary.setMonth(
    start.getMonth() + months
  );

  if (now < currentMonthAnniversary) {
    months--;
  }

  // วันครบรอบล่าสุด
  const anniversaryDate = new Date(start);
  anniversaryDate.setMonth(
    start.getMonth() + months
  );

  // เวลาที่ผ่านจากวันครบรอบล่าสุด
  const difference = Math.max(
    0,
    now.getTime() - anniversaryDate.getTime()
  );

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  return {
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}
    
    /* ========================================================= FLOATING HEARTS ========================================================= */ 
    function FloatingHearts() { 
        const hearts = useMemo(() => { 
            return Array.from({ length: 22 }, (_, index) => ({ id: index, left: `${Math.random() * 100}%`, delay: `${Math.random() * 10}s`, duration: `${7 + Math.random() * 8}s`, size: `${12 + Math.random() * 18}px`, })); }, []); 
            return ( 
                <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden"> 
                    {hearts.map((heart) => ( 
                        <Heart key={heart.id} fill="currentColor" className="absolute -bottom-10 text-pink-300/20 animate-heart-float" 
                            style={{ left: heart.left, width: heart.size, height: heart.size, animationDelay: heart.delay, animationDuration: heart.duration, }} 
                        /> ))
                    } 
                </div> 
            ); 
    } 

    /* ========================================================= MAIN ========================================================= */ 
    export default function Anniversary9Months() { 
        const [opened, setOpened] = useState(false); 
        const [time, setTime] = useState(getRelationshipTime()); 
        const [playing, setPlaying] = useState(false); 
        const [letterOpen, setLetterOpen] = useState(false); 
        const [surpriseOpen, setSurpriseOpen] = useState(false); 
        
        useEffect(() => { const timer = setInterval(() => { 
            setTime(getRelationshipTime()); }, 1000); 
            return () => clearInterval(timer); }, []); 
            const scrollTo = (id) => { document .getElementById(id) ?.scrollIntoView({ behavior: "smooth", }); }; 
    
    /* ======================================================= NFC OPEN SCREEN ======================================================= */ 
    if (!opened) { 
        return ( 
            <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#160b10] px-6 text-white"> 
                <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${cover})`, }} /> 
                <div className="absolute inset-0 bg-linear-to-b from-[#190b11]/70 via-[#35131f]/80 to-[#12080c]" /> 
                <FloatingHearts /> 
                <div className="relative z-10 w-full max-w-md text-center"> 
                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_0_80px_rgba(255,100,150,.3)] backdrop-blur-xl"> 
                        <Heart size={48} fill="currentColor" className="animate-pulse text-pink-300" /> 
                    </div> 
                    <p className="mt-10 text-xs uppercase tracking-[0.5em] text-pink-200/70"> Me Something Special Naka </p> 
                    <h1 className="mt-5 font-serif text-5xl font-bold"> 9 Months </h1> 
                    <p className="mt-4 text-sm leading-7 text-white/60"> มีบางอย่างที่อยากให้เบบี๋เห็น... </p> 
                    <button onClick={() => setOpened(true)} 
                        className="group mt-10 flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-5 text-sm font-medium backdrop-blur-xl transition duration-500 hover:scale-[1.02] hover:bg-white/20" > 
                        <Heart size={18} className="transition group-hover:scale-125" /> แตะเพื่อเปิดนะคะ
                        <Sparkles size={17} className="text-pink-300" /> 
                    </button> 
                    <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-white/30"> ทำด้วยสุดขั้วหัวใจเค้า · ให้เบบี๋นะคะ </p> 
                </div> 
            </main> ); 
    } 
    return ( 
        <main className="relative min-h-screen overflow-hidden bg-[#fff9fb] text-[#35252b]"> 
            <FloatingHearts /> 
            {/* ================================================= HERO ================================================= */} 
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20"> 
                <img src={cover} alt="Our memory" className="absolute inset-0 h-full w-full object-cover" /> 
                <div className="absolute inset-0 bg-linear-to-b from-[#210c15]/70 via-[#4c1e2d]/60 to-[#fff9fb]" /> 
                <div className="relative z-10 mx-auto max-w-4xl text-center text-white"> 
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-xl"> 
                        <Heart size={35} fill="currentColor" className="text-pink-200" /> 
                    </div> 
                    <p className="mt-8 text-xs uppercase tracking-[0.5em] text-pink-100"> Happy Anniversary </p> 
                    <h1 className="mt-5 font-serif text-7xl font-bold md:text-9xl"> 9 </h1> 
                    <h2 className="font-serif text-4xl font-bold md:text-6xl"> Months </h2> 
                    <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/80 md:text-base"> 
                        เข้าเดือนสิบมาบรรจบให้ครบเก้า <br/>หู้วว 9 เดือนที่เดินทางมาด้วยกันแล้วนะคะ ผ่านอะไรมาตั้งมากมายเลย 
                    </p> 
                    <div className="mt-10 flex justify-center"> 
                        <button onClick={() => scrollTo("counter")} 
                            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm backdrop-blur-xl transition hover:bg-white/20" > 
                            ลองดูสิ
                            <ChevronDown size={17} /> 
                        </button> 
                    </div> 
                </div>
            </section> 
            {/* ================================================= COUNTER ================================================= */} 
            <section id="counter" className="relative z-10 px-5 py-24" > 
                <div className="mx-auto max-w-5xl"> <div className="text-center"> 
                    <Clock3 className="mx-auto text-pink-500" size={25} /> 
                    <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl"> นับเวลาเลยนะ </h2> 
                    <p className="mt-3 text-sm text-gray-400"> นั่งทำเกือบหลับ </p> 
                </div> 
                <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5"> 
                    {[  ["Months", time.months], 
                        ["Days", time.days], 
                        ["Hours", time.hours], 
                        ["Minutes", time.minutes], 
                        ["Seconds", time.seconds], ].map(([label, value]) => ( 
                        <div key={label} className="rounded-[1.7rem] border border-white bg-white/80 p-6 text-center shadow-xl shadow-pink-100/50 backdrop-blur-xl" > 
                            <div className="font-serif text-4xl font-bold text-pink-500"> 
                                {String(value).padStart(2, "0")} 
                            </div> 
                            <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-gray-400"> {label} </p> 
                        </div> ))} 
                    </div> 
                </div> 
            </section> 
            {/* ================================================= MUSIC ================================================= */} 
            <section className="relative z-10 px-5 py-10"> 
                <div className="mx-auto max-w-3xl"> 
                    <div className="overflow-hidden rounded-4xl border border-pink-100 bg-white/80 p-6 shadow-2xl shadow-pink-100/50 backdrop-blur-xl"> 
                        <div className="flex items-center gap-5"> 
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-pink-400 to-rose-500 text-white shadow-lg"> 
                                <Music2 size={25} /> 
                            </div> 
                            <div className="min-w-0 flex-1"> 
                                <p className="text-[10px] uppercase tracking-[0.25em] text-pink-400"> Taylor Swift </p> 
                                <h3 className="mt-1 truncate font-semibold"> Lover </h3> 
                                <p className="mt-1 text-xs text-gray-400"> เปิดเพลงเล่นไปด้วยนะคะ</p> 
                            </div> 
                            <button onClick={() => setPlaying(!playing)} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#35252b] text-white transition hover:scale-105" > 
                                {playing ? ( <Pause size={18} /> ) : ( <Play size={18} fill="currentColor" /> )} 
                            </button> 
                        </div> 
                        {playing && YOUTUBE_VIDEO_ID !== "YOUR_YOUTUBE_VIDEO_ID" && ( 
                            <div className="mt-5 overflow-hidden rounded-2xl"> 
                                <iframe className="aspect-video w-full" 
                                        src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                                        title="Our Song" allow="autoplay; encrypted-media" allowFullScreen /> 
                            </div> )} 
                            {playing && ( 
                                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400"> 
                                    <Volume2 size={14} /> Playing our song... 
                                </div> )} 
                    </div> 
                </div> 
            </section> 
            {/* ================================================= MEMORY TIMELINE ================================================= */} 
            <section id="memories" className="relative z-10 px-5 py-24" > 
                <div className="mx-auto max-w-6xl"> 
                    <div className="text-center"> 
                        <Camera className="mx-auto text-pink-500" size={25} /> 
                        <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl"> Our Memories </h2> 
                        <p className="mt-3 text-sm text-gray-400"> รูปเยอะมากถ้าใส่หมดน่าจะไม่ได้นอน555 </p> 
                    </div> 
                    <div className="mt-16 space-y-16"> {memories.map((memory, index) => ( 
                        <div key={memory.month} className={`flex flex-col items-center gap-8 md:flex-row ${ index % 2 ? "md:flex-row-reverse" : "" }`} > 
                            <div className="w-full md:w-1/2"> 
                                <div className="group rounded-4xl bg-white p-3 shadow-2xl shadow-pink-100/50"> 
                                    <div className="overflow-hidden rounded-3xl"> 
                                        <img src={memory.image} alt={memory.title} className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-105" /> 
                                    </div>
                                </div>
                            </div> 
                            <div className="w-full md:w-1/2 md:px-8"> 
                                <span className="text-xs font-semibold tracking-[0.35em] text-pink-400"> MONTH {memory.month} </span> 
                                <h3 className="mt-3 font-serif text-3xl font-bold"> {memory.title} </h3> 
                                <p className="mt-5 max-w-md text-sm leading-8 text-gray-500"> {memory.description} </p> 
                                <div className="mt-6 flex items-center gap-2 text-pink-400"> 
                                    <Heart size={14} fill="currentColor" /> 
                                    <span className="text-xs"> เก็บไว้ในใจ </span> 
                                </div> 
                            </div> 
                        </div> ))} 
                    </div> 
                </div> 
            </section> 
            
            {/* ================================================= LETTER ================================================= */} 
            <section className="relative z-10 px-5 py-24"> 
                <div className="mx-auto max-w-3xl"> 
                    <div className="rounded-4xl border border-pink-100 bg-white p-8 text-center shadow-2xl shadow-pink-100/50 md:p-14"> 
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-50 text-pink-500"> 
                            <Mail size={25} /> 
                        </div>
                        <h2 className="mt-6 font-serif text-4xl font-bold"> จดหมายคับ </h2> 
                        <p className="mt-3 text-sm text-gray-400"> อ่านเลยมั้ย </p> 
                        <button onClick={() => setLetterOpen(!letterOpen) } className="mt-8 rounded-full bg-[#35252b] px-8 py-3 text-sm text-white transition hover:-translate-y-1 hover:shadow-xl" > {letterOpen ? "ปิดจดหมาย" : "เปิดจดหมาย 💌"} </button> 
                        {letterOpen && ( 
                            <div className="mt-8 rounded-3xl bg-[#fff8fb] p-7 text-left text-sm leading-8 text-gray-600"> 
                                <p>ถึง {PERSON_2} ❤️</p> 
                                <p className="mt-2"> อันนี้แค่อยากจะอวยพรเฉย ๆ เหมือนในทุก ๆ วันนะคะ ขอให้ในทุก ๆ วันต่อจากนี้ เป็นวันที่ดีเสมอ </p> 
                                <p className="mt-2"> ขอบคุณนะคะเหนื่อยด้วยกันมาเยอะ ผ่านมาหนักหนาแค่ไหนก็อยู่ข้างกันตลอด ทั้งสุขทั้งเคร้า ทั้งดีและร้าย ขอบคุณที่ทำให้ยิ้มได้ มีเสียงหัวเราะ และปรับความเข้าใจกันอยู่เสมอ </p> 
                                <p className="mt-2"> อาจมีบางวันที่เราไม่เข้าใจกันบ้าง เค้าทำผิดไปบ้าง อาจมีวันที่งอลหรือทะเลาะกันบ้าง แต่สุดท้ายแล้วเค้าและเธอก็ยังจับมือเดินต่อไปด้วยกัน ขอบคุณมากเลยนะคะ </p> 
                                <p className="mt-2"> และเค้าก็ยังอยากสร้างความทรงจำแบบนี้กับเธอไปอีกนาน ๆ เท่านาน ตลอดไปเลยค้าบบบ </p> 
                                <p className="mt-6 text-right font-semibold text-pink-500"> ด้วยรักและก่ายกอง ❤️ จาก {PERSON_1} </p> 
                            </div> )} 
                    </div> 
                </div> 
            </section> 
            
            {/* ================================================= FINAL SURPRISE ================================================= */} 
            <section className="relative z-10 px-5 py-28"> 
                <div className="mx-auto max-w-3xl text-center"> 
                    <Sparkles className="mx-auto text-pink-400" size={26} /> 
                    <h2 className="mt-5 font-serif text-4xl font-bold md:text-5xl"> สุดท้ายแย้ววว... </h2> 
                    <p className="mt-4 text-sm leading-7 text-gray-400"> จริง ๆ นะ </p> 
                    <button onClick={() => setSurpriseOpen(true)} className="mt-9 inline-flex items-center gap-3 rounded-full bg-linear-to-r from-pink-500 to-rose-500 px-9 py-4 text-sm font-semibold text-white shadow-xl shadow-pink-200 transition hover:scale-105" > 
                        <Gift size={18} /> เปิดมั้ย
                    </button> 
                </div> 
            </section> 
            {/* ================================================= MODAL ================================================= */} 
            {surpriseOpen && ( <div className="fixed inset-0 z-999 flex items-center justify-center bg-[#210c15]/80 px-5 backdrop-blur-xl"> 
            <div className="relative w-full max-w-lg overflow-hidden rounded-4xl bg-white p-8 text-center shadow-2xl md:p-12">
                <button onClick={() => setSurpriseOpen(false) } className="absolute right-5 top-5 rounded-full p-2 text-gray-400 transition hover:bg-gray-100" > 
                    <X size={18} /> 
                </button> 
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-pink-50 text-pink-500"> 
                    <Heart size={40} fill="currentColor" className="animate-pulse" /> 
                </div> 
                <p className="mt-7 text-xs uppercase tracking-[0.35em] text-pink-400"> For You </p> 
                <h3 className="mt-3 font-serif text-4xl font-bold"> Happy 9 Months </h3> 
                <p className="mt-4 text-sm leading-8 text-gray-500"> ขอบคุณที่เข้ามาเป็นส่วนหนึ่งของเค้านะคะ </p> 
                <p className="text-sm leading-8 text-gray-500"> สำหรับเค้าในทุกวันตั้งแต่ที่มีเธออยู่  </p> 
                <p className="text-sm leading-8 text-gray-500"> อะไร ๆ ที่เคยหมองหม่นมันก็ดีขึ้นไปหมดเลย
                    <br /> สาดไปสมาชิก
                    <br /> ขอให้รักกันแบบนี้ ต่อจากนี้ และตลอดไปนะคะ 
                    <br /> ❤️ 
                </p> 
                <button onClick={() => setSurpriseOpen(false) } className="mt-8 rounded-full bg-[#35252b] px-8 py-3 text-sm text-white" > รักมากที่สุด จนมากมายก่ายกอง </button> 
            </div> 
        </div> )} {
                
                /* ================================================= FOOTER ================================================= */} 
                <footer className="relative z-10 px-5 pb-10 text-center"> 
                    <Heart size={16} fill="currentColor" className="mx-auto text-pink-400" /> 
                    <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-gray-400"> ทำด้วยใจ · มิใช่เอ็นอุ่น ๆ </p> 
                </footer> 

                {/* ================================================= CSS ================================================= */} 
                <style>{` @keyframes heartFloat { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-115vh) rotate(360deg); opacity: 0; } } .animate-heart-float { animation-name: heartFloat; animation-timing-function: linear; animation-iteration-count: infinite; } html { scroll-behavior: smooth; } `}
                            </style> 
                        </main> ); }