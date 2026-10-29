const allArticles = [
{
url: "https://note.com/lofty_auklet3246/n/n51c0a59d6e24",
img: "img/Gemini_Generated_Image_empxvqempxvqempx.png",
title: "【関東】日帰りで大満足！初心者にもおすすめの絶景ツーリングルート",
date: "2026.06.15"
},
{
 url: "https://note.com/lofty_auklet3246/n/n4153f5c4e4c0",
img: "img/Gemini_Generated_Image_jn01bkjn01bkjn01.png",
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

// 3. 実際に画面にランダムな記事を表示させる命令です
function displayRandomArticles() {
    // 記事データを複製して、ランダムに並び替えます
    const shuffled = shuffleArray([...allArticles]);
    
    // ランダムに並び替えた先頭から「2つの記事」だけを抜き出します
    // （もし1つの記事だけ表示したい場合は、ここを(0, 1)に変えます）
    const selectedArticles = shuffled.slice(0, 2);

    // HTMLの中に作った、記事を入れるための空っぽの箱（id="random-articles-grid"）を見つけます
    const gridContainer = document.getElementById('random-articles-grid');
    
    // 見つけた箱の中身をリセットします
    gridContainer.innerHTML = '';

    // 選ばれた記事の数だけ、HTMLのカードを自動的に組み立てて合体させていきます
    selectedArticles.forEach(article => {
        const cardHtml = `
            <a href="${article.url}" target="_blank" rel="noopener" class="article-card">
                <img src="${article.img}" alt="記事のサムネイル">
                <div class="card-content">
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <span class="date">${article.date}</span>
                </div>
            </a>
        `;
        // 組み立てたカードを、箱の中に1つずつ追加していきます
        gridContainer.innerHTML += cardHtml;
    });
}

// 4. トップページが読み込まれた瞬間に、上の「表示させる命令」を実行します
window.onload = displayRandomArticles;