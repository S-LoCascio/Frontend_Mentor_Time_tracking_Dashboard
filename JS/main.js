const dailyBtn = document.getElementById(`daily`);
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById(`monthly`);

const workHours = document.getElementById(`workHours`);
const prevWorkHours = document.getElementById(`prevWorkHours`);

const playHours = document.getElementById(`playHours`);
const prevPlayHours = document.getElementById(`prevPlayHours`);

const studyHours = document.getElementById(`studyHours`);
const prevStudyHours = document.getElementById(`prevStudyHours`);

const exerciseHours = document.getElementById(`exerciseHours`);
const prevExerciseHours = document.getElementById(`prevExerciseHours`);

const socialHours = document.getElementById(`socialHours`);
const prevSocialHours = document.getElementById(`prevSocialHours`);

const selcareHours = document.getElementById(`selcareHours`);
const prevSelcareHours = document.getElementById(`prevSelcareHours`);

/* Daily setting */

dailyBtn.addEventListener(`click`, function (e) {
  dailyBtn.classList.add(`highlight`);
  weeklyBtn.classList.remove(`highlight`);
  monthlyBtn.classList.remove(`highlight`);

  fetch(`./data.json`)
    .then(function (response) {
      data = response.json();
      return data;
    })
    .then(function (obj) {
      console.log(obj);
      workHours.innerHTML =
        `${obj[0]["timeframes"]["daily"]["current"]}` + `hrs`;
      prevWorkHours.innerHTML =
        `Previous ` + `${obj[0]["timeframes"]["daily"]["previous"]}` + `hrs`;

      studyHours.innerHTML =
        `${obj[1]["timeframes"]["daily"]["current"]}` + `hrs`;
      prevStudyHours.innerHTML =
        `Previous ` + `${obj[1]["timeframes"]["daily"]["previous"]}` + `hrs`;

      playHours.innerHTML =
        `${obj[2]["timeframes"]["daily"]["current"]}` + `hrs`;
      prevPlayHours.innerHTML =
        `Previous ` + `${obj[2]["timeframes"]["daily"]["previous"]}` + `hrs`;

      exerciseHours.innerHTML =
        `${obj[3]["timeframes"]["daily"]["current"]}` + `hrs`;
      prevExerciseHours.innerHTML =
        `Previous ` + `${obj[3]["timeframes"]["daily"]["previous"]}` + `hrs`;

      socialHours.innerHTML =
        `${obj[4]["timeframes"]["daily"]["current"]}` + `hrs`;
      prevSocialHours.innerHTML =
        `Previous ` + `${obj[4]["timeframes"]["daily"]["previous"]}` + `hrs`;

      selcareHours.innerHTML =
        `${obj[5]["timeframes"]["daily"]["current"]}` + `hrs`;
      prevSelcareHours.innerHTML =
        `Previous ` + `${obj[5]["timeframes"]["daily"]["previous"]}` + `hrs`;
    })
    .catch(function (error) {
      console.error("something went wrong retreiving the information!");
      console.error(error);
    });
});

/* Weekly */

weeklyBtn.addEventListener(`click`, function (e) {
  weeklyBtn.classList.add(`highlight`);
  dailyBtn.classList.remove(`highlight`);
  monthlyBtn.classList.remove(`highlight`);

  fetch(`./data.json`)
    .then(function (response) {
      data = response.json();
      return data;
    })
    .then(function (obj) {
      console.log(obj);
      workHours.innerHTML =
        `${obj[0]["timeframes"]["weekly"]["current"]}` + `hrs`;
      prevWorkHours.innerHTML =
        `Previous ` + `${obj[0]["timeframes"]["weekly"]["previous"]}` + `hrs`;

      studyHours.innerHTML =
        `${obj[1]["timeframes"]["weekly"]["current"]}` + `hrs`;
      prevStudyHours.innerHTML =
        `Previous ` + `${obj[1]["timeframes"]["weekly"]["previous"]}` + `hrs`;

      playHours.innerHTML =
        `${obj[2]["timeframes"]["weekly"]["current"]}` + `hrs`;
      prevPlayHours.innerHTML =
        `Previous ` + `${obj[2]["timeframes"]["weekly"]["previous"]}` + `hrs`;

      exerciseHours.innerHTML =
        `${obj[3]["timeframes"]["weekly"]["current"]}` + `hrs`;
      prevExerciseHours.innerHTML =
        `Previous ` + `${obj[3]["timeframes"]["weekly"]["previous"]}` + `hrs`;

      socialHours.innerHTML =
        `${obj[4]["timeframes"]["weekly"]["current"]}` + `hrs`;
      prevSocialHours.innerHTML =
        `Previous ` + `${obj[4]["timeframes"]["weekly"]["previous"]}` + `hrs`;

      selcareHours.innerHTML =
        `${obj[5]["timeframes"]["weekly"]["current"]}` + `hrs`;
      prevSelcareHours.innerHTML =
        `Previous ` + `${obj[5]["timeframes"]["weekly"]["previous"]}` + `hrs`;
    })
    .catch(function (error) {
      console.error("something went wrong retreiving the information!");
      console.error(error);
    });
});

/* Monthly  */

monthlyBtn.addEventListener(`click`, function (e) {
  monthlyBtn.classList.add(`highlight`);
  dailyBtn.classList.remove(`highlight`);
  weeklyBtn.classList.remove(`highlight`);

  fetch(`./data.json`)
    .then(function (response) {
      data = response.json();
      return data;
    })
    .then(function (obj) {
      console.log(obj);
      workHours.innerHTML =
        `${obj[0]["timeframes"]["monthly"]["current"]}` + `hrs`;
      prevWorkHours.innerHTML =
        `Previous ` + `${obj[0]["timeframes"]["monthly"]["previous"]}` + `hrs`;

      studyHours.innerHTML =
        `${obj[1]["timeframes"]["monthly"]["current"]}` + `hrs`;
      prevStudyHours.innerHTML =
        `Previous ` + `${obj[1]["timeframes"]["monthly"]["previous"]}` + `hrs`;

      playHours.innerHTML =
        `${obj[2]["timeframes"]["monthly"]["current"]}` + `hrs`;
      prevPlayHours.innerHTML =
        `Previous ` + `${obj[2]["timeframes"]["monthly"]["previous"]}` + `hrs`;

      exerciseHours.innerHTML =
        `${obj[3]["timeframes"]["monthly"]["current"]}` + `hrs`;
      prevExerciseHours.innerHTML =
        `Previous ` + `${obj[3]["timeframes"]["monthly"]["previous"]}` + `hrs`;

      socialHours.innerHTML =
        `${obj[4]["timeframes"]["monthly"]["current"]}` + `hrs`;
      prevSocialHours.innerHTML =
        `Previous ` + `${obj[4]["timeframes"]["monthly"]["previous"]}` + `hrs`;

      selcareHours.innerHTML =
        `${obj[5]["timeframes"]["monthly"]["current"]}` + `hrs`;
      prevSelcareHours.innerHTML =
        `Previous ` + `${obj[5]["timeframes"]["monthly"]["previous"]}` + `hrs`;
    })
    .catch(function (error) {
      console.error("something went wrong retreiving the information!");
      console.error(error);
    });
});
