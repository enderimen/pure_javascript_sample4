const inventors = [
	{first: 'Akşemseddin', year :'1389',passed:'1459'},
	{first: 'Abdüsselam', year :'1926',passed:'1980'},
	{first: 'Battani', year :'858',passed:'929'},
	{first: 'Beyruni', year :'973',passed:'1051'},
	{first: 'Cabir Bin Hayyan', year :'721',passed:'805'},
	{first: 'Cahiz', year :'776',passed:'869'},
	{first: 'Cezeri', year :'1136',passed:'1206'},
	{first: 'Demiri', year :'1349',passed:'1405'},
	{first: 'Dinaveri', year :'815',passed:'895'},
	{first: 'Ebu’l Fida', year :'1271',passed:'1331'},
	{first: 'Ebu’l Vefa', year :'940',passed:'998'},
	{first: 'Demiri', year :'785',passed:'886'},
	{first: 'Evliya Çelebi', year :'1611',passed:'1682'},
	{first: 'Farabi', year :'870',passed:'950'},
	{first: 'Fatih Sultan Mehmet', year :'1432',passed:'1481'}
];

//	Array.prototype.filter()
//	1. Filter the list of inventors for those who born in the 1500's

const fifteen = inventors.filter(function (inventor) {
	if (inventor.year >= 700 && inventor.year < 1100) {
		return true;
	}else{
		return false;
	}
});

console.table(fifteen);


//	Array.prototype.map()
//	2. Give us an array of the inventory fist and last names

const fullnames = inventors.map(inventor => `${inventor.first} ---> ${inventor.year}`);

console.table(fullnames);

//	Array.prototype.sort()
//	3. Sort the inventors by birthdate, oldest to youngest

const ordered = inventors.sort(function (a,b) { // const ordered = inventors.sort((a,b)=> a.year > b.year ? 1 : -1)
	if (a.year > b.year) {
		return 1;
	}else{
		return -1;
	}
});

console.table(ordered);

//	Array.prototype.reduce()
//	4. How many years did all the inventors live?

const totalYears = inventors.reduce((total,inventor) =>{
	return total + (inventor.passed - inventor.year);
});

console.log("Total live time: " + totalYears);

//	5. Sort the inventors by years lived ?

const oldest = inventors.sort(function (a,b) {
	const lastGuy = a.passed - a.year;
	const nextGuy = b.passed - b.year;
	return lastGuy > nextGuy ? -1 : 1;
});

console.table(oldest);