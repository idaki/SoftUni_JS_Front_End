
window.addEventListener("load", solve);

function solve() {

  let studentName = document.getElementById("student");
  let university = document.getElementById("university");
  let score = document.getElementById("score");
  let nextBtn = document.getElementById('next-btn');
  let ulPreview = document.getElementById('preview-list');

  nextBtn.addEventListener('click', preveiewInput);

  function preveiewInput() {
    // currentTrigger = preventDefaulte;
    let liElement = document.createElement('li');
    let articleContainerElement = document.createElement('article');
    let studentNameElement = document.createElement('h4');
    let universityElement = document.createElement('p');
    let scoreElement = document.createElement('p');
    let editBtn = document.createElement('button');
    let applyBtn = document.createElement('button');

    liElement.className = 'application';
    applyBtn.className =''



    studentNameElement.innerText = studentName.value;   
    universityElement.innerText =`University: ${university.value}` ;
    scoreElement.innerText = `Score: ${score.value}`;
    
    ulPreview.appendChild(liElement);
    liElement.appendChild(articleContainerElement);
    articleContainerElement.appendChild(studentNameElement);
    articleContainerElement.appendChild(universityElement);
    articleContainerElement.appendChild(scoreElement);








    // <ul id="preview-list"> <li class="application"> <article> 
    // <h4>Maria Petrova</h4>
    // <p>University: Harvard</p>
    // <p>Score: 87</p>
    // </article>
    // <button class="action-btn edit">edit</button>
    // <button class="action-btn apply">apply</button>
    // </li>
    // </ul>

  }





}