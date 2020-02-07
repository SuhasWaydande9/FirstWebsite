// function People (Name, Age, Qoutes){
//     this.Name = Name;
//     this.Age = Age;
//     this.Qoutes = Qoutes;
// };

// let Suhas = new People("Suhas", 22, "I Love Coding");
// let Sunny = new People("Sunny", 21, "Truck My Life");
// let Sagar = new People("Sagar", 20, "I want To be Fair");
// let Ashish = new People("Ashish", 18, "I also Wanna be Coder");

// let lim;
// window.onkeypress = (function(e){
// 	console.log(e.key);
// 	lim += e.key;
// });
//------------------------------------------------------------------------------------//
//SlideShow
//------------------------------------------------------------------------------------//
let i = 1;
function TimeSlideShow(){
	if(i >= SliderImages.length-1){
		i = 0;
	}

	SlideShower.style.backgroundImage = "url('"+ SliderImages[i] +"')"
	SlideShower.style.transition = "500ms";
	i += 1;
	setTimeout(TimeSlideShow,2000);
}

//------------------------------------------------------------------------------------//
//Creating A Slidebar
//------------------------------------------------------------------------------------//

const SliderImages = [
"./public/image7.jpg",
"./public/image8.jpg",
"./public/image9.jpg",
"./public/image10.png",
"./public/image11.jpg",
"./public/image12.jpg",
"./public/image12.jpg"
];

const SlideShower= document.querySelector(".Slidebar");
const LeftSlider = document.querySelector(".before");
const RightSlider = document.querySelector(".after");


function Slider(){
	// let i = 0;
	RightSlider.addEventListener("click", ()=>{
		
		if(i >= SliderImages.length-1){
			i = 1;
		}else{
			i += 1;	
		}
		SlideShower.style.backgroundImage = "url('"+ SliderImages[i] +"')"
		// console.log("url('"+ SliderImages[i] +"')");
		// console.log(i);
	});
	LeftSlider.addEventListener("click",()=>{
		if(i <= 1){
			i = SliderImages.length-1;
		}else{
			i-=1;
		}
		SlideShower.style.backgroundImage = "url('"+ SliderImages[i] +"')"
		// console.log("url('"+ SliderImages[i] +"')");
		// console.log(i);	
	})
}

window.onload = TimeSlideShow()
Slider()
//----------------------------------------------------------------------------
//Log-In Sign-in Play
//----------------------------------------------------------------------------

const SignInButton = document.querySelector("#SignInBtn");
const LoginForm = document.querySelector(".Login");
const LogToggle = document.querySelector(".LogToggle");
const SignToggle = document.querySelector(".SignToggle");


console.log(SignInButton);
SignInButton.addEventListener("click",()=>{
	LoginForm.style.flexDirection = "row-reverse";
	SignToggle.style.zIndex = "1";
	LogToggle.style.zIndex = "0";
})

const LogInButton = document.querySelector("#LogInBtn");

console.log(LogInButton);
LogInButton.addEventListener("click",()=>{
	LoginForm.style.flexDirection = "row";
	LogToggle.style.zIndex = "1";
	SignToggle.style.zIndex = "0";
	
})

const Menu = document.querySelector(".Menu");

Menu.addEventListener("click",()=>{
	document.querySelector("header").classList.toggle("HamBurger");
	document.querySelector("header").classList.toggle("burger");
})
























