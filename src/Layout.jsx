import style from '../src/styles/layout.module.css'


function Layout() {
  return (
    <main className={style.contenedor}>
      <header>
        <h1>MioMio</h1>
        <button>Carrito</button>
      </header>

      <body>
      <form action="/search" > 
        <input type="search" placeholder="Tu búsqueda..."/> 
      </form>
      <section>
        <img src="../Fotos/Anteojos/anteojos(1).jpg" width={230}/>
        <img src="../Fotos/Anteojos/anteojos(2).jpg" width={230}/>
        <img src="../Fotos/Anteojos/anteojos(3).jpg" width={230}/>
      </section>
      
      </body>
      
    </main>
  );
}

export default Layout;
