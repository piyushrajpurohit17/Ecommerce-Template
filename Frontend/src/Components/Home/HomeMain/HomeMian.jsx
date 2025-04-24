import React from 'react'
import LandingPage from '../LandinPage/LandingPage'
import TopCategories from '../TopCategories/TopCategories'
import BestDeals from '../BestDeals/BestDeals'
import NewArrival from '../NewArrival/NewArrival'
import Feedback from '../Feedback/Feedback'
import BestValues from '../BestValues/BestValues'

export default function HomeMian() {
  return (
    <>
    
        <section className=" ">
            <LandingPage/>
            <TopCategories/>
            <BestDeals/>
            <NewArrival/>
            <Feedback/>
            <BestValues/>
        </section>
    
    
    </>
  )
}
