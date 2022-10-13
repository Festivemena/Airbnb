import React, { useState, useContext, useEffect } from 'react'
import Card from './Card'
import { FaCoins } from 'react-icons/fa'
import Image from 'next/image'
import NFT from '../assets/rotate-punk6.gif'
import NFQ from '../assets/rotate-punk5.gif'
import NFW from '../assets/rotate-punk4.gif'
import NFE from '../assets/rotate-punk3.gif'
import NFR from '../assets/rotate-punk2.gif'
import NFY from '../assets/rotate-punk1.gif'

const Cara = ({item }) => {
  const styles = {
    cardContainer: `flex flex-col`,
    card: `h-[250px] w-[190px] rounded-3xl flex cursor-pointer transition-all duration-300  hover:scale-105 hover:shadow-xl overflow-hidden border border-black shadow-xl border-4 border-[#fb9701]`,
    cardTitle: `text-xl font-bold flex text-center w-full flex-1 justify-center mt-[10px]`,
    price: `text-md font-bold flex justify-center`,
    coins: `ml-[10px]`,
  }
  return (
    <div
      className={styles.cardContainer}
    >
      <div className={styles.card}>
        <Image
          src={NFQ}
          className='object-cover object-center'
          width={190}
          height={250}
        />
      </div>
      <div>
        <div className={styles.cardTitle}>
          {/* {item.name} */}
          Mena
          </div>
        <div className={styles.price}>
          {/* {item.price}  */} 5
          AC <FaCoins className={styles.coins} />
        </div>
      </div>
    </div>
  )
} 

const Cars = ({item }) => {
  const styles = {
    cardContainer: `flex flex-col`,
    card: `h-[250px] w-[190px] rounded-3xl flex cursor-pointer transition-all duration-300  hover:scale-105 hover:shadow-xl overflow-hidden border border-black shadow-xl border-4 border-[#fb9701]`,
    cardTitle: `text-xl font-bold flex text-center w-full flex-1 justify-center mt-[10px]`,
    price: `text-md font-bold flex justify-center`,
    coins: `ml-[10px]`,
  }
  return (
    <div
      className={styles.cardContainer}
    >
      <div className={styles.card}>
        <Image
          src={NFW}
          className='object-cover object-center'
          width={190}
          height={250}
        />
      </div>
      <div>
        <div className={styles.cardTitle}>
          {/* {item.name} */}
          Mena
          </div>
        <div className={styles.price}>
          {/* {item.price}  */} 5
          AC <FaCoins className={styles.coins} />
        </div>
      </div>
    </div>
  )
} 

const Carf = ({item }) => {
  const styles = {
    cardContainer: `flex flex-col`,
    card: `h-[250px] w-[190px] rounded-3xl flex cursor-pointer transition-all duration-300  hover:scale-105 hover:shadow-xl overflow-hidden border border-black shadow-xl border-4 border-[#fb9701]`,
    cardTitle: `text-xl font-bold flex text-center w-full flex-1 justify-center mt-[10px]`,
    price: `text-md font-bold flex justify-center`,
    coins: `ml-[10px]`,
  }
  return (
    <div
      className={styles.cardContainer}
    >
      <div className={styles.card}>
        <Image
          src={NFE}
          className='object-cover object-center'
          width={190}
          height={250}
        />
      </div>
      <div>
        <div className={styles.cardTitle}>
          {/* {item.name} */}
          Mena
          </div>
        <div className={styles.price}>
          {/* {item.price}  */} 5
          AC <FaCoins className={styles.coins} />
        </div>
      </div>
    </div>
  )
} 

const Carg = ({item }) => {
  const styles = {
    cardContainer: `flex flex-col`,
    card: `h-[250px] w-[190px] rounded-3xl flex cursor-pointer transition-all duration-300  hover:scale-105 hover:shadow-xl overflow-hidden border border-black shadow-xl border-4 border-[#fb9701]`,
    cardTitle: `text-xl font-bold flex text-center w-full flex-1 justify-center mt-[10px]`,
    price: `text-md font-bold flex justify-center`,
    coins: `ml-[10px]`,
  }
  return (
    <div
      className={styles.cardContainer}
    >
      <div className={styles.card}>
        <Image
          src={NFR}
          className='object-cover object-center'
          width={190}
          height={250}
        />
      </div>
      <div>
        <div className={styles.cardTitle}>
          {/* {item.name} */}
          Mena
          </div>
        <div className={styles.price}>
          {/* {item.price}  */} 5
          AC <FaCoins className={styles.coins} />
        </div>
      </div>
    </div>
  )
} 

const Carh = ({item }) => {
  const styles = {
    cardContainer: `flex flex-col`,
    card: `h-[250px] w-[190px] rounded-3xl flex cursor-pointer transition-all duration-300  hover:scale-105 hover:shadow-xl overflow-hidden border border-black shadow-xl border-4 border-[#fb9701]`,
    cardTitle: `text-xl font-bold flex text-center w-full flex-1 justify-center mt-[10px]`,
    price: `text-md font-bold flex justify-center`,
    coins: `ml-[10px]`,
  }
  return (
    <div
      className={styles.cardContainer}
    >
      <div className={styles.card}>
        <Image
          src={NFY}
          className='object-cover object-center'
          width={190}
          height={250}
        />
      </div>
      <div>
        <div className={styles.cardTitle}>
          {/* {item.name} */}
          Mena
          </div>
        <div className={styles.price}>
          {/* {item.price}  */} 5
          AC <FaCoins className={styles.coins} />
        </div>
      </div>
    </div>
  )
} 


const Carx = ({item }) => {
  const styles = {
    cardContainer: `flex flex-col`,
    card: `h-[250px] w-[190px] rounded-3xl flex cursor-pointer transition-all duration-300  hover:scale-105 hover:shadow-xl overflow-hidden border border-black shadow-xl border-4 border-[#fb9701]`,
    cardTitle: `text-xl font-bold flex text-center w-full flex-1 justify-center mt-[10px]`,
    price: `text-md font-bold flex justify-center`,
    coins: `ml-[10px]`,
  }
  return (
    <div
      className={styles.cardContainer}
    >
      <div className={styles.card}>
        <Image
          src={NFT}
          className='object-cover object-center'
          width={190}
          height={250}
        />
      </div>
      <div>
        <div className={styles.cardTitle}>
          {/* {item.name} */}
          Mena
          </div>
        <div className={styles.price}>
          {/* {item.price}  */} 5
          AC <FaCoins className={styles.coins} />
        </div>
      </div>
    </div>
  )
} 

const Cards = () => {
  const styles = {
    container: `h-full w-full flex flex-col ml-[20px] -mt-[50px]`,
    title: `text-xl font-bolder mb-[20px] mt-[30px]  ml-[30px]`,
    cards: `flex items-center  flex-wrap gap-[80px]`,
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>New Release</div>
      <div className={styles.cards}>
        <div className={styles.cards}>
          {/* {assets.map(item => {
            let asset = item.attributes

            return <Card key={item.id} item={item.attributes} />
          })} */}
          <Card/>
          <Carx/>
          <Cara/>
          <Cars/>
          <Carf/>
          <Carg/>
          <Carh/>
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default Cards
