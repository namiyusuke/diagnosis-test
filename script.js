// フォームから回答を取得
const answers = [
  parseInt(document.getElementById("q1").value),
  parseInt(document.getElementById("q2").value),
  parseInt(document.getElementById("q3").value),
  parseInt(document.getElementById("q4").value),
  parseInt(document.getElementById("q5").value),
  parseInt(document.getElementById("q6").value),
  parseInt(document.getElementById("q7").value),
  parseInt(document.getElementById("q8").value),
  parseInt(document.getElementById("q9").value),
  parseInt(document.getElementById("q10").value),
];

// 念のためバリデーション
if (answers.includes(NaN)) {
  alert("すべての質問に回答してください。");
  return;
}

// 診断ロジックをここに挿入（前のJavaScriptコードを使用）
const name = "太郎"; // サンプル名
const age = 10; // サンプル年齢
const gender = "男"; // サンプル性別
const summary = generateTraitsSummary(name, age, gender, calculateTraitScores(answers));

// 診断結果を表示
const resultDiv = document.getElementById("result");
resultDiv.textContent = summary;
resultDiv.style.display = "block";
// 各気質のスコア計算
function calculateTraitScores(answers) {
  const opennessScore = answers[0] + answers[5];
  const conscientiousnessScore = answers[1] + answers[6];
  const emotionalStabilityScore = answers[2] + answers[7];
  const extraversionScore = answers[3] + answers[8];
  const agreeablenessScore = answers[4] + answers[9];
  return {
    openness: opennessScore,
    conscientiousness: conscientiousnessScore,
    emotionalStability: emotionalStabilityScore,
    extraversion: extraversionScore,
    agreeableness: agreeablenessScore,
  };
}

// 各気質の評価
function evaluateTrait(score) {
  if (score >= 9) {
    return "非常に高い";
  } else if (score >= 7) {
    return "高い";
  } else if (score >= 5) {
    return "普通";
  } else if (score >= 3) {
    return "低い";
  } else {
    return "非常に低い";
  }
}

// 最も可能性の高い気質を決定
function determineOverallTrait(scores) {
  const highestScore = Math.max(
    scores.openness,
    scores.conscientiousness,
    scores.emotionalStability,
    scores.extraversion,
    scores.agreeableness
  );
  if (highestScore === scores.openness) {
    return "天才気質";
  } else if (highestScore === scores.conscientiousness) {
    return "研究者気質";
  } else if (highestScore === scores.emotionalStability) {
    return "商人気質";
  } else if (highestScore === scores.extraversion) {
    return "パフォーマー気質";
  } else {
    return "共感者気質";
  }
}

// 各気質の説明文生成
function getOpennessDescription(evaluation) {
  switch (evaluation) {
    case "非常に高い":
      return "開放性が非常に高く、非常に高い探究心と好奇心を持ち、学ぶことが大好きです。";
    case "高い":
      return "開放性が高く、探究心と好奇心を持ち、新しいことにも興味を示します。";
    case "普通":
      return "開放性が普通で、適度な探究心と好奇心を持ち、新しいことにも興味を示しますが、バランスを保ちつつ進んでいくことが得意です。";
    case "低い":
      return "開放性が低く、新しい経験に対して慎重で、変化をあまり好まない性格です。";
    default:
      return "開放性が非常に低く、新しい経験に対して非常に慎重で、変化を極力避ける傾向があります。";
  }
}

function getConscientiousnessDescription(evaluation) {
  switch (evaluation) {
    case "非常に高い":
      return "誠実性が非常に高く、非常に計画的で、常に慎重に物事を進めます。";
    case "高い":
      return "誠実性が高く、計画性があり、慎重に物事を進めます。";
    case "普通":
      return "誠実性が普通で、計画性があり、慎重に物事を進めますが、柔軟に対応することもできます。";
    case "低い":
      return "誠実性が低く、計画性が低く、時に衝動的に行動することがあります。";
    default:
      return "誠実性が非常に低く、計画的な行動が苦手で、衝動的に行動することが多いです。";
  }
}

