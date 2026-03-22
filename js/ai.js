function generateCustomWorkout(muscleGroup,durationMinutes,difficulty){
  let filtered = exercisesData.filter(e=>e.muscle_group===muscleGroup && e.difficulty===difficulty);
  let totalTime = durationMinutes*60;
  let workout=[];
  while(totalTime>0 && filtered.length>0){
    let ex = filtered[Math.floor(Math.random()*filtered.length)];
    if(!workout.includes(ex)){
      workout.push(ex);
      totalTime -= ex.duration;
    }
  }
  displayCustomWorkout(workout);
}

function displayCustomWorkout(workout){
  const container = document.getElementById('customWorkout');
  container.innerHTML="<h2>AI Custom Workout</h2>";
  workout.forEach(e=>{
    container.innerHTML += `<p>${e.name} - ${e.duration}s | ${e.description}</p>`;
  });
}
