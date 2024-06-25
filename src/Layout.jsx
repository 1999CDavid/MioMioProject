import style from '../src/styles/layout.module.css'


function Layout() {
  return (
    <main className={style.contenedor}>
      {/*
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
      */}
      <header>
        <h1>MioMio</h1>
        <button>Carrito</button>
      </header>
      <body>
        <button>Volver</button>
        <section>
          <img src="../Fotos/Anteojos/anteojos(1).jpg" width={230}/>
          <h3>Lorem ipsum </h3>
          <p>
            dolor sit amet consectetur, 
            adipisicing elit. Ad aliquam quibusdam 
            eum consequatur rem accusamus. Accusamus nemo
            architecto deserunt vero voluptate quasi corporis 
            inventore enim, harum in aperiam dolorem deleniti.
          </p>
          <span >
            <h4>Color negro mate </h4>
            <h4>talla L-M-S-X-XL-XS </h4>
            <h4>Precio $12554</h4>
          </span>
        </section>
        <button>LO QUIERO</button>
      </body>
    </main>
  );
}

export default Layout;
