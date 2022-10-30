document.addEventListener("DOMContentLoaded", () => {

	function showBurger() {
		let burger_btn = document.querySelector(".js-burger");
		let menu = document.querySelector(".header__nav");
		let header = document.querySelector(".header");
		let overflow = document.querySelector(".js-overflow");
		let bodyHeader = document.querySelector(".header__body");
		let body = document.querySelector("body");

		burger_btn.addEventListener('click',()=>{
			// console.log(true)
			if(burger_btn.classList.contains("is-active") && menu.classList.contains("is-active")){
				burger_btn.classList.remove("is-active");
				menu.classList.remove("is-active");
				header.classList.remove("is-active");
				bodyHeader.classList.remove("is-active");
				overflow.style.display = "none";
				body.style.overflow = "auto";
			} else {
				burger_btn.classList.add("is-active");
				menu.classList.add("is-active");
				header.classList.add("is-active");
				bodyHeader.classList.add("is-active");
				overflow.style.display = "block";
				body.style.overflow = "hidden";
			}
		});

		overflow.addEventListener('click',()=>	{	
			if(burger_btn.classList.contains("is-active") && menu.classList.contains("is-active")){
				burger_btn.classList.remove("is-active");
				menu.classList.remove("is-active");
				header.classList.remove("is-active");
				bodyHeader.classList.remove("is-active");
				overflow.style.display = "none";
				body.style.overflow = "auto";
			}
		});
	}
	showBurger();

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

});

let switchTheme = document.getElementById("switchTheme");

	switchTheme.onclick = function(){
		let theme = document.getElementById("theme");
	
		if (theme.getAttribute("href") == "./style.css"){
			theme.href = "./dark-theme.css";
		} else {
			theme.href = "./style.css"
		}
	}