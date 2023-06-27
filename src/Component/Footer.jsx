import React from 'react';

export default function () {
  return (
    <>
      <footer className="bg-[#141414] h-full pb-3">
        <div className="footer_components flex gap-6 justify-between items-center py-20 px-[65px]">
          <section>
            <h2 className="uppercase text-[#f23e3c] mb-2">Network</h2>
            <ul>
              <li>
                <a href="" className="text-[#7d8692]">
                  Community
                </a>
              </li>
              <li>
                <a href="" className="text-[#7d8692]">
                  Groups
                </a>
              </li>
              <li>
                <a href="" className="text-[#7d8692]">
                  Events
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="uppercase text-[#f23e3c] mb-2">Collaborate </h2>
            <ul>
              <li>
                <a href="" className="text-[#7d8692]">
                  Projects
                </a>
              </li>
              <li>
                <a href="" className="text-[#7d8692]">
                  Feedback Rooms
                </a>
              </li>
              <li>
                <a href="" className="text-[#7d8692]">
                  Community
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="uppercase text-[#f23e3c] mb-2 ">Get Funding </h2>
            <ul>
              <li>
                <a href="" className="text-[#7d8692]">
                  Get it made
                </a>
              </li>
              <li>
                <a href="" className="text-[#7d8692]">
                  Production Diaries
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="uppercase text-[#f23e3c] mb-2">get seen </h2>
            <ul>
              <li>
                <a href="" className="text-[#7d8692]">
                  Films
                </a>
              </li>
              <li>
                <a href="" className="text-[#7d8692]">
                  Shows
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="uppercase text-[#f23e3c] mb-2">AboutCenterFrame </h2>
            <ul>
              <li>
                <a href="" className="text-[#7d8692]">
                  Help
                </a>
              </li>
              <li>
                <a href="" className="text-[#7d8692]">
                  Support
                </a>
              </li>
            </ul>
          </section>
        </div>
        <hr className="mb-5" />
        <div className="copyright_component justify-between flex gap-5 px-20">
          <section>
            <ul className="left flex flex-row text-[#7f8082] gap-2">
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">LinkedLn</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Youtube</a>
              </li>
            </ul>
          </section>
          <section className="middle">
            <section>
              <div className="left flex flex-row text-[#7f8082] gap-2">
                <h3>
                  Powered by{' '}
                  <span className="uppercase text-[#9caeb5]">
                    papyrusconverse
                  </span>
                </h3>
              </div>
            </section>
          </section>
          <section className="right text-[#474747] flex gap-4">
            <h2>User Agreement</h2>
            <h2>PrivacyPolicy</h2>
            <h2>CookiePolicy</h2>
          </section>
        </div>
      </footer>
    </>
  );
}
