import React, { Fragment } from 'react'

export default function Price({price}) {
    return (
        <Fragment>
            <div className="price-tag">

                <div className="removed-price-tag">
                    <p className="Eina-semibold paragraph-big">{price}<span style={{ color: "#00E267", fontWeight: "bold" }}>&#8382;</span></p>
                </div>
                <div className="normal-price">
                    <p className="Eina-semibold paragraph-big">{price}<span style={{ color: "#00E267", fontWeight: "bold" }}>&#8382;</span></p>
                </div>
            </div>

        </Fragment>
    )
}
