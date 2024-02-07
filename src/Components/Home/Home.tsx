import React from 'react';
import Logo from '../../assets/img/Storefront2.svg';
import User from '../../assets/img/User.svg';
import HeroImage from '../../assets/img/Hero.png';
import Started from '../../assets/img/GetStarted.svg';
import SideAvatar from '../../assets/img/SideAvatar.png';
import MrFox from '../../assets/img/Mr_Fox.png';
import Shroomie from '../../assets/img/Shroomie.png';
import BeKind2Robots from '../../assets/img/Be_Kind_2_Robots.png';
import DSNG_Main from '../../assets/img/Trending_1.png';
import DSNG_Second from '../../assets/img/Trending_1_1.png';
import DSNG_Third from '../../assets/img/Trending_1_2.png';
import Magic_Main from '../../assets/img/Trending_2.png';
import Magic_Second from '../../assets/img/Trending_2_1.png';
import Magic_Third from '../../assets/img/Trending_2_2.png';
import Disco_Main from '../../assets/img/Trending_3.png';
import Disco_Second from '../../assets/img/Trending_3_1.png';
import Disco_Third from '../../assets/img/Trending_3_2.png';

function Home() {
  return (
    <div className='text-white bg-[#2B2B2B]'>
        <div id='Hero' className='min-h-screen'>
            <div id='navbar' className='pl-12 py-6 flex flex-row items-center justify-between'>
                <div id="logo" className='font-spacemono flex flex-row items-center'>
                    <img src={Logo} alt="Logo" className='w-14'/>
                    <h1 className='pl-3 text-3xl'>NFT Marketplace</h1>
                </div>
                <div className='flex flex-row font-WorkSans font-semibold pr-12 items-center'>
                    <p>Marketplace</p>
                    <p className='px-12'>Rankings</p>
                    <p className='pr-12'>Connect a wallet</p>
                    <button>
                        <div className='px-10 py-4 bg-[#A259FF] rounded-3xl flex flex-row items-center'>
                            <img src={User} alt="account" className='w-6'/>
                            <p className='pl-3'>Sign Up</p>
                        </div>
                    </button>
                </div>
            </div>
            <div id='body' className='flex flex-row font-WorkSans justify-evenly items-center pt-24 pr-36'>
                <div id='Side_Text' className='flex flex-col'>
                    <div id='hero' className='pt-24'>
                        <h1 className='text-7xl font-bold'>Discover <br/> digital art <br/>& Collect NFTs</h1>
                        <p className='text-xl font-light py-12'>NFT marketplace UI created with Anima for Figma.<br/> Collect, buy and sell art from more than 20k NFT artists.</p>
                    </div>
                    <div id='cta'>
                        <button>
                            <div className='py-4 px-14 bg-[#A259FF] rounded-3xl flex flex-row items-center'>
                                <img src={Started} alt="" className='w-6'/>
                                <p className='pl-2'>Get Started</p>
                            </div>
                        </button>
                    </div>
                    <div id='Stats' className='flex flex-row justify-between pt-12'>
                        <div className='flex flex-col'>
                            <h4 className='font-spacemono text-3xl font-semibold'>240k+</h4>
                            <p className='text-2xl pt-2'>Total Sale</p>
                        </div>
                        <div className='flex flex-col'>
                            <h4 className='font-spacemono text-3xl font-semibold'>100k+</h4>
                            <p className='text-2xl pt-2'>Auctions</p>
                        </div>
                        <div className='flex flex-col'>
                            <h4 className='font-spacemono text-3xl font-semibold'>240k+</h4>
                            <p className='text-2xl pt-2'>Artists</p>
                        </div>
                    </div>
                </div>
                <div id='Side_NFT' className='flex flex-col'>
                    <img src={HeroImage} alt="Side Image"/>
                    <div className='bg-[#3B3B3B] rounded-b-3xl py-4 pl-8'>
                        <h2 className='font-WorkSans text-lg font-semibold'>Space Walking</h2>
                        <div className='flex flex-row pt-2 items-center text-sm'>
                            <img src={SideAvatar} alt="SideAvatar" />
                            <p className='pl-4'>Animakid</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='Trending' className='min-h-screen'>
            <div id="Trending_Title" className='flex flex-col pl-56 py-16'>
                <h1 className='font-WorkSans text-4xl font-bold'>Trending Collection</h1>
                <p className='font-WorkSans text-xl pt-8'>Checkout our weekly updated trending collection.</p>
            </div>
            <div id='' className='flex flex-row justify-evenly'>
                <div className='flex flex-col gap-4'>
                    <img src={DSNG_Main} alt="DSNG Animals Main" />
                    <div className='flex flex-row justify-between'>
                        <img src={DSNG_Second} alt="Disco Machines Second" />
                        <img src={DSNG_Third} alt="Disco Machines Third" />
                        <div className='flex flex-row justify-center items-center bg-[#A259FF] rounded-3xl w-24'>
                            <p className='font-spacemono'>1025+</p>
                        </div>
                    </div>
                    <h2 className='font-WorkSans font-bold text-2xl'>DSNG Animals</h2>
                    <div className='flex flex-row'>
                        <img src={MrFox} alt="Avatar" />
                        <p className='font-WorkSans pl-4'>MrFox</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <img src={Magic_Main} alt="Magic Mushrooms Main" />
                    <div className='flex flex-row justify-between'>
                        <img src={Magic_Second} alt="Disco Machines Second" />
                        <img src={Magic_Third} alt="Disco Machines Third" />
                        <div className='flex flex-row justify-center items-center bg-[#A259FF] rounded-3xl w-24'>
                            <p className='font-spacemono'>1025+</p>
                        </div>
                    </div>
                    <h2 className='font-WorkSans font-bold text-2xl'>Magic Mushrooms</h2>
                    <div className='flex flex-row'>
                        <img src={Shroomie} alt="Avatar" />
                        <p className='font-WorkSans pl-4'>Shroomie</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <img src={Disco_Main} alt="Disco Machines Main" />
                    <div className='flex flex-row justify-between'>
                        <img src={Disco_Second} alt="Disco Machines Second" />
                        <img src={Disco_Third} alt="Disco Machines Third" />
                        <div className='flex flex-row justify-center items-center bg-[#A259FF] rounded-3xl w-24'>
                            <p className='font-spacemono'>1025+</p>
                        </div>
                    </div>
                    <h2 className='font-WorkSans font-bold text-2xl'>Disco Machines</h2>
                    <div className='flex flex-row'>
                        <img src={BeKind2Robots} alt="Avatar" />
                        <p className='font-WorkSans pl-4'>BeKind2Robots</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;