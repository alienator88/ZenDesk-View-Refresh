function storeSettings() {

  function getTime() {
    let time = document.querySelector("#time");
    return time.value;
  }

  let time = getTime();
  browser.storage.local.set({
    time
  });

  browser.runtime.reload();
}

function updateUI(restoredSettings) {
  let time = document.querySelector("#time");
  time.value = restoredSettings.time;
}

const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(updateUI, onError);

const saveButton = document.getElementById('save-btn');
saveButton.addEventListener("click", storeSettings);

const btn10 = document.getElementById('10');
btn10.addEventListener("click", () => {
  let time = document.querySelector("#time");
  time.value = 10;
  storeSettings;
});

const btn30 = document.getElementById('30');
btn30.addEventListener("click", () => {
  let time = document.querySelector("#time");
  time.value = 30;
  storeSettings;
});

const btn60 = document.getElementById('60');
btn60.addEventListener("click", () => {
  let time = document.querySelector("#time");
  time.value = 60;
  storeSettings;
});

const btn120 = document.getElementById('120');
btn120.addEventListener("click", () => {
  let time = document.querySelector("#time");
  time.value = 120;
  storeSettings;
});

function onError(e) {
  console.error(e);
}




  