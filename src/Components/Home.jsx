import { Typewriter } from 'react-simple-typewriter'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCards } from "swiper";

import { Autoplay, Pagination, Navigation } from "swiper";


const Home = () => {
    return (
        <>
            <div className='px-32'>
                <div className="hero min-h-full bg-yellow-200 rounded-2xl mt-5">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper w-60 h-80"
                        >
                            <SwiperSlide className='rounded-2xl'>
                                <img className='object-cover h-full w-full' src="https://images.unsplash.com/photo-1557761670-03a0a75f2766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl'>
                                <img className='object-cover h-full w-full' src="https://images.unsplash.com/photo-1638225437870-1090bc859162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl'>
                                <img className='object-cover h-full w-full' src="https://images.unsplash.com/photo-1617118601021-4992c028fe5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl'>
                                <img className='object-cover h-full w-full' src="https://plus.unsplash.com/premium_photo-1664374288232-972a9c144ab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl'>
                                <img className='object-cover h-full w-full' src="https://plus.unsplash.com/premium_photo-1670509045675-af9f249b1bbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1435&q=80" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl'>
                                <img className='object-cover h-full w-full' src="https://images.unsplash.com/photo-1610467044174-67d3fbc10d14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl'>
                                <img className='object-cover h-full w-full' src="https://images.unsplash.com/photo-1606328252399-393f9bb6cad4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl'>
                                <img className='object-cover h-full w-full' src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl'>
                                <img className='object-cover h-full w-full' src="https://images.unsplash.com/photo-1526614180703-827d23e7c8f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
                            </SwiperSlide>
                        </Swiper>
                        <div>
                            <span className="text-5xl font-bold" >
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Welcome To Gifto-Shop', 'Discover Joyful Gifts', 'Unwrap Joy with Every Gift']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>

                            <p className="py-6 pe-48">Welcome to <span className='font-bold text-red-500'>Gifto-Shop</span>, Surprise your loved ones with the perfect gift - Explore our curated collection now!



                                !</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='mt-5 px-48'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='object-cover w-full h-[35rem]' src="https://images.unsplash.com/photo-1544377208-215a63786183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1576&q=80" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='object-fit w-full h-[35rem]' src="https://images.unsplash.com/photo-1545608444-f045a6db6133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='object-fit w-full h-[35rem]' src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='object-cover w-full h-[35rem]' src="https://images.unsplash.com/photo-1480732149909-d4e710a0f81c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="" />
                    </SwiperSlide>

                </Swiper>
            </div> */}

            <div>
                <div className="stats shadow flex justify-around">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Home;