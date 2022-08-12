import { useState } from "react";
import NavBar from "./components/Navbar";
import "./index.css"


function App() {

const [spanishActive, setSpanishActive] = useState(true)


const setSpanishActiveTrue = ()=>{
    setSpanishActive(true)
}

const setSpanishActiveFalse = ()=>{
    setSpanishActive(false)
}


  return (
<div>
    <NavBar setLenguajeToSpanish={setSpanishActiveTrue}  setLenguajeToEnglish={setSpanishActiveFalse} spanishAct={spanishActive} />
    <div className="flex w-screen h-fit md:h-screen py-5  justify-center" id="About">
        <div className="w-[70%] mt-[20%] md:mt-[10%]">
            <div className=" w-[310px] h-[310px] md:float-left md:mx-4  group ml-[-40px] lg:ml-0">
                <img
                    src={require("./photo1.jpeg")}
                    width="300"
                    height="300"
                    className="profile-pic h-72 lg:h-[310px] rounded-full lg:mt-[-4px] lg:ml-[-5px] group-hover:mt-0 group-hover:ml-0 transition-all ease-in duration-200"></img>
                <div
                    className=" w-[310px] h-[310px] rounded-full border-4 border-[#ff9000] mt-[-300px]  lg:mt-[-290px] lg:ml-[7px] group-hover:mt-[-305px] group-hover:ml-[-1px] transition-all ease-in duration-200"></div>
            </div>

            <div className="md:my-20">
                <h1 className=" text-6xl text-[#ff9000]">{spanishActive?"Sobre mi":"About me"}</h1>
                <p>{spanishActive? 
                "¡Hola Mundo! Mi nombre es Carinao Augusto -aunque la gente se refiere a mi como Karin-. Soy un estudiante autodidacta de desarrollo web. Actualmente mis conocimientos se ven limitados al manejo del área de Front-End, pero tengo planes futuros de continuar mis estudios y extender mis conocimientos para poder manejar y comprender el mundo del desarrollo web Back-End."
                :
                "Hello world! My name is Carinao Augusto -tough the people also refers me as Karin-.  I'm a self-taught web development student. Currently, my knowledge is limited to the front-end handling area, but I have future plans to continue my studies and extend my knowledge to handle and understand the Back-end web development world"}
</p>
            </div>
        </div>
    </div>
    <div className="flex w-screen h-fit md:h-screen  justify-center bg-slate-600 pb-5 pt-20 md:pt-0 md:py-5" id="Skillset">
        <div className="w-[70%] mt-[7%]">
            <h1 className=" text-6xl text-[#ff9000]">Skill set</h1>
            <p>{spanishActive?
            <p>Mi primer acercamiento a la programación ocurrió en 2021. Aunque desde
                entonces gran parte del proceso ha consistido en una formación autodidacta, mi
                principal fuente de consulta ha sido el curso 
                <em><a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?src=sac&kw=the+complete+web+development" className=" text-[#ff9000]">
                The Complete 2022 Web Development
                Bootcamp</a></em> 
                dictado por la Doctora Angela Yu en Udemy.com.<br/>
                En ese curso aprendí conceptos, herramientas y fundamentos de desarrollo web Front-End que
                después profundicé por mi cuenta. Entre otras, las herramientas mas importantes que hoy en dia manejo son:</p>:
                <p>My first approach to programming occurred in 2022. Tough since then, a big part of the process has consisted in a self-taught formation, 
                    my primary source of has been the course 
                    <em><a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?src=sac&kw=the+complete+web+development" className=" text-[#ff9000]">
                    The Complete 2022 Web Development Bootcamp</a></em>  dictated by the Dr. Angela Yu in Udemy.com.<br/>
                    In that course I've learned concept, tools and fundaments of Front-End web 
                    development that then I delved on my own. Among others, the most important tools I handle today are:</p>
                }</p>
            
            <div className="inline-block ml-10 my-8 leading-9">
                <p><i className="fa-solid fa-caret-right"></i> Html</p>
                <label>
                    <button className="hover:text-[#ff9000] text-glow text-shadow focus:text-[#ff9000]">
                        <p><i className="fa-solid fa-caret-right"></i> Css</p>
                    </button><br/>
                    <p className="subtext"><i className="fa-solid fa-caret-right"></i> tailwind</p>
                </label>
                <label>
                    <button className="hover:text-[#ff9000] text-glow text-shadow focus:text-[#ff9000] ">
                        <p><i className="fa-solid fa-caret-right"></i> JavaScript</p>
                    </button>
                    <p className="subtext"><i className="fa-solid fa-caret-right"></i> React.js</p>
                </label>
                <p><i class="fa-solid fa-caret-right"></i> Git & GitHub</p>
            </div>
            
            <p>{spanishActive? "Actualmente estoy adentrándome en las tecnologías de Node.js y Express.js para introducirme en el área del desarrollo Back-End.":"Currently, I'm approaching to the  Node.js and Expres.js technologies to introduce myself in the Back-end Web developing world"}</p>
        </div>
    </div>
    <div
    className="flex w-screen h-fit min-h-screen  flex-col items-center bg-slate-300"
    id="Portfolio">
    <div className="w-[75%] mt-[7%] text-center">
        <h1 className=" text-6xl text-[#ff9000] ml-[-10px] md:ml-0">Portfolio</h1>
        <p>{spanishActive? "Estos son algunos proyectos a los que me he estado dedicando el ultimo tiempo para poner en practica mis conocimientos:":"These are some projects that I have been dedicating myself to practice my knowledge:"}
            </p>
    </div>
    <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-x-3.5 gap-y-3.5 w-fit h-fit px-3 py-2">

        <div
            className="flex flex-col justify-between  bg-[rgba(255,144,0,0.2)] w-fit lg:w-80 h-80 portfolio-proyect rounded-md p-6">
            <a href="https://vhalzim.github.io/dictionary/" target="_blank">
            <div className="flex justify-between mt-2">
                <p className="text-4xl">
                    <i class="fa-regular fa-folder"></i>
                </p>
                <div className="flex text-xl">
                    <p className="mx-2 hover:text-[#fff]">
                        <a href="https://github.com/vhalzim/dictionary" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </p>
                    <p className="mx-2 hover:text-[#fff]">
                        <i class="fa-solid fa-up-right-from-square"></i>
                    </p>
                </div>
            </div>
              <div>
                  <h1 className="text-xl ">
                      <strong>{spanishActive? "App de Diccionario":"Dictionary-App"}</strong>
                  </h1>
                  {spanishActive? 
                  <p>Una SPA que utiliza la API de https://dictionaryapi.dev/.<br/>
                      Por desgracia la API solamente funciona en ingles, por lo que la app no puede
                      buscar el significado de palabras en español.</p>
                      :<p>
                        An SPA that uses the https://dictionaryapi.dev/ API.<br/> 
                        Unfortunately, the API only works in English, thereby the app can't 
                        find the meaning of words in Spanish  
                    </p>}

              </div>
              <div>
                  <p className="text-xs text-slate-500">react.js</p>
              </div>
              </a>
          </div>

        <div
            className="flex flex-col justify-between  bg-[rgba(255,144,0,0.2)] w-fit lg:w-80 h-80 portfolio-proyect rounded-md p-6">
            <a href="https://vhalzim.github.io/clocks2/" target="_blank">
            <div className="flex justify-between mt-2">
                <p className="text-4xl">
                    <i class="fa-regular fa-folder"></i>
                </p>
                <div className="flex text-xl">
                    <p className="mx-2 hover:text-[#fff]">
                        <a href="https://github.com/vhalzim/clocks2" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </p>
                    <p className="mx-2 hover:text-[#fff]">
                       <a href="https://vhalzim.github.io/clocks2/" target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a> 
                    </p>
                </div>
            </div>
            <div>
                <h1 className="text-xl ">
                    <strong>{spanishActive? "Relojes":"CLocks"}</strong>
                </h1>
                <p>{spanishActive? "Una SPA en formato de carrusel que presenta un conjunto de relojes que permiten llevar registros de distintas mediciones.":"A carousel type SPA that shows a set of clocks that allows you to keep different time tracks"}
                </p>
            </div>
            <div>
                <p className="text-xs text-slate-500">react.js</p>
            </div>
            </a>
        </div>

        <div
            className="flex flex-col justify-between  bg-[rgba(255,144,0,0.2)] w-fit lg:w-80 h-80 portfolio-proyect rounded-md p-6">
            <a href="https://vhalzim.github.io/Register-Form-React/" target="_blank">
            <div className="flex justify-between mt-2">
                <p className="text-4xl">
                    <i class="fa-regular fa-folder"></i>
                </p>
                <div className="flex text-xl">
                    <p className="mx-2 hover:text-[#fff]">
                        <a href="https://github.com/vhalzim/Register-Form-React" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </p>
                    <p className="mx-2 hover:text-[#fff]">
                        <i class="fa-solid fa-up-right-from-square"></i>
                    </p>
                </div>
            </div>
            <div>
                <h1 className="text-xl ">
                    <strong>{spanishActive?"Formulario de registro":"Register-Form"}</strong>
                </h1>
                {spanishActive? 
                    <p>Es un formulario de registro que utiliza el Local Storage para almacenar los
                    usuarios.<br/>EL
                    proyecto tuvo la finalidad de practicar el manejo de errores en los inputs de un
                    formulario</p>
                    :
                    <p>
                    This Register-form uses the local storage to keep track of the submitted users.<br/>
                    The finality of this project was to practice the Error handling in the inputs of a form.
                    </p>}

            </div>
            <div>
                <p className="text-xs text-slate-500">react.js</p>
            </div>
            </a>
        </div>
    </div>
    </div>
    <footer className="bg-slate-700 w-screen h-32 text-white pt-3 flex flex-col items-center">
      <p><span className="text-[#ff9000]"><i class="fa-solid fa-at"></i></span> kotsugua@gmail</p>
      <p><span className="text-[#ff9000]"><i class="fa-brands fa-github"></i></span> github.com/vhalzim</p>
      <p><span className="text-[#ff9000]"><i class="fa-solid fa-phone"></i></span> +54 9 358-433-5701</p>
      <p className="text-sm text-slate-500 mt-4">Desarrollado por Carinao Augusto</p>
    </footer>

</div>


  );
}

export default App;
