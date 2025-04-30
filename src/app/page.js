import Image from 'next/image'
import myImage from '../assets/space.png'

export default function HomePage() {
  return (
    <section className="main-content">
  <div className="home">
    <div className="home-left">
      <Image src={myImage} alt="Portfolio Image" width={400} height={400} />
    </div>
    <div className="home-right">
      <h1>Hey there!</h1>
      <p>Feel free to explore!</p>
    </div>
  </div>
</section>

  )
}
