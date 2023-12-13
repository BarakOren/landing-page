import "./contact.css"

const Contact = () => { 

    const whatsapp = 'https://wa.me/972548836668'

    return <section className="contact">
    <p>לפרטים והצעות מחיר</p>
    <p style={{marginBottom: '22px'}}>054-883-6668 ברק</p>
    <div className="buttons">
    <button onClick={() => window.open('tel:0548836668')}>התקשר</button>
    <button onClick={() => window.open(whatsapp, "_blank")}>ווטסאפ</button>
    </div>

    </section>
}

export default Contact;