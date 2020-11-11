$(function(){
	
	$('.navbar__btn-priority').click(function(){
		$(this).toggleClass("navbar__btn-priority--active");
		$('.priority').toggleClass("priority--active");
		$('.priority').slideToggle();
	});
	
	$('.popup-modal').magnificPopup({
		preloader: false,
/*		modal: true,*/
		removalDelay: 300,
		mainClass: 'mfp-fade',
		closeOnBgClick: true,
		showCloseBtn: false,
	});
	
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	$('.btn-menu').click(function(){
		$(this).toggleClass('btn-menu--active');
		$('.navbar').toggleClass('navbar--active');
		$('.main__cover').toggleClass('main__cover--active');
	});

	$('.main__cover').click(function(){
		$('.btn-menu').toggleClass('btn-menu--active');
		$('.navbar').toggleClass('navbar--active');
		$(this).toggleClass('main__cover--active');
	});

	$('.slct').click(function(){
		var dropBlock = $(this).parent().find('.drop');
		if( dropBlock.is(':hidden') ) {
			dropBlock.slideDown('fast');
			$(this).addClass('active');
			$('.drop').find('li').click(function(){
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
				var selectResult = $(this).html();
				$(this).parent().parent().find('input').val(selectResult);
				$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
				dropBlock.slideUp('fast');
			});
		} else {
			$(this).removeClass('active');
			dropBlock.slideUp('fast');
		}
		return false;
	});

	$("#dtBox").DateTimePicker({
		shortDayNames: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
		fullDayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
		shortMonthNames: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
		fullMonthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		titleContentDateTime: "Задайте дату и время"
	});

	$('#colorpicker').on('input', function() {
		$('#hexcolor').val(this.value.toUpperCase());
	});
	$('#hexcolor').on('input', function() {
	  $('#colorpicker').val(this.value.toUpperCase());
	});



});