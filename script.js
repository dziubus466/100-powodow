const button = document.querySelector('button');
const answer = document.querySelector('.answer');
const lista = [
	'bo jesteś najsłodsza',
	'bo jesteś troskliwa',
	'bo jesteś bardzo miła',
	'bo martwisz się o mnie',
	'bo bardzo się o mnie przejmujesz ',
	'bo nie znam innej takiej osoby jak ty',
	'bo jesteś kochana',
	'bo cię uwielbiam',
	'bo jesteś moim małym kotkiem',
	'bo jesteś moją grzeczną dziewczynką',
	'bo jesteś szczera ',
	'bo dbasz o mnie ',
	'bo jesteś dla mnie najważniejsza',
	'bo jesteś inteligenta',
	'bo jesteś mądra',
	'bo jesteś moja i tylko moja',
	'bo nie chcesz żebym bym smutny',
	'bo jesteś dla mnie kimś wyjątkowym',
	'bo tak XD ',
	'bo jesteś radosna',
	'bo jesteś po prostu zajebista',
	'bo troszczysz się o mnie',
	'bo dzięki tobie jestem bardziej szczęśliwy',
	'bo masz bardzo słodki głos',
	'bo jestem twoim dzibusiem',
	'bo cieszysz się jak jestem zazdrosny',
	'bo spędzasz ze mną dużo czasu',
	'bo jesteś idealna',
	'bo jesteś najgrzeczniejszą dziewczynką',
	'bo jesteś unikatowa ',
	'bo jesteś moją ulubioną osobą ',
	'bo jesteś najlepszą osobą którą spotkałem w swoim życiu',
	'bo uwielbiam ciebie męczyć <333',
	'bo nie ma drugiej takiej jak ty',
	'bo słodko kichasz ',
	'bo pięknie śpiewasz ',
	'bo jesteś najlepsza w valo ',
	'bo jesteś najlepsza w lola',
	'bo nie pozwalasz wpierdalać mi cebuli jak jabłko ',
	'bo zawszę tęsknie za tobą ',
	'bo chcesz mi pomóc ',
	'bo uwielbiam cię chwalić',
	'bo uwielbiam jak się cieszysz ',
	'bo słodko się cieszysz ',
	'bo zawsze mnie pocieszasz ',
	'bo od kiedy cię znam to naprawdę jestem bardziej szczęśliwy',
	'bo uwielbiam z tobą grać ',
	'bo jesteś moim duo',
	'bo jesteś skromna ',
	'bo chcesz być moja ',
	' bo chcesz być moją grzeczną dziewczynką',
	'bo chcesz być moim kotkiem ',
	'bo uzależniłem się od ciebie',
	'bo uwielbiam sprawić tobie radość ',
	'bo nigdy nie kłamiesz ',
	'bo zawsze myślę o tobie ',
	'bo chcesz oglądać za mną amime ',
	'bo kocham z tobą rozmawiać',
	'bo lubię jak mówisz na mnie daddy ',
	'bo lubię jak mówisz na mnie fifi ',
	'bo lubię jak mówisz na mnie dzibuś ',
	'bo jesteś dla mnie kimś wyjątkowym',
	'bo jesteś urocza',
	'bo uwiłbym jak panikujesz ',
	'bo chwalisz mnie ',
	'bo jako jednej z nie wielu osób ufam tobie',
	'bo dzięki tobie zacząłem grać w lola ',
	'bo słodko panikujesz ',
	'bo bardzo słodko śpiewasz',
	'bo jesteś jedyną osobą o którą jestem zazdrosny',
	'bo dla ciebie wszystko ',
	'bo jesteś najsłodszą pandą na świcie ',
	'bo jesteś najsłodszym kotkiem na świecie ',
	'bo jesteś najsłodsza na świcie ',
	'bo słodko panikujesz ',
	'bo słodko się wstydzisz ',
	'bo zgłaszasz każdego kto mnie obraził ',
	'bo ufasz mi ',
	'bo naprawdę myślę że to jest wyjątkowa przyjaźń ',
	'bo uspokajasz mnie ',
	'bo potrafisz mnie uspokoić ',
	'bo wysyłasz mi zdjęcia kotków ',
	'bo zawsze wysyłasz mi kotka na dobranoc ',
	'bo za wszystko przepraszasz ',
	'bo bardzo mi zależy na tobie ',
	'bo jesteś moją ulubioną osobą',
	'bo naprawdę myślę że może wyjść z tego coś więcej ',
	'bo tak mówię ',
	'bo tak jest i tyle ',
	'bo lubisz się ze mną kłócić ',
	'bo zawsze cieszę się jak piszesz do mnie ',
	'bo bardzo się mną przejmujesz',
	'bo jesteś bardzo kochana',
	'bo lubisz jak jestem szczęśliwy',
	'bo jesteś slay ',
	'bo nie znam nikogo lepszego ',
	'bo jesteś moja i tylko moja ',
	'bo uwielbiam mówić na ciebie kotek ',
	'bo wszystko rozumiesz',
];

const getcontent = () => {
	let number = Math.floor(Math.random() * lista.length);
	answer.textContent = lista[number];
};

button.addEventListener('click', getcontent());
