import React, { Fragment } from 'react'
import { ChevronRight } from 'react-feather';


export default function list() {
    return (
        <Fragment>
            <div className="list">
                <div className="list__container">
                    <div className="list__container--arrow">
                        <ChevronRight />
                    </div>
                    <div className="list__container--name">
                        <p className="paragraph-regular-Noto paragraph-medium">დეველოპმენტი</p>

                        <div className="inside_list">
                            <ul>
                                <li>
                                    <p className="paragraph-regular-Noto paragraph-medium-small">სერვის-მენეჯმენტი</p>
                                    <div className="check"></div>
                                </li>
                                <li>
                                    <p className="paragraph-regular-Noto paragraph-medium-small">ნეთვორქინგი</p>
                                    <div className="check"></div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="check"></div>
            </div>
        </Fragment>
    )
}
