//const's
const SCORE_ELEMENT = $("score");
const MAINROW = $("buttons");
const QUESTION = $("element");
const ELEMENTS = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra",	"Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No"];
const ELEMENTS_FULL = ["Wodór", "Hel", "Lit", "Beryl", "Bor", "Węgiel", "Azot", "Tlen", "Fluor","Neon", "Sód", "Magnez", "Glin", "Krzem", "Fosfor","Siarka","Chlor","Argon","Potas","Wapń","Skand","Tytan","Wanad","Chrom","Mangan","Żelazo","Kobalt","Nikiel","Miedź","Cynk","Gal","German","Arsen","Selen","Brom","Krypton","Rubid","Stront","Itr","Cyrkon","Niob","Molibden","Technet","Ruden","Rod","Palladium","Srebro","Kadm","Ind","Cyna","Antymon","Tellur","Jod","Ksenon","Cez","Bar","Lutet","Hafn","Tantal","Wolfram","Ren","Osm","Iryd","Platyna","Złoto","Rtęć","Tellur","Ołów","Bizmut","Polon","Astat","Radon","Frans","Rad","Lorens","Rutherford","Dubn","Seabor","Bohr","Has","Meinter","Darmsztadt","Roentgen","Kopernik","Nihon","Flerow","Moskow","Livermor","Tenes","Oganeson","Lantan","Cer","Prazeodym","Neodym","Promet","Samar","Europ","Gadolin","Terb","Dysproz","Holm","Erb","Tul","Iterb","Aktyn","Tor","Proaktyn","Uran","Neptun","Pluton","Ameryk","Kiur","Berkel","Kaliforn","Einstein","Ferm","Mendelew","Nobel"];
//fn's
let index = Math.floor(Math.random() * ELEMENTS.length);
let score = 0;
SCORE_ELEMENT.innerHTML = `Wynik: ${score}`;
function $(html){
	return document.getElementById(html);
}
function handle_button(inner){
	if (ELEMENTS[index] == inner){
		score+=1;
		SCORE_ELEMENT.innerHTML = `Wynik: ${score}`;
		next();
	}
	else{
		score=0;
		SCORE_ELEMENT.innerHTML = `Wynik: ${score}`;
		alert(`Zła odpowiedź! Prawidłową jest: ${ELEMENTS[index]}, a został zaznaczony ${inner}`);
	}
}
function not_repeated(chem_elem){
	for(let i=0;i<MAINROW.childElementCount;i++){
		const ROW = MAINROW.children[i];
		for (let j=0;j<ROW.childElementCount;j++){
			const BUTTON = ROW.children[j];
			if (BUTTON.innerHTML === chem_elem){
				return false;
			}
		}
	}
	return true;
}
function rand_element(len){
	return ELEMENTS[Math.floor(len * Math.random())];
}
function next(){
	index = Math.floor(ELEMENTS.length * Math.random());
	element = ELEMENTS[index];
	element_full = ELEMENTS_FULL[index];
	QUESTION.innerHTML = element_full;
	for(let i=0;i<MAINROW.childElementCount;i++){
		const ROW = MAINROW.children[i];
		console.log(ROW.children);
		for (let j=0;j<ROW.childElementCount;j++){
			const BUTTON = ROW.children[j];
			if (not_repeated(element)){
				let rand1 = Math.floor(Math.random() * MAINROW.childElementCount);
				let rand2 = Math.floor(Math.random() * ROW.childElementCount);
				console.log(`${rand1} ${rand2}`);
				MAINROW.children[rand1].children[rand2].innerHTML = element;
				BUTTON.onclick = function handle() { handle_button(BUTTON.innerHTML)};
			}
			else{
				if(BUTTON.innerHTML == element){
					BUTTON.onclick = function handle() { handle_button(BUTTON.innerHTML)};
					continue;
				}
				let element1 = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
				while(element1 == element && not_repeated(element1)){
					element1 = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
				}
				BUTTON.innerHTML = element1;
				BUTTON.onclick = function handle() { handle_button(BUTTON.innerHTML)};
			}
		}
	}
}
// Todo: const EN_ELEMENTS
//Let's 
let element = "";
let element_full = "";
//Start
next();
