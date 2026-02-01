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
  new ChoicesQuiz('Q1.ボーイスカウトのモットーは？（日本語で解答）', ['選択肢1'], 'そなえよつねに', '初級', true,'ボーイスカウトのモットーは「そなえよつねに」です。'),
  new ChoicesQuiz('Q2. 国旗を掲揚したりするときに用いられるロープの端と端を繋ぎ合わせる結びは？',
  ['一重継ぎ', '二重継ぎ', '八重継ぎ', 'ちぢめ結び'], '一重継ぎ', '初級',false,'国旗を掲揚する際には、一重継ぎを使用してロープの端を繋ぎ合わせます。この結び方は簡単でありながら、しっかりと固定できるため、国旗の掲揚に適しています。'),
  new ChoicesQuiz('Q3.連盟歌「花はかおるよ」にて、「⬜︎⬜︎ ⬜︎⬜︎ 重きぞ ⬜︎⬜︎」という歌詞がある。⬜︎⬜︎に入る漢字2文字は？ ',
  ['選択肢1'], '名誉', '初級', true,),
  new ChoicesQuiz('Q4. たちかまどを作るとき、ハサミ縛りは何箇所するか？',
  ['2', '4', '6', '8'], '2', '初級',false,'最初の土台となるA型の枠組みの部分で2箇所行います。これにより、たちかまどの基本的な形が安定します。'),
   new ChoicesQuiz('Q5. ソング「そなえよつねに」の2番の歌詞で、「築きたてて」の後にくる歌詞は？',
  ['選択肢1'], 'この世のため', '初級',true),
  new ChoicesQuiz('Q6. スカウトのおきてはいくつあるか？',
  ['6', '7', '8', '10'], '8', '初級',false,'スカウトは親切である、スカウトは快活である、スカウトは誠実である、スカウトは勇敢である、スカウトは質素である、スカウトは感謝の心をもつ、スカウトは友情にあつい、スカウトは礼儀正しい、の8つです。'),
  new ChoicesQuiz('Q7. 次のうち、スカウトのちかいとして最も適切なものを選べ',
  ['神（仏）と国とに誠を尽くしちかいを守ります', 'そなえよつねに', 'いつも、他の人々をたすけます', '名誉にかけて、おきてを守ります'], 'いつも、他の人々をたすけます', '初級',false,'神（仏）と国とに誠を尽くしおきてを守ります、いつも他の人々をたすけます、からだを強くし心をすこやかに徳を養います、の3つがスカウトのちかいです。'),
  new ChoicesQuiz('Q8. スカウトのおきての中で「スカウトは⬜︎⬜︎の心をもつ」とある。⬜︎⬜︎に入る言葉は？',
  ['選択肢1'], '感謝', '初級', true,'スカウトは親切である、スカウトは快活である、スカウトは誠実である、スカウトは勇敢である、スカウトは質素である、スカウトは感謝の心をもつ、スカウトは友情にあつい、スカウトは礼儀正しい、の8つです。'),
  new ChoicesQuiz('Q9. スカウトのスローガンは？(日本語で解答し漢字の所は漢字で答えること)',
  ['選択肢1'], ['日々の善行' ,'日日の善行'], '初級', true,'スカウトのスローガンは「日日の善行」です。'),
  new ChoicesQuiz('Q10. スカウトの集合のサインで「両腕をまっすぐ前に伸ばす」というサインがあるがこのときどのように集まるべきか？',
  ['U字形に集まる', '横隊に集まる', '縦隊に集まる', '円形に集まる'], '縦隊に集まる', '初級',false,'「U字型に集まれ」というサインは両腕をU字になるように上に伸ばすサインで、同様に横に伸ばすと「横隊に集まれ」、円を描くように伸ばすと「円形に集まれ」というサインになります。'),
