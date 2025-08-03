import gsap from "gsap"
import { useGSAP } from "@gsap/react"


const Lucia = () => {
useGSAP(() => {
    gsap.set('.lucia-life', { marginTop: '-80vh'});

     gsap.timeline({
            scrollTrigger: {
                trigger: '.lucia-life',
                start: 'top 80%',
                end: '10% center',
                scrub: 2,
            }
        }).to('.second-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' })

        gsap.to('.lucia-life .img-box', {
            scrollTrigger: {
                trigger: '.lucia-life',
                start: 'top center',
                end: '80% center',
                scrub: 2,
            }, y: -200, duration: 1, ease: 'power1.inOut'
        }, '<')

})


    return (
        <section className="lucia-life">
            <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-10 mt-96">
                <div className="lucia-1">
                    <img src="/images/lucia-1.jpg" alt="" />
                </div>
                <div className="lucia-3">
                    <img src="/images/lucia3.jpg" alt="" />
                </div>
            </div>

            <div className="lg:w1/2 lucia-life-content">
                <div className="max-w-xl lg:ps32 ps-10">
                    <h1>The Urus S</h1>
                    <h2>The Urus embodies a visionary concept through the realization of a Super Sport Utility Vehicle born from pure Lamborghini DNA.</h2>
                    <p> In the Lamborghini Urus S, performance, design and exclusivity are evolved, revealing even greater strength and a heightened perception of luxury. Urus S is the most accomplished super SUV, one that combines maximum capability and comfort on any terrain and road condition. Get ready to experience an elevated luxury lifestyle in the newest Lamborghini S SUV.</p>
                </div>

                <div className="lucia-2">
                    <img src="/images/lucia-2.jpg" />
                </div>

                <p className="max-w-xl lg:ps-32 ps-10">
                  The heart of the Urus S is its 4.0-liter V8, twin-turbocharged engine. With maximum power output of 666 CV, a more responsive accelerator pedal and increased boost build-up for launch phase, it offers an even more thrilling driving experience.
                </p>
            </div>
        </section>
    )
}

export default Lucia
