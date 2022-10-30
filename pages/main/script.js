	// let SLIDE_1 = document.querySelector("#slide-1");
	// let SLIDE_2 = document.querySelector("#slide-2");
	// let SLIDE_3 = document.querySelector("#slide-3");
	// let SLIDE_4 = document.querySelector("#slide-4");
	// let SLIDE_5 = document.querySelector("#slide-5");


	document.addEventListener("DOMContentLoaded", () => {
		let arrCards = [{
				"id": "0",
				"name": "Jennifer",
				"img": "../../assets/images/pets-jennifer.jpg",
				"type": "Dog",
				"breed": "Labrador",
				"description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
				"age": "2 months",
				"inoculations": ["none"],
				"diseases": ["none"],
				"parasites": ["none"]
			},
			{
				"id": "1",
				"name": "Sophia",
				"img": "../../assets/images/pets-katrine (1).png",
				"type": "Dog",
				"breed": "Shih tzu",
				"description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
				"age": "1 month",
				"inoculations": ["parvovirus"],
				"diseases": ["none"],
				"parasites": ["none"]
			},
			{
				"id": "2",
				"name": "Woody",
				"img": "../../assets/images/pets-woody.jpg",
				"type": "Dog",
				"breed": "Golden Retriever",
				"description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
				"age": "3 years 6 months",
				"inoculations": ["adenovirus", "distemper"],
				"diseases": ["right back leg mobility reduced"],
				"parasites": ["none"]
			},
			{
				"id": "3",
				"name": "Scarlett",
				"img": "../../assets/images/pets-scarlet.png",
				"type": "Dog",
				"breed": "Jack Russell Terrier",
				"description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
				"age": "3 months",
				"inoculations": ["parainfluenza"],
				"diseases": ["none"],
				"parasites": ["none"]
			},
			{
				"id": "4",
				"name": "Katrine",
				"img": "../../assets/images/pets-katrine.jpg",
				"type": "Cat",
				"breed": "British Shorthair",
				"description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
				"age": "6 months",
				"inoculations": ["panleukopenia"],
				"diseases": ["none"],
				"parasites": ["none"]
			},
			{
				"id": "5",
				"name": "Timmy",
				"img": "../../assets/images/pets-timmy.png",
				"type": "Cat",
				"breed": "British Shorthair",
				"description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
				"age": "2 years 3 months",
				"inoculations": ["calicivirus", "viral rhinotracheitis"],
				"diseases": ["kidney stones"],
				"parasites": ["none"]
			},
			{
				"id": "6",
				"name": "Freddie",
				"img": "../../assets/images/pets-katrine (2).png",
				"type": "Cat",
				"breed": "British Shorthair",
				"description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
				"age": "2 months",
				"inoculations": ["rabies"],
				"diseases": ["none"],
				"parasites": ["none"]
			},
			{
				"id": "7",
				"name": "Charly",
				"img": "../../assets/images/pets-charly.png",
				"type": "Dog",
				"breed": "Jack Russell Terrier",
				"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
				"age": "8 years",
				"inoculations": ["bordetella bronchiseptica", "leptospirosis"],
				"diseases": ["deafness", "blindness"],
				"parasites": ["lice", "fleas"]
			}
		];

		const BTN_LEFT = document.querySelector("#btn-left");
		const BTN_RIGHT = document.querySelector("#btn-right");
		const BTN_LEFT_XS = document.querySelector("#btn-left-xs");
		const BTN_RIGHT_XS = document.querySelector("#btn-right-xs");
		const CAROUSEL = document.querySelector("#carousel");
		const ITEM_LEFT = document.querySelector("#item-left");
		const ITEM_RIGHT = document.querySelector("#item-right");

		const moveLeft = () => {
			CAROUSEL.classList.add("transition-left");
			BTN_LEFT.removeEventListener("click", moveLeft);
			BTN_RIGHT.removeEventListener("click", moveRight);
			BTN_LEFT_XS.removeEventListener("click", moveLeft);
			BTN_RIGHT_XS.removeEventListener("click", moveRight);
		};

		const moveRight = () => {
			CAROUSEL.classList.add("transition-right");
			BTN_LEFT.removeEventListener("click", moveLeft);
			BTN_RIGHT.removeEventListener("click", moveRight);
			BTN_LEFT_XS.removeEventListener("click", moveLeft);
			BTN_RIGHT_XS.removeEventListener("click", moveRight);
		};

		BTN_LEFT.addEventListener("click", moveLeft);
		BTN_RIGHT.addEventListener("click", moveRight);
		BTN_LEFT_XS.addEventListener("click", moveLeft);
		BTN_RIGHT_XS.addEventListener("click", moveRight);

		let step = 6;
		CAROUSEL.addEventListener("animationend", (animationEvent) => {
			let changedItem;
			if (animationEvent.animationName === "move-left") {
				CAROUSEL.classList.remove("transition-left");
				changedItem = ITEM_LEFT;
				document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
			} else {
				CAROUSEL.classList.remove("transition-right");
				changedItem = ITEM_RIGHT;
				document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
			}

			changedItem.innerHTML = "";

			let cardsModuleArr = [];

			for (let j = 0; j < arrCards.length; j++) {

				let card = document.createElement('a');
				card.classList.add('carts-section__item', 'cart-block');
				card.id = `card-${arrCards[j].id}`;

				let card_info = `
				<div class="cart-block__cart-link" id="cart-link-${j}">
				<div class="cart-block__logo">
					<img src="${arrCards[j].img}" alt="${arrCards[j].name}">
				</div>
				<div class="cart-block__info">
					<div class="cart-block__title">${arrCards[j].name}</div>
					<button class="cart-block__btn btn btn--border" id="card-btn-${arrCards[j].id}">Learn more</button>
				</div>
			`;
				card.insertAdjacentHTML('beforeend', card_info);
				cardsModuleArr[j] = card;
			}




			if (window.innerWidth >= 1280) {
				for (let i = 0; i < 3; i++) {
					changedItem.appendChild(cardsModuleArr[step]);
					if (step == 7) {
						step = 0;
					} else {
						step++
					}
					// console.log(step)
				}
			} else if (window.innerWidth < 1280) {
				for (let i = 0; i < 3; i++) {
					changedItem.appendChild(cardsModuleArr[step]);
					if (step == 7) {
						step = 0;
					} else {
						step++
					}
					console.log(step)
				}
			}

			BTN_LEFT.addEventListener("click", moveLeft);
			BTN_RIGHT.addEventListener("click", moveRight);
			BTN_LEFT_XS.addEventListener("click", moveLeft);
			BTN_RIGHT_XS.addEventListener("click", moveRight);
		})

		//burger menu

		function showBurger() {
			let burger_btn = document.querySelector(".js-burger");
			let menu = document.querySelector(".header__nav");
			let header = document.querySelector(".header");
			let overflow = document.querySelector(".js-overflow");
			let body = document.querySelector("body");

			burger_btn.addEventListener('click', () => {
				if (burger_btn.classList.contains("is-active") && menu.classList.contains("is-active")) {
					burger_btn.classList.remove("is-active");
					menu.classList.remove("is-active");
					header.classList.remove("is-active");
					overflow.style.display = "none";
					body.style.overflow = "auto";
				} else {
					burger_btn.classList.add("is-active");
					menu.classList.add("is-active");
					header.classList.add("is-active");
					overflow.style.display = "block";
					body.style.overflow = "hidden";
				}
			});
			overflow.addEventListener('click', () => {
				if (burger_btn.classList.contains("is-active") && menu.classList.contains("is-active")) {
					burger_btn.classList.remove("is-active");
					menu.classList.remove("is-active");
					header.classList.remove("is-active");
					overflow.style.display = "none";
					body.style.overflow = "auto";
				}
			});
		}
		showBurger();

		function showPopup() {
			let body = document.querySelector("body");

			let arrPopups = [];

			for (let i = 0; i < arrCards.length; i++) {
				let popup = `
					<div class="popup" id="popup-${i}">
						<div class="popup-overlay" id="js-overlay-${i}"></div>
						<div class="popup__body">
							<div class="popup__close" id="card-btn-close-${i}">
								<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z"/>
								</svg>
							</div>
							<div class="popup__content">
								<div class="popup__img">
									<img src="${arrCards[i].img}" alt="img">
								</div>
								<div class="popup__about">
									<div class="popup__title">${arrCards[i].name}</div>
									<div class="popup__subtitle">${arrCards[i].type} - ${arrCards[i].breed}</div>
									<div class="popup__text">${arrCards[i].description}</div>
									<ul class="popup__list">
										<li class="popup__item">Age: <span>${arrCards[i].age}</span></li>
										<li class="popup__item">Inoculations: <span>${arrCards[i].inoculations}</span></li>
										<li class="popup__item">Diseases: <span>${arrCards[i].diseases}</span></li>
										<li class="popup__item">Parasites: <span>${arrCards[i].parasites}</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				`;
				arrPopups[i] = popup;

				body.insertAdjacentHTML('beforeend', arrPopups[i]);
			}

			let slider = document.querySelector('#carousel');
			let overlay = document.querySelector(".popup-overlay");
			let popup_4 = document.querySelector("#popup-4");

			let user = {
				login: 'nik',
				pass: 123
			}

			///-------------------------------------------------login
			document.querySelector('body').addEventListener('click', (e)=>{
				if (e.target.classList.contains('auth') && document.getElementById('js-auth-popup').classList.contains('active')) {
					document.querySelector('body').classList.remove('overlay')
					document.getElementById('js-auth-popup').classList.remove('active');
				}
				if (e.target.classList.contains('auth') && document.getElementById('js-register-popup').classList.contains('active')) {
					document.querySelector('body').classList.remove('overlay')
					document.getElementById('js-register-popup').classList.remove('active');
				}
			});
			document.getElementById('js-login-btn').addEventListener('click', () => {
				// document.getElementById('js-auth-popup').classList.toggle('active');
				if (document.getElementById('js-auth-popup').classList.contains('active')) {
					document.querySelector('body').classList.remove('overlay')
					document.getElementById('js-auth-popup').classList.remove('active');
				} else {
					document.querySelector('body').classList.add('overlay')
					document.getElementById('js-auth-popup').classList.add('active');
				}
			});

			document.getElementById('js-register-btn').addEventListener('click', () => {
				// document.getElementById('js-auth-popup').classList.toggle('active');
				if (document.getElementById('js-register-popup').classList.contains('active')) {
					document.querySelector('body').classList.remove('overlay')
					document.getElementById('js-register-popup').classList.remove('active');
				} else {
					document.querySelector('body').classList.add('overlay')
					document.getElementById('js-register-popup').classList.add('active');
				}
			});

			document.getElementById('js-close-pop').addEventListener('click', () => {
				if (document.getElementById('js-auth-popup').classList.contains('active')) {
					document.querySelector('body').classList.remove('overlay')
					document.getElementById('js-auth-popup').classList.remove('active');
				}
			});
			document.getElementById('js-close-register-pop').addEventListener('click', () => {
				if (document.getElementById('js-register-popup').classList.contains('active')) {
					document.querySelector('body').classList.remove('overlay')
					document.getElementById('js-register-popup').classList.remove('active');
				}
			});

			let auth = (user) => {
				let login = document.getElementById('js-input-login')
				let pass = document.getElementById('js-input-pass')
				let inputLogin = '';
				let inputPass = '';
				let btn = document.getElementById('js-btn')
				console.log(login.value)

				login.addEventListener('change', (e) => {
					inputLogin = e.target.value
					console.log(inputLogin)
				});

				pass.addEventListener('change', (e) => {
					inputPass = e.target.value
					console.log(inputPass)
				});

				btn.addEventListener('click', () => {
					if (user.login == inputLogin && user.pass == inputPass) {
						console.log('1')

						alert('You are auts')
					} else {
						console.log()
						alert('You are not auts')
					}
				})
			}

			auth(user);
			///-------------------------------------------------

			slider.addEventListener('click', (e) => {
				let step = e.target;

				if (step.id == "card-btn-0" || step.id == "cart-link-0") {
					document.querySelector("#popup-0").classList.add('js-show');
					body.style.overflow = "hidden";
				} else if (step.id == "card-btn-1" || step.id == "cart-link-1") {
					document.querySelector("#popup-1").classList.add('js-show');
					body.style.overflow = "hidden";
				} else if (step.id == "card-btn-2" || step.id == "cart-link-2") {
					document.querySelector("#popup-2").classList.add('js-show');
					body.style.overflow = "hidden";
				} else if (step.id == "card-btn-3" || step.id == "cart-link-3") {
					document.querySelector("#popup-3").classList.add('js-show');
					body.style.overflow = "hidden";
				} else if (step.id == "card-btn-4" || step.id == "cart-link-4") {
					document.querySelector("#popup-4").classList.add('js-show');
					body.style.overflow = "hidden";
				} else if (step.id == "card-btn-5" || step.id == "cart-link-5") {
					document.querySelector("#popup-5").classList.add('js-show');
					body.style.overflow = "hidden";
				} else if (step.id == "card-btn-6" || step.id == "cart-link-6") {
					document.querySelector("#popup-6").classList.add('js-show');
					body.style.overflow = "hidden";
				} else if (step.id == "card-btn-7" || step.id == "cart-link-7") {
					document.querySelector("#popup-7").classList.add('js-show');
					body.style.overflow = "hidden";
				}
			});

			body.addEventListener('click', (e) => {
				let close = e.target;

				if (close.id == "card-btn-close-0" || close.id == "js-overlay-0") {
					document.querySelector("#popup-0").classList.remove('js-show');
					body.style.overflow = "auto";
				} else if (close.id == "card-btn-close-1" || close.id == "js-overlay-1") {
					document.querySelector("#popup-1").classList.remove('js-show');
					body.style.overflow = "auto";
				} else if (close.id == "card-btn-close-2" || close.id == "js-overlay-2") {
					document.querySelector("#popup-2").classList.remove('js-show');
					body.style.overflow = "auto";
				} else if (close.id == "card-btn-close-3" || close.id == "js-overlay-3") {
					document.querySelector("#popup-3").classList.remove('js-show');
					body.style.overflow = "auto";
				} else if (close.id == "card-btn-close-4" || close.id == "js-overlay-4") {
					document.querySelector("#popup-4").classList.remove('js-show');
					body.style.overflow = "auto";
				} else if (close.id == "card-btn-close-5" || close.id == "js-overlay-5") {
					document.querySelector("#popup-5").classList.remove('js-show');
					body.style.overflow = "auto";
				} else if (close.id == "card-btn-close-6" || close.id == "js-overlay-6") {
					document.querySelector("#popup-6").classList.remove('js-show');
					body.style.overflow = "auto";
				} else if (close.id == "card-btn-close-7" || close.id == "js-overlay-7") {
					document.querySelector("#popup-7").classList.remove('js-show');
					body.style.overflow = "auto";
				}
			});

		}
		showPopup();
	})

	let switchTheme = document.getElementById("switchTheme");

	switchTheme.onclick = function(){
		let theme = document.getElementById("theme");
	
		if (theme.getAttribute("href") == "./style.css"){
			theme.href = "./dark-theme.css";
		} else {
			theme.href = "./style.css"
		}
	}