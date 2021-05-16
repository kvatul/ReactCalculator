//import logo from './logo.svg';
import React from 'react'
import './App.css';


function App() {
  

   //  ** Start  java script Codiing

   const arrOut= [7,4,1,0]
   const arrIn= [0,1,2]
   const arrRest= ['0','.','=']
   const arrOpt=['AC','back','+/-','%','/','X','+','-']
   let resval=0
   let numid=''
 
 /*  document.querySelectorAll(".btn_num").forEach(i => i.addEventListener(
    "click", e => {
     btnClick(i);
    }));

    document.querySelectorAll(".btn_opt").forEach(i => i.addEventListener(
    "click", e => {
      optClick(i.id);
    })); */
 
    function btnClick(num) 
    {
      let optval=document.getElementById("opratr").value;
      let resval = document.getElementById("Result").value;
      numid=( (num ==="." &&  resval.indexOf(".") !== -1) ? "" : num  ); 
      if (num === "=" ){ 
        if (optval !== "")
        {
         resval=evaluate(document.getElementById("fstval").value,resval,optval);
         assignval(resval,"",resval);
        }
        else if (resval ==="" || document.getElementById("fstval").value ==="")
           {}
        }   
      else if (optval !== "" && resval !=="")
       {
         if (document.getElementById("optdone").value==="1")
          {
          document.getElementById("Result").value = numid //num.id; 
          document.getElementById("optdone").value=0;
          }
         else 
          document.getElementById("Result").value = resval + numid // num.id; 
         }
      else { 
        document.getElementById("Result").value = resval + numid //num.id;
        }
        //num.className="btn-secondary text-dark btn_num "
        // num.style.background = "lightgray";
        //num.style.border = "none";
    }
    
    function optClick(opt) 
     {
      let resval = document.getElementById("Result").value 
      let optval=opt;
      switch(optval)
      {
      case "AC":
        assignval("","","")
        break;
      case "+/-":
        if (resval !=="")
         document.getElementById("Result").value = -parseFloat(resval);
        break;
 
        case "back":
        if (resval !=="") 
          document.getElementById("Result").value = resval.substring(0,resval.length-1);
        break;
    
      default: {
          if (resval !== "") {
            let optval=document.getElementById("opratr").value;
            if (optval !== "") {
              resval = evaluate(document.getElementById("fstval").value, resval, optval)
              assignval(resval, opt, resval)
              document.getElementById("optdone").value=1;
            }
            else
             assignval(resval, opt, "");
          }
        }
      }
    }
     
      const evaluate= (a,b,optval)=>{
       switch(optval) {
            case "+":
             resval=parseFloat(a)+parseFloat(b);
             break; 
            case "-":
             resval=resval=parseFloat(a)-parseFloat(b);  
             break; 
            case "X":
             resval=resval=parseFloat(a)*parseFloat(b);
             break; 
            case "/":    
             resval=resval=parseFloat(a)/parseFloat(b);
             break; 
            case '%':
             resval=resval=parseFloat(a)*parseFloat(b)/100;
             break; 
            default : 
          }
        return resval; 
      }
    
      const assignval=(fstval,optval,resval)=>{
        document.getElementById("fstval").value = fstval;
        document.getElementById("opratr").value = optval;
        document.getElementById("Result").value = resval;
        document.getElementById("optdone").value=0;
      }
  
      //  ** End  java script Codiing
      

  return (
   
  <header className="App-header">
    
    <div className="text-center col-12 container "
     style= {{width:"100%",height:"15vh",  paddingRight: "14px" }} >
     <input style={{fontSize: "8rem",color:"black", width:"100%",height:"100%", textAlign: "right", paddingRight:"10px"  }}  type="text"
       name="" id="Result" value="" defaultval='' placeholder="0" disabled/>
    </div>

     <input type="text" id="fstval" defaultval='' hidden />
     <input type="text" value="0" defaultval='0' id="optdone" hidden />
     <input type="text" id="opratr" defaultval='' hidden />

    <div className="col-12  container " style={{width:"100%",height:"80vh",backgroundColor:"lightgray" }}>
      <div className="row" style={{width:"100%",height:"100%"}} >
        <div className="col-9 ">

        { arrOut.map((Arr,i)=> {
              return (<div className="row  btnrow ">
                { console.log ( i.toString + (i===3) ? arrRest[i] :'0') }
              { arrIn.map((Arr,j)=>{
                let k =  i === 3 ? arrRest[j] :arrOut[i]+arrIn[j] 
                return (<div className="col col-4 colnum "> <button id={k} className="btn-secondary text-dark btn_num " onClick={()=>btnClick(k)}  >{k}</button></div>)
              }) }
             </div>  ) 
           })} 

        </div>


        <div className="col-3  ">

        { arrOpt.map((Arr,i)=> {
              //console.log('<div className="row  btnrow "')
              let strCapt= arrOpt[i]==='back' ? <i className="material-icons">backspace</i>: arrOpt[i]
             
              return (
               <div className="row   btn_lastcol ">
                 <div className="col col-12 "> <button id={arrOpt[i]} className="btn-warning btn_opt  " onClick={()=>optClick(arrOpt[i])}  >{strCapt}</button></div>
               </div>
              ) 
           })} 

       </div>


      </div>




    </div>
  {/*   <!-- Optional JavaScript; choose one of the two! -->

    <!--  Option 1: Bootstrap Bundle with Popper -->*/}

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
      crossorigin="anonymous"></script>

  {/*   <!-- Option 2: Separate Popper and Bootstrap JS -->
  
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
 */}
  {/* <script src="code.js" type="text/javascript" ></script>  */}


  </header>

    
    
    
    );
}

export default App;
