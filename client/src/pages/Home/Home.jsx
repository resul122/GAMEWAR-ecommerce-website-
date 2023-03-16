import React from 'react'
import CardsIcons from '../../Components/HomeComponents/CardsIcons/CardsIcons'
import CardsIcons2 from '../../Components/HomeComponents/CardsIcons2/CardsIcons'
import Categories from '../../Components/HomeComponents/Categories/Categories'
import FeaturedProducts from '../../Components/HomeComponents/FeaturedProducts/FeaturedProducts'
import { MiniBlog } from '../../Components/HomeComponents/MiniBlog/MiniBlog'
import { MiniContact } from '../../Components/HomeComponents/MiniContact/MiniContact'
import Slide from '../../Components/HomeComponents/Slider/slide'
import Special from '../../Components/HomeComponents/Special/Special'
import "./Home.scss"

function Home() {
  return (
    <div className='home'>
      <Slide/>
      <CardsIcons/>
      <Special/>
      <FeaturedProducts type="featured"/>
      <CardsIcons2/>
      <FeaturedProducts type="trending"/>
      <MiniBlog/>
      <Categories/>
      <MiniContact/>
    </div>
  )
}

export default Home