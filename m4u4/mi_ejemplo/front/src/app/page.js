import "@/styles/home.css";

export default function Home() {
  return (
    <div >
      <main className="holder">
        <div>
          <img src="images//home/img01.jpg" alt="avion"></img>
        </div>

        <div className="columnas">
          <div className="bienvenidos">
            <h2>Bienvenidos</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className="testimonios">
            <h2>Testimonios</h2>
            <div className="testimonio">
              <span className="cita">Simplemente Excelente</span>
              <span className="autor">Juan Perez - zapatos.com</span>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
