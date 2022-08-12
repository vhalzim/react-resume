import { useState } from "react";



function NavBar(p) {
  const [buttonState, setButtonState]= useState(true)
  const [alertActive, setAlertActive]= useState(false)
  const [dropdownActive, setDropdownActive] = useState(false)

  function handleAtButton() {
    navigator.clipboard.writeText("kotsugua@gmail.com");
    setAlertActive(true)
    setTimeout(()=>{setAlertActive(false)}, 1000);
  }




  return (
    <div>
      <nav className="flex justify-between bg-[rgba(0,0,0,0.2)] w-screen h-14 fixed z-10">
        <div>
          <div className= {buttonState? "bg-[rgba(250,250,250,0.2)] circular-contact-menu": " bg-[rgba(0,0,0,0.8)]  md:bg-[rgba(0,0,0,0.2)] open-circular-contact-menu"}>
            <button className="bg-[#ff9000] px-4 py-3 rounded-full mt-[3%] ml-[3%]" onClick={()=>{setButtonState(!buttonState)}}><i class="fa-solid fa-user"></i></button>
            <label>
              <p className="absolute text-2xl text-[#ff9000] md:text-[rgba(0,0,0,0.5)] ml-[60%] mt-[-15%] text-glow " onClick={handleAtButton}><i className="fa-solid fa-at"></i></p>
              <span className="absolute bg-[rgba(255,255,255,0.5)] px-1 text-xs rounded-md ml-[15%] mt-[2%] visible" ><em>kotsugua@gmail.com</em></span>
              <span className={alertActive? "copied-alert-true":"copied-alert-false"}><em>{p.spanishAct? "copiado al portapapeles":"copied to clipboard"}</em></span>
            </label>


            <label>
              <p className="absolute text-2xl text-[#ff9000] md:text-[rgba(0,0,0,0.5)] ml-[50%] mt-[5%] text-glow "><a href="https://github.com/vhalzim" target="_blank"><i className="fa-brands fa-github"></i></a></p>
             <span className="absolute bg-[rgba(255,255,255,0.5)] px-1 text-xs rounded-md ml-[-10%] mt-[23%] visible"><em>https://github.com/vhalzim</em></span>
            </label>

            <p className="absolute text-2xl text-[#ff9000] md:text-[rgba(0,0,0,0.5)] ml-[30%] mt-[22%] text-glow "><a href="https://wa.me/5493584335701" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></p>

            <p className="absolute text-2xl text-[#ff9000] md:text-[rgba(0,0,0,0.5)] ml-[5%] mt-[35%] text-glow "><a href="https://t.me/VhalZim" target="_blank"><i class="fa-brands fa-telegram"></i></a></p>
          </div>
          <p className={buttonState? "contact-p":"contact-p-hidden"}>&lt;-contacto</p>
        </div>
        <div className="index flex justify-around md:w-[50%] lg:w-[30%] mr-5 mt-4">
          <p className="hidden md:inline md:hover:text-[#ff9000] focus:italic focus:text-[#ff9000]"><a href="#About">Sobre mi</a></p>
          <p className="hidden md:inline md:hover:text-[#ff9000] focus:italic focus:text-[#ff9000]"><a href="#Skillset">Skill set</a></p>
          <p className="hidden md:inline md:hover:text-[#ff9000] focus:italic focus:text-[#ff9000]"><a href="#Portfolio">Portfolio</a></p>
          <button className=" h-fit w-fit mt-[-5px] p-1 border border-[#ff9000] rounded-md text-[#ff9000] hover:bg-[rgba(255,144,0,0.2)] " onClick={()=>{setDropdownActive(!dropdownActive)}}> <span> &gt;</span>Idioma</button>
        </div>
      </nav>
      <div className={dropdownActive? "fixed right-[2%] top-14 dropdown-on": "fixed right-[2%] top-14 dropdown-off"}>
          <button className="border-x bordder-b border-[#ff9000] px-3 hover:bg-[rgba(255,144,0,0.2)]" onClick ={()=>{p.setLenguajeToSpanish()}}>Español</button><br/>
          <button className="border border-[#ff9000] rounded-b-md px-3 hover:bg-[rgba(255,144,0,0.2)]" onClick ={()=>{p.setLenguajeToEnglish()}}>English</button>
        </div>
    </div>

  );
}

export default NavBar;