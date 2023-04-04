import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { useInView } from 'react-intersection-observer';
import './gallery.css'

const Gallery = () => {
  
  const { ref: galleryBgRef, inView: galleryBgVisible } = useInView()
  const { ref: galleryTitleRef } = useInView({ triggerOnce: true })
  const { ref: galleryHeaderUnderlineRef} = useInView({ triggerOnce: true })
  const { ref: galleryHeaderDescRef, inView: galleryHeaderDescVisible } = useInView({ triggerOnce: true })
  const { ref: AquaCastleRef, inView: AquaCastleVisible } = useInView({ triggerOnce: true })
  const { ref: CyberStreetRef, inView: CyberStreetVisible } = useInView({ triggerOnce: true })
  const { ref: FairylandRef, inView: FairylandVisible } = useInView({ triggerOnce: true })
  const { ref: SteampunkHouseRef, inView: SteampunkHouseVisible } = useInView({ triggerOnce: true })
  const { ref: CyberpunkCityRef, inView: CyberpunkCityVisible } = useInView({ triggerOnce: true })
  const { ref: SkyPalaceRef, inView: SkyPalaceVisible } = useInView({ triggerOnce: true })

  const [arrowAnim, setArrowAnim] = useState(false)
  const nav = useNavigate()

  return (
    <div className='gallery'>
      <div className='gallery__bg'>
        <div className="gallery__header">
          <h1 ref={galleryTitleRef} className={galleryHeaderDescVisible ? 'speed2__visible' : ''}>Aidan</h1>
          <div ref={galleryHeaderUnderlineRef} className={`gallery__header__underline ${galleryHeaderDescVisible ? 'speed3__visible' : ''}`}></div>
          <h2 ref={galleryHeaderDescRef} className={galleryHeaderDescVisible ? 'speed4__visible' : ''}>A passionate, talented designer and engineer</h2>
        </div>
        <div ref={galleryBgRef} className="scroll"></div>
      </div>
      <div className="gallery__container">
        <div className={`back__btn ${galleryBgVisible ? '' : 'btn__anim'}`} onMouseEnter={() => setArrowAnim(!arrowAnim)} 
                                                                            onMouseLeave={() => setArrowAnim(!arrowAnim)}
                                                                            onClick={() => nav('/')}>
          <MdKeyboardArrowLeft className={`left__arrow ${arrowAnim ? 'arrow__anim' : 'arrow__leave__anim'}`} />
          <p onMouseEnter={() => setArrowAnim(true)}>Back</p>
        </div>
        <div className="gallery__scroll"></div>
        <h1 className='gallery__title'>Gallery</h1>
        <div className='gallery__underline'></div>
        <h2 className='gallery__desc'>A collection of renders of my Minecraft projects</h2>
        <h1 className='gallery__grid__header'>Large Scale</h1>
        <div className="gallery__grid">
          <div ref={AquaCastleRef} className={`gallery__card ${AquaCastleVisible ? 'fade__left': ''} `}>
            <img src="assets/renders/Aqua Castle.png" alt="Aqua Castle" />
            <div className="card__desc__container">
              <h1 className="card__title">Riviera Keep</h1>
              <h1 className='card__text'>Aquatic adaptation of Disney's Cinderella Castle</h1>
            </div>
          </div>
          <div ref={FairylandRef} className={`gallery__card ${FairylandVisible ? 'fade__right': ''} `}>
            <img src="assets/renders/Fairyland.png" alt="Fairyland" />
            <div className="card__desc__container">
              <h1 className="card__title">Arcadia</h1>
              <h1 className='card__text'>Mountainous fairyland with fantasy atmosphere</h1>
            </div>
          </div>
          <div ref={CyberpunkCityRef} className={`gallery__card ${CyberpunkCityVisible ? 'fade__left': ''} `}>
            <img src="assets/renders/Cyberpunk City.png" alt="Cyberpunk City" />
            <div className="card__desc__container">
              <h1 className="card__title">Neo-Pulsa City</h1>
              <h1 className='card__text'>Full-fledged cyberpunk city based on Cyberpunk 2077</h1>
            </div>
          </div>
          <div ref={SkyPalaceRef} className={`gallery__card ${SkyPalaceVisible ? 'fade__right': ''} `}>
            <img src="assets/renders/Sky Palace.png" alt="Sky Steampunk" />
            <div className="card__desc__container">
              <h1 className="card__title">Glockhelm</h1>
              <h1 className='card__text'>Floating steampunk and fantasy concept</h1>
            </div>
          </div>
        </div>
        <h1 className='gallery__grid__header'>Small Scale</h1>
        <div className="gallery__grid">
          <div ref={SteampunkHouseRef} className={`gallery__card ${SteampunkHouseVisible ? 'fade__left': ''} `}>
            <img src="assets/renders/Steampunk House.png" alt="Steampunk House" />
            <div className="card__desc__container">
              <h1 className="card__title">Steampunk</h1>
              <h1 className='card__text'>Steampunk house with victorian style roof</h1>
            </div>
          </div>
          <div ref={CyberStreetRef} className={`gallery__card ${CyberStreetVisible ? 'fade__right': ''} `}>
            <img src="assets/renders/Cyber Street.png" alt="Cyberpunk Street" />
            <div className="card__desc__container">
              <h1 className="card__title">Cyberpunk</h1>
              <h1 className='card__text'>Small cyberpunk style street to practice detailing</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery