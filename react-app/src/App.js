import Contador from "./components/Contador";
import JSX from "./components/Jsx";
import Lista from "./components/Lista";
import Formulario from "./components/Formulario";
import FormHook from "./components/FormHook";
import FormCrud from "./components/FormCrud";
import Saludo from "./components/Saludo";
import Comentario from "./components/Comentario";

function App() {
  const sujeto = {
    nombre: "Juanito",
    url: "https://via.placeholder.com/64",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet excepturi similique laboriosam deleniti. Cum omnis nobis dolores dolorem tempora, officiis delectus nihil alias, laborum quos, voluptatibus incidunt voluptate excepturi sapiente!",
  };

  return (
    <div className="container mt-5">
      {/* <Contador /> */
      /* <JSX /> */
      /* <Lista /> */
      /* <Formulario /> */
      /* <FormHook /> */
      /* <FormCrud /> */
      /* <Saludo persona="Jeqs" edad={40} />
      <Saludo persona="Ignacio" edad={25} /> */}
      {<Comentario sujeto={sujeto} />}
    </div>
  );
}

export default App;
