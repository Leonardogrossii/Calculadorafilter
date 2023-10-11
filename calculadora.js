function calcularIdades() {
    const inputIdades = document.getElementById('idades').value;
    const idades = inputIdades.split(',').map(Number);

    const maioresDe18 = idades.filter(idade => idade >= 18);
    const menoresDe18 = idades.filter(idade => idade < 18);

    const maioresDe18List = document.getElementById('maioresDe18');
    const menoresDe18List = document.getElementById('menoresDe18');

    maioresDe18List.innerHTML = maioresDe18.map(idade => `<li>${idade}</li>`).join('');
    menoresDe18List.innerHTML = menoresDe18.map(idade => `<li>${idade}</li>`).join('');
}
