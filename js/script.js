let menu = document.querySelector('.menu'),
	li2 = document.querySelectorAll('.menu-item')[1],
	li3 = document.querySelectorAll('.menu-item')[2],
	li5 = document.createElement('li'), 
	bodyBg = document.body,
	title = document.getElementById('title'),
	rightColumn = document.querySelectorAll('.column')[1],
	adv = document.querySelector('.adv'),
	question;
	answer = document.getElementById('prompt');



menu.insertBefore(li3, li2);//Смена элементом местами
menu.appendChild(li5).classList.add('menu-item');//Добавление пятого элемента в конец списка
li5.textContent = 'Пятый пункт';//Добавление текста в пятый элемент
bodyBg.style.background = "url('./img/apple_true.jpg')";//Смена фоновой картинки у body
title.textContent = 'Мы продаем только подлинную технику Apple';//Изменение содержания заголовка
rightColumn.removeChild(adv);//Удаление рекламного блока 
question = prompt('Как Вы относитесь к технике Apple?', 'Хорошо');//Получение ответа от пользователя
answer.textContent = question;//Добавление ответа пользователя в элемент

