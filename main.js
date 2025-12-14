class ChoicesQuiz {
  constructor(
    question,
    choices,
    correct,
    level,
    isTextQuestion = false,
    explanation = null // ← 解説（任意）
  ) {
    this.question = question;
    this.choices = choices;
    this.correct = correct;
    this.level = level;
    this.isTextQuestion = isTextQuestion;
    this.explanation = explanation;
  }

  isCorrect(answer) {
    if (this.isTextQuestion) {
      if (Array.isArray(this.correct)) {
        return this.correct.some(c => c.trim() === answer.trim());
      }
      return this.correct.trim() === answer.trim();
    }
    if (Array.isArray(this.correct)) {
      return this.correct.includes(answer);
    }
    return this.correct === answer;
  }
}


const quiz = [
  new ChoicesQuiz('Q1.ボーイスカウトのモットーは？（日本語で解答）', ['選択肢1'], 'そなえよつねに', '初級', true,'ボーイスカウトのモットーは「そなえよつねに」です。これは、常に準備をしておくことの重要性を示しています。'),
  new ChoicesQuiz('Q2. 国旗を掲揚したりするときに用いられるロープの端と端を繋ぎ合わせる結びは？',
  ['一重継ぎ', '二重継ぎ', '八重継ぎ', 'ちぢめ結び'], '一重継ぎ', '初級',false,'国旗を掲揚する際には、一重継ぎを使用してロープの端を繋ぎ合わせます。この結び方は簡単でありながら、しっかりと固定できるため、国旗の掲揚に適しています。'),
  new ChoicesQuiz('Q3.連盟歌「花はかおるよ」にて、「⬜︎⬜︎ ⬜︎⬜︎ 重きぞ ⬜︎⬜︎」という歌詞がある。⬜︎⬜︎に入る漢字2文字は？ ',
  ['選択肢1'], '名誉', '初級', true),
  new ChoicesQuiz('Q4. たちかまどを作るとき、ハサミ縛りは何箇所するか？',
  ['2', '4', '6', '8'], '2', '初級',false),
   new ChoicesQuiz('Q5. ソング「そなえよつねに」の2番の歌詞で、「築きたてて」の後にくる歌詞は？',
  ['選択肢1'], 'この世のため', '初級',true),
  new ChoicesQuiz('Q6. スカウトのおきてはいくつあるか？',
  ['6', '7', '8', '10'], '8', '初級',false),
  new ChoicesQuiz('Q7. 次のうち、スカウトのちかいとして最も適切なものを選べ',
  ['神（仏）と国とに誠を尽くしちかいを守ります', 'そなえよつねに', 'いつも、他の人々をたすけます', '名誉にかけて、おきてを守ります'], 'いつも、他の人々をたすけます', '初級',false),
  new ChoicesQuiz('Q8. スカウトのおきての中で「スカウトは⬜︎⬜︎の心をもつ」とある。⬜︎⬜︎に入る言葉は？',
  ['選択肢1'], '感謝', '初級', true),
  new ChoicesQuiz('Q9. スカウトのスローガンは？(日本語で解答し漢字の所は漢字で答えること)',
  ['選択肢1'], ['日々の善行' ,'日日の善行'], '初級', true),
  new ChoicesQuiz('Q10. スカウトの集合のサインで「両腕をまっすぐ前に伸ばす」というサインがあるがこのときどのように集まるべきか？',
  ['U字形に集まる', '横隊に集まる', '縦隊に集まる', '円形に集まる'], '縦隊に集まる', '初級',false),
// 2級の問題
  new ChoicesQuiz('Q1.蜂やアブに刺された時の応急処置として最も適しているものは',
  ['セロハンテープをあてて針を除去し、洗い流す', '抗ヒスタミン軟膏を塗る','患部を冷やし、冷湿布を数回行う','毒針を抜いたのち、傷口をよく洗う'], '毒針を抜いたのち、傷口をよく洗う', '2級',false),
  new ChoicesQuiz('Q2.ボーイスカウトのモットーは？（日本語で解答）', ['選択肢1'], 'そなえよつねに', '2級', true),
  new ChoicesQuiz('Q3. ロープをしっかりと張るため一時的に杭などに止めるときや縄はしごの横棒を止める時に使う結びは？',
  ['垣根結び', '張り綱結び', 'てこ結び', 'よろい結び'], 'てこ結び', '2級',false),
  new ChoicesQuiz('Q4. たちかまどを作るとき、ハサミ縛りは何箇所するか？',
  ['2', '4', '6', '8'], '2', '2級',false),
  new ChoicesQuiz('Q5. 国旗を掲揚したりするときに用いられるロープの端と端を繋ぎ合わせる結びは？',
  ['一重継ぎ', '二重継ぎ', '八重継ぎ', 'ちぢめ結び'], '一重継ぎ', '2級',false),
  new ChoicesQuiz('Q6. 南東より東寄りで東より南寄りの方角の名称は？(16方位のうち一つ答えよ)',
  ['南東南', '南東東', '東南東', '南南東'], '東南東', '2級',false),
  new ChoicesQuiz('Q7. 次のうち、スカウトのちかいとして最も適切なものを選べ',
  ['神（仏）と国とに誠を尽くしちかいを守ります', 'そなえよつねに', 'いつも、他の人々をたすけます', '名誉にかけて、おきてを守ります'], 'いつも、他の人々をたすけます', '2級',false),
  new ChoicesQuiz('Q8. 鼻血が出た時の応急処置として正しいものは？',
  ['仰向けにして安静に寝かす', '鼻にティッシュを詰め真上を向く', '小鼻（鼻翼）をしっかりとつまみ押さえる', '冷たいタオルなどで鼻の付け根や前頭部を冷やす'], '小鼻（鼻翼）をしっかりとつまみ押さえる', '2級',false),
  new ChoicesQuiz('Q9. 熱中症の症状を三段階に分けた時二段階目の症状として最も適するものは？',
  ['めまい、立ちくらみ、大量の発汗', '倦怠感、意識がなんとなくおかしい', 'けいれん、高体温', '手足の痺れ、筋肉の硬直'], '倦怠感、意識がなんとなくおかしい', '2級',false),
  new ChoicesQuiz('Q10. 水準点とは？',
  ['高さの基準点であり国家基準点', '（緯度・経度）の基準となる点で国家基準点ではない', 'GNSSの連続観察点であり国家基準点', '（緯度・経度）の基準となる国家基準点'], '高さの基準点であり国家基準点', '2級',false),
  new ChoicesQuiz('Q11. スカウトのおきてはいくつあるか？',
  ['6', '7', '8', '10'], '8', '2級',false),
  new ChoicesQuiz('Q12.片かな手旗信号で、11はなんという文字になるか？（ひらがな1文字）', ['選択肢1'], 'く', '2級', true),
  new ChoicesQuiz('Q13.連盟歌「花はかおるよ」にて、「⬜︎⬜︎ ⬜︎⬜︎ 重きぞ ⬜︎⬜︎」という歌詞がある。⬜︎⬜︎に入る漢字2文字は？ ',
  ['選択肢1'], '名誉', '2級', true),
  new ChoicesQuiz('Q14トートラインヒッチの呼び方が一般的で、テントの張りの強さを調節するところに使う結び方の名称は？（〜結びと解答）',
  ['選択肢1'], ['張り綱結び', '張りつな結び' , 'はりつな結び', 'はり綱結び' , '〜結び'], '2級', true),
  new ChoicesQuiz('Q15. ソング「そなえよつねに」の2番の歌詞で、「築きたてて」の後にくる歌詞は？',
  ['選択肢1'], 'この世のため', '2級',true),
  new ChoicesQuiz('Q16.スカウトのおきてで「スカウトは〜である」という形のおきてはいくつあるか（数字のみで解答）', ['選択肢1'], ['5','５'], '2級', true),
  new ChoicesQuiz('Q17.スカウトのおきてで「スカウトは〜である」という形のおきてがある。〜に入る漢字2文字は？', ['選択肢1'], ['快活' , '誠実' , '親切' , '勇敢' , '質素'], '2級', true),
  new ChoicesQuiz('Q18. スカウトのおきての中で「スカウトは⬜︎⬜︎の心をもつ」とある。⬜︎⬜︎に入る言葉は？',
  ['選択肢1'], '感謝', '2級', true),
  new ChoicesQuiz('Q19. スカウトのスローガンは？(日本語で解答し漢字の所は漢字で答えること)',
  ['選択肢1'], ['日々の善行' ,'日日の善行'], '2級', true),
  new ChoicesQuiz('Q20. スカウトの集合のサインで「両腕をまっすぐ前に伸ばす」というサインがあるがこのときどのように集まるべきか？',
  ['U字形に集まる', '横隊に集まる', '縦隊に集まる', '円形に集まる'], '縦隊に集まる', '2級',false),
// 1級の問題
  new ChoicesQuiz('Q1.「もともと柱などに馬を繋いでおくときに使われていた」これは何という結びの説明か？（日本語で解答）', 
  ['選択肢1'], ['馬つなぎ' ,'うまつなぎ'], '1級', true),
   new ChoicesQuiz('Q2. ロープをしっかりと張るため一時的に杭などに止めるときや縄はしごの横棒を止める時に使う結びは？',
  ['垣根結び', '張り綱結び', 'てこ結び', 'よろい結び'], 'てこ結び', '1級',false),
  new ChoicesQuiz('Q3.蜂やアブに刺された時の応急処置として最も適しているものは',
  ['セロハンテープをあてて針を除去し、洗い流す', '抗ヒスタミン軟膏を塗る','患部を冷やし、冷湿布を数回行う','毒針を抜いたのち、傷口をよく洗う'], '毒針を抜いたのち、傷口をよく洗う', '1級',false),
   new ChoicesQuiz('Q4. 南東より東寄りで東より南寄りの方角の名称は？(16方位のうち一つ答えよ)',
  ['南東南', '南東東', '東南東', '南南東'], '東南東', '1級',false),
  new ChoicesQuiz('Q5.胸骨圧迫の1分間の正しいリズムとして最も近しいものは？', ['50~60', '70~80','80~100','100~120'], '100~120', '1級',false),
  new ChoicesQuiz('Q6.「アンノウン・スカウト・ストーリー」にて少年に助けられた人の名前は？（フルネームで解答）', ['選択肢1'], ['ウィリアム・ボイス','ウィリアムボイス','ウィリアムボイス氏'], '1級', true),
  new ChoicesQuiz('Q7.片かな手旗信号で、11はなんという文字になるか？（ひらがな1文字）', ['選択肢1'], 'く', '1級', true),
  new ChoicesQuiz('Q8.連盟歌「花はかおるよ」にて、「⬜︎⬜︎ ⬜︎⬜︎ 重きぞ ⬜︎⬜︎」という歌詞がある。⬜︎⬜︎に入る漢字2文字は？ ',
  ['選択肢1'], '名誉', '1級', true),
  new ChoicesQuiz('Q9.スカウトのおきてで「スカウトは〜である」という形のおきてはいくつあるか（数字のみで解答）', ['選択肢1'], ['5','５'], '1級', true),
  new ChoicesQuiz('Q10.スカウトのおきてで「スカウトは〜である」という形のおきてがある。〜に入る漢字2文字は？', ['選択肢1'], ['快活' , '誠実' , '親切' , '勇敢' , '質素'], '1級', true),
  new ChoicesQuiz('Q11. スカウトのおきての中で「スカウトは⬜︎⬜︎の心をもつ」とある。⬜︎⬜︎に入る言葉は？',
  ['選択肢1'], '感謝', '1級', true),
  new ChoicesQuiz('Q12.トートラインヒッチの呼び方が一般的で、テントの張りの強さを調節するところに使う結び方の名称は？（〜結びと解答）',
  ['選択肢1'], ['張り綱結び', '張りつな結び' , 'はりつな結び', 'はり綱結び' , '〜結び'], '1級', true),
  new ChoicesQuiz('Q13. ソング「そなえよつねに」の2番の歌詞で、「築きたてて」の後にくる歌詞は？',
  ['選択肢1'], 'この世のため', '1級',true),
  new ChoicesQuiz('Q14.日本の国旗は長方形で縦⬜︎:横⬜︎の割合である。⬜︎に入る割合は次のうちどれ？',
  ['縦1:横2', '縦2:横3','縦3:横4','縦5:横11'], '縦2:横3', '1級',false),
  new ChoicesQuiz('Q15.ボーイスカウトのモットーは？（日本語で解答）', ['選択肢1'], 'そなえよつねに', '1級', true),
  new ChoicesQuiz('Q16.イワシ雲、うろこ雲、さば雲とも言われ、南西から北東に流れると天候が悪化する。この雲の名前は（漢字のみまたは、ひらがなのみで解答）', ['選択肢1'], ['絹積雲','けんせきうん'], '1級', true),
  new ChoicesQuiz('Q17. スカウトのスローガンは？(日本語で解答し漢字の所は漢字で答えること)',
  ['選択肢1'], ['日々の善行' ,'日日の善行'], '1級', true),
  new ChoicesQuiz('Q18. スカウトの集合のサインで「両腕をまっすぐ前に伸ばす」というサインがあるがこのときどのように集まるべきか？',
  ['U字形に集まる', '横隊に集まる', '縦隊に集まる', '円形に集まる'], '縦隊に集まる', '1級',false),
   new ChoicesQuiz('Q19. たちかまどを作るとき、ハサミ縛りは何箇所するか？',
  ['2', '4', '6', '8'], '2', '1級',false),
   new ChoicesQuiz('Q20. 国旗を掲揚したりするときに用いられるロープの端と端を繋ぎ合わせる結びは？',
  ['一重継ぎ', '二重継ぎ', '八重継ぎ', 'ちぢめ結び'], '一重継ぎ', '1級',false),
  new ChoicesQuiz('Q21.AEDの正式名称は？（漢字のみで解答）', ['選択肢1'], '自動体外式除細動器', '1級', true),
  new ChoicesQuiz('Q22. 鼻血が出た時の応急処置として正しいものは？',
  ['仰向けにして安静に寝かす', '鼻にティッシュを詰め真上を向く', '小鼻（鼻翼）をしっかりとつまみ押さえる', '冷たいタオルなどで鼻の付け根や前頭部を冷やす'], '小鼻（鼻翼）をしっかりとつまみ押さえる', '1級',false),
  new ChoicesQuiz('Q23. 熱中症の症状を三段階に分けた時二段階目の症状として最も適するものは？',
  ['めまい、立ちくらみ、大量の発汗', '倦怠感、意識がなんとなくおかしい', 'けいれん、高体温', '手足の痺れ、筋肉の硬直'], '倦怠感、意識がなんとなくおかしい', '1級',false),
  new ChoicesQuiz('Q24.AEDの手順を一部抜粋した。正しいのはどれ？', ['電極パッドを貼る→電気ショックを行う', '電気ショックを行う→心電図の解析', '心電図の解析→電気ショックを行う', '心電図の解析→電極パッドを貼る'], '心電図の解析→電気ショックを行う', '1級',false),
  new ChoicesQuiz('Q25.「物を束ねる時や、荷造りに便利な結び方。日本独特の結び方で垣根を止める時に使われる」この説明は何結びの説明か？（〜結びで解答）', ['選択肢1'], ['垣根結び','かきね結び','かき根結び','垣ね結び'], '1級', true),
  new ChoicesQuiz('Q26. 水準点とは？',
  ['高さの基準点であり国家基準点', '（緯度・経度）の基準となる点で国家基準点ではない', 'GNSSの連続観察点であり国家基準点', '（緯度・経度）の基準となる国家基準点'], '高さの基準点であり国家基準点', '1級',false),
  new ChoicesQuiz('Q27. スカウトのおきてはいくつあるか？',
  ['6', '7', '8', '10'], '8', '1級',false),
  new ChoicesQuiz('Q28.オリオン座はどの季節が最もよく見られるか？', ['春', '夏','秋','冬'], '冬', '1級',false),
  new ChoicesQuiz('Q29. 次のうち、スカウトのちかいとして最も適切なものを選べ',
  ['神（仏）と国とに誠を尽くしちかいを守ります', 'そなえよつねに', 'いつも、他の人々をたすけます', '名誉にかけて、おきてを守ります'], 'いつも、他の人々をたすけます', '1級',false),
  new ChoicesQuiz('Q30.「スカウティングはゲームである」これは誰の言葉か？（フルネームをカタカナで答えよ）',
  ['選択肢1'], ['ロバート・ベーデン＝パウエル','ロバートベーデンパウエル','ロバート・ベーデン-パウエル','ロバート・ベーデン=パウエル','ロバートベーデン＝パウエル','ロバートベーデン=パウエル',], '1級', true),


  
  
];




