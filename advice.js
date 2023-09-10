const loadAdvice = (id) => {
    const url = `https://api.adviceslip.com/advice/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showAdvice(data.slip))
        .catch(error => console.log(error))
}

const showAdvice = (adviceObj) => {
    // console.log(adviceObj);
    const {id, advice} = adviceObj;
    const adviceContainer = document.getElementById('advice-container');
    const div = document.createElement('div');
    div.classList.add('col');
    div.classList.add('display-f');
    div.innerHTML = `
    <div class="card mb-3 bd-dark-blue" style="width: 18rem;">
        <div class="card-body">
            <p id="advice-id">advice #${id}</p>
            <p class="card-text">${advice}</p>
        </div>
    </div>
    `
    adviceContainer.appendChild(div);
}

const getRandonNum = () => {
    const randomNum = Math.ceil(Math.random()*100);

    return randomNum;

}


for (let i = 0; i < 3; i++) {
    const randomNum = getRandonNum();
    loadAdvice(randomNum);
}