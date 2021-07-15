const timer = document.querySelector('#stopwatch');

let time = 0,
interval;

function showTime() 
{
  time += 1;
  timer.innerHTML = toHHMMSS(time);
}

function start() 
{
  interval = setInterval(showTime, 1000);
}

function stop() 
{
  if (interval) 
  {
    clearInterval(interval);
    interval = null;
  } else 
  {
    interval = setInterval(showTime, 1000);
  }
}

function reset() 
{
  clearInterval(interval);
  interval = null;
  time = 0;
  timer.innerHTML = toHHMMSS(time);
}

function toHHMMSS(time) 
{
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time - hours * 3600 - minutes * 60;

  hours = `${hours}`.padStart(2, '0');
  minutes = `${minutes}`.padStart(2, '0');
  seconds = `${seconds}`.padStart(2, '0');

  return hours + ':' + minutes + ':' + seconds;
}
