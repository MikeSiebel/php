const personGenerator = {
	surnameJson: `{  
		"count": 15,
		"list": {
			"id_1": "Иванов",
			"id_2": "Смирнов",
			"id_3": "Кузнецов",
			"id_4": "Васильев",
			"id_5": "Петров",
			"id_6": "Михайлов",
			"id_7": "Новиков",
			"id_8": "Федоров",
			"id_9": "Кравцов",
			"id_10": "Николаев",
			"id_11": "Семёнов",
			"id_12": "Славин",
			"id_13": "Степанов",
			"id_14": "Павлов",
			"id_15": "Александров",
			"id_16": "Морозов"
		}
	}`,
	firstNameMaleJson: `{
		"count": 10,
		"list": {     
			"id_1": "Александр",
			"id_2": "Максим",
			"id_3": "Иван",
			"id_4": "Артем",
			"id_5": "Дмитрий",
			"id_6": "Никита",
			"id_7": "Михаил",
			"id_8": "Даниил",
			"id_9": "Егор",
			"id_10": "Андрей"
		}
	}`,
	firstNameFemaleJson: `{
		"count": 10,
		"list": {     
			"id_1": "Алина",
			"id_2": "Светлана",
			"id_3": "Евгения",
			"id_4": "Наталья",
			"id_5": "Эльвира",
			"id_6": "Ольга",
			"id_7": "Татьяна",
			"id_8": "Валентина",
			"id_9": "Елена",
			"id_10": "Екатерина"
		}
	}`,

	patronymicJson: `{
		"count": 10,
		"list": {     
			"id_1": "Александров",
			"id_2": "Борисов",
			"id_3": "Вадимов",
			"id_4": "Данилов",
			"id_5": "Егоров",
			"id_6": "Игорев",
			"id_7": "Кириллов",
			"id_8": "Олегов",
			"id_9": "Павлов",
			"id_10": "Иванов"
		}
	}`,

// we set professions of two types, only male, and unisex
	professionJson: `{
		"unisex": {
			"count": 10,
			"list": {     
				"id_1": "инженер",
				"id_2": "администратор",
				"id_3": "бухгалтер",
				"id_4": "менеджер",
				"id_5": "врач",
				"id_6": "учитель",
				"id_7": "юрист",
				"id_8": "экономист",
				"id_9": "риэлтор",
				"id_10": "повар"
			}
		},
		"male": {
			"count": 5,
			"list": {     
				"id_1": "слесарь",
				"id_2": "солдат",
				"id_3": "токарь",
				"id_4": "шахтёр",
				"id_5": "фрезеровщик"
			}
		}
	}`,

// set the months by numbers, and the number of days in a month
	month: `{
		"1": {
			"name": "января",
			"days": 31
		},
		"2": {
			"name": "февраля",
			"days": 28
		},
		"3": {
			"name": "марта",
			"days":31
		},
		"4": {
			"name": "апреля",
			"days": 30
		},
		"5": {
			"name": "мая",
			"days": 31
		},
		"6": {
			"name": "июнь",
			"days": 30
		},
		"7": {
			"name": "июля",
			"days": 31
		},
		"8": {
			"name": "августа",
			"days": 31
		},
		"9": {
			"name": "сентября",
			"days": 30
		},
		"10": {
			"name": "октября",
			"days": 31
		},
		"11": {
			"name": "ноября",
			"days": 30
		},
		"12": {
			"name": "декабря",
			"days": 31
		}
	}`,

	GENDER_MALE: 'Мужчина',
	GENDER_FEMALE: 'Женщина',

	randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

	randomValue: function (json) {
		const obj = JSON.parse(json);
		const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
		return obj.list[prop];
	},

// choose a name based on gender
	randomFirstName: function(isMale) {
		if (isMale) {
			return this.randomValue(this.firstNameMaleJson);
		} else {
		   return this.randomValue(this.firstNameFemaleJson); 
		}

	},

// choose a surname
	randomSurname: function() {

		return this.randomValue(this.surnameJson);

	},

// choose a patronymic
	randomPatronymic: function() {

		return this.randomValue(this.patronymicJson);

	},

// choose a profession
	randomProfession: function(isMale) {
		const obj = JSON.parse(this.professionJson);
		if (isMale) {
			let i = this.randomIntNumber(obj.unisex.count + obj.male.count, 1);
			// i - profession option number, if i more then obj.unisex.count take from the list of "male" professions
			if (i > obj.unisex.count) {
				const prop = `id_${i - obj.unisex.count}`;
				return obj.male.list[prop];
			} else {
				const prop = `id_${i}`;
				return obj.unisex.list[prop];
			}
		} else {
			const prop = `id_${this.randomIntNumber(obj.unisex.count, 1)}`;
			return obj.unisex.list[prop];
		}

	},

// displays date of birth
	randonBirthday: function () {
		let year = this.randomIntNumber(2021, 1921);
		const obj = JSON.parse(this.month);
		let monthNum = this.randomIntNumber(12, 1);
		let month = obj[monthNum].name;
		let day = this.randomIntNumber(obj[monthNum.toString()]["days"], 1);
		return `${day} ${month} ${year}`
	},


	getPerson: function () {
		this.person = {};
		this.person.birthday = this.randonBirthday();
		// choose gender (1 - мужчина, 0 - женщина)
		let gender = this.randomIntNumber();
		this.person.firstName = this.randomFirstName(gender);
		this.person.profession = this.randomProfession(gender);
		if (gender) {
			this.person.gender = this.GENDER_MALE;
			this.person.surname = this.randomSurname();
			this.person.patronymic = (this.randomPatronymic() + 'ич');
		} else {
			this.person.gender = this.GENDER_FEMALE;
			this.person.surname = (this.randomSurname() + 'а');
			this.person.patronymic = (this.randomPatronymic() + 'на');
		}
		return this.person;
	}
};