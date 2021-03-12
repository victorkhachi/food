//carousel
    const slide = document.querySelector('.slide');
    const image = document.querySelectorAll('.slide img');
    const dots = document.querySelectorAll('.circle div');

    let counter = 0;
    let size = slide.clientWidth
    const imgLnt = image.length
    
    
   setInterval(()=>{
       if (counter < imgLnt) {
           switch (counter) {
               case 0 :
                   document.querySelector('.link a').style.color = 'black';

                //    console.log(counter);
                   dots.item(0).style.background='rgba(0,0,0,0.5)'
                   dots.item(1).style.background = 'rgb(0,0,0)'
                   dots.item(2).style.background = 'rgb(0,0,0)'

                   break;
               case 1:
                //    console.log(counter);
                   document.querySelector('.link a').style.color='black';
                   dots.item(1).style.background = 'rgba(0,0,0,0.5)'
                   dots.item(0).style.background = 'rgb(0,0,0)'
                   dots.item(2).style.background = 'rgb(0,0,0)'

                   break;  
               case 2:  
                   document.querySelector('.link a').style.color = 'white';

                   dots.item(2).style.background = 'rgba(0,0,0,0.5)'
                   dots.item(1).style.background = 'rgb(0,0,0)'
                   dots.item(0).style.background = 'rgb(0,0,0)'

                   break; 
                   
               
           
               default:
                   break;
           }
           slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
           counter++
           if (counter==3) {
               counter = 0;
               slide.style.transition = '0s'

               if (counter==0) {
                   slide.style.transition = '1.5s'

               }
           }
           
           
       }
       
       
   },2000)
   
// drop down bar
const tabs= document.querySelectorAll('.tab')
const contact=document.querySelectorAll('.contact-us')
const links = document.querySelectorAll('.header-links')


console.log(tabs.item(0));

document.addEventListener('click',doc=>{
    
    if (doc.target.classList.value==='tab') {
     
        if (doc.target==tabs.item(0)) {
              if (links.item(0).classList.value==="header-links") {
                  links.item(0).classList.replace('header-links','header-link')
                  links.item(1).classList = 'header-links'

              }
              else{
                 links.item(0).classList='header-links'
              }
        }
        if (doc.target == tabs.item(2)) {
            if (links.item(1).classList.value === "header-links") {
                links.item(1).classList.replace('header-links', 'header-link')
                links.item(0).classList = 'header-links'

            }
            else {
                links.item(1).classList = 'header-links'
            }
        }

    }
    else {
        links.forEach(link => {
            link.classList = 'header-links'
        })
    }

})
    
   
//coment bar
const commentBar= document.querySelector(".commentary")
const input=document.querySelector('.enter-comment input')
const btn=  document.querySelector('button')

btn.addEventListener('click',(c)=>{
    c.preventDefault()

    if (input.value==="") {
        
    }
    else{
        const comment = document.createElement('div')
        comment.classList="review";
        comment.innerHTML=`${input.value}<hr>`;
        commentBar.appendChild(comment);
        input.value=""
    }

    })
// menu container
const nxtBtn = document.querySelectorAll(".next")
// const prvBtn = document.querySelectorAll('.prev')
const mContainer = document.querySelector('.menu-container')
const menuList = document.querySelectorAll('.men')
const listing = document.querySelectorAll('.list')
const mImages = document.querySelectorAll('.images')
const img = document.querySelectorAll('.images img')
const swipe=document.querySelectorAll('.swipe')
const closebtn = document.querySelector('.close')

