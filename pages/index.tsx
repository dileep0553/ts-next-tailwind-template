import BigText from 'components/BigText'
import Brief from 'components/Brief/Brief'
import Container from 'components/Container'
import Footer from 'components/Footer/Footer'
import Projects from 'components/Projects'

export default function Home() {
  return (
    <>
      <Container>
        <div className='flex flex-col items-center justify-center inset-0 mt-10 '>
          <BigText slides={['Chandra', 'Pasumarthi']} />
        </div>
      </Container>
      <Brief></Brief>
      <Projects />
      <Footer />
    </>
  )
}
