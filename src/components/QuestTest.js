
import { useState } from 'react'
import qustionStyles from '../styles/Questions.module.css'

import img from '../img/lightB.jpeg'



function QuestTest() {

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




   //Increment number array
   const[num,setNum]=useState(0)


    // Button BOOLEAN

    const[btnBool,setBtnBool]=useState(false)



    //Procenate Boolean

    const[procentage,setProcentage]=useState(0)




    const q1=[
[
["Dinar",false],
["Dolar",false],
["Yen",true],
["Rubalj",false]
],
[
["Italy",true],
["Sweden",false],
["Germany",false],
["Denemark",false]
],

[
["Star City",false],
["Gotham",true],
["Springfield",false],
["Metropolis",false]
],

[
["William Shakespeare",true],
["Leonardo da Vinci",false],
["Franz Kafka",false],
["Walt Whitman",false]
],



[
["1942",false],
["1943",false],
["1947",false],
["1945",true]
],

[
["An intense lightning storm",false],
["The explosion of a star",true],
["An underwater volcano",false],
["The eye of a tornado",false]
],


[
["X-ray vision",false],
["Sixth sense",false],
["Echolocation",true],
["Inter-species communication",false]
],


[
["Poligraph",true],
["Seismograph",false],
["Telegraph",false],
["Omnigraph",false]
],



[
["Smooth Criminal",false],
["Remember the Time",false],
["Earth Song",false],
["I Will Always Love You",true]
],


[
["Baseball",true],
["Football",false],
["Soccer",false],
["Basketball",false]
],


[
["Monaco",false],
["Vatican City",true],
["Liechtenstein",false],
["San Marino",false]
],

[
["Tibet",false],
["Nepal",false],
["between Tibet and Nepal",true],
["Switzerland",false]
],


[
["Alexandr Graham Bell",false],
["Thomas Edison",true],
["Henry Ford",false],
["Samuel Morse",false]
],


[
["Asmara",false],
["Dakar",false],
["Nairobi",true],
["Johannesburg",false]
],


[
["Libya",false],
["Finland",false],
["Mexico",false],
["South Africa",true]
],


[
["Ankara",false],
["Siam",true],
["Burma",false],
["Ceylon Africa",false]
],


[
["Friedrich Nietzsche",false],
["John Locke",false],
["Immanuel Kant",false],
["Rene Descartes",true]
],


[
["Perro",false],
["Zorro",true],
["Lobo",false],
["Ballena",false]
],


[
["0",true],
["12",false],
["42",false],
["144",false]
],


[
["Rha",false],
["Persephone",false],
["Demeter",true],
["Hygiela",false]
]














]


  
     //A function button on Click

    function aFunc(a) {
      const btnA=document.getElementById('btnA')


    //  Question 1

      if(a.button=='0' && btnA.textContent == q1[0][0][0] && q1[0][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[0][1][0] && q1[0][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else  if(a.button=='0' && btnA.textContent == q1[0][2][0] && q1[0][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
  else    if(a.button=='0' && btnA.textContent == q1[0][3][0] && q1[0][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







         //  Question 2

   else   if(a.button=='0' && btnA.textContent == q1[1][0][0] && q1[1][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[1][1][0] && q1[1][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[1][2][0] && q1[1][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[1][3][0] && q1[1][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }





         //  Question 3

   else   if(a.button=='0' && btnA.textContent == q1[2][0][0] && q1[2][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[2][1][0] && q1[2][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[2][2][0] && q1[2][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[2][3][0] && q1[2][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }








      
         //  Question 4

   else   if(a.button=='0' && btnA.textContent == q1[3][0][0] && q1[3][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[3][1][0] && q1[3][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[3][2][0] && q1[3][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[3][3][0] && q1[3][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









         
         //  Question 5

   else   if(a.button=='0' && btnA.textContent == q1[4][0][0] && q1[4][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[4][1][0] && q1[4][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[4][2][0] && q1[4][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[4][3][0] && q1[4][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









         
         //  Question 6

   else   if(a.button=='0' && btnA.textContent == q1[5][0][0] && q1[5][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[5][1][0] && q1[5][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[5][2][0] && q1[5][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[5][3][0] && q1[5][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









          
         //  Question 7

   else   if(a.button=='0' && btnA.textContent == q1[6][0][0] && q1[6][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[6][1][0] && q1[6][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[6][2][0] && q1[6][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[6][3][0] && q1[6][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }










      
          
         //  Question 8

   else   if(a.button=='0' && btnA.textContent == q1[7][0][0] && q1[7][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[7][1][0] && q1[7][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[7][2][0] && q1[7][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[7][3][0] && q1[7][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







            //  Question 9

   else   if(a.button=='0' && btnA.textContent == q1[8][0][0] && q1[8][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[8][1][0] && q1[8][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[8][2][0] && q1[8][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[8][3][0] && q1[8][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }




             //  Question 10

   else   if(a.button=='0' && btnA.textContent == q1[9][0][0] && q1[9][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[9][1][0] && q1[9][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[9][2][0] && q1[9][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[9][3][0] && q1[9][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }








                //  Question 11

   else   if(a.button=='0' && btnA.textContent == q1[10][0][0] && q1[10][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[10][1][0] && q1[10][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[10][2][0] && q1[10][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[10][3][0] && q1[10][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







                     //  Question 12

   else   if(a.button=='0' && btnA.textContent == q1[11][0][0] && q1[11][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[11][1][0] && q1[11][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[11][2][0] && q1[11][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[11][3][0] && q1[11][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }










      
                     //  Question 13

   else   if(a.button=='0' && btnA.textContent == q1[12][0][0] && q1[12][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[12][1][0] && q1[12][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[12][2][0] && q1[12][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[12][3][0] && q1[12][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









        
                     //  Question 14

   else   if(a.button=='0' && btnA.textContent == q1[13][0][0] && q1[13][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[13][1][0] && q1[13][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[13][2][0] && q1[13][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[13][3][0] && q1[13][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }




         
                     //  Question 15

   else   if(a.button=='0' && btnA.textContent == q1[14][0][0] && q1[14][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[14][1][0] && q1[14][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[14][2][0] && q1[14][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[14][3][0] && q1[14][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







           
                     //  Question 16

   else   if(a.button=='0' && btnA.textContent == q1[15][0][0] && q1[15][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[15][1][0] && q1[15][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[15][2][0] && q1[15][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[15][3][0] && q1[15][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }



                    //  Question 17

   else   if(a.button=='0' && btnA.textContent == q1[16][0][0] && q1[16][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[16][1][0] && q1[16][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[16][2][0] && q1[16][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[16][3][0] && q1[16][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









      
                    //  Question 18

   else   if(a.button=='0' && btnA.textContent == q1[17][0][0] && q1[17][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[17][1][0] && q1[17][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[17][2][0] && q1[17][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[17][3][0] && q1[17][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }



                       //  Question 19

   else   if(a.button=='0' && btnA.textContent == q1[18][0][0] && q1[18][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      } else  if(a.button=='0' && btnA.textContent == q1[18][1][0] && q1[18][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else   if(a.button=='0' && btnA.textContent == q1[18][2][0] && q1[18][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      } else if(a.button=='0' && btnA.textContent == q1[18][3][0] && q1[18][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

           

      }


        //  Question 20

       else   if(a.button=='0' && btnA.textContent == q1[19][0][0] && q1[19][0][1] == true && num==19 ){
       
      setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);

      } else  if(a.button=='0' && btnA.textContent == q1[19][1][0] && q1[19][1][1] == true  && num==19){
       

      setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);

      }else   if(a.button=='0' && btnA.textContent == q1[19][2][0] && q1[19][2][1] == true && num==19){
       

   setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);

      } else if(a.button=='0' && btnA.textContent == q1[19][3][0] && q1[19][3][1] == true && num==19 ){
       

 setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);

           

      }





      
   
  


      
      else  if (num==19) {

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

    function bFunc(a) {
      const btnA=document.getElementById('btnB')


    //  Question 1

      if(a.button=='0' && btnA.textContent == q1[0][0][0] && q1[0][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[0][1][0] && q1[0][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else  if(a.button=='0' && btnA.textContent == q1[0][2][0] && q1[0][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
  else    if(a.button=='0' && btnA.textContent == q1[0][3][0] && q1[0][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







         //  Question 2

   else   if(a.button=='0' && btnA.textContent == q1[1][0][0] && q1[1][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[1][1][0] && q1[1][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[1][2][0] && q1[1][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[1][3][0] && q1[1][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }





         //  Question 3

   else   if(a.button=='0' && btnA.textContent == q1[2][0][0] && q1[2][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[2][1][0] && q1[2][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[2][2][0] && q1[2][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[2][3][0] && q1[2][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }








      
         //  Question 4

   else   if(a.button=='0' && btnA.textContent == q1[3][0][0] && q1[3][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[3][1][0] && q1[3][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[3][2][0] && q1[3][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[3][3][0] && q1[3][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









         
         //  Question 5

   else   if(a.button=='0' && btnA.textContent == q1[4][0][0] && q1[4][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[4][1][0] && q1[4][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[4][2][0] && q1[4][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[4][3][0] && q1[4][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









         
         //  Question 6

   else   if(a.button=='0' && btnA.textContent == q1[5][0][0] && q1[5][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[5][1][0] && q1[5][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[5][2][0] && q1[5][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[5][3][0] && q1[5][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









          
         //  Question 7

   else   if(a.button=='0' && btnA.textContent == q1[6][0][0] && q1[6][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[6][1][0] && q1[6][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[6][2][0] && q1[6][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[6][3][0] && q1[6][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }










      
          
         //  Question 8

   else   if(a.button=='0' && btnA.textContent == q1[7][0][0] && q1[7][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[7][1][0] && q1[7][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[7][2][0] && q1[7][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[7][3][0] && q1[7][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







            //  Question 9

   else   if(a.button=='0' && btnA.textContent == q1[8][0][0] && q1[8][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[8][1][0] && q1[8][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[8][2][0] && q1[8][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[8][3][0] && q1[8][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }




             //  Question 10

   else   if(a.button=='0' && btnA.textContent == q1[9][0][0] && q1[9][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[9][1][0] && q1[9][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[9][2][0] && q1[9][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[9][3][0] && q1[9][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }








                //  Question 11

   else   if(a.button=='0' && btnA.textContent == q1[10][0][0] && q1[10][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[10][1][0] && q1[10][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[10][2][0] && q1[10][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[10][3][0] && q1[10][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







                     //  Question 12

   else   if(a.button=='0' && btnA.textContent == q1[11][0][0] && q1[11][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[11][1][0] && q1[11][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[11][2][0] && q1[11][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[11][3][0] && q1[11][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }










      
                     //  Question 13

   else   if(a.button=='0' && btnA.textContent == q1[12][0][0] && q1[12][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[12][1][0] && q1[12][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[12][2][0] && q1[12][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[12][3][0] && q1[12][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









        
                     //  Question 14

   else   if(a.button=='0' && btnA.textContent == q1[13][0][0] && q1[13][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[13][1][0] && q1[13][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[13][2][0] && q1[13][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[13][3][0] && q1[13][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }




         
                     //  Question 15

   else   if(a.button=='0' && btnA.textContent == q1[14][0][0] && q1[14][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[14][1][0] && q1[14][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[14][2][0] && q1[14][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[14][3][0] && q1[14][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







           
                     //  Question 16

   else   if(a.button=='0' && btnA.textContent == q1[15][0][0] && q1[15][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[15][1][0] && q1[15][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[15][2][0] && q1[15][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[15][3][0] && q1[15][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }



                    //  Question 17

   else   if(a.button=='0' && btnA.textContent == q1[16][0][0] && q1[16][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[16][1][0] && q1[16][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[16][2][0] && q1[16][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[16][3][0] && q1[16][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









      
                    //  Question 18

   else   if(a.button=='0' && btnA.textContent == q1[17][0][0] && q1[17][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[17][1][0] && q1[17][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[17][2][0] && q1[17][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[17][3][0] && q1[17][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }



                       //  Question 19

   else   if(a.button=='0' && btnA.textContent == q1[18][0][0] && q1[18][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      } else  if(a.button=='0' && btnA.textContent == q1[18][1][0] && q1[18][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else   if(a.button=='0' && btnA.textContent == q1[18][2][0] && q1[18][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      } else if(a.button=='0' && btnA.textContent == q1[18][3][0] && q1[18][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

           

      }


        //  Question 20

       else   if(a.button=='0' && btnA.textContent == q1[19][0][0] && q1[19][0][1] == true  && num==19){
       

          
      setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);

      } else  if(a.button=='0' && btnA.textContent == q1[19][1][0] && q1[19][1][1] == true  && num==19){
       
    
      setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);

      }else   if(a.button=='0' && btnA.textContent == q1[19][2][0] && q1[19][2][1] == true && num==19){
       

           
      setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);

      } else if(a.button=='0' && btnA.textContent == q1[19][3][0] && q1[19][3][1] == true && num==19 ){
       
    
      setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);

           

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













    
   
     //C function button on Click

    function cFunc(a) {
      const btnA=document.getElementById('btnC')


    //  Question 1

      if(a.button=='0' && btnA.textContent == q1[0][0][0] && q1[0][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[0][1][0] && q1[0][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else  if(a.button=='0' && btnA.textContent == q1[0][2][0] && q1[0][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
  else    if(a.button=='0' && btnA.textContent == q1[0][3][0] && q1[0][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







         //  Question 2

   else   if(a.button=='0' && btnA.textContent == q1[1][0][0] && q1[1][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[1][1][0] && q1[1][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[1][2][0] && q1[1][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[1][3][0] && q1[1][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }





         //  Question 3

   else   if(a.button=='0' && btnA.textContent == q1[2][0][0] && q1[2][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[2][1][0] && q1[2][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[2][2][0] && q1[2][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[2][3][0] && q1[2][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }








      
         //  Question 4

   else   if(a.button=='0' && btnA.textContent == q1[3][0][0] && q1[3][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[3][1][0] && q1[3][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[3][2][0] && q1[3][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[3][3][0] && q1[3][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









         
         //  Question 5

   else   if(a.button=='0' && btnA.textContent == q1[4][0][0] && q1[4][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[4][1][0] && q1[4][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[4][2][0] && q1[4][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[4][3][0] && q1[4][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









         
         //  Question 6

   else   if(a.button=='0' && btnA.textContent == q1[5][0][0] && q1[5][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[5][1][0] && q1[5][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[5][2][0] && q1[5][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[5][3][0] && q1[5][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









          
         //  Question 7

   else   if(a.button=='0' && btnA.textContent == q1[6][0][0] && q1[6][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[6][1][0] && q1[6][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[6][2][0] && q1[6][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[6][3][0] && q1[6][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }










      
          
         //  Question 8

   else   if(a.button=='0' && btnA.textContent == q1[7][0][0] && q1[7][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[7][1][0] && q1[7][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[7][2][0] && q1[7][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[7][3][0] && q1[7][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







            //  Question 9

   else   if(a.button=='0' && btnA.textContent == q1[8][0][0] && q1[8][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[8][1][0] && q1[8][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[8][2][0] && q1[8][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[8][3][0] && q1[8][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }




             //  Question 10

   else   if(a.button=='0' && btnA.textContent == q1[9][0][0] && q1[9][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[9][1][0] && q1[9][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[9][2][0] && q1[9][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[9][3][0] && q1[9][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }








                //  Question 11

   else   if(a.button=='0' && btnA.textContent == q1[10][0][0] && q1[10][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[10][1][0] && q1[10][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[10][2][0] && q1[10][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[10][3][0] && q1[10][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







                     //  Question 12

   else   if(a.button=='0' && btnA.textContent == q1[11][0][0] && q1[11][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[11][1][0] && q1[11][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[11][2][0] && q1[11][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[11][3][0] && q1[11][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }










      
                     //  Question 13

   else   if(a.button=='0' && btnA.textContent == q1[12][0][0] && q1[12][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[12][1][0] && q1[12][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[12][2][0] && q1[12][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[12][3][0] && q1[12][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









        
                     //  Question 14

   else   if(a.button=='0' && btnA.textContent == q1[13][0][0] && q1[13][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[13][1][0] && q1[13][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[13][2][0] && q1[13][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[13][3][0] && q1[13][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }




         
                     //  Question 15

   else   if(a.button=='0' && btnA.textContent == q1[14][0][0] && q1[14][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[14][1][0] && q1[14][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[14][2][0] && q1[14][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[14][3][0] && q1[14][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







           
                     //  Question 16

   else   if(a.button=='0' && btnA.textContent == q1[15][0][0] && q1[15][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[15][1][0] && q1[15][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[15][2][0] && q1[15][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[15][3][0] && q1[15][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }



                    //  Question 17

   else   if(a.button=='0' && btnA.textContent == q1[16][0][0] && q1[16][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[16][1][0] && q1[16][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[16][2][0] && q1[16][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[16][3][0] && q1[16][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









      
                    //  Question 18

   else   if(a.button=='0' && btnA.textContent == q1[17][0][0] && q1[17][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[17][1][0] && q1[17][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[17][2][0] && q1[17][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[17][3][0] && q1[17][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }



                       //  Question 19

   else   if(a.button=='0' && btnA.textContent == q1[18][0][0] && q1[18][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      } else  if(a.button=='0' && btnA.textContent == q1[18][1][0] && q1[18][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else   if(a.button=='0' && btnA.textContent == q1[18][2][0] && q1[18][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      } else if(a.button=='0' && btnA.textContent == q1[18][3][0] && q1[18][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

           

      }


        //  Question 20

       else   if(a.button=='0' && btnA.textContent == q1[19][0][0] && q1[19][0][1] == true &&  num==19){
       

         setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);
           

      } else  if(a.button=='0' && btnA.textContent == q1[19][1][0] && q1[19][1][1] == true && num==19){
       

       setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);
           

      }else   if(a.button=='0' && btnA.textContent == q1[19][2][0] && q1[19][2][1] == true && num==19){
       
  setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);
           

      } else if(a.button=='0' && btnA.textContent == q1[19][3][0] && q1[19][3][1] == true && num==19 ){
       

        setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);
           

      }





      
   
  


      
      else  if (num==19) {

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

    function dFunc(a) {
      const btnA=document.getElementById('btnD')


    //  Question 1

      if(a.button=='0' && btnA.textContent == q1[0][0][0] && q1[0][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[0][1][0] && q1[0][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else  if(a.button=='0' && btnA.textContent == q1[0][2][0] && q1[0][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
  else    if(a.button=='0' && btnA.textContent == q1[0][3][0] && q1[0][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







         //  Question 2

   else   if(a.button=='0' && btnA.textContent == q1[1][0][0] && q1[1][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[1][1][0] && q1[1][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[1][2][0] && q1[1][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[1][3][0] && q1[1][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }





         //  Question 3

   else   if(a.button=='0' && btnA.textContent == q1[2][0][0] && q1[2][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[2][1][0] && q1[2][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[2][2][0] && q1[2][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[2][3][0] && q1[2][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }








      
         //  Question 4

   else   if(a.button=='0' && btnA.textContent == q1[3][0][0] && q1[3][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[3][1][0] && q1[3][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[3][2][0] && q1[3][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[3][3][0] && q1[3][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









         
         //  Question 5

   else   if(a.button=='0' && btnA.textContent == q1[4][0][0] && q1[4][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[4][1][0] && q1[4][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[4][2][0] && q1[4][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[4][3][0] && q1[4][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









         
         //  Question 6

   else   if(a.button=='0' && btnA.textContent == q1[5][0][0] && q1[5][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[5][1][0] && q1[5][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[5][2][0] && q1[5][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[5][3][0] && q1[5][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









          
         //  Question 7

   else   if(a.button=='0' && btnA.textContent == q1[6][0][0] && q1[6][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[6][1][0] && q1[6][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[6][2][0] && q1[6][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[6][3][0] && q1[6][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }










      
          
         //  Question 8

   else   if(a.button=='0' && btnA.textContent == q1[7][0][0] && q1[7][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[7][1][0] && q1[7][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[7][2][0] && q1[7][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[7][3][0] && q1[7][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







            //  Question 9

   else   if(a.button=='0' && btnA.textContent == q1[8][0][0] && q1[8][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[8][1][0] && q1[8][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[8][2][0] && q1[8][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[8][3][0] && q1[8][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }




             //  Question 10

   else   if(a.button=='0' && btnA.textContent == q1[9][0][0] && q1[9][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[9][1][0] && q1[9][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[9][2][0] && q1[9][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[9][3][0] && q1[9][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }








                //  Question 11

   else   if(a.button=='0' && btnA.textContent == q1[10][0][0] && q1[10][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[10][1][0] && q1[10][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[10][2][0] && q1[10][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[10][3][0] && q1[10][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







                     //  Question 12

   else   if(a.button=='0' && btnA.textContent == q1[11][0][0] && q1[11][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[11][1][0] && q1[11][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[11][2][0] && q1[11][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[11][3][0] && q1[11][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }










      
                     //  Question 13

   else   if(a.button=='0' && btnA.textContent == q1[12][0][0] && q1[12][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[12][1][0] && q1[12][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[12][2][0] && q1[12][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[12][3][0] && q1[12][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









        
                     //  Question 14

   else   if(a.button=='0' && btnA.textContent == q1[13][0][0] && q1[13][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[13][1][0] && q1[13][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[13][2][0] && q1[13][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[13][3][0] && q1[13][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }




         
                     //  Question 15

   else   if(a.button=='0' && btnA.textContent == q1[14][0][0] && q1[14][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[14][1][0] && q1[14][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[14][2][0] && q1[14][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[14][3][0] && q1[14][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }







           
                     //  Question 16

   else   if(a.button=='0' && btnA.textContent == q1[15][0][0] && q1[15][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[15][1][0] && q1[15][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[15][2][0] && q1[15][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[15][3][0] && q1[15][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }



                    //  Question 17

   else   if(a.button=='0' && btnA.textContent == q1[16][0][0] && q1[16][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[16][1][0] && q1[16][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[16][2][0] && q1[16][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[16][3][0] && q1[16][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }









      
                    //  Question 18

   else   if(a.button=='0' && btnA.textContent == q1[17][0][0] && q1[17][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
    else  if(a.button=='0' && btnA.textContent == q1[17][1][0] && q1[17][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }

   else   if(a.button=='0' && btnA.textContent == q1[17][2][0] && q1[17][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }
   else   if(a.button=='0' && btnA.textContent == q1[17][3][0] && q1[17][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }



                       //  Question 19

   else   if(a.button=='0' && btnA.textContent == q1[18][0][0] && q1[18][0][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      } else  if(a.button=='0' && btnA.textContent == q1[18][1][0] && q1[18][1][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      }else   if(a.button=='0' && btnA.textContent == q1[18][2][0] && q1[18][2][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

      } else if(a.button=='0' && btnA.textContent == q1[18][3][0] && q1[18][3][1] == true ){
       

        setProcentage(procentage+5)

        setNum(num+1)

           

      }


        //  Question 20

       else   if(a.button=='0' && btnA.textContent == q1[19][0][0] && q1[19][0][1] == true && num==19){
       
    setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);

      } else  if(a.button=='0' && btnA.textContent == q1[19][1][0] && q1[19][1][1] == true && num==19){
       
    setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);

      }else   if(a.button=='0' && btnA.textContent == q1[19][2][0] && q1[19][2][1] == true && num==19){
       
    setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);

      } else if(a.button=='0' && btnA.textContent == q1[19][3][0] && q1[19][3][1] == true && num==19){
       

          setProcentage(procentage+5)

         setNum(0)

      setBtnBool(!btnBool)

      setTimeout(() => {
        setBtnBool(false)
        setProcentage(0)
        
      }, 7500);
           

      }





      
   
  


      
      else  if (num==19) {

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

            <div className={qustionStyles.empdtyDiv}></div>


             <div className={qustionStyles.firstDiv}> Quiz Game</div>


                  {/* Image Div */}
             <img src={img}  alt="image" className={qustionStyles.secondDiv}></img>



                 {/* Questions div */}
                  
               <div className={qustionStyles.threedDiv}>
                 {questions[num]}
               </div>







                 <div className={qustionStyles.fourDiv}>

                        <button disabled={btnBool} className={qustionStyles.fourDivItem1}  onClick={aFunc}>a. <span id="btnA">{q1[num][0]}</span></button>

                        <button disabled={btnBool} className={qustionStyles.fourDivItem2} onClick={bFunc}>b. <span id="btnB">{q1[num][1]}</span></button>

                        <button disabled={btnBool} className={qustionStyles.fourDivItem3} onClick={cFunc}>c. <span id="btnC">{q1[num][2]}</span></button>

                        <button disabled={btnBool} className={qustionStyles.fourDivItem4} onClick={dFunc} >d. <span id="btnD">{q1[num][3]}</span></button>

                  

                 </div>

                <div className={qustionStyles.fiveDiv}>
                 <button disabled={btnBool} onClick={incrementNum}>Next</button>    {btnBool ?   <div>Winning Percentage : {procentage}%</div> :""} 

                </div>


                <div className={qustionStyles.empdtyDiv}></div>
 

        
    </div>
  )
}

export default QuestTest