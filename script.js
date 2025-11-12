const textInput = document.getElementById('textInput');
const resetButton = document.getElementById('resetButton');
const charCountTotal = document.getElementById('charCountTotal');
const charCountNoNewlines = document.getElementById('charCountNoNewlines');
const charCountNoSpaces = document.getElementById('charCountNoSpaces');
const charCountNoNewlinesNoSpaces = document.getElementById('charCountNoNewlinesNoSpaces');

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

    // 空白を除いた文字数
    const textNoSpaces = text.replace(/\s/g, '');
    charCountNoSpaces.textContent = textNoSpaces.length;

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

// 初期表示
updateCharacterCounts();
