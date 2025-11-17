const textInput = document.getElementById('textInput');
const resetButton = document.getElementById('resetButton');
const charCountTotal = document.getElementById('charCountTotal');
const charCountNoNewlines = document.getElementById('charCountNoNewlines');
const charCountNoNewlinesNoSpaces = document.getElementById('charCountNoNewlinesNoSpaces');
const copyButton = document.getElementById('copyButton');

// テキストエリアの自動高さ調整
function adjustTextareaHeight() {
    textInput.style.height = 'auto'; // 一度高さをリセット
    textInput.style.height = textInput.scrollHeight + 'px'; // スクロール高さに合わせて調整
}

// 文字数カウントと表示の更新
function updateCharacterCounts() {
    const text = textInput.value;

    // そのままの文字数
    charCountTotal.textContent = text.length;

    // 改行を除いた文字数
    const textNoNewlines = text.replace(/(\r\n|\n|\r)/g, '');
    charCountNoNewlines.textContent = textNoNewlines.length;

    // 改行・空白を除いた文字数
    const textNoNewlinesNoSpaces = text.replace(/(\r\n|\n|\r|\s)/g, '');
    charCountNoNewlinesNoSpaces.textContent = textNoNewlinesNoSpaces.length;

    adjustTextareaHeight(); // カウント更新後に高さも調整
}

// イベントリスナーの設定
textInput.addEventListener('input', updateCharacterCounts);
resetButton.addEventListener('click', () => {
    textInput.value = '';
    updateCharacterCounts(); // カウントをリセット
});

const titleElement = document.querySelector('h1');
const originalTitle = "リアルタイム文字数カウンター";
const brokenTitle = "リアルタイム<br>文字数カウンター";

function adjustTitleForWidth() {
    if (window.innerWidth <= 768) { // 例として768pxをブレークポイントとします
        if (titleElement.innerHTML !== brokenTitle) {
            titleElement.innerHTML = brokenTitle;
        }
    } else {
        if (titleElement.innerHTML !== originalTitle) {
            titleElement.innerHTML = originalTitle;
        }
    }
}

// イベントリスナーの設定
textInput.addEventListener('input', updateCharacterCounts);
resetButton.addEventListener('click', () => {
    textInput.value = '';
    updateCharacterCounts(); // カウントをリセット
});
copyButton.addEventListener('click', () => {
    textInput.select(); // テキストエリアの内容を選択
    document.execCommand('copy'); // クリップボードにコピー
});
window.addEventListener('resize', adjustTitleForWidth); // ウィンドウのリサイズを監視

// 初期表示
updateCharacterCounts();
adjustTitleForWidth(); // 初期ロード時にも調整
