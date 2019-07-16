// 1. Створіть 3 змінних, занесіть в них свої прізвище, ім'я та по-батькові.

let name, middleName, surName;

name = 'Андрій';
middleName = 'Володимирович';
surName = 'Кравчук';

// 2. Виведіть в консоль кількість літер в прізвищі.

let surNameLength = surName.length;
console.log(`Кількість літер в прізвищі ${surName}: ${surNameLength}`);

// 3. Виведіть в консоль знак копірайту, прізвище та ініціали, використовуючи конкатинацію строк:

let copyright = '\u00A9' + ' ' + 'Кравчук А.В.';
console.log(copyright); 

// 4. Виведіть в консоль однією командою прізвище, ім'я та по-батькові в стовбчик:

console.log(`Кравчук\nАндрій\nВолодимирович`);

// 5. Виведіть в консоль строку з трьох літер: останні літери кожної змінної.

let nameLength = name.length;
let middleNameLength = middleName.length;

console.log(`Строка з трьох останніх літер кожної змінної: 
	${name[nameLength - 1]}${middleName[middleNameLength - 1]}${surName[surNameLength - 1]}`);

/* 6. Створіть строку та виведіть її в консоль:
			Компанію "Об'єкт" визнано банкрутом.
			Реквізити: АУ\\3277085.
*/

let bankrupt = "Компанію \"Об'єкт\" визнано банкрутом.\nРеквізити: АУ\\\\3277085.";
console.log(bankrupt);

/* 7. Створіть 2 строки з вашими ім'ям та прізвищем.
Створіть функцію, що повертає строку: ім'я та прізвище, кома і кількість символів (без пробіла).
Використайте функцію, задавши їй дві створені змінні, виведіть результат в консоль:
Бобир Олександр, 14 символів */

let myName = 'Андрій';
let mySurname = 'Кравчук';

function stringCalc(myName, mySurname){
	let myString = myName + mySurname;
	let myStringLength = myString.length;
	let result = myName + ' ' + mySurname + ', ' + myStringLength + ' ' + 'символів';
	return console.log(result);
}

stringCalc(myName, mySurname);

/* 8. Дано телефон в форматі "0682091234". Потрібно його перетворити у формат "+38 (068) 209-12-34".
Створіть функцію, яка виконує цю задачу. */

function phoneConvert(phone){
	let phoneCode = phone.substr(0,3);
	let phoneNum1 = phone.substr(3,3);
	let phoneNum2 = phone.substr(6,2);
	let phoneNum3 = phone.substr(8,2);
	let result = '+38 ' + '(' + phoneCode + ')' + ' ' + phoneNum1 + '-' + phoneNum2 + '-' + phoneNum3;
	console.log(`Конвертований телефон ${phone}: ${result}`);
}

phoneConvert('0682091234');

// 9. Задайте у змінну своє ім'я. Виведіть його повідомленням на екран у верхньому та нижньому регістрах.

console.log(`Ім'я ${name} у верхньому регістрі: ${name.toUpperCase()}`);
console.log(`Ім'я ${name} у нижньому регістрі: ${name.toLowerCase()}`);

// 10. Виведіть в консоль індекс букви "ї" в стрічці "Ми приїхали в Запоріжжя".

let travel = 'Ми приїхали в Запоріжжя';
let travelIndex = travel.indexOf('ї');
let spaceIndex = travel.indexOf(' ');
console.log('індекс букви "ї" в стрічці "Ми приїхали в Запоріжжя": ' + travelIndex);

// 11. Розбийте цю стрічку на окремі слова та виведіть масив в консоль.

let travelWord = travel.split(' ');

console.log(travelWord);

/* 12. Виведіть в консоль 
	підстроку з 6 по 20 символ включно;
	виведіть в консоль підстроку починаючи з 3 символа, довжиною 8 символів;
	виведіть в консоль підстроку починаючи з букви ї до пробіла, не включаючи його. */

console.log(`підстрока починаючи з 6 по 20 символ включно: ${travel.substring(6, 21)}`);
console.log(`підстрока починаючи з 3 символа, довжиною 8 символів: ${travel.substr(3, 8)}`);
console.log('підстрока починаючи з букви ї до пробіла, не включаючи його: ' + travel.substr(travelIndex, spaceIndex));

/* 13. Задайте у дві змінні ваші ім'я та прізвище.
	Створіть функцію, що повертає строку, яка починається з перших трьох символів вашого імені 
	та останніх трьох символів прізвища.
	Результат виведіть в консоль. */

function makeStr(name, surname){
	let nameSym = name.substr(0, 3);
	let surnameSym = surname.slice(-3);
	console.log(`Строка, яка складається з перших 3 літер імені та останніх 3 літер прізвища: ` + 
		nameSym + surnameSym);
}

makeStr(name, surName);