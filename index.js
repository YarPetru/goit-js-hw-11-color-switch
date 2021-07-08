const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const refs = {
      startButton: document.querySelector('[data-action="start"]'),
      stopButton: document.querySelector('[data-action="stop"]'),
      body: document.querySelector('body'),
  };

  let intervalId = null;
  let btnIsActive = false;

  refs.startButton.addEventListener('click', onStartClick);
  refs.stopButton.addEventListener('click', onStopClick);

  function onStartClick () {
    if (btnIsActive) {
      return;
    }; 

    btnIsActive = true;
    
      intervalId = setInterval(() => {
        const randomIntegerNumber = randomIntegerFromInterval(0, colors.length - 1);
        refs.body.style.backgroundColor = colors[randomIntegerNumber];
      }, 500);
  };

  function onStopClick () {
    clearInterval(intervalId);
    btnIsActive = false;
  };