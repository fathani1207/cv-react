
 const testSpecialChar = (str) =>{
    var test = true;
    var chars = str.toLowerCase().split("");
	for(var i =0; i < chars.length; i++){
		if(!(chars[i].charCodeAt() >= 97 && chars[i].charCodeAt() <= 122)){
            test = false
        }
	}
    return test
}

export const testNom = (name) =>{
	let str = name.split("");
	if(name.trim() === "") return false;
	else{
		for(var i = 0; i < str.length; i++){
			if(!(str[i].toUpperCase() === str[i])) return false;
		}
	}
	return testSpecialChar(name);
}

export const testPrenom = (name) => {
	let chars = name.split('');
	if(name.trim() === "") return false;
	else{
		for(var i = 0; i < chars.length; i++){
			if(i === 0){
				if(!(chars[i].toUpperCase() === chars[i])) return false; break;
			}
		}
	}
	
	return testSpecialChar(name);
}

export const _calculateAge = (birthday) => { // birthday is a date
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const testAge =(birthday1) =>{
	let age1 = _calculateAge(birthday1);
	if(age1 < 18) return false;
	return true;
}

export const testEmail = (emailT) => {
    const regexExp = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/gi;
    return regexExp.test(emailT);
}

export const testAdress = (str) => {
	var test = true;
	if(str.length > 300) return false;
	let r = /[~`!#$%\^&*+=\-\[\]\\';,@/{}|\\":<>\?]/g;
	if(r.test(str)) return false;
	return test;
}
