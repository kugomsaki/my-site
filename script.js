const allArticles = [
    {
        url: "https://note.com/lofty_auklet3246/n/n51c0a59d6e24",
        img: "img/Gemini_Generated_Image_jn01bkjn01bkjn01.png", // 正しい画像ファイル名に修正
        title: "【関東】日帰りで大満足！初心者にもおすすめの絶景ツーリングルート",
        date: "2026.06.15"
    },
    {
        url: "https://note.com/lofty_auklet3246/n/n4153f5c4e4c0",
        img: "img/Gemini_Generated_Image_empxvqempxvqempx.png", // 正しい画像ファイル名に修正
        title: "【2026年最新】ロングツーリングも快適！中型旅バイクおすすめランキングTOP5",
        date: "2026.06.16" 
    }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}

function displayRandomArticles() {
    const shuffled = shuffleArray([...allArticles]);
    const selectedArticles = shuffled.slice(0, 2);

    const gridContainer = document.getElementById('random-articles-grid');
    gridContainer.innerHTML = '';

    selectedArticles.forEach(article => {
        const cardHtml = `
            <a href="${article.url}" target="_blank" rel="noopener" class="article-card">
                <img src="${article.img}" alt="記事のサムネイル">
                <div class="card-content">
                    <h3>${article.title}</h3>
                    <span class="date">${article.date}</span>
                </div>
            </a>
        `;
        gridContainer.innerHTML += cardHtml;
    });
}

window.onload = displayRandomArticles;