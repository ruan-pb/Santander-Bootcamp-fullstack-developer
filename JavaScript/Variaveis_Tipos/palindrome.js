function verificarPalindrono(string){
    if(!string)return "String inexistente";

    return string.split("").reverse().join("") === string

}


console.log(verificarPalindrono("gato"))

function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('asa');