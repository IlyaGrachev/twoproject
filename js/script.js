window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),				//получаем родительский элемент списка
    menuItem = document.querySelectorAll('.menu_item'),		//получаем коллецию дочерних элементов
    hamburger = document.querySelector('.hamburger');			//получаем кнопку

    hamburger.addEventListener('click', () => {					//при нажатии на меню:
        hamburger.classList.toggle('hamburger_active');		//гамбургер получает форму крестика
        menu.classList.toggle('menu_active');					//меню становится видимым
    });

    menuItem.forEach(item => {										//перебор дочерних элементов списка
        item.addEventListener('click', () => {					//при клике на дочерний элемент(строку списка) происходит
            hamburger.classList.toggle('hamburger_active');	//крестик превращается обратно в гамбургер
            menu.classList.toggle('menu_active');				//меню исчезает
        })
    })
})


/* Меню находится с левой стороны от видимой области экрана.
При нажатии на кнопку родительскому элементу добавляется CSS свойство active,
которое делает меню видимым.*/