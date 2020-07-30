import React,{Fragment} from 'react'

export default function hero() {
    return (
        <Fragment>
            <section className="hero">
			<div className="hero--steps">
				<div className="hero--steps__info">
					<div className="hero--steps__info--heading">
						<h1 className="bpg_nino_mtavruli_bold  heading-1 icon">გადადგი შენი პირველი კარიერული ნაბიჯები ჩვენთან ერთად</h1>
					</div>
					<div className="hero--steps__info--paragraph">
						<p className="bpg_arial paragraph-medium">
							ჩვენ გასწავლით,თუ როგორ შეუქმნათ
							საკუთარ თავს კარიერა.ხოლო კურსების დასრულების შემდეგ,თქვენ შეძლებთ იყოთ მოწინავე ამ
							ინდუსტრიაში
                            </p>
					</div>
					<div className="hero--steps__btn">
                        <a href="#" className="btn bpg_arial paragraph-regular" title="join">შემოგვიერთდით</a>
					</div>
				</div>
			</div>

			<div className="hero--image">
				<div className="hero--image__container"></div>
			</div>


        </section>
        </Fragment>
    )
}
