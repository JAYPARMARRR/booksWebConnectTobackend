import "./about.css"
import aboutImage from './about.png';


const About = () => {
  return (
<>
<div className="about">
      <img src={aboutImage} alt="About" className="about-image" />
      <div className="about-tag">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores reiciendis sit harum sint laborum veniam accusantium ipsam placeat labore nam odit mollitia rem animi, quasi numquam iure perferendis, voluptatem dolorem incidunt! Voluptate doloremque quidem fugiat eveniet delectus. Recusandae quam dolorum officia? Similique laborum, impedit officiis omnis animi maiores nemo.o.
        </p>
        <a href="#" className="about-btn">Learn More</a>
      </div>
    </div>
</>
  )
}

export default About