menuList.forEach(list=>{
    document.addEventListener('click', (out) => {
        if (out.target==list ) {
            console.log(list.classList.value);
            let rotate = -360;
            if (mContainer.classList.value === 'menu-container') {
               mContainer.classList.replace('menu-container', 'menu-containerr');
               closebtn.style.display='inline-block'
            //    console.log(name);
             switch (list.classList.value) {
                 case 'int-link men':
                    listing.item(0).style.display='inline-block';
                     listing.item(0).style.display = 'flex'
                     listing.item(1).style.display = 'none';
                     listing.item(2).style.display = 'none';
                     listing.item(3).style.display = 'none';

                     break;
                case 'wine-link men':
                     listing.item(1).style.display = 'inline-block';
                     listing.item(1).style.display = 'flex'
                     listing.item(0).style.display = 'none';
                     listing.item(2).style.display = 'none';
                     listing.item(3).style.display = 'none';
                    
                     break;
                
                 case 'local-link men':
                     listing.item(2).style.display = 'inline-block';
                     listing.item(2).style.display = 'flex'
                     listing.item(0).style.display = 'none';
                     listing.item(1).style.display = 'none';
                     listing.item(3).style.display = 'none';

                     break;

                 case 'bake-link men':
                     listing.item(3).style.display = 'inline-block';
                     listing.item(3).style.display = 'flex'
                     listing.item(0).style.display = 'none';
                     listing.item(1).style.display = 'none';
                     listing.item(2).style.display = 'none';

                     break;

                 default:
                     break;
             }
        }

            else{
                switch (list.classList.value) {
                    case 'int-link men':
                        mContainer.style.transform = 'rotateX(' + (-1 * rotate) + 'deg)'

                        mContainer.style.transition = '1s'
                        listing.item(0).style.display = 'inline-block';
                        listing.item(0).style.display = 'flex'
                        listing.item(1).style.display = 'none';
                        listing.item(2).style.display = 'none';
                        listing.item(3).style.display = 'none';

                        break;

                    case 'local-link men':
                        mContainer.style.transform = 'rotateX('+ (-1*rotate) + 'deg)'
                        mContainer.style.transition = '1s'
                        listing.item(2).style.display = 'inline-block';
                        listing.item(2).style.display = 'flex'
                        listing.item(0).style.display = 'none';
                        listing.item(1).style.display = 'none';
                        listing.item(3).style.display = 'none';

                        break;

                    case 'wine-link men':
                        mContainer.style.transform = 'rotateX(' + (-1 * rotate) + 'deg)'

                        mContainer.style.transition='1s'
                        listing.item(1).style.display = 'inline-block';
                        listing.item(1).style.display = 'flex'
                        listing.item(0).style.display = 'none';
                        listing.item(2).style.display = 'none';
                        listing.item(3).style.display = 'none';

                        break;
                    case 'bake-link men':
                        mContainer.style.transform = 'rotateX(' + (-1 * rotate) + 'deg)'

                        mContainer.style.transition = '1s'
                        listing.item(3).style.display = 'inline-block';
                        listing.item(3).style.display = 'flex'
                        listing.item(0).style.display = 'none';
                        listing.item(1).style.display = 'none';
                        listing.item(2).style.display = 'none';

                        break;

                
                    default:
                        break;
                }
               
            
        }
              
      }




      
    })
})
// inner image slider
 swipe.forEach(slider=>{
    
    let swiper = slider.clientWidth;
    let imgNum = 0;
 nxtBtn.forEach(next=>{
     next.addEventListener('click',(e=>{
         let target= e.target
         if (target==nxtBtn.item(0)) {
             imgNum++
             swipe.item(0).style.transform='translateX(' + (-swiper * imgNum)+'px)'
             if (imgNum==2) {
                 imgNum=-1;
             }
         }
         if (target == nxtBtn.item(1)) {
             imgNum++
             swipe.item(1).style.transform = 'translateX(' + (-swiper * imgNum) + 'px)'
             if (imgNum == 2) {
                 imgNum = -1;
             }
         }
         if (target == nxtBtn.item(2)) {
             imgNum++
             swipe.item(2).style.transform = 'translateX(' + (-swiper * imgNum) + 'px)'
             if (imgNum == 2) {
                 imgNum = -1;
             }
         }
         if (target == nxtBtn.item(3)) {
             imgNum++
             swipe.item(3).style.transform = 'translateX(' + (-swiper * imgNum) + 'px)'
             if (imgNum == 2) {
                 imgNum = -1;
             }
         }
         if (target == nxtBtn.item(4)) {
             imgNum++
             swipe.item(4).style.transform = 'translateX(' + (-swiper * imgNum) + 'px)'
             if (imgNum == 2) {
                 imgNum = -1;
             }
         }
         if (target == nxtBtn.item(5)) {
             imgNum++
             swipe.item(5).style.transform = 'translateX(' + (-swiper * imgNum) + 'px)'
             if (imgNum == 2) {
                 imgNum = -1;
             }
         }
         if (target == nxtBtn.item(6)) {
             imgNum++
             swipe.item(6).style.transform = 'translateX(' + (-swiper * imgNum) + 'px)'
             if (imgNum == 2) {
                 imgNum = -1;
             }
         }
         if (target == nxtBtn.item(7)) {
             imgNum++
             swipe.item(7).style.transform = 'translateX(' + (-swiper * imgNum) + 'px)'
             if (imgNum == 2) {
                 imgNum = -1;
             }
         }
         if (target == nxtBtn.item(8)) {
             imgNum++
             swipe.item(8).style.transform = 'translateX(' + (-swiper * imgNum) + 'px)'
             if (imgNum == 2) {
                 imgNum = -1;
             }
         }
         if (target == nxtBtn.item(9)) {
             imgNum++
             swipe.item(9).style.transform = 'translateX(' + (-swiper * imgNum) + 'px)'
             if (imgNum == 2) {
                 imgNum = -1;
             }
         }
         if (target == nxtBtn.item(10)) {
             imgNum++
             swipe.item(10).style.transform = 'translateX(' + (-swiper * imgNum) + 'px)'
             if (imgNum == 2) {
                 imgNum = -1;
             }
         }
         if (target == nxtBtn.item(11)) {
             imgNum++
             swipe.item(11).style.transform = 'translateX(' + (-swiper * imgNum) + 'px)'
             if (imgNum == 2) {
                 imgNum = -1;
             }
         }





     })
     )
 })
 })
 console.log(swipe.item(3));
 closebtn.addEventListener('click', (a)=>{
     mContainer.classList='menu-container'
     closebtn.style.display='none'
 })














