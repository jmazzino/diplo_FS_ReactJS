import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contacto",
    description: "Contacto",
};

export default function Contacto() {
    return (
        <div>
            <main className="holder contacto">
                <div>
                    <h2>Complete el siguiente formulario</h2>

                    <ContactForm />

                </div>

                <div className="datos">
                    <h2>Otras vias de comunicacion</h2>
                    <p>Tambien puede contactarse con nosotros usando los siguientes metodos</p>
                    <ul>
                        <li>Telefono: 43242388</li>
                        <li>Email: contacto@transportex.com.ar</li>
                        <li>Facebook</li>
                        <li>Twister</li>
                        <li>Skype</li>
                    </ul>

                </div>





            </main>
        </div>



    );
}
