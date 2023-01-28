import React from "react"
import Footer from "../footer/Footer"
import Slide from "../Slide/Slide"
import Card from "./Card"
import CardTwo from "./CardTwo"

const BlogHome = () => {
  const data = [
    {
      id: 1,
      titleOne: "THE PLATFOM WHERE YOU WILL DISCOVER FASHION ",
      titletwo: "The news",
      paraOne: "we can make sure to get our hands on the most sought after, coveted and trendiest pieces that everyone wants to wear.",
      paraTwo: "Retro pin up trend is back",
      subTitle: "By Jennifer Walter",
      qrCode: "/images/qrcode.png",
      cover: "/Images/blog5.jpg",
    },
  ]
  return (
    <>
      <section className='home'>
        <div className='left-content'>
          {data.map((value) => {
            return (
              <div className='content'>
                <div className='logo'>
                  <h1>GK</h1>
                </div>
                <div className='home-img'>
                  <img src={value.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>{value.titleOne}</h1>
                  <p>{value.paraOne}</p>
                </div>
                <div className='text text2'>
                  <h1>{value.titletwo}</h1>
                  <p>{value.paraTwo}</p>
                  <span>{value.subTitle}</span>
                </div>

                <div className='qrcode'>
                  <img src={value.qrCode} alt='' />
                </div>
              </div>
            )
          })}
        </div>
        <div className='right-content'>
          <Slide />
          <Card />
          <CardTwo />
          <Footer />
        </div>
      </section>
    </>
  )
}

export default BlogHome