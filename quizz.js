const wrapper = document.querySelector('.wrapper');
 const question = document.querySelector('.question');
 const image = document.querySelector('.image');
 const yesBtn = document.querySelector('.yes-btn');
 const noBtn = document.querySelector('.no-btn');




 
  yesBtn.addEventListener('click', ()=>{

    question.innerHTML = "NEVER FORGET"
    image.src =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/417289786_917066836579738_2657821115426129027_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=PnmWkPryZaYAX8xQdv9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSPvhBY9JZ0kcqzt7bmjHN9K0aG2nvvuXh56pJFJ79b3A&oe=65EE9D14"
   });

   noBtn.addEventListener('mouseover', ()=>{
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.Height;


    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY)

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

   });
