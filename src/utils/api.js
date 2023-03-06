
const seededRandom = seed => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = s * a % m) / m;
};

const fetchAPI = date => {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
    if(random() < 0.5) result.push(i + ':00');
    if(random() < 0.5) result.push(i + ':30');
  }

  return result;
};

const submitAPI = formData => true;

export {
  fetchAPI,
  submitAPI
};
