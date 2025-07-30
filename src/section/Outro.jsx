import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Outro = () => {
  useGSAP(() => {
    gsap.set('.final-message', { marginTop: '-100vh', opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.final-message',
        start: 'top 30%',
        end: 'top 10%',
        scrub: true,
      }
    })

    tl.to('.final-content', { opacity: 0, duration: 1, ease: 'power1.inOut' })
    tl.to('.final-message', { opacity: 1, duration: 1, ease: 'power1.inOut' })
  })

  return (
    <section className="final-message">
      <div className="h-full col-center gap-10">
        <img src="/images/logo.svg" alt="logo" className="md:w-72 w-52 text-red-800" />

        <div>
          <h3 className="gradient-title">
          Lamborghini <br />  urus <br /> 
          </h3>
        </div>

      </div>
    </section>
  )
}

export default Outro;