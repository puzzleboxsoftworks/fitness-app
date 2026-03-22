let exercisesData = [];
let programsData = [];

fetch('_data/exercises.json').then(res=>res.json()).then(data=>exercisesData=data);
fetch('_data/programs.json').then(res=>res.json()).then(data=>programsData=data);

function showProgram(programName){
  const program = programsData.find(p=>p.name===programName);
  const container = document.getElementById('workoutList');
  container.innerHTML = '';
  program.days.forEach(day=>{
    let div = document.createElement('div');
    div.innerHTML = `<h3>Day ${day.day}</h3>`;
    day.exercises.forEach(exId=>{
      const ex = exercisesData.find(e=>e.id===exId);
      div.innerHTML += `<p>${ex.name} - ${ex.duration}s | ${ex.description}</p>`;
    });
    container.appendChild(div);
  });
}