let quizIndex = 0;
let score = 0;
let filteredQuiz = [];
let wrongAnswers = [];

/* ==========================
   回答チェック
========================== */
const checkAnswer = (answer) => {
  const q = filteredQuiz[quizIndex];

  if (q.isCorrect(answer.trim())) {
    alert('正解！');
    score++;
  } else {
    alert('不正解！');
    wrongAnswers.push(q);
  }

  quizIndex++;

  if (quizIndex < filteredQuiz.length) {
    setupQuiz();
  } else {
    showResultAndExplanation();
  }
};

/* ==========================
   選択肢クリック
========================== */
const clickHandler = (e) => {
  checkAnswer(e.target.textContent);
};

/* ==========================
   クイズ開始
========================== */
const startQuiz = (level) => {
  document.getElementById('level-selection').style.display = 'none';
  document.getElementById('result-area').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';

  quizIndex = 0;
  score = 0;
  wrongAnswers = [];

  filteredQuiz = quiz.filter(q => q.level === level);
  setupQuiz();
};

/* ==========================
   問題表示
========================== */
const setupQuiz = () => {
  const q = filteredQuiz[quizIndex];

  document.getElementById('question').textContent = q.question;

  const quizButtons = document.getElementsByClassName('quiz-button');
  const textInput = document.getElementById('text-input');
  const checkButton = document.getElementById('checkButton');

  if (q.isTextQuestion) {
    // 記述式
    for (let btn of quizButtons) btn.style.display = 'none';

    textInput.style.display = 'block';
    textInput.value = '';
    checkButton.style.display = 'block';

  } else {
    // 選択式
    for (let i = 0; i < quizButtons.length; i++) {
      quizButtons[i].style.display = 'inline-block';
      quizButtons[i].textContent = q.choices[i];
    }

    textInput.style.display = 'none';
    checkButton.style.display = 'none';
  }
};

