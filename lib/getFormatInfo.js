'use strict';

	function getHourInfo(format, value){
		var len = 1
		var specified = false

		var index = format.indexOf('h')

		if (~index){
			specified = true
			if (format.charAt(index + 1) == 'h'){
				len++
			}
		} else {
			index = format.indexOf('H')
			if (~index){
				specified = true
				if (format.charAt(index + 1) == 'H'){
					len++
				}
			}
		}

		return {
			len: len,
			specified: specified
		}
	}

	function getMinuteInfo(format, value){
		var len = 1
		var specified = false
		var index = format.indexOf('m')

		if (~index){
			specified =  true
			if (format.charAt(index+1) == 'm'){
				len++
			}
		}

		return {
			len: len,
			specified: specified
		}
	}

	function getSecondInfo(format, value){
		var len = 1
		var specified = false
		var index = format.indexOf('s')

		if (~index){
			specified = true
			if (format.charAt(index+1) == 's'){
				len++
			}
		}

		return {
			len: len,
			specified: specified
		}
	}

	function isMeridianUpperCase(format, value){
		var uppercase = true
		var specified = false
		var index = format.indexOf('a')

		if (~index){
			specified = true
			uppercase = false
		} else if (~format.indexOf('A')){
			specified = true
		}

		return {
			uppercase: uppercase,
			lowercase: !uppercase,
			specified: specified
		}
	}

module.exports = function(format){

	if (typeof format != 'string'){
		return
	}

	return {
		hour    : getHourInfo(format),
		minute  : getMinuteInfo(format),
		second  : getSecondInfo(format),
		meridian: isMeridianUpperCase(format)
	}
}
