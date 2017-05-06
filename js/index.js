$(document).ready(function () {
	var users = [
		{
			name: 'Vova',
			age: 27,
			salery: 0
		},
		{
			name: 'Nazar',
			age: 27,
			salery: 1000
		},

		{
			name: 'Tarik',
			age: 27,
			salery: 1000
		}
	];
	var json_str = [];

	$('#object_json').click(function () {
		json_str = JSON.stringify(users);
		$('#container').append(json_str);
	});

	$('#json_object').click(function () {
		var json_object = JSON.parse(json_str);
		console.log(json_object);
		$('#container').html('');
		var items = [];

		$.each(json_object, function(key, obj) {
			items.push("<li class='" + key + "'>" + obj.name + ' ' + obj.age + ' ' + obj.salery + "</li>");
		});

		$("<ul/>", {
			html: items.join('')
		}).appendTo('#container');

	});
});






