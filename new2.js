function dist() {
  let speed = 30;
  let maxSpeed = 120;
  let time = 96;
  let distance = 0;

  while (time > 0) {
    let minutes = time;
    if (minutes > 10) {
      minutes = 10;
    }
    distance = distance + speed * minutes / 60;
    speed = speed * 2;
    if (speed > maxSpeed) {
      speed = maxSpeed;
    }
    time = time - minutes;
  }

  return distance.toFixed(2);
}

console.log(dist()); 