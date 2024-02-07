import React from 'react';
import Logo from '../../assets/img/Storefront2.svg';
import User from '../../assets/img/User.svg';
import HeroImage from '../../assets/img/Hero.png';
import Started from '../../assets/img/GetStarted.svg';
import SideAvatar from '../../assets/img/SideAvatar.png';

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
            <div id='body' className='flex flex-row font-WorkSans justify-evenly items-center pt-24'>
                <div id='Side_Text' className='flex flex-col'>
                    <div id='hero' className='pt-24'>
                        <h1 className='text-7xl'>Discover digital art <br/>& Collect NFTs</h1>
                        <p className='text-2xl py-12'>NFT marketplace UI created with Anima for Figma.<br/> Collect, buy and sell art from more than 20k NFT artists.</p>
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
        <div>
            <h1>Hello World!</h1>
        </div>
    </div>
  );
}

export default Home;