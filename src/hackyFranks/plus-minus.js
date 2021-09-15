const plusMinus = numbers => {
  const counts = { positive: 0, negative: 0, zero: 0, };

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num < 0) counts.negative++;
    else if (num > 0) counts.positive++;
    else counts.zero++;
  }

  const total = numbers.length || 1;

  console.log((counts.positive / total).toFixed(6));
  console.log((counts.negative / total).toFixed(6));
  console.log((counts.zero / total).toFixed(6));
};

module.exports = plusMinus;