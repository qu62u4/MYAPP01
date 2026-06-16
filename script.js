function calcCarbon() {
    const km = +document.getElementById('km').value || 0;
    const hours = +document.getElementById('ac-hours').value || 0;
    
    // 簡單碳排放係數公式
    const carbon = ((km * 0.15) + (hours * 0.6)).toFixed(2);
    
    document.getElementById('carbon-num').innerText = carbon;
    const box = document.getElementById('result');
    const status = document.getElementById('carbon-status');
    box.style.display = 'block';
    
    if (carbon < 3) {
        status.innerText = "🍃 低碳生活大師！做得太棒了！";
        status.style.color = "#16a34a";
    } else if (carbon <= 8) {
        status.innerText = "😐 普普通通，還有進步空間唷！";
        status.style.color = "#d97706";
    } else {
        status.innerText = "⚠️ 碳排亮紅燈！試著搭公車或關掉冷氣吧！";
        status.style.color = "#dc2626";
    }
}