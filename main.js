let slides = document.querySelectorAll('.slide');
for(const key of slides){
	key.addEventListener('click', ()=>{
		for(let i = 0; i < slides.length; i++){
			slides[i].classList.remove('active');
		}
		key.classList.add('active')
		
	})
}