import {
    Hero,
    Navbars,
    Abouts,
    Tech,
    Experience,
    Works,
    Feedbacks,
    Contacts,
    StarsCanvas
} from
    './contexts'

const NewApp = () => {
    return (
        <> <div className="relative z-0 bg-primary w-screen h-screen">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                {/* <Navbars /> */}
                {/* <Hero /> */}
            </div >
            {/* <Abouts /> */}
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
                <Contacts />
                <StarsCanvas />
            </div>
        </div></>
    )
}

export default NewApp