function getEmotionalStabilityDescription(evaluation) {
  switch (evaluation) {
    case "非常に高い":
      return "情緒安定性が非常に高く、感情のコントロールが上手で、ストレスに対して非常に強いです。";
    case "高い":
      return "情緒安定性が高く、感情のコントロールが上手で、ストレスに対して強いです。";
    case "普通":
      return "情緒安定性が普通で、ストレスに対して適度な耐性があります。";
    case "低い":
      return "情緒安定性が低く、感情の起伏が激しく、ストレスに弱い傾向があります。";
    default:
      return "情緒安定性が非常に低く、感情のコントロールが難しく、ストレスに非常に弱いです。";
  }
}

function getExtraversionDescription(evaluation) {
  switch (evaluation) {
    case "非常に高い":
      return "外向性が非常に高く、非常に社交的で、活発に友達と過ごすことができます。";
    case "高い":
      return "外向性が高く、社交的で、友達と過ごすことが好きです。";
    case "普通":
      return "外向性が普通で、社交的な面もありながら、一人の時間も大切にします。";
    case "低い":
      return "外向性が低く、内向的で、静かな環境を好む性格です。";
    default:
      return "外向性が非常に低く、非常に内向的で、一人でいることを好みます。";
  }
}

function getAgreeablenessDescription(evaluation) {
  switch (evaluation) {
    case "非常に高い":
      return "協調性が非常に高く、非常に思いやりがあり、他人の気持ちを深く理解することができます。";
    case "高い":
      return "協調性が高く、思いやりがあり、他人の気持ちを理解することができます。";
    case "普通":
      return "協調性が普通で、思いやりがあり、優しい性格ですが、自己主張も大切にします。";
    case "低い":
      return "協調性が低く、自己中心的で、競争心が強い一面があります。";
    default:
      return "協調性が非常に低く、自己中心的で、他人と協力するよりも自分の意見を重視する傾向があります。";
  }
}

// 総合評価の説明文生成
function getOverallTraitDescription(trait) {
  switch (trait) {
    case "天才気質":
      return "非常に高い探究心と創造力を持ち、新しいアイデアを生み出す力があります。";
    case "研究者気質":
      return "非常に計画的で、深い集中力を持ち、学問や研究に強い関心があります。";
    case "商人気質":
      return "感情が安定しており、冷静な判断が得意です。ビジネスや商業の分野で適性があります。";
    case "パフォーマー気質":
      return "非常に社交的で、人前での表現が得意です。演技やパフォーマンスに優れています。";
    case "共感者気質":
      return "思いやりがあり、協調性に富み、チームワークが得意です。";
    default:
      return "";
  }
}

// 気質の診断結果生成
function generateTraitsSummary(name, age, gender, answers) {
  const scores = calculateTraitScores(answers);
  const overallTrait = determineOverallTrait(scores);

  const opennessEvaluation = evaluateTrait(scores.openness);
  const conscientiousnessEvaluation = evaluateTrait(scores.conscientiousness);
  const emotionalStabilityEvaluation = evaluateTrait(scores.emotionalStability);
  const extraversionEvaluation = evaluateTrait(scores.extraversion);
  const agreeablenessEvaluation = evaluateTrait(scores.agreeableness);

  const opennessDescription = getOpennessDescription(opennessEvaluation);
  const conscientiousnessDescription = getConscientiousnessDescription(conscientiousnessEvaluation);
  const emotionalStabilityDescription = getEmotionalStabilityDescription(emotionalStabilityEvaluation);
  const extraversionDescription = getExtraversionDescription(extraversionEvaluation);
  const agreeablenessDescription = getAgreeablenessDescription(agreeablenessEvaluation);

  return `
    ${name}くん（${age}歳、${gender}）の診断結果：
    ${opennessDescription}
    ${conscientiousnessDescription}
    ${emotionalStabilityDescription}
    ${extraversionDescription}
    ${agreeablenessDescription}
    総合評価: ${overallTrait} - ${getOverallTraitDescription(overallTrait)}
    `;
}
