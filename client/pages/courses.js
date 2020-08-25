import React, { Fragment } from 'react'
import { Eye } from 'react-feather';
import BaseLayout from "components/base-layout";


export default function Courses() {
    return (
        <Fragment>
            <BaseLayout>

                <div className="courses-page">
                    <div className="courses-container">
                        <div className="section-courses">
                            <div className="section-courses--about">
                                <div className="section-courses--name">
                                    <p className="paragraph-light-Noto paragraph-smallest">კურსის სახელი</p>
                                </div>
                                <div className="section-courses--heading">

                                    <p className="heading-semi-bold-Noto  paragraph-medium">კურსის თავი / კონკრეტული ვიდეოს სახელი</p>

                                    <div className="viewers">
                                        <Eye size={17} />
                                        <p className="paragraph-medium-small Eina-semibold">755</p>
                                    </div>
                                </div>
                            </div>


                            {/* //! VIDEOPLAYER */}
                            <div className="section-courses--video-player"></div>
                            {/* //! VIDEOPLAYER */}


                            <div className="section-courses--tablist">
                                <div className="tablist_description flex-container">
                                    <div className="tablist_description--clipboard">
                                        <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.8193 3.58154H15.8193C16.3497 3.58154 16.8584 3.79226 17.2335 4.16733C17.6086 4.5424 17.8193 5.05111 17.8193 5.58154V19.5815C17.8193 20.112 17.6086 20.6207 17.2335 20.9958C16.8584 21.3708 16.3497 21.5815 15.8193 21.5815H3.81931C3.28887 21.5815 2.78016 21.3708 2.40509 20.9958C2.03002 20.6207 1.81931 20.112 1.81931 19.5815V5.58154C1.81931 5.05111 2.03002 4.5424 2.40509 4.16733C2.78016 3.79226 3.28887 3.58154 3.81931 3.58154H5.81931" stroke="#338EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.8193 1.58154H6.81931C6.26702 1.58154 5.81931 2.02926 5.81931 2.58154V4.58154C5.81931 5.13383 6.26702 5.58154 6.81931 5.58154H12.8193C13.3716 5.58154 13.8193 5.13383 13.8193 4.58154V2.58154C13.8193 2.02926 13.3716 1.58154 12.8193 1.58154Z" stroke="#338EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </div>
                                    <div className="tablist_description--heading">
                                        <p className="heading-semi-bold-Noto paragraph-medium">
                                            აღწერა
                                         </p>
                                    </div>
                                </div>
                                <div className="tablist_question flex-container">
                                    <div className="tablist_description--question">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.7016 21.7529C17.2244 21.7529 21.7016 17.2758 21.7016 11.7529C21.7016 6.23008 17.2244 1.75293 11.7016 1.75293C6.17872 1.75293 1.70157 6.23008 1.70157 11.7529C1.70157 17.2758 6.17872 21.7529 11.7016 21.7529Z" stroke="#FF5C4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.79156 8.75301C9.02667 8.08468 9.49072 7.52112 10.1015 7.16214C10.7123 6.80317 11.4305 6.67195 12.1287 6.79172C12.827 6.9115 13.4604 7.27454 13.9166 7.81654C14.3729 8.35854 14.6226 9.04453 14.6216 9.75301C14.6216 11.753 11.6216 12.753 11.6216 12.753" stroke="#FF5C4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11.7016 16.7529H11.7116" stroke="#FF5C4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </div>
                                    <div className="tablist_description--heading">
                                        <p className="heading-semi-bold-Noto paragraph-medium">
                                            კითხვა-პასუხი
                                         </p>
                                    </div>
                                </div>

                                <div className="tablist_resources flex-container">
                                    <div className="tablist_description--folder">
                                        <svg width="46" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M45.7392 35.3447C45.7392 36.5164 45.2573 37.6402 44.3995 38.4687C43.5418 39.2973 42.3784 39.7627 41.1653 39.7627H4.57392C3.36084 39.7627 2.19745 39.2973 1.33967 38.4687C0.481894 37.6402 0 36.5164 0 35.3447V4.41808C0 3.24633 0.481894 2.12258 1.33967 1.29403C2.19745 0.465475 3.36084 0 4.57392 0H14.4341C15.4201 0 16.3431 0.484464 16.9031 1.29592L19.6882 5.3312C20.2483 6.14266 21.1713 6.62712 22.1572 6.62712H41.1653C42.3784 6.62712 43.5418 7.0926 44.3995 7.92115C45.2573 8.7497 45.7392 9.87346 45.7392 11.0452V35.3447Z" fill="url(#paint0_linear)" />
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="-5.33124e-07" y1="1.52703" x2="44.375" y2="41.2854" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="white" />
                                                    <stop offset="1" stopColor="#EBEBEB" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </div>
                                    <div className="tablist_description--heading">
                                        <p className="heading-semi-bold-Noto paragraph-medium">
                                            რესურსები
                                         </p>
                                    </div>
                                </div>

                                <div className="tablist_rate flex-container">
                                    <div className="tablist_description--star">
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.45452 2.63952C9.04146 1.45045 10.737 1.45045 11.324 2.63952L12.6073 5.23945C12.8402 5.71121 13.2901 6.03835 13.8107 6.11443L16.6832 6.5343C17.9951 6.72605 18.5179 8.33859 17.5682 9.26365L15.4921 11.2857C15.1147 11.6533 14.9425 12.1831 15.0315 12.7024L15.5211 15.5571C15.7453 16.8643 14.3732 17.861 13.1994 17.2437L10.634 15.8946C10.1678 15.6494 9.61074 15.6494 9.14453 15.8946L6.57906 17.2437C5.40526 17.861 4.03318 16.8643 4.25737 15.5571L4.74699 12.7024C4.83605 12.1831 4.66379 11.6533 4.28639 11.2857L2.21034 9.26365C1.26059 8.33859 1.78344 6.72605 3.09531 6.5343L5.96784 6.11443C6.48841 6.03835 6.9383 5.71121 7.17117 5.23945L8.45452 2.63952Z" stroke="#FFD703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </div>
                                    <div className="tablist_description--heading">
                                        <p className="heading-semi-bold-Noto paragraph-medium">
                                            შეფასებები
                                         </p>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className="side-menu"></div>
                    </div>
                </div>

            </BaseLayout>
        </Fragment>
    )
}
