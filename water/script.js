let currentWater = 0;
let ecoCount = 0;

function addWater(amount) {
    currentWater += amount;
    if (currentWater > 2000) currentWater = 2000;
    document.getElementById('water-count').innerText = currentWater;
    
    const pct = (currentWater / 2000) * 100;
    document.getElementById('water-bar').style.width = pct + '%';
    
    if (currentWater === 2000) {
        setTimeout(() => alert("🎉 太棒了！今天的水分補充達標囉！"), 200);
    }
}

function toggleEco(checkbox) {
    if (checkbox.checked) ecoCount++;
    else ecoCount--;
    document.getElementById('eco-count').innerText = ecoCount;
}