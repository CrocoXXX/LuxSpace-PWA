import React from 'react'
import Adobe from '../images/content/logo-adobe.svg'
import Ikea from '../images/content/logo-ikea.svg'
import Hermanmiller from '../images/content/logo-hermanmiller.svg'
import Miele from '../images/content/logo-miele.svg'

const Clients = () => {
    return (
        <section className="container mx-auto">
            <div className="flex justify-center flex-wrap">
                <div
                    className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                >
                    <img src={Adobe} alt="" className="mx-auto" />
                </div>
                <div
                    className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                >
                    <img src={Ikea} alt="" className="mx-auto" />
                </div>
                <div
                    className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                >
                    <img
                        src={Hermanmiller}
                        alt=""
                        className="mx-auto"
                    />
                </div>
                <div
                    className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                >
                    <img src={Miele} alt="" className="mx-auto" />
                </div>
            </div>
        </section>
    )
}

export default Clients
