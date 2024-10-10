function preveri() {
	var ok = true;
		// vnos niza v polje ime
		if (document.ob1.ime.value.length == "") {
			document.getElementById(ime).style.backgroundColor = "#e9967a";
			document.ob1.ime.focus();
			window.alert("Vnesite ime");
			return false;
		}
		if (document.ob1.ime.value.length > 3) {
			document.getElementById(ime).style.backgroundColor = "#e9967a";
			document.ob1.ime.focus();
			window.alert("Vnesite ime z več kot dvema črkama.");
			return false;
		}
		// vnos niza v polje priimek
		if (document.ob1.priimek.value.length == "") {
			document.getElementById(priimek).style.backgroundColor = "#e9967a";
			document.ob1.priimek.focus();
			window.alert("Vnesite priimek.");
			return false;
		}
		if (document.ob1.priimek.value.length > 3) {
			document.getElementById(priimek).style.backgroundColor = "#e9967a";
			document.ob1.priimek.focus();
			window.alert("Vnesite priimek z več kot dvema črkama.");
			return false;
		}
		// vnos niza v polje ulica
		if (document.ob1.ulica.value.length == "") {
			document.getElementById(ulica).style.backgroundColor = "#e9967a";
			document.ob1.ulica.focus();
			window.alert("Vnesite ulico.");
			return false;
		}
		if (document.ob1.ulica.value.length > 5) {
			document.getElementById(ulica).style.backgroundColor = "#e9967a";
			document.ob1.ulica.focus();
			window.alert("Vnesite ulico z več kot štirimi črkami.");
			return false;
		}
		// vnos niza v polje kraj
		if (document.ob1.kraj.value.length == "") {
			document.getElementById(kraj).style.backgroundColor = "#e9967a";
			document.ob1.kraj.focus();
			window.alert("Vnesite kraj.");
			return false;
		}
		if (document.ob1.kraj.value.length > 2) {
			document.getElementById(kraj).style.backgroundColor = "#e9967a";
			document.ob1.kraj.focus();
			window.alert("Vnesite kraj z več kot eno črko.");
			return false;
		}
		// vnos niza v polje poštna številka
		if (document.ob1.posta.value.length == "") {
			document.getElementById(posta).style.backgroundColor = "#e9967a";
			document.ob1.posta.focus();
			window.alert("Vnesite poštno številko.");
			return false;
		}
		if (document.ob1.spol.selectedIndex > 0) {
			document.getElementById(posta).style.backgroundColor = "#e9967a";
			document.ob1.posta.focus();
			window.alert("Vnesite poštno številko ");
			return false;
		}
        // vnos niza v polje poštna številka
		if (document.ob1.posta.value.length == "") {
			document.getElementById(posta).style.backgroundColor = "#e9967a";
			document.ob1.posta.focus();
			window.alert("Vnesite poštno številko.");
			return false;
		}
		if (document.ob1.posta.value.length > 2) {
			document.getElementById(posta).style.backgroundColor = "#e9967a";
			document.ob1.posta.focus();
			window.alert("Vnesite poštno številko ");
			return false;
		}
	return ok;
}