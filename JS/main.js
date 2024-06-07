const dailyBtn = document.getElementById(`daily`);
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById(`monthly`);

fetch(`./data.json`)
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    console.log(obj);
  })
  .catch(function (error) {
    console.error("something went wrong retreiving the information!");
    console.error(error);
  });

dailyBtn.addEventListener(`click`, function (e) {
  dailyBtn.classList.add(`highlight`);
  weeklyBtn.classList.remove(`highlight`);
  monthlyBtn.classList.remove(`highlight`);
});

weeklyBtn.addEventListener(`click`, function (e) {
  weeklyBtn.classList.add(`highlight`);
  dailyBtn.classList.remove(`highlight`);
  monthlyBtn.classList.remove(`highlight`);
});

monthlyBtn.addEventListener(`click`, function (e) {
  monthlyBtn.classList.add(`highlight`);
  dailyBtn.classList.remove(`highlight`);
  weeklyBtn.classList.remove(`highlight`);
});
