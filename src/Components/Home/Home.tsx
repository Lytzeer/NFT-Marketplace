import React from 'react';
import Logo from '../../assets/img/Storefront2.svg';
import User from '../../assets/img/User.svg';
import HeroImage from '../../assets/img/Hero.png';
import Started from '../../assets/img/GetStarted.svg';
import Ranking from '../../assets/img/Ranking.svg';
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
import Keepitreal from '../../assets/img/Keepitreal.png';
import DigiLab from '../../assets/img/DigiLab.png';
import GravityOne from '../../assets/img/GravityOne.png';
import Juanie from '../../assets/img/Juanie.png';
import BlueWhale from '../../assets/img/BlueWhale.png';
import MrFox2 from '../../assets/img/MrFox.png';
import Shroomie2 from '../../assets/img/Shroomie2.png';
import Robotica from '../../assets/img/Robotica.png';
import RustyRobot from '../../assets/img/RustyRobot.png';
import Animakid from '../../assets/img/Animakid.png';
import Dotgu from '../../assets/img/Dotgu.png';
import Ghiblier from '../../assets/img/Ghiblier.png';
import Art from '../../assets/img/Art.png';
import Collectibles from '../../assets/img/Collectibles.png';
import Music from '../../assets/img/Music.png';
import Photography from '../../assets/img/Photography.png';
import Sport from '../../assets/img/Sport.png';
import Utility from '../../assets/img/Utility.png';
import Video from '../../assets/img/Video.png';
import VirtualWorlds from '../../assets/img/VirtualWorlds.png';

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
            <div id='body' className='flex flex-row font-WorkSans justify-around items-center pt-24'>
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
            <div id="Trending_Title" className='flex flex-col pl-32 py-16'>
                <h1 className='font-WorkSans text-4xl font-bold'>Trending Collection</h1>
                <p className='font-WorkSans text-xl pt-8'>Checkout our weekly updated trending collection.</p>
            </div>
            <div id='Collection' className='flex flex-row justify-evenly pt-10'>
                <div className='flex flex-col gap-4'>
                    <img src={DSNG_Main} alt="DSNG Animals Main" />
                    <div className='flex flex-row justify-between'>
                        <img src={DSNG_Second} alt="Disco Machines Second" />
                        <img src={DSNG_Third} alt="Disco Machines Third" />
                        <div className='flex flex-row justify-center items-center bg-[#A259FF] rounded-3xl w-24'>
                            <p className='font-spacemono font-bold'>1025+</p>
                        </div>
                    </div>
                    <h2 className='font-WorkSans font-bold text-xl py-4 rounded-b-2xl'>DSNG Animals</h2>
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
                            <p className='font-spacemono font-bold'>1025+</p>
                        </div>
                    </div>
                    <h2 className='font-WorkSans font-bold text-xl py-4 rounded-b-2xl'>Magic Mushrooms</h2>
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
                            <p className='font-spacemono font-bold'>1025+</p>
                        </div>
                    </div>
                    <h2 className='font-WorkSans font-bold text-xl py-4 rounded-b-2xl'>Disco Machines</h2>
                    <div className='flex flex-row'>
                        <img src={BeKind2Robots} alt="Avatar" />
                        <p className='font-WorkSans pl-4'>BeKind2Robots</p>
                    </div>
                </div>
            </div>
        </div>
        <div id='Creators' className='min-h-screen'>
            <div id='Creators_Title' className='flex flex-row justify-between px-32 py-16'>
                <div className='flex flex-col'>
                    <h1 className='font-WorkSans text-4xl font-bold'>Top Creators</h1>
                    <p className='font-WorkSans text-xl pt-8'>Checkout Top Rated Creators on the NFT Marketplace</p>
                </div>
                <div className='flex items-end'>
                    <button>
                        <div className='py-4 px-14 bg-transparent border-2 border-[#A259FF] rounded-3xl flex flex-row items-center font-WorkSans font-semibold'>
                            <img src={Ranking} alt="" className='w-6'/>
                            <p className='pl-2'>View Rankings</p>
                        </div>
                    </button>
                </div>
            </div>
            <div id='Creators_List' className='flex flex-col px-32 py-16 items-center gap-8'>
                <div id='First_Row' className='flex flex-row gap-8'>
                    <div className='bg-[#3B3B3B] rounded-3xl pt-8 px-16 flex flex-col'>
                        <div className='flex flex-row justify-center'>
                            <img src={Keepitreal} alt="Keepitreal Avatar" className='w-36'/>
                        </div>
                        <div className='flex justify-center items-center pt-8 pb-4'>
                            <h2 className='font-WorkSans font-semibold text-2xl'>Keepitreal</h2>
                        </div>
                        <div className='flex flex-row pb-8'>
                            <div className='font-WorkSans text-[#858584]'>
                                Total Sales:
                            </div>
                            <div className='font-spacemono pl-4'>
                                34.53 ETH
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#3B3B3B] rounded-3xl pt-8 px-16 flex flex-col'>
                        <div className='flex flex-row justify-center'>
                            <img src={DigiLab} alt="Keepitreal Avatar" className='w-36'/>
                        </div>
                        <div className='flex justify-center items-center pt-8 pb-4'>
                            <h2 className='font-WorkSans font-semibold text-2xl'>DigiLab</h2>
                        </div>
                        <div className='flex flex-row pb-8'>
                            <div className='font-WorkSans text-[#858584]'>
                                Total Sales:
                            </div>
                            <div className='font-spacemono pl-4'>
                                34.53 ETH
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#3B3B3B] rounded-3xl pt-8 px-16 flex flex-col'>
                        <div className='flex flex-row justify-center'>
                            <img src={GravityOne} alt="Keepitreal Avatar" className='w-36'/>
                        </div>
                        <div className='flex justify-center items-center pt-8 pb-4'>
                            <h2 className='font-WorkSans font-semibold text-2xl'>GravityOne</h2>
                        </div>
                        <div className='flex flex-row pb-8'>
                            <div className='font-WorkSans text-[#858584]'>
                                Total Sales:
                            </div>
                            <div className='font-spacemono pl-4'>
                                34.53 ETH
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#3B3B3B] rounded-3xl pt-8 px-16 flex flex-col'>
                        <div className='flex flex-row justify-center'>
                            <img src={Juanie} alt="Keepitreal Avatar" className='w-36'/>
                        </div>
                        <div className='flex justify-center items-center pt-8 pb-4'>
                            <h2 className='font-WorkSans font-semibold text-2xl'>Juanie</h2>
                        </div>
                        <div className='flex flex-row pb-8'>
                            <div className='font-WorkSans text-[#858584]'>
                                Total Sales:
                            </div>
                            <div className='font-spacemono pl-4'>
                                34.53 ETH
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div id='Second_Row' className='flex flex-row gap-8'>
                    <div className='bg-[#3B3B3B] rounded-3xl pt-8 px-16 flex flex-col'>
                        <div className='flex flex-row justify-center'>
                            <img src={BlueWhale} alt="Keepitreal Avatar" className='w-36'/>
                        </div>
                        <div className='flex justify-center items-center pt-8 pb-4'>
                            <h2 className='font-WorkSans font-semibold text-2xl'>BlueWhale</h2>
                        </div>
                        <div className='flex flex-row pb-8'>
                            <div className='font-WorkSans text-[#858584]'>
                                Total Sales:
                            </div>
                            <div className='font-spacemono pl-4'>
                                34.53 ETH
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#3B3B3B] rounded-3xl pt-8 px-16 flex flex-col'>
                        <div className='flex flex-row justify-center'>
                            <img src={MrFox2} alt="Keepitreal Avatar" className='w-36'/>
                        </div>
                        <div className='flex justify-center items-center pt-8 pb-4'>
                            <h2 className='font-WorkSans font-semibold text-2xl'>Mr Fox</h2>
                        </div>
                        <div className='flex flex-row pb-8'>
                            <div className='font-WorkSans text-[#858584]'>
                                Total Sales:
                            </div>
                            <div className='font-spacemono pl-4'>
                                34.53 ETH
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#3B3B3B] rounded-3xl pt-8 px-16 flex flex-col'>
                        <div className='flex flex-row justify-center'>
                            <img src={Shroomie2} alt="Keepitreal Avatar" className='w-36'/>
                        </div>
                        <div className='flex justify-center items-center pt-8 pb-4'>
                            <h2 className='font-WorkSans font-semibold text-2xl'>Shroomie</h2>
                        </div>
                        <div className='flex flex-row pb-8'>
                            <div className='font-WorkSans text-[#858584]'>
                                Total Sales:
                            </div>
                            <div className='font-spacemono pl-4'>
                                34.53 ETH
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#3B3B3B] rounded-3xl pt-8 px-16 flex flex-col'>
                        <div className='flex flex-row justify-center'>
                            <img src={Robotica} alt="Keepitreal Avatar" className='w-36'/>
                        </div>
                        <div className='flex justify-center items-center pt-8 pb-4'>
                            <h2 className='font-WorkSans font-semibold text-2xl'>Robotica</h2>
                        </div>
                        <div className='flex flex-row pb-8'>
                            <div className='font-WorkSans text-[#858584]'>
                                Total Sales:
                            </div>
                            <div className='font-spacemono pl-4'>
                                34.53 ETH
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div id='Third_Row' className='flex flex-row gap-8'>
                    <div className='bg-[#3B3B3B] rounded-3xl pt-8 px-16 flex flex-col'>
                        <div className='flex flex-row justify-center'>
                            <img src={RustyRobot} alt="Keepitreal Avatar" className='w-36'/>
                        </div>
                        <div className='flex justify-center items-center pt-8 pb-4'>
                            <h2 className='font-WorkSans font-semibold text-2xl'>RustyRobot</h2>
                        </div>
                        <div className='flex flex-row pb-8'>
                            <div className='font-WorkSans text-[#858584]'>
                                Total Sales:
                            </div>
                            <div className='font-spacemono pl-4'>
                                34.53 ETH
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#3B3B3B] rounded-3xl pt-8 px-16 flex flex-col'>
                        <div className='flex flex-row justify-center'>
                            <img src={Animakid} alt="Keepitreal Avatar" className='w-36'/>
                        </div>
                        <div className='flex justify-center items-center pt-8 pb-4'>
                            <h2 className='font-WorkSans font-semibold text-2xl'>Animakid</h2>
                        </div>
                        <div className='flex flex-row pb-8'>
                            <div className='font-WorkSans text-[#858584]'>
                                Total Sales:
                            </div>
                            <div className='font-spacemono pl-4'>
                                34.53 ETH
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#3B3B3B] rounded-3xl pt-8 px-16 flex flex-col'>
                        <div className='flex flex-row justify-center'>
                            <img src={Dotgu} alt="Keepitreal Avatar" className='w-36'/>
                        </div>
                        <div className='flex justify-center items-center pt-8 pb-4'>
                            <h2 className='font-WorkSans font-semibold text-2xl'>Dotgu</h2>
                        </div>
                        <div className='flex flex-row pb-8'>
                            <div className='font-WorkSans text-[#858584]'>
                                Total Sales:
                            </div>
                            <div className='font-spacemono pl-4'>
                                34.53 ETH
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#3B3B3B] rounded-3xl pt-8 px-16 flex flex-col'>
                        <div className='flex flex-row justify-center'>
                            <img src={Ghiblier} alt="Keepitreal Avatar" className='w-36'/>
                        </div>
                        <div className='flex justify-center items-center pt-8 pb-4'>
                            <h2 className='font-WorkSans font-semibold text-2xl'>Ghiblier</h2>
                        </div>
                        <div className='flex flex-row pb-8'>
                            <div className='font-WorkSans text-[#858584]'>
                                Total Sales:
                            </div>
                            <div className='font-spacemono pl-4'>
                                34.53 ETH
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div id='Categories' className='min-h-screen'>
            <div id='Categories_Title' className='flex flex-col pl-32 py-16'>
                <h1 className='font-WorkSans text-4xl font-bold'>Browse Categories</h1>
            </div>
            <div id='Categories_List' className='flex flex-col px-32 '>
                <div className='flex flex-row justify-between pt-10'>
                    <div className='flex flex-col '>
                        <img src={Art} alt="Art" />
                        <h2 className='font-WorkSans font-bold text-xl py-8 bg-[#3B3B3B] rounded-b-2xl pl-8'>Art</h2>
                    </div>
                    <div className='flex flex-col '>
                        <img src={Music} alt="Music" />
                        <h2 className='font-WorkSans font-bold text-xl py-8 bg-[#3B3B3B] rounded-b-2xl pl-8'>Music</h2>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img src={Photography} alt="Photography" />
                        <h2 className='font-WorkSans font-bold text-xl py-8 bg-[#3B3B3B] rounded-b-2xl pl-8'>Photography</h2>
                    </div>
                    <div className='flex flex-col '>
                        <img src={Collectibles} alt="Collectibles" />
                        <h2 className='font-WorkSans font-bold text-xl py-8 bg-[#3B3B3B] rounded-b-2xl pl-8'>Collectibles</h2>
                    </div>
                </div>
                <div className='flex flex-row justify-between pt-10'>
                    <div className='flex flex-col '>
                        <img src={Video} alt="Video" />
                        <h2 className='font-WorkSans font-bold text-xl py-8 bg-[#3B3B3B] rounded-b-2xl pl-8'>Video</h2>
                    </div>
                    <div className='flex flex-col '>
                        <img src={Utility} alt="Utility" />
                        <h2 className='font-WorkSans font-bold text-xl py-8 bg-[#3B3B3B] rounded-b-2xl pl-8'>Utility</h2>
                    </div>
                    <div className='flex flex-col'>
                        <img src={Sport} alt="Sport" />
                        <h2 className='font-WorkSans font-bold text-xl py-8 bg-[#3B3B3B] rounded-b-2xl pl-8'>Sport</h2>
                    </div>
                    <div className='flex flex-col'>
                        <img src={VirtualWorlds} alt="Virtual Worlds" />
                        <h2 className='font-WorkSans font-bold text-xl py-8 bg-[#3B3B3B] rounded-b-2xl pl-8'>Virtual Worlds</h2>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
}

export default Home;