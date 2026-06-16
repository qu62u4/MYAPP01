const items = [
    { name: "🥤 寶特瓶", type: "plastic" },
    { name: "📦 瓦楞紙箱", type: "paper" },
    { name: "🚬 乾淨菸蒂", type: "trash" },
    { name: "🛍️ 乾淨塑膠袋", type: "plastic" },
    { name: "📰 舊報紙", type: "paper" },
    { name: "🥡 沾滿油污的便當盒", type: "trash" }
];

let currentIndex = 0;
let score = 0;

function nextItem() {
    if (currentIndex < items.length) {
        document.getElementById('item-box').innerText = items[currentIndex].name;
    } else {
        document.getElementById('item-box').innerText = "遊戲結束！🎉";
        document.querySelector('.btn-grid').style.display = 'none';
        alert(`挑戰結束！你的最終得分是：${score} 分！`);
    }
}

function checkAnswer(answer) {
    if (items[currentIndex].type === answer) {
        score += 10;
        alert("✅ 答對了！加 10 分！");
    } else {
        alert("❌ 糟糕，分類錯囉！");
    }
    document.getElementById('score-val').innerText = score;
    currentIndex++;
    nextItem();
}

// 啟動遊戲
nextItem();