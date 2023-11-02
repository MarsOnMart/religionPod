window.addEventListener("laod",()=>{
  const loader = document.getElementsByClassName(".loader");
  
  
  loader.classList.add("hidden");

  loader.addEventListener("transitioned",()=>{
    
    document.body.removeChild("loader");
    
  });
 
})

const parallax_el = document.querySelectorAll(".abs");

let x = 0;
let y =0;

window.addEventListener("mousemove",

  ( e )=>{
    x = e.clientX - window.innerWidth/2;
    y = e.clientY - window.innerHeight/2;
    
    parallax_el.forEach((el) => {
      
        let speedX = el.getAttribute("data-speedX") ;
        let speedY = el.getAttribute("data-speedY") ;

        
        el.style.transform = `translate(calc(-50% + ${x * speedX}px),calc(-50% + ${y * speedY}px))`;

        if (el.classList[1] == "p-12" ){
          el.style.transform = "scaleX(-1)";
        }
        /*
        else if (el.classList[1] == "p-10" ){
          el.style.transform = "scaleX(-1)";
        }*/
          
      }
    )
  }
)


const menus = document.querySelectorAll(".tag");


menus.forEach(el=>{
  el.addEventListener("click", 
    e => {
        const mod = document.querySelector(`.${el.classList[-1]}-t`)
        mod.style.display = "flex";
    }
  )
})

const buttons = document.querySelectorAll(".but");
buttons.forEach(el=>{
  el.addEventListener("click",e =>{
    const target = document.querySelectorAll(".target")
    target.forEach(button =>{
      button.style.display = "none";
    })
  })
})


console.log("height : ", window.innerHeight , "/n" ,"width : ",window.innerWidth);