// 2級の問題
  new ChoicesQuiz('Q1.蜂やアブに刺された時の応急処置として最も適しているものは',
  ['セロハンテープをあてて針を除去し、洗い流す', '抗ヒスタミン軟膏を塗る','患部を冷やし、冷湿布を数回行う','毒針を抜いたのち、傷口をよく洗う'], '毒針を抜いたのち、傷口をよく洗う', '2級',false,'蜂やアブに刺された場合、まず毒針を抜き取ることが重要です。毒針が残っていると、毒が体内に広がり続ける可能性があります。毒針を抜いた後は、傷口をよく洗い、清潔に保つことで感染を防ぎます。冷湿布や抗ヒスタミン軟膏を塗ることも有効ですが、まずは毒針の除去と洗浄が優先されます。'),
  new ChoicesQuiz('Q2.ボーイスカウトのモットーは？（日本語で解答）', ['選択肢1'], 'そなえよつねに', '2級', true,'ボーイスカウトのモットーは「そなえよつねに」です。'),
  new ChoicesQuiz('Q3. ロープをしっかりと張るため一時的に杭などに止めるときや縄はしごの横棒を止める時に使う結びは？',
  ['垣根結び', '張り綱結び', 'てこ結び', 'よろい結び'], 'てこ結び', '2級',false,'てこ結びは、ロープをしっかりと張るために一時的に杭などに止める際や、縄はしごの横棒を固定する際に使用されます。'),
  new ChoicesQuiz('Q4. たちかまどを作るとき、ハサミ縛りは何箇所するか？',
  ['2', '4', '6', '8'], '2', '2級',false,'最初の土台となるA型の枠組みの部分で2箇所行います。これにより、たちかまどの基本的な形が安定します。'),
  new ChoicesQuiz('Q5. 国旗を掲揚したりするときに用いられるロープの端と端を繋ぎ合わせる結びは？',
  ['一重継ぎ', '二重継ぎ', '八重継ぎ', 'ちぢめ結び'], '一重継ぎ', '2級',false,'国旗を掲揚する際には、一重継ぎを使用してロープの端を繋ぎ合わせます。この結び方は簡単でありながら、しっかりと固定できるため、国旗の掲揚に適しています。'),
  new ChoicesQuiz('Q6. 南東より東寄りで東より南寄りの方角の名称は？(16方位のうち一つ答えよ)',
  ['南東南', '南東東', '東南東', '南南東'], '東南東', '2級',false,'16方位の中で、南東より東寄りで東より南寄りの方角は「東南東」と呼ばれます。'),
  new ChoicesQuiz('Q7. 次のうち、スカウトのちかいとして最も適切なものを選べ',
  ['神（仏）と国とに誠を尽くしちかいを守ります', 'そなえよつねに', 'いつも、他の人々をたすけます', '名誉にかけて、おきてを守ります'], 'いつも、他の人々をたすけます', '2級',false,'神（仏）と国とに誠を尽くしおきてを守ります、いつも他の人々をたすけます、からだを強くし心をすこやかに徳を養います、の3つがスカウトのちかいです。'),
  new ChoicesQuiz('Q8. 鼻血が出た時の応急処置として正しいものは？',
  ['仰向けにして安静に寝かす', '鼻にティッシュを詰め真上を向く', '小鼻（鼻翼）をしっかりとつまみ押さえる', '冷たいタオルなどで鼻の付け根や前頭部を冷やす'], '小鼻（鼻翼）をしっかりとつまみ押さえる', '2級',false,'鼻血が出た場合、小鼻（鼻翼）をしっかりとつまみ押さえることで、出血を止める効果があります。これは、鼻の血管を圧迫して血流を減少させるためです。仰向けに寝かせると血圧が上がり、鼻血が悪化する可能性があるため避けるべきです。また、真上を向くと血液が喉に流れ込み、肺炎などのリスクがあるため推奨されません。冷たいタオルで冷やすことも有効ですが、まずは小鼻を押さえることが最優先です。'),
  new ChoicesQuiz('Q9. 熱中症の症状を三段階に分けた時二段階目の症状として最も適するものは？',
  ['めまい、立ちくらみ、大量の発汗', '倦怠感、意識がなんとなくおかしい', 'けいれん、高体温', '手足の痺れ、筋肉の硬直'], '倦怠感、意識がなんとなくおかしい', '2級',false,'熱中症は軽度から重度まで三段階に分けられます。二段階目の症状としては、倦怠感や意識がなんとなくおかしいといった症状が現れます。これは体温調節機能が徐々に失われ始め、体内の水分や塩分のバランスが崩れることによって引き起こされます。初期症状としてはめまいや立ちくらみ、大量の発汗が見られますが、これらは一段階目の症状に該当します。重度の症状にはけいれんや高体温、手足の痺れ、筋肉の硬直などがあります。'),
  new ChoicesQuiz('Q10. 水準点とは？',
  ['高さの基準点であり国家基準点', '（緯度・経度）の基準となる点で国家基準点ではない', 'GNSSの連続観察点であり国家基準点', '（緯度・経度）の基準となる国家基準点'], '高さの基準点であり国家基準点', '2級',false,'水準点は、地球上の特定の地点の高さを測定するための基準点であり、国家基準点として使用されます。これにより、地形の変化や建築物の高さなどを正確に把握することが可能となります。'),
  new ChoicesQuiz('Q11. スカウトのおきてはいくつあるか？',
  ['6', '7', '8', '10'], '8', '2級',false,'スカウトは親切である、スカウトは快活である、スカウトは誠実である、スカウトは勇敢である、スカウトは質素である、スカウトは感謝の心をもつ、スカウトは友情にあつい、スカウトは礼儀正しい、の8つです。'),
  new ChoicesQuiz('Q12.片かな手旗信号で、11はなんという文字になるか？（ひらがな1文字）', ['選択肢1'], 'く', '2級', true,'片かな手旗信号において、11は「く」という文字を表します。'),
  new ChoicesQuiz('Q13.連盟歌「花はかおるよ」にて、「⬜︎⬜︎ ⬜︎⬜︎ 重きぞ ⬜︎⬜︎」という歌詞がある。⬜︎⬜︎に入る漢字2文字は？ ',
  ['選択肢1'], '名誉', '2級', true),
  new ChoicesQuiz('Q14トートラインヒッチの呼び方が一般的で、テントの張りの強さを調節するところに使う結び方の名称は？（〜結びと解答）',
  ['選択肢1'], ['張り綱結び', '張りつな結び' , 'はりつな結び', 'はり綱結び'], '2級', true,'トートラインヒッチは、テントの張りの強さを調節するために使用される結び方で、一般的には「張り綱結び」と呼ばれています。'),
  new ChoicesQuiz('Q15. ソング「そなえよつねに」の2番の歌詞で、「築きたてて」の後にくる歌詞は？',
  ['選択肢1'], 'この世のため', '2級',true),
  new ChoicesQuiz('Q16.スカウトのおきてで「スカウトは〜である」という形のおきてはいくつあるか（数字のみで解答）', ['選択肢1'], ['5','５'], '2級', true,'スカウトは親切である、スカウトは快活である、スカウトは誠実である、スカウトは勇敢である、スカウトは質素である、スカウトは感謝の心をもつ、スカウトは友情にあつい、スカウトは礼儀正しい、の8つです。'),
  new ChoicesQuiz('Q17.スカウトのおきてで「スカウトは〜である」という形のおきてがある。〜に入る漢字2文字は？', ['選択肢1'], ['快活' , '誠実' , '親切' , '勇敢' , '質素'], '2級', true,'スカウトは親切である、スカウトは快活である、スカウトは誠実である、スカウトは勇敢である、スカウトは質素である、スカウトは感謝の心をもつ、スカウトは友情にあつい、スカウトは礼儀正しい、の8つです。'),
  new ChoicesQuiz('Q18. スカウトのおきての中で「スカウトは⬜︎⬜︎の心をもつ」とある。⬜︎⬜︎に入る言葉は？',
  ['選択肢1'], '感謝', '2級', true,'スカウトは親切である、スカウトは快活である、スカウトは誠実である、スカウトは勇敢である、スカウトは質素である、スカウトは感謝の心をもつ、スカウトは友情にあつい、スカウトは礼儀正しい、の8つです。'),
  new ChoicesQuiz('Q19. スカウトのスローガンは？(日本語で解答し漢字の所は漢字で答えること)',
  ['選択肢1'], ['日々の善行' ,'日日の善行'], '2級', true,'スカウトのスローガンは「日日の善行」です。'),
  new ChoicesQuiz('Q20. スカウトの集合のサインで「両腕をまっすぐ前に伸ばす」というサインがあるがこのときどのように集まるべきか？',
  ['U字形に集まる', '横隊に集まる', '縦隊に集まる', '円形に集まる'], '縦隊に集まる', '2級',false,'「U字型に集まれ」というサインは両腕をU字になるように上に伸ばすサインで、同様に横に伸ばすと「横隊に集まれ」、円を描くように伸ばすと「円形に集まれ」というサインになります。'),
