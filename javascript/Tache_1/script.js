//Tâche 1
const getEvenNumbers = (numbers) => {
    return numbers.filter(num => num % 2 === 0)
}

const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultat = getEvenNumbers(tableau);
console.log(resultat);

const resultatDiv = document.getElementById('tableau');
resultatDiv.textContent = 'La liste des nombres pairs : ' + resultat.join(', ');