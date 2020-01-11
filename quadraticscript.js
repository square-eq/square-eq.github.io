// Система оцiнювання тестів.

calc.onclick = function (){

	var myform = this.form;
	var sum=0;
	// Перевірка відповідей від користувача. Підсумовування балів та виведення їх у input.
	if (myform.answ.value == "test, test1")
		{
			sum++;
		}
		if (myform.answ1.value == "Test!")
		{
			sum++;
		}
		if (myform.answ2.value == "TEST")
		{
			sum++;
		}
		if (myform.answ3.value == "test")
		{
			sum++;
		}
		if (myform.answ4.value == "test2")
		{
			sum++;
		}
		if (myform.answ5.value == "test1")
		{
			sum++;
		}
			if (myform.answ6.value == "test3")
		{
			sum++;
		}
	// Саме виведення на екран.
	myform.result.value=sum;
};
// Система складання квадратичного рівняння за коефіцієнтами.
draw.onclick = function() {
	var form = this.form;
	var a = form.oldest.value;
	var b = form.old.value;
	var c = form.free.value;
	// Перевірка умов під час створення формули. Перевірка коефіцієнтів та запис їх у input.
	var answer = "";
	if (a == -1)
	{
		answer+="-x²";
	} else if (a == 1)
	{
		answer+="x²";
	} else {
		answer+=a + "x²";
	}
	if (b < 0)
	{
		answer+=b + "x";
	} else {
		answer+="+" + b + "x";
	}
	if (c < 0)
	{
		answer+=c + " =0;";
	} else {
		answer+= "+" + c + "=0;";
	}
	form.ok.value = answer;
// Обчислювання формул.
		if (a < 0 && b )
		var D;
		var x1;
		var x2;
		D = (b*b-4*a*c);
		x1 = (-b+Math.sqrt(D))/(2*a);
		x2 = (-b-Math.sqrt(D))/(2*a);
		if (D < 0)
		{
			form.roots.value = "Коренi вiдстунi!";
		} else {
			form.roots.value = x1.toFixed(3) + "; " + x2.toFixed(3);
		}
}
