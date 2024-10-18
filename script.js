let balance = localStorage.getItem('balance') ? parseInt(localStorage.getItem('balance')) : 0;
let energy = localStorage.getItem('energy') ? parseInt(localStorage.getItem('energy')) : 990;
const maxEnergy = 1000;
const energyRechargeRate = 1; // Энергия восстанавливается на 1 в секунду

document.getElementById('balance').innerText = balance;
document.getElementById('energyDisplay').innerText = `⚡ ${energy}/${maxEnergy}`;

// Функция для обновления энергии
function rechargeEnergy() {
    if (energy < maxEnergy) {
        energy += energyRechargeRate;
        localStorage.setItem('energy', energy);
        document.getElementById('energyDisplay').innerText = `⚡ ${energy}/${maxEnergy}`;
    }
}

// Функция для обработки нажатия на кнопку
document.getElementById('tapCoin').addEventListener('click', () => {
    if (energy > 0) {
        balance += 1;
        energy -= 1;
        localStorage.setItem('balance', balance);
        localStorage.setItem('energy', energy);
        document.getElementById('balance').innerText = balance;
        document.getElementById('energyDisplay').innerText = `⚡ ${energy}/${maxEnergy}`;
    }
});

// Запускаем обновление энергии каждые 1000 мс (1 секунда)
setInterval(rechargeEnergy, 1000);