/* ==========================
   結果＆解説表示
========================== */
const showResultAndExplanation = () => {
  document.getElementById('quiz-container').style.display = 'none';

  const resultArea = document.getElementById('result-area');
  resultArea.style.display = 'block';

  document.getElementById('result-score').textContent =
    `あなたの正解数は ${score} / ${filteredQuiz.length} です`;

  const explanationArea = document.getElementById('explanations');
  explanationArea.innerHTML = '';

  filteredQuiz.forEach((q, index) => {
    const isWrong = wrongAnswers.includes(q);

    const div = document.createElement('div');
    div.style.marginBottom = '20px';

    div.innerHTML = `
      <p><strong>Q${index + 1}：</strong>${q.question}</p>
      <p>
        結果：
        <span style="color:${isWrong ? 'red' : 'green'}">
          ${isWrong ? '不正解' : '正解'}
        </span>
      </p>
      <p><strong>正解：</strong>
        ${Array.isArray(q.correct) ? q.correct.join(' / ') : q.correct}
      </p>
    `;

    // 解説がある問題だけトグルボタンを作る
    if (q.explanation) {
      const btn = document.createElement('button');
      btn.textContent = '解説を開く';

      const expDiv = document.createElement('div');
      expDiv.style.display = 'none';
      expDiv.style.marginTop = '8px';
      expDiv.style.padding = '8px';
      expDiv.style.border = '1px solid #ccc';
      expDiv.textContent = q.explanation;

      btn.onclick = () => {
        const isOpen = expDiv.style.display === 'block';
        expDiv.style.display = isOpen ? 'none' : 'block';
        btn.textContent = isOpen ? '解説を開く' : '解説を閉じる';
      };

      div.appendChild(btn);
      div.appendChild(expDiv);
    }

    div.appendChild(document.createElement('hr'));
    explanationArea.appendChild(div);
  });
};

/* ==========================
   間違えた問題だけ解き直す
========================== */
const retryWrongQuiz = () => {
  if (wrongAnswers.length === 0) {
    alert('間違えた問題がありません');
    return;
  }

  document.getElementById('result-area').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';

  filteredQuiz = [...wrongAnswers];

  quizIndex = 0;
  score = 0;
  wrongAnswers = [];

  setupQuiz();
};

/* ==========================
   初期イベント設定
========================== */
window.onload = () => {
  const quizButtons = document.getElementsByClassName('quiz-button');
  const checkButton = document.getElementById('checkButton');
  const textInput = document.getElementById('text-input');

  for (let btn of quizButtons) {
    btn.addEventListener('click', clickHandler);
  }

  checkButton.onclick = () => {
    checkAnswer(textInput.value);
  };
};

/* ==========================
   レベル選択
========================== */
document.getElementById('level-beginner')
  .addEventListener('click', () => startQuiz('初級'));

document.getElementById('level-intermediate')
  .addEventListener('click', () => startQuiz('2級'));

document.getElementById('level-advanced')
  .addEventListener('click', () => startQuiz('1級'));