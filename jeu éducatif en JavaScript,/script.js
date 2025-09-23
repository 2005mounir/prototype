const qr = [
    {question: "A", reponse: "1"},
    {question: "b", reponse: "2"},
    {question: "c", reponse: "3"},
    {question: "d", reponse: "4"},
    {question: "e", reponse: "5"},
    {question: "f", reponse: "6"},
    {question: "g", reponse: "7"},
    {question: "h", reponse: "8"}
  ];
  
  let conter = 0;
  let score = 0;
  
  alert("Welcome");
  
  for (let i = 0; i < qr.length; i++) {
    const d = qr[i];
    let userAnswer = prompt(d.question);
  
    if (userAnswer === d.reponse) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong! The correct answer is " + d.reponse);
    }
  }
  
  alert("Your final score is: " + score + "/" + qr.length);
  

  




