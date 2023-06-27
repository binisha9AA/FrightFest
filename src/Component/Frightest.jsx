import React from 'react';
import topimg from '../assets/images/Layer_862.png';
import bottomimg from '../assets/images/2-layers.jpg';
import Footer from './Footer';
export default function Frightest() {
  return (
    <>
      <div className="Wrapper bg-[#120c27]">
        <div className="main_container p-12 h-full">
          <section className="top_text flex flex-col justify-center items-center gap-5">
            <div className="title">
              <h2 className="text-white text-2xl max-w-[612px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidunt ut labore et dolore.
              </h2>
            </div>
            <div className="paragraph text-white max-w-[500px] text-center">
              <p>
                Lorem ipsum dolor sit amet. consectetur adipiscinq elit. sed do
                eiusmod tempor incidunt ut labore et dolore, sed do eiusmod
                tempor incidunt ut lahare et dolore.
              </p>
            </div>
          </section>
          <section className="flex justify-center my-7">
            <img src={topimg} alt="top image" className="max-h-[370px]" />
          </section>
          <section className="bottom_text flex flex-col items-center gap-4 my-6">
            <div className="text-white max-w-[500px] text-center">
              <p className="text-justify text-base">
                Lorem dolur sil conseclelur adipiscing Ail, giustncd incid idunt
                ut labor et dolore magna aliqua. Nisus commodo viverra maeceras
                accumsar Imus vel facil isis. Quis ipsum suspendi sse ultrices
                gravida. Risus com rnodc viverra accurrsan lac vel faci isis.
              </p>
            </div>
            <div className="text-white max-w-[500px] text-center">
              <p className="text-justify text-base">
                Lorem dolur sil conseclelur adipiscing Ail, giustncd incid idunt
                ut labor et dolore magna aliqua. Nisus commodo viverra maeceras
                accumsar Imus vel facil isis. Quis ipsum suspendi sse ultrices
                gravida. Risus com rnodc viverra accurrsan lac vel faci isis.
              </p>
            </div>
            <div className="text-white max-w-[500px] text-center">
              <p className="text-justify text-base">
                Lorem dolur sil conseclelur adipiscing Ail, giustncd incid idunt
                ut labor et dolore magna aliqua. Nisus commodo viverra maeceras
                accumsar Imus vel facil isis. Quis ipsum suspendi sse ultrices
                gravida. Risus com rnodc viverra accurrsan lac vel faci isis.
              </p>
            </div>
          </section>
          <section className="flex justify-center min-w-full w-full bg-[#120c27]">
            <img
              src={bottomimg}
              alt="bottom image"
              className="max-h-[320px] md:max-w-[500px]"
            />
          </section>
          <div>
            <div className="text-[#737a8f] text-center mt-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="border-[1px] border-y-slate-400 w-[500px] mx-auto mb-32" />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
