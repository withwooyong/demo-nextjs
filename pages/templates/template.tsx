import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import templateStyles from "../../styles/Template.module.css";
const template = () => {
  return (
    <>
      <Head>
        <title>온라인학습지 템플릿</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width"
          initial-scale="1.0"
          maximum-scale="1.0"
          user-scalable="0"
        />
        <Link rel="shortcut icon" href="favicon.ico" />
        <Link rel="apple-touch-icon-precomposed" href="favicon.png" />
        <meta name="description" content="온라인학습지 템플릿" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="온라인학습지 템플릿" />
        <meta property="og:site_name" content="하루 10분 야나두" />
        <meta property="og:description" content="온라인학습지 템플릿" />
        <meta
          property="og:image"
          content="./upload/yanadoo/new/banner/yndGuide_og.png"
        />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="210" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="온라인학습지 템플릿" />
        <meta name="twitter:description" content="온라인학습지 템플릿" />
        <meta
          name="twitter:image"
          content="./upload/yanadoo/new/banner/yndGuide_og.png"
        />
        <meta
          name="nate:image"
          content="./upload/yanadoo/new/banner/yndGuide_og.png"
        />
        <meta
          name="naver-site-verification"
          content="dcf4d5cf8e610163fe7bbc07a29e21f98c503792"
        />
      </Head>
      <Script src="https://yanadoo.co.kr/promotion-landing/common/env.js" />
      <Script src="https://yanadoo.co.kr/promotion-landing/common/common.js?v=2.9" />
      <Script src="https://yanadoo.co.kr/promotion-landing/common/env.js" />
      <Script src="https://yanadoo.co.kr/promotion-landing/common/env.js" />
      <Script src="https://yanadoo.co.kr/promotion-landing/common/env.js" />
      <Script src="https://yanadoo.co.kr/promotion-landing/common/env.js" />
      <Link
        rel="stylesheet"
        type="text/css"
        href="https://yanadoo.co.kr/promotion-landing/common/css/reset.css"
      />
      <Link
        rel="stylesheet"
        type="text/css"
        href="https://yanadoo.co.kr/promotion-landing/common/css/common.css?v=1.7"
      />
      <Link
        rel="stylesheet"
        type="text/css"
        href="https://yanadoo.co.kr/promotion-landing/common/css/promotion.css?v=1.2"
      />
      <Link
        rel="stylesheet"
        type="text/css"
        href="https://yanadoo.co.kr/promotion-landing/common/css/swiper.min.css"
        media="screen"
      />
      <Script src="https://yanadoo.co.kr/promotion-landing/common/js/jquery-2.2.4.min.js" />
      <Script src="https://yanadoo.co.kr/promotion-landing/common/js/comm.js" />
      <Script src="https://yanadoo.co.kr/promotion-landing/common/js/jquery.bxslider.js" />
      <Script src="https://yanadoo.co.kr/promotion-landing/common/js/swiper.min.js" />
      <Script src="https://yanadoo.co.kr/promotion-landing/common/js/headscript.js" />
      <body className={templateStyles.body}>
        <section className={templateStyles.landing}>
          <div className={templateStyles["question-col"]}>
            <div className={templateStyles["inner-col"]}>
              {/* <!-- 섹션 1--> */}
              <div className={templateStyles["part-col"]}>
                <div className={templateStyles.topic}>
                  <strong>주어역할</strong>
                  <span>~은,는,이,가</span>
                </div>

                <div className={templateStyles.example}>
                  <p className={templateStyles.eng}>
                    <span>Teaching</span>is Fun.
                  </p>
                  <p className={templateStyles.kr}>
                    <span>가르치는 것</span>은 재미있어.
                  </p>
                </div>

                <div className={templateStyles.swiper}>
                  <div className={templateStyles["swiper-wrapper"]}>
                    <div className={templateStyles["swiper-slide"]}>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>Playing</span> a computer game is fun.
                        </p>
                        <p className={templateStyles.kr}>
                          컴퓨터 게임을 하는 것은 재미있어.
                        </p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>Playing</span> a computer game is not fun.
                        </p>
                        <p className={templateStyles.kr}>
                          컴퓨터 게임을 하는 것은 재미있지 않아.
                        </p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          Is<span> playing</span> a computer game fun?
                        </p>
                        <p className={templateStyles.kr}>
                          컴퓨터 게임을 하는 것이 재미있니?
                        </p>
                      </div>
                    </div>
                    <div className={templateStyles["swiper-slide"]}>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>Playing</span> a computer game is fun.
                        </p>
                        <p className={templateStyles.kr}>
                          컴퓨터 게임을 하는 것은 재미있어.
                        </p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>Playing</span> a computer game is not fun.
                        </p>
                        <p className={templateStyles.kr}>
                          컴퓨터 게임을 하는 것은 재미있지 않아.
                        </p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          Is<span> playing</span> a computer game fun?
                        </p>
                        <p className={templateStyles.kr}>
                          컴퓨터 게임을 하는 것이 재미있니?
                        </p>
                      </div>
                    </div>
                    <div className={templateStyles["swiper-slide"]}>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>Playing</span> a computer game is fun.
                        </p>
                        <p className={templateStyles.kr}>
                          컴퓨터 게임을 하는 것은 재미있어.
                        </p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>Playing</span> a computer game is not fun.
                        </p>
                        <p className={templateStyles.kr}>
                          컴퓨터 게임을 하는 것은 재미있지 않아.
                        </p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          Is<span> playing</span> a computer game fun?
                        </p>
                        <p className={templateStyles.kr}>
                          컴퓨터 게임을 하는 것이 재미있니?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={templateStyles["swiper-pagination"]}></div>
                </div>
              </div>
              {/* <!-- 섹션 2--> */}
              <div className={templateStyles["part-col"]}>
                <div className={templateStyles.topic}>
                  <strong>What a/an + 형용사 + 명사 + (주어+동사)!</strong>
                </div>

                <div className={templateStyles.example}>
                  <p className={templateStyles.eng}>
                    <span>What a</span> nice car<span>!</span>
                  </p>
                  <p className={templateStyles.kr}>
                    <span>정말</span>좋은 차<span>구나!</span>
                  </p>
                </div>

                <div className={templateStyles.info}>
                  <p>
                    [Waht a/an +명사] 감탄문에서는 <br />
                    어떤 의미로 감탄하는 것인지 뉘앙스 불문명
                  </p>
                </div>

                <div className={templateStyles.swiper}>
                  <div className={templateStyles["swiper-wrapper"]}>
                    <div className={templateStyles["swiper-slide"]}>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>It’s a nice watch.</p>
                        <p className={templateStyles.kr}>그건 좋은 시계야</p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>What a</span> nice watch it is<span>!</span>
                        </p>
                        <p className={templateStyles.kr}>정말 좋은 시계구나</p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>What a</span> watch<span>!</span>
                        </p>
                        <p className={templateStyles.kr}>우와~ 시계 참!</p>
                      </div>
                    </div>
                    <div className={templateStyles["swiper-slide"]}>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>It’s a nice watch.</p>
                        <p className={templateStyles.kr}>그건 좋은 시계야</p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>What a</span> nice watch it is<span>!</span>
                        </p>
                        <p className={templateStyles.kr}>정말 좋은 시계구나</p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>What a</span> watch<span>!</span>
                        </p>
                        <p className={templateStyles.kr}>우와~ 시계 참!</p>
                      </div>
                    </div>
                    <div className={templateStyles["swiper-slide"]}>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>It’s a nice watch.</p>
                        <p className={templateStyles.kr}>그건 좋은 시계야</p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>What a</span> nice watch it is<span>!</span>
                        </p>
                        <p className={templateStyles.kr}>정말 좋은 시계구나</p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>What a</span> watch<span>!</span>
                        </p>
                        <p className={templateStyles.kr}>우와~ 시계 참!</p>
                      </div>
                    </div>
                  </div>
                  <div className={templateStyles["swiper-pagination"]}></div>
                </div>
              </div>
              {/* <!-- 섹션 3--> */}
              <div className={templateStyles["part-col"]}>
                <div className={templateStyles.topic}>
                  <strong>의무</strong>
                  <span>~해야해</span>
                </div>

                <div className={templateStyles.example}>
                  <p className={templateStyles.eng}>
                    I am <span>supposed to</span> teach.
                  </p>
                  <p className={templateStyles.kr}>
                    가르쳐<span>야 해</span>
                  </p>
                </div>

                <div className={templateStyles.info}>
                  <p>규칙, 관습, 법에 의한 의무</p>
                </div>

                <div className={templateStyles.swiper}>
                  <div className={templateStyles["swiper-slide"]}>
                    <div className={templateStyles["swiper-slide"]}>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>It’s a nice watch.</p>
                        <p className={templateStyles.kr}>그건 좋은 시계야</p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>What a</span> nice watch it is<span>!</span>
                        </p>
                        <p className={templateStyles.kr}>정말 좋은 시계구나</p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>What a</span> watch<span>!</span>
                        </p>
                        <p className={templateStyles.kr}>우와~ 시계 참!</p>
                      </div>
                    </div>
                    <div className={templateStyles["swiper-slide"]}>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>It’s a nice watch.</p>
                        <p className={templateStyles.kr}>그건 좋은 시계야</p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>What a</span> nice watch it is<span>!</span>
                        </p>
                        <p className={templateStyles.kr}>정말 좋은 시계구나</p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>What a</span> watch<span>!</span>
                        </p>
                        <p className={templateStyles.kr}>우와~ 시계 참!</p>
                      </div>
                    </div>
                    <div className={templateStyles["swiper-slide"]}>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>It’s a nice watch.</p>
                        <p className={templateStyles.kr}>그건 좋은 시계야</p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>What a</span> nice watch it is<span>!</span>
                        </p>
                        <p className={templateStyles.kr}>정말 좋은 시계구나</p>
                      </div>
                      <div className={templateStyles.example}>
                        <p className={templateStyles.eng}>
                          <span>What a</span> watch<span>!</span>
                        </p>
                        <p className={templateStyles.kr}>우와~ 시계 참!</p>
                      </div>
                    </div>
                  </div>
                  <div className={templateStyles["swiper-pagination"]}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={templateStyles["fixed-box"]}>
            <button type="button" className={templateStyles["btn-list"]}>
              강의목록
            </button>
            <button type="button" className={templateStyles["btn-start"]}>
              강의시청
            </button>
            <button type="button" className={templateStyles["btn-quiz"]}>
              문제풀기
            </button>
          </div>
        </section>
        <footer id="footer"></footer>
        <Script src="https://yanadoo.co.kr/promotion-landing/common/js/footerscript.js" />
      </body>
    </>
  );
};

export default template;
