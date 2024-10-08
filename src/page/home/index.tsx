import Wisuda from '../../assets/wisuda.png'
import Engagement from '../../assets/engagement.png'
import Yudisium from '../../assets/yudisium.png'
import Princess from '../../assets/princess.png'
import First from '../../assets/first.png'
import TypeIt from "typeit-react";
import Syg from "../../assets/syg.png";
import Bangkok from "../../assets/bangkok.png";
import Marry from "../../assets/marry.jpeg";
import Mina from "../../assets/mina.png";
import {useNavigate} from "react-router-dom";
import {formatDistanceToNow} from "date-fns";

const Header = () => {
    return (
        <div
            className={'h-[72px] bg-[#242424] w-full left-0 flex items-center justify-between py-[20px]'}>
            <div className={'text-[24px]'}>
                Hi There!
            </div>
            <div>
                <img className={'w-[50px] h-[50px] rounded-full bg-white object-cover'} src={Syg}></img>
            </div>
        </div>
    )
}

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header/>
            <div className={'flex flex-col gap-[20px]'}>
                <div
                    className={'rounded w-screen animated-background ml-[-16px] bg-gradient-to-r from-purple-400 via-rose-300 to-violet-400 h-[200px] text-left flex flex-col justify-center px-[16px] gap-[4px]'}>
                    <h3 className={'text-left font-bold text-[28px] text-neutral-800'}>Happy<span
                        className={'text-yellow-300'}> 22th</span> Birthday 🥳</h3>
                    <span className={'text-left font-bold text-[20px]'}>
                    Hope you {' '}
                        <TypeIt getBeforeInit={(instance) => instance.options({
                            loop: true,
                            speed: 100
                        }).type('doing well.').pause(500).delete().type('stay healthy.').pause(500).delete().type('achieve your goals.').pause(500).delete().type('always be happy.').pause(500).delete().type('feel grateful.')}
                                className={'text-left font-bold text-[20px]'}></TypeIt>
                </span>
                    <button onClick={() => navigate('/letter')}
                            className={'w-fit mt-[4px] outline-none focus:outline-none'}>Open The
                        Letter {'   '}💌
                    </button>

                </div>

                <div className={'flex flex-col gap-[8px]'}>
                    <h2 className={'text-left font-bold text-[20px]'}>Jump Back In</h2>
                    <div className={'flex overflow-x-scroll flex-nowrap no-scrollbar snap-x'}>

                        <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                            <img className="rounded w-[152px] h-[152px] object-cover"
                                 src={First} alt=""/>
                            <h3 className={'text-left'}>First</h3>
                        </div>
                        <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                            <img className="rounded w-[152px] h-[152px] object-cover"
                                 src={Engagement} alt=""/>
                            <h3 className={'text-left'}>Lamaran uhuy</h3>
                        </div>
                        <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                            <img className="rounded w-[152px] h-[152px] object-cover"
                                 src={Princess} alt=""/>
                            <h3 className={'text-left'}>Cosplay Princess</h3>
                        </div>


                        <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                            <img className="rounded w-[152px] h-[152px] object-cover"
                                 src={Yudisium} alt=""/>
                            <h3 className={'text-left'}>Mam Bareng</h3>
                        </div>

                        <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                            <img className="rounded w-[152px] h-[152px] object-cover"
                                 src={Wisuda} alt=""/>
                            <h3 className={'text-left'}>Cie Sarjana</h3>
                        </div>

                        <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                            <img className="rounded w-[152px] h-[152px] object-cover"
                                 src={Mina} alt=""/>
                            <h3 className={'text-left'}>Main bareng :)</h3>
                        </div>


                    </div>
                </div>


                <div className={'flex flex-col gap-[4px] mb-[150px]'}>
                    <h2 className={'text-left font-bold text-[20px]'}>Coming Soon &#128522;</h2>
                    <div className={'flex overflow-x-scroll flex-nowrap no-scrollbar snap-x'}>
                        <div className="min-w-[168px] w-[168px] h-[240px] flex flex-col gap-[8px] py-[8px]">
                            <img className="rounded w-[152px] h-[152px] object-cover"
                                 style={{filter: "grayscale(100%)"}}
                                 src={Marry} alt=""/>
                            <div>
                                <h3 className={'text-left'}>💍</h3>
                                <h4 className={'text-left'}>{formatDistanceToNow(new Date('2024-11-01'))}</h4>
                            </div>
                        </div>


                        <div className="min-w-[168px] w-[168px] h-[240px] flex flex-col gap-[8px] py-[8px]">
                            <img className="rounded w-[152px] h-[152px] object-cover"
                                 style={{filter: "grayscale(100%)"}}
                                 src={Bangkok} alt=""/>
                            <div>
                                <h3 className={'text-left'}>✈️</h3>
                                <h4 className={'text-left'}>{formatDistanceToNow(new Date('2024-11-25'))}</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;