// 1級の問題
  new ChoicesQuiz('Q1.「もともと柱などに馬を繋いでおくときに使われていた」これは何という結びの説明か？（日本語で解答）', 
  ['選択肢1'], ['馬つなぎ' ,'うまつなぎ'], '1級', true,'馬つなぎは、もともと柱などに馬を繋いでおくときに使われていた結び方です。この結び方は、馬が動いても解けにくく、しっかりと固定できる特徴があります。'),
   new ChoicesQuiz('Q2. ロープをしっかりと張るため一時的に杭などに止めるときや縄はしごの横棒を止める時に使う結びは？',
  ['垣根結び', '張り綱結び', 'てこ結び', 'よろい結び'], 'てこ結び', '1級',false,'てこ結びは、ロープをしっかりと張るために一時的に杭などに止める際や、縄はしごの横棒を固定する際に使用されます。'),
  new ChoicesQuiz('Q3.蜂やアブに刺された時の応急処置として最も適しているものは',
  ['セロハンテープをあてて針を除去し、洗い流す', '抗ヒスタミン軟膏を塗る','患部を冷やし、冷湿布を数回行う','毒針を抜いたのち、傷口をよく洗う'], '毒針を抜いたのち、傷口をよく洗う', '1級',false,'蜂やアブに刺された場合、まず毒針を抜き取ることが重要です。毒針が残っていると、毒が体内に広がり続ける可能性があります。毒針を抜いた後は、傷口をよく洗い、清潔に保つことで感染を防ぎます。冷湿布や抗ヒスタミン軟膏を塗ることも有効ですが、まずは毒針の除去と洗浄が優先されます。'),
   new ChoicesQuiz('Q4. 南東より東寄りで東より南寄りの方角の名称は？(16方位のうち一つ答えよ)',
  ['南東南', '南東東', '東南東', '南南東'], '東南東', '1級',false,'16方位の中で、南東より東寄りで東より南寄りの方角は「東南東」と呼ばれます。'),
  new ChoicesQuiz('Q5.胸骨圧迫の1分間の正しいリズムとして最も近しいものは？', ['50~60', '70~80','80~100','100~120'], '100~120', '1級',false,'胸骨圧迫の適切なリズムは1分間に100〜120回です。このリズムは、心臓が効果的に血液を循環させるために必要な速度であり、救命措置の成功率を高めるために推奨されています。'),
  new ChoicesQuiz('Q6.「アンノウン・スカウト・ストーリー」にて少年に助けられた人の名前は？（フルネームで解答）', ['選択肢1'], ['ウィリアム・ボイス','ウィリアムボイス','ウィリアムボイス氏'], '1級', true,'「アンノウン・スカウト・ストーリー」は、ウィリアム・ボイスという男を少年が助けた人の物語です。'),
  new ChoicesQuiz('Q7.片かな手旗信号で、11はなんという文字になるか？（ひらがな1文字）', ['選択肢1'], 'く', '1級', true,'片かな手旗信号において、11は「く」という文字を表します。'),
  new ChoicesQuiz('Q8.連盟歌「花はかおるよ」にて、「⬜︎⬜︎ ⬜︎⬜︎ 重きぞ ⬜︎⬜︎」という歌詞がある。⬜︎⬜︎に入る漢字2文字は？ ',
  ['選択肢1'], '名誉', '1級', true),
  new ChoicesQuiz('Q9.スカウトのおきてで「スカウトは〜である」という形のおきてはいくつあるか（数字のみで解答）', ['選択肢1'], ['5','５'], '1級', true,'スカウトは親切である、スカウトは快活である、スカウトは誠実である、スカウトは勇敢である、スカウトは質素である、スカウトは感謝の心をもつ、スカウトは友情にあつい、スカウトは礼儀正しい、の8つです。'),
  new ChoicesQuiz('Q10.スカウトのおきてで「スカウトは〜である」という形のおきてがある。〜に入る漢字2文字は？', ['選択肢1'], ['快活' , '誠実' , '親切' , '勇敢' , '質素'], '1級', true,'スカウトは親切である、スカウトは快活である、スカウトは誠実である、スカウトは勇敢である、スカウトは質素である、スカウトは感謝の心をもつ、スカウトは友情にあつい、スカウトは礼儀正しい、の8つです。'),
  new ChoicesQuiz('Q11. スカウトのおきての中で「スカウトは⬜︎⬜︎の心をもつ」とある。⬜︎⬜︎に入る言葉は？',
  ['選択肢1'], '感謝', '1級', true,'スカウトは親切である、スカウトは快活である、スカウトは誠実である、スカウトは勇敢である、スカウトは質素である、スカウトは感謝の心をもつ、スカウトは友情にあつい、スカウトは礼儀正しい、の8つです。'),
  new ChoicesQuiz('Q12.トートラインヒッチの呼び方が一般的で、テントの張りの強さを調節するところに使う結び方の名称は？（〜結びと解答）',
  ['選択肢1'], ['張り綱結び', '張りつな結び' , 'はりつな結び', 'はり綱結び'], '1級', true,'トートラインヒッチは、テントの張りの強さを調節するために使用される結び方で、一般的には「張り綱結び」と呼ばれています。'),
  new ChoicesQuiz('Q13. ソング「そなえよつねに」の2番の歌詞で、「築きたてて」の後にくる歌詞は？',
  ['選択肢1'], 'この世のため', '1級',true),
  new ChoicesQuiz('Q14.日本の国旗は長方形で縦⬜︎:横⬜︎の割合である。⬜︎に入る割合は次のうちどれ？',
  ['縦1:横2', '縦2:横3','縦3:横4','縦5:横11'], '縦2:横3', '1級',false,'日本の国旗は、縦と横の比率が2:3の長方形です。これは、旗のデザインにおいて重要な要素であり、正式な規格として定められています。'),
  new ChoicesQuiz('Q15.ボーイスカウトのモットーは？（日本語で解答）', ['選択肢1'], 'そなえよつねに', '1級', true,'ボーイスカウトのモットーは「そなえよつねに」です。'),
  new ChoicesQuiz('Q16.イワシ雲、うろこ雲、さば雲とも言われ、南西から北東に流れると天候が悪化する。この雲の名前は（漢字のみまたは、ひらがなのみで解答）', ['選択肢1'], ['絹積雲','けんせきうん'], '1級', true,'絹積雲は、イワシ雲、うろこ雲、さば雲とも呼ばれ、南西から北東に流れると天候が悪化することがあります。'),
  new ChoicesQuiz('Q17. スカウトのスローガンは？(日本語で解答し漢字の所は漢字で答えること)',
  ['選択肢1'], ['日々の善行' ,'日日の善行'], '1級', true,'スカウトのスローガンは「日日の善行」です。'),
  new ChoicesQuiz('Q18. スカウトの集合のサインで「両腕をまっすぐ前に伸ばす」というサインがあるがこのときどのように集まるべきか？',
  ['U字形に集まる', '横隊に集まる', '縦隊に集まる', '円形に集まる'], '縦隊に集まる', '1級',false,'「U字型に集まれ」というサインは両腕をU字になるように上に伸ばすサインで、同様に横に伸ばすと「横隊に集まれ」、円を描くように伸ばすと「円形に集まれ」というサインになります。'),
   new ChoicesQuiz('Q19. たちかまどを作るとき、ハサミ縛りは何箇所するか？',
  ['2', '4', '6', '8'], '2', '1級',false,'最初の土台となるA型の枠組みの部分で2箇所行います。これにより、たちかまどの基本的な形が安定します。'),
   new ChoicesQuiz('Q20. 国旗を掲揚したりするときに用いられるロープの端と端を繋ぎ合わせる結びは？',
  ['一重継ぎ', '二重継ぎ', '八重継ぎ', 'ちぢめ結び'], '一重継ぎ', '1級',false,'国旗を掲揚する際には、一重継ぎを使用してロープの端を繋ぎ合わせます。この結び方は簡単でありながら、しっかりと固定できるため、国旗の掲揚に適しています。'),
  new ChoicesQuiz('Q21.AEDの正式名称は？（漢字のみで解答）', ['選択肢1'], '自動体外式除細動器', '1級', true,'AEDは「自動体外式除細動器」の略称であり、心停止時に使用される医療機器です。この装置は、心臓の異常なリズムを検出し、必要に応じて電気ショックを与えることで正常なリズムに戻す役割を果たします。'),
  new ChoicesQuiz('Q22. 鼻血が出た時の応急処置として正しいものは？',
  ['仰向けにして安静に寝かす', '鼻にティッシュを詰め真上を向く', '小鼻（鼻翼）をしっかりとつまみ押さえる', '冷たいタオルなどで鼻の付け根や前頭部を冷やす'], '小鼻（鼻翼）をしっかりとつまみ押さえる', '1級',false,'鼻血が出た場合、小鼻（鼻翼）をしっかりとつまみ押さえることで、出血を止める効果があります。これは、鼻の血管を圧迫して血流を減少させるためです。仰向けに寝かせると血圧が上がり、鼻血が悪化する可能性があるため避けるべきです。また、真上を向くと血液が喉に流れ込み、肺炎などのリスクがあるため推奨されません。冷たいタオルで冷やすことも有効ですが、まずは小鼻を押さえることが最優先です。'),
  new ChoicesQuiz('Q23. 熱中症の症状を三段階に分けた時二段階目の症状として最も適するものは？',
  ['めまい、立ちくらみ、大量の発汗', '倦怠感、意識がなんとなくおかしい', 'けいれん、高体温', '手足の痺れ、筋肉の硬直'], '倦怠感、意識がなんとなくおかしい', '1級',false,'熱中症は軽度から重度まで三段階に分けられます。二段階目の症状としては、倦怠感や意識がなんとなくおかしいといった症状が現れます。これは体温調節機能が徐々に失われ始め、体内の水分や塩分のバランスが崩れることによって引き起こされます。初期症状としてはめまいや立ちくらみ、大量の発汗が見られますが、これらは一段階目の症状に該当します。重度の症状にはけいれんや高体温、手足の痺れ、筋肉の硬直などがあります。'),
  new ChoicesQuiz('Q24.AEDの手順を一部抜粋した。正しいのはどれ？', ['電極パッドを貼る→電気ショックを行う', '電気ショックを行う→心電図の解析', '心電図の解析→電気ショックを行う', '心電図の解析→電極パッドを貼る'], '心電図の解析→電気ショックを行う', '1級',false,'AEDの手順では、まず心電図の解析を行い、その後必要に応じて電気ショックを行います。電極パッドは解析前に貼る必要があります。'),
  new ChoicesQuiz('Q25.「物を束ねる時や、荷造りに便利な結び方。日本独特の結び方で垣根を止める時に使われる」この説明は何結びの説明か？（〜結びで解答）', ['選択肢1'], ['垣根結び','かきね結び','かき根結び','垣ね結び'], '1級', true,'垣根結びは、物を束ねる時や荷造りに便利な結び方であり、日本独特の結び方です。特に垣根を止める際に使用されます。この結び方は、しっかりと固定できるため、荷物の安定性を保つのに適しています。'),
  new ChoicesQuiz('Q26. 水準点とは？',
  ['高さの基準点であり国家基準点', '（緯度・経度）の基準となる点で国家基準点ではない', 'GNSSの連続観察点であり国家基準点', '（緯度・経度）の基準となる国家基準点'], '高さの基準点であり国家基準点', '1級',false,'水準点は、地球上の特定の地点の高さを測定するための基準点であり、国家基準点として使用されます。これにより、地形の変化や建築物の高さなどを正確に把握することが可能となります。'),
  new ChoicesQuiz('Q27. スカウトのおきてはいくつあるか？',
  ['6', '7', '8', '10'], '8', '1級',false,'スカウトは親切である、スカウトは快活である、スカウトは誠実である、スカウトは勇敢である、スカウトは質素である、スカウトは感謝の心をもつ、スカウトは友情にあつい、スカウトは礼儀正しい、の8つです。'),
  new ChoicesQuiz('Q28.オリオン座はどの季節が最もよく見られるか？', ['春', '夏','秋','冬'], '冬', '1級',false,'オリオン座は冬の夜空で最もよく見られます。特に12月から2月にかけて、オリオン座は南の空高くに位置し、その明るい星々が際立っています。オリオン座は冬の星座として知られ、多くの人々に親しまれています。'),
  new ChoicesQuiz('Q29. 次のうち、スカウトのちかいとして最も適切なものを選べ',
  ['神（仏）と国とに誠を尽くしちかいを守ります', 'そなえよつねに', 'いつも、他の人々をたすけます', '名誉にかけて、おきてを守ります'], 'いつも、他の人々をたすけます', '1級',false,'神（仏）と国とに誠を尽くしおきてを守ります、いつも他の人々をたすけます、からだを強くし心をすこやかに徳を養います、の3つがスカウトのちかいです。'),
  new ChoicesQuiz('Q30.「スカウティングはゲームである」これは誰の言葉か？（フルネームをカタカナで答えよ）',
  ['選択肢1'], ['ロバート・ベーデン＝パウエル','ロバートベーデンパウエル','ロバート・ベーデン-パウエル','ロバート・ベーデン=パウエル','ロバートベーデン＝パウエル','ロバートベーデン=パウエル',], '1級', true,'「スカウティングはゲームである」という言葉は、ボーイスカウト運動の創始者であるロバート・ベーデン-パウエルによって述べられました。彼はスカウティングを通じて、若者たちに楽しみながら学び、成長する機会を提供しようと考えていました。'),


  
  
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
  const isCorrect = q.isCorrect(answer.trim());

  if (isCorrect) score++;
  else wrongAnswers.push(q);

  showFeedback(isCorrect);

  quizIndex++; // ← ここだけ進める（表示はshowFeedback内）
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
  const background = document.getElementById('background');
  if (background) background.style.display = 'block'; // 背景表示

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
    for (let btn of quizButtons) btn.style.display = 'none';

    textInput.style.display = 'block';
    textInput.value = '';
    checkButton.style.display = 'block';

  } else {
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
  const background = document.getElementById('background');
  if (background) background.style.display = 'none'; // 背景非表示

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

  const background = document.getElementById('background');
  if (background) background.style.display = 'block'; // 背景表示

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
  const titleScreen = document.getElementById("titleScreen");
  const mainContent = document.getElementById("mainContent");
  const background = document.getElementById('background');

  if (background) background.style.display = 'block'; // 最初は背景表示

  titleScreen.addEventListener("click", () => {
    titleScreen.style.display = "none";
  });

  for (let btn of quizButtons) {
    btn.addEventListener('click', clickHandler);
  }

  checkButton.onclick = () => {
    checkAnswer(textInput.value);
  };

  document.getElementById('level-beginner')
    .addEventListener('click', () => startQuiz('初級'));

  document.getElementById('level-intermediate')
    .addEventListener('click', () => startQuiz('2級'));

  document.getElementById('level-advanced')
    .addEventListener('click', () => startQuiz('1級'));
};

/* ==========================
   フィードバック表示
========================== */
function showFeedback(isCorrect) {
  const feedback = document.getElementById('feedback');
  const symbol = document.getElementById('feedback-symbol');
  const text = document.getElementById('feedback-text');

  if (isCorrect) {
    symbol.textContent = '◯';
    text.textContent = '正解！！';
    symbol.style.color = 'green';
    text.style.color = 'green';
  } else {
    symbol.textContent = '×';
    text.textContent = '不正解…';
    symbol.style.color = 'red';
    text.style.color = 'red';
  }

  feedback.style.display = 'flex';

  setTimeout(() => {
    feedback.style.display = 'none';

    if (quizIndex < filteredQuiz.length) {
      setupQuiz();
    } else {
      showResultAndExplanation();
    }
  }, 1200);
}
