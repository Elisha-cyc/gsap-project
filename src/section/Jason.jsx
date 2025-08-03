import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Jason = () => {
    useGSAP(() => {
        gsap.set('.jason', {marginTop: '-80vh',})

        gsap.timeline({
            scrollTrigger: {
                trigger: '.jason',
                start: 'top 90%',
                end: '10% center',
                scrub: 2,
            }
        }).to('.first-vd', {opacity: 0, duration: 1, ease: 'power1.inOut'})

        gsap.to('.jason .img-box', {
            scrollTrigger: {
                trigger: '.jason',
                start: 'top center',
                end: '80% center',
                scrub: 2,
            }, y: -300, duration: 1, ease: 'power1.inOut'
        }, '<')
    })

  return (
    <section className='jason'>
        <div className="max-w-lg jason-content">
            <h1>The Lamborghini Urus</h1>
            <h2>Lamborghini Urus is the first Super Sport Utility Vehicle in the world.</h2>
            <p>It is a high-performance SUV, often described as the first Super Sport Utility Vehicle. It combines Lamborghini's signature super sports car design with the practicality of an SUV. The Urus is powered by a 4.0-liter twin-turbocharged V8 engine, producing 650 horsepower in the standard version and up to 790 horsepower in the new SE hybrid version.</p>
            <div className="jason-2">
                <img src="/images/jason-2.jpg" />
            </div>
        </div>

        <div className="space-y-5 mt-96 img-box">
            <div className="jason-1">
                <img src="/images/jason-1.jpg" />
            </div>

            <div className="jason-3">
                <img src="/images/jason-3.jpg" />
            </div>
        </div>
    </section>
  )
}

export default Jason
