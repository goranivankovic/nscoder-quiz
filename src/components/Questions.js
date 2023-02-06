

import { useState } from 'react'
import qustionStyles from '../styles/Questions.module.css'

import img from '../img/lightB.jpeg'


function Questions() {

//Questions
  const[questions,setQuestions]=useState([
          'Name the currency used in Japan?',
          'In which country is the Leaning Tower of Pisa located?',
          'Name the fictional city Batman calls home?',
          'Who wrote Hamlet?',
          'In what year did World War II end?',
          'What is a supernova?',
          'How are bats able to fly in the dark?',
          "What'is the technical term for a lie detector?",
          'Which of these is NOT the name of a Michael Jackson song?',
          'Babe Ruth is a legend of which sport?',
          "What's the smallest country in the world?",
          'Where is Mount Everest located?',
          'Who is officially credited with the invention of the light bulb?',"What's the capital of Kenya?",
          "Which of the following countries is closest to the South Pole?",
          'What was the official name of Thailand before 1939?',
          'Which philosopher said, "I think, therefore I am"?',
          "What's the Spanish word for fox?",
          "How many bones are there in an elephant's trunk?",
          'In Greek mythology, who is the Goddess of Agriculture?'

  ])

    //  Qustions A, B, C, D

   const[av,setAv]=useState(['Yen','England','Star City','Walt Whitman','1942','The explosion of a star','X-ray vision','Polygraph','Smooth Criminal','Basketball','Monaco','Tibet','Alexandr Graham Bell','Asmara','Libya','Ankara','Friedrich Nietzsche','Perro','0','Rha'])
   const[bv,setBv]=useState(['Dinar','Spain','Metropolis','Leonardo da Vinci','1943','An intense lightning storm','Sixth sense','Seismograph','Remember the Time','Soccer','Vatican City','Nepal','Thomas Edison','Dakar','Finland','Burma','John Locke','Zorro','12','Demeter'])
   const[cv,setCv]=useState(['Ngultrum','France','Gotham','Franz Kafka','1945','An underwater volcano','Echolocation','Teregraph','I Will Always Love You','Football','Liechtenstein','between Tibet and Nepal','Henry Ford','Nairobi','South Africa','Ceylon','Immanuel Kant','Lobo','42','Persephone'])
   const[dv,setDv]=useState(['Dollar','Italy','Springfield','William Shakespeare','1947','The eye of a tornado','Inter-species communication','Omnigraph','Earth Song','Baseball','San Marino','Switzerland','Samuel Morse','Johannesburg','Mexico','Siam','Rene Descartes','Ballena','144','Hygiela'])


   //Increment number array
   const[num,setNum]=useState(0)


    // Button BOOLEAN

    const[btnBool,setBtnBool]=useState(false)



    //Procenate Boolean

    const[procentage,setProcentage]=useState(0)


  
     //A function button on Click

    function aFunc(a) {
      const btnA=document.getElementById('btna')

      if(a.button=='0' &&  btnA.textContent == av[0]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(a.button=='0' &&  btnA.textContent == av[5]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(a.button=='0' &&  btnA.textContent == av[7]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(a.button=='0' &&  btnA.textContent == av[18]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else  if (num==19) {

      setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);

      
    }else{
       setNum(num+1)

    }
 
    }








     //B function button on Click

    function bFunc(b) {
      const btnB=document.getElementById('btnB')

      if(b.button=='0' &&  btnB.textContent == bv[10]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(b.button=='0' &&  btnB.textContent == bv[12]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(b.button=='0' &&  btnB.textContent == bv[17]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(b.button=='0' &&  btnB.textContent == bv[19]  ){
       

        setProcentage(procentage+5)
         setNum(0)

         setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
      }, 7500);

      }else{
       setNum(num+1)

    }
 

    }










         //C function button on Click

    function cFunc(c) {
      const btnC=document.getElementById('btnC')

      if(c.button=='0' &&  btnC.textContent == cv[2]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(c.button=='0' &&  btnC.textContent == cv[4]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(c.button=='0' &&  btnC.textContent == cv[6]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(c.button=='0' &&  btnC.textContent == cv[8]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(c.button=='0' &&  btnC.textContent == cv[11]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(c.button=='0' &&  btnC.textContent == cv[13]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(c.button=='0' &&  btnC.textContent == cv[14]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else  if (num==19) {

      setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
      }, 7500);

      
    }else{
       setNum(num+1)

    }
 

    }














       //D function button on Click

    function dFunc(c) {
      const btnD=document.getElementById('btnD')

      if(c.button=='0' &&  btnD.textContent == dv[1]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(c.button=='0' &&  btnD.textContent == dv[3]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(c.button=='0' &&  btnD.textContent == dv[9]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(c.button=='0' &&  btnD.textContent == dv[15]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else if(c.button=='0' &&  btnD.textContent == dv[16]  ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else  if (num==19) {

      setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
      }, 7500);

      
    }else{
       setNum(num+1)

    }
 

    }










   function incrementNum(){
   
   
    if (num==19) {

      setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);

      
    }else{
       setNum(num+1)

    }
 
   }

  return (
    <div className={qustionStyles.main}>




             <div className={qustionStyles.firstDiv}> Quiz Game</div>


                  {/* Image Div */}
             <img src={img}  alt="image" className={qustionStyles.secondDiv}></img>



                 {/* Questions div */}
                  
               <div className={qustionStyles.threedDiv}>
                 {questions[num]}
               </div>







                 <div className={qustionStyles.fourDiv}>

                        <button disabled={btnBool} className={qustionStyles.fourDivItem1}  onClick={aFunc}>a. <span id="btna">{av[num]}</span></button>

                        <button disabled={btnBool} className={qustionStyles.fourDivItem2} onClick={bFunc}>b. <span id="btnB">{bv[num]}</span></button>

                        <button disabled={btnBool} className={qustionStyles.fourDivItem3} onClick={cFunc}>c. <span id="btnC">{cv[num]}</span></button>

                        <button disabled={btnBool} className={qustionStyles.fourDivItem4} onClick={dFunc}>d. <span id="btnD">{dv[num]}</span></button>

                  

                 </div>

                <div className={qustionStyles.fiveDiv}>
                 <button disabled={btnBool} onClick={incrementNum}>Next</button>    {btnBool ?   <div>Winning Percentage : {procentage}%</div> :""}

                </div>


                <div className={qustionStyles.empdtyDiv}></div>
 

        
    </div>
  )
}

export default Questions