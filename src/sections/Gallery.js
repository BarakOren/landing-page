import img1 from "../assets/FIXED.jpg"
import img2 from "../assets/ash.JPG"
import img3 from "../assets/2.jpg"
import img4 from "../assets/3.jpg"
import img5 from "../assets/4.jpg"
import img6 from "../assets/6.jpg"
import "./gallery.css"


const Gallery = () => {
    return <section className="gallery">
        <img src={img1} alt="image1" />
        <img src={img2} alt="image2" />
        <img src={img3} alt="image3" />
        <img src={img4} alt="image4" />
        <img src={img5} alt="image5" />
        <img src={img6} alt="image6" />
        
    </section>
}

export default Gallery 