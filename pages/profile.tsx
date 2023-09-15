import BigText from 'components/BigText'
import Brief from 'components/Brief/Brief'
import Certifications from 'components/Certifications/Certifications'
import Container from 'components/Container'
import Footer from 'components/Footer/Footer'
import Profile from 'components/Profile/Profile'
import Projects from 'components/Projects'
import Skills from 'components/Skills/Skills'
import Timeline from 'components/Timeline/Timeline'

export default function MyProfile() {
  return (
    <>
      {/* <Container>
        <div className='flex flex-col items-center justify-center inset-0 mt-10 '>
          <BigText slides={['Chandra', 'Pasumarthi']} />
        </div>
      </Container> */}
      <Profile />
      <Skills />
      <Timeline />
      <Certifications />
      {/* <Projects /> */}
      <Footer />
    </>
  )
}
