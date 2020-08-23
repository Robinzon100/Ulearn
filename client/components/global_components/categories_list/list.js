import React, { Fragment } from 'react'
import { ChevronRight } from 'react-feather';


export default function list({ title, subtitle }) {
    return (
        <Fragment>
            <div className="list">
                <div className="list__container">
                    <div className="list__container--arrow">
                        <ChevronRight />
                    </div>
                    <div className="list__container--name">
                        <div className="title">
                            <p className="paragraph-regular-Noto paragraph-medium">{title}</p>
                            <div className="check"></div>
                        </div>

                        <div className="inside_list">
                            <ul>
                                <li>
                                    <p className="paragraph-regular-Noto paragraph-medium-small">{subtitle}</p>
                                    <div className="check"></div>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </Fragment>
    )
}
