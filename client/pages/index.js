
import Head from 'next/head'
import BaseLayout from "components/base-layout";


const Home = () => {
  
 


  return (
    <BaseLayout>



      <div className="main--decoration-red"></div>

      <div className="main--decoration-red-three"></div>

      <section className="hero">
        <div className="hero--left">
          <div className="window">
            <div className="window--one">
              <h1 className="window--title  icon">გადადგი შენი პირველი კარიერული ნაბიჯები ჩვენთან ერთად</h1>
            </div>
            <div className="window--two">
              <p className="window--two--info">

                ჩვენ გასწავლით,თუ როგორ შეუქმნათ
                საკუთარ თავს კარიერა.ხოლო კურსების დასრულების შემდეგ,თქვენ შეძლებთ იყოთ მოწინავე ამ
							ინდუსტრიაში </p>
            </div>
            <div className="window--three"><a href="#" className="window--three--btn" title="join">გაწევრიანდით</a>
            </div>
          </div>
        </div>

        <div className="hero--right">
          <div className="hero--right--image"></div>
        </div>


      </section>

      <section className="third-section">
        <div className="courses-offer">
          <div className="offers-card">
            <div className="offers-card--image">
              <div className="offers-card--image--placed"></div>
            </div>

            <div className="offers-card--title offers-title"> <span style={{ color: "#FF5C4D" }}> პროფესიონალი</span> და
						<span style={{ color: "#338EFF" }}>ხანგძლივი</span> კურსები</div>
            <div className="offers-card--info offers-info ">ჩვენი კურსები საშუალებას გაძლევს რომ შეიქმნა ნამდვილი
						პროფესიონალი კარიერეა, მოგცემთ საშუალებას ასევე რომ კურსის</div>
          </div>

          <div className="offers-card">
            <div className="offers-card--image">
              <div className="offers-card--image--placed"></div>
            </div>

            <div className="offers-card--title offers-title"> <span style={{ color: "#FF5C4D" }}> პროფესიონალი</span> და
						<span style={{ color: "#338EFF" }}>ხანგძლივი</span> კურსები</div>
            <div className="offers-card--info offers-info ">ჩვენი კურსები საშუალებას გაძლევს რომ შეიქმნა ნამდვილი
						პროფესიონალი კარიერეა, მოგცემთ საშუალებას ასევე რომ კურსის</div>
          </div>

          <div className="offers-card">
            <div className="offers-card--image">
              <div className="offers-card--image--placed"></div>
            </div>

            <div className="offers-card--title offers-title"> <span style={{ color: "#FF5C4D" }}> პროფესიონალი</span> და
						<span style={{ color: "#338EFF" }}>ხანგძლივი</span> კურსები</div>
            <div className="offers-card--info offers-info ">ჩვენი კურსები საშუალებას გაძლევს რომ შეიქმნა ნამდვილი
						პროფესიონალი კარიერეა, მოგცემთ საშუალებას ასევე რომ კურსის</div>
          </div>

          <div className="offers-card">
            <div className="offers-card--image">
              <div className="offers-card--image--placed"></div>
            </div>

            <div className="offers-card--title offers-title"> <span style={{ color: "#FF5C4D" }}> პროფესიონალი</span> და
						<span style={{ color: "#338EFF" }}>ხანგძლივი</span> კურსები</div>
            <div className="offers-card--info offers-info ">ჩვენი კურსები საშუალებას გაძლევს რომ შეიქმნა ნამდვილი
						პროფესიონალი კარიერეა, მოგცემთ საშუალებას ასევე რომ კურსის</div>
          </div>

          <div className="offers-card">
            <div className="offers-card--image">
              <div className="offers-card--image--placed"></div>
            </div>

            <div className="offers-card--title offers-title"> <span style={{ color: "#FF5C4D" }}> პროფესიონალი</span> და
						<span style={{ color: "#338EFF" }}>ხანგძლივი</span> კურსები</div>
            <div className="offers-card--info offers-info ">ჩვენი კურსები საშუალებას გაძლევს რომ შეიქმნა ნამდვილი
						პროფესიონალი კარიერეა, მოგცემთ საშუალებას ასევე რომ კურსის</div>
          </div>

          <div className="offers-card">
            <div className="offers-card--image">
              <div className="offers-card--image--placed"></div>
            </div>

            <div className="offers-card--title offers-title"> <span style={{ color: "#FF5C4D" }}> პროფესიონალი</span> და
						<span style={{ color: "#338EFF" }}>ხანგძლივი</span> კურსები</div>
            <div className="offers-card--info offers-info ">ჩვენი კურსები საშუალებას გაძლევს რომ შეიქმნა ნამდვილი
						პროფესიონალი კარიერეა, მოგცემთ საშუალებას ასევე რომ {process.env.NEXT_PUBLIC_FRONT_URL} </div>
          </div>

        </div>

      </section>

      <section className="second-section">
        <div className="intro">
          <div className="intro--left">
            <div className="intro--left--image"></div>
          </div>
          <div className="intro--right">
            <div className="window">
              <div className="window--one ">
                <h1 className="window--title logo-mark">ჩვენთან არის ყველაზე მოთხოვნადი პროფესიების კურსები</h1>
              </div>
              <div className="window--two">
                <p className="window--two--info info-title">ჩვენ ვუზრუნველყოფთ ისეთ განათებას,რომელიც მოგცემთ
                საშუალებას რომ
								იმუშაოთ თქვენთვის სასურველ სამსახურში</p>
              </div>
              <div className="window--three">
                <a href="#" className="window--three--btn " title="Join">ჩვენი კურსები</a>
              </div>
            </div>
          </div>
        </div>

      </section>




      <section className="fourth-section">
        <div className="courses">
          <div className="courses--introduction">
            <div className="courses--introduction--title ">დაათვალიერეთ ჩვენი კურსები</div>
            <div className="courses--introduction--info info-title">ჩვენი კურსები არის დაყოფილები სხვადახვა
            კატეგორიებით და
						შეგიძლიათ აირჩიოთ მხოლოდ ის კურსი რაც ნამდვილად გაინტერესებთ</div>
          </div>




          <div className="glider-contain">
            <div className="glider">
              <div className="card">
                <div className="card--image">
                  <div className="card--image--placed"></div>
                </div>
                <div className="card--title">Node.js სრულყოფილი 6 საათიანი კურსი</div>
                <div className="card--info">ამ კურსზე სრულყოფილად შეისწავლით node.js, ააწყობთ სრულყოფილ ონლაინ
                მაღაზიას
								სადაც შეძლებთ ყიდვა გაყიდვას, რეგისტრაცია ავტორიზაციას და კიდევ მეტს</div>
                <div className="card--button">

                  <a src="#" alt="" className="card--buttons yellow--button--card">javascript</a>

                  <a src="#" alt="" className="card--buttons red--button--card">html</a>
                  <a src="#" alt="" className="card--buttons blue--button--card">css</a>
                  <a src="#" alt="" className="card--buttons pink--button--card">sass</a>

                </div>

              </div>

              <div className="card">
                <div className="card--image">
                  <div className="card--image--placed" style={{ backgroundImage: "url('pictures/react.png')" }}>
                  </div>
                </div>
                <div className="card--title">Node.js სრულყოფილი 6 საათიანი კურსი</div>
                <div className="card--info">ამ კურსზე სრულყოფილად შეისწავლით node.js, ააწყობთ სრულყოფილ ონლაინ
                მაღაზიას
								სადაც შეძლებთ ყიდვა გაყიდვას, რეგისტრაცია ავტორიზაციას და კიდევ მეტს</div>
                <div className="card--button">

                  <a src="#" alt="" className="card--buttons yellow--button--card">javascript</a>

                  <a src="#" alt="" className="card--buttons red--button--card">html</a>
                  <a src="#" alt="" className="card--buttons blue--button--card">css</a>
                  <a src="#" alt="" className="card--buttons pink--button--card">sass</a>

                </div>

              </div>

              <div className="card">
                <div className="card--image">
                  <div className="card--image--placed" style={{ backgroundImage: "url('pictures/react.png')" }}>
                  </div>
                </div>
                <div className="card--title">Node.js სრულყოფილი 6 საათიანი კურსი</div>
                <div className="card--info">ამ კურსზე სრულყოფილად შეისწავლით node.js, ააწყობთ სრულყოფილ ონლაინ
                მაღაზიას
								სადაც შეძლებთ ყიდვა გაყიდვას, რეგისტრაცია ავტორიზაციას და კიდევ მეტს</div>
                <div className="card--button">

                  <a src="#" alt="" className="card--buttons yellow--button--card">javascript</a>

                  <a src="#" alt="" className="card--buttons red--button--card">html</a>
                  <a src="#" alt="" className="card--buttons blue--button--card">css</a>
                  <a src="#" alt="" className="card--buttons pink--button--card">sass</a>

                </div>

              </div>


              <div className="card">
                <div className="card--image">
                  <div className="card--image--placed" style={{ backgroundImage: "url('pictures/react.png')" }}>
                  </div>
                </div>
                <div className="card--title">Node.js სრულყოფილი 6 საათიანი კურსი</div>
                <div className="card--info">ამ კურსზე სრულყოფილად შეისწავლით node.js, ააწყობთ სრულყოფილ ონლაინ
                მაღაზიას
								სადაც შეძლებთ ყიდვა გაყიდვას, რეგისტრაცია ავტორიზაციას და კიდევ მეტს</div>
                <div className="card--button">

                  <a src="#" alt="" className="card--buttons yellow--button--card">javascript</a>

                  <a src="#" alt="" className="card--buttons red--button--card">html</a>
                  <a src="#" alt="" className="card--buttons blue--button--card">css</a>
                  <a src="#" alt="" className="card--buttons pink--button--card">sass</a>

                </div>
              </div>

              <div className="card">
                <div className="card--image">
                  <div className="card--image--placed" style={{ backgroundImage: "url('pictures/react.png')" }}>
                  </div>
                </div>
                <div className="card--title">Node.js სრულყოფილი 6 საათიანი კურსი</div>
                <div className="card--info">ამ კურსზე სრულყოფილად შეისწავლით node.js, ააწყობთ სრულყოფილ ონლაინ
                მაღაზიას
								სადაც შეძლებთ ყიდვა გაყიდვას, რეგისტრაცია ავტორიზაციას და კიდევ მეტს</div>
                <div className="card--button">

                  <a src="#" alt="" className="card--buttons yellow--button--card">javascript</a>

                  <a src="#" alt="" className="card--buttons red--button--card">html</a>
                  <a src="#" alt="" className="card--buttons blue--button--card">css</a>
                  <a src="#" alt="" className="card--buttons pink--button--card">sass</a>

                </div>
              </div>

              <div className="card">
                <div className="card--image">
                  <div className="card--image--placed" style={{ backgroundImage: "url('pictures/react.png')" }}>
                  </div>
                </div>
                <div className="card--title">Node.js სრულყოფილი 6 საათიანი კურსი</div>
                <div className="card--info">ამ კურსზე სრულყოფილად შეისწავლით node.js, ააწყობთ სრულყოფილ ონლაინ
                მაღაზიას
								სადაც შეძლებთ ყიდვა გაყიდვას, რეგისტრაცია ავტორიზაციას და კიდევ მეტს</div>
                <div className="card--button">

                  <a src="#" alt="" className="card--buttons yellow--button--card">javascript</a>

                  <a src="#" alt="" className="card--buttons red--button--card">html</a>
                  <a src="#" alt="" className="card--buttons blue--button--card">css</a>
                  <a src="#" alt="" className="card--buttons pink--button--card">sass</a>

                </div>
              </div>

              <div className="card">
                <div className="card--image">
                  <div className="card--image--placed" style={{ backgroundImage: "url('pictures/react.png')" }}>
                  </div>
                </div>
                <div className="card--title">Node.js სრულყოფილი 6 საათიანი კურსი</div>
                <div className="card--info">ამ კურსზე სრულყოფილად შეისწავლით node.js, ააწყობთ სრულყოფილ ონლაინ
                მაღაზიას
								სადაც შეძლებთ ყიდვა გაყიდვას, რეგისტრაცია ავტორიზაციას და კიდევ მეტს</div>
                <div className="card--button">

                  <a src="#" alt="" className="card--buttons yellow--button--card">javascript</a>

                  <a src="#" alt="" className="card--buttons red--button--card">html</a>
                  <a src="#" alt="" className="card--buttons blue--button--card">css</a>
                  <a src="#" alt="" className="card--buttons pink--button--card">sass</a>

                </div>
              </div>

              <div className="card">
                <div className="card--image">
                  <div className="card--image--placed" style={{ backgroundImage: "url('pictures/react.png')" }}>
                  </div>
                </div>
                <div className="card--title">Node.js სრულყოფილი 6 საათიანი კურსი</div>
                <div className="card--info">ამ კურსზე სრულყოფილად შეისწავლით node.js, ააწყობთ სრულყოფილ ონლაინ
                მაღაზიას
								სადაც შეძლებთ ყიდვა გაყიდვას, რეგისტრაცია ავტორიზაციას და კიდევ მეტს</div>
                <div className="card--button">

                  <a src="#" alt="" className="card--buttons yellow--button--card">javascript</a>

                  <a src="#" alt="" className="card--buttons red--button--card">html</a>
                  <a src="#" alt="" className="card--buttons blue--button--card">css</a>
                  <a src="#" alt="" className="card--buttons pink--button--card">sass</a>

                </div>
              </div>


            </div>
            <div className="arrows-container">
              <button role="button" aria-label="Previous" className="glider-prev">«</button>
              <button role="button" aria-label="Next" className="glider-next">»</button>
            </div>



          </div>

        </div>

      </section>

      <section className="fifth-section">

        <div className="get-started">
          <div className="medium-title left-side">დაიწყეთ თქვენი საყვარელი პროფესიის შესწავლა</div>
          <div className="right-side"><a src="#" className="big-button white-button"> დაწყება</a></div>

        </div>


      </section>





    </BaseLayout>
  )
}


export default Home