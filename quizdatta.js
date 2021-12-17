var questions = [
    {
      prompt: "What is Mr. Millard's favorite food?\n(a) Samosas\n (b) Ramen\n(c) Steak",
      answer: "c"
    },
    {
      prompt: "What is Mr. Millard's first name?\n(a) Ayushman\n (b) Lawrence\n(c) Bartholomew",
      answer: "b"
    },
    {
      prompt: "What color truck does Mr. Millard drive?\n(a) Red\n (b) Hot Pink\n(c) Trick question, he doesn't drive a truck",
      answer: "a"
    },
    {
      prompt: "What two courses does Mr. Millard teach currently?\n(a) AP Calculus BC and APENG\n (b) APCSP and DE\n(c) PE and Health",
      answer: "b"
    },
    {
      prompt: "At what age will Mr. Millard retire?\n(a) 100\n (b) Never\n(c) The ripe age of 69 ;)",
      answer: "c"
    },
    {
      prompt: "Where was Mr. Millard born?\n(a) Wisconsin\n (b) Uzbekistan\n(c) India",
      answer: "a"
    },
    {
      prompt: "What is Mr. Millard's favorite book?\n(a) Diary of a Wimpy Kid\n (b) EarthSea\n(c) The Great Gatsby",
      answer: "b"
    },
    {
      prompt: "What is Mr. Millard's favorite song?\n(a) Yesterday by the Beatles\n (b) VAMP ANTHEM BY PLAYBOI CARTI\n(c) LOVE SOSA BY CHIEF KEEF",
      answer: "a"
    },
    {
      prompt: "When did Mr. Millard first come to American High?\n(a) 1969\n (b) 420 B.C\n(c) 2003",
      answer: "c"
    },
    {
      prompt: "Do you love Mr. Millard?\n(a) OF COURSE I LOVE MR. MILLARD\n (b) Yes\n(c) Nah he trippin",
      answer: "a"
    }
];
  var score = 0;
  
  for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
      score++;
      alert("Correct!");
    } else {
      alert("WRONG!");
    }
  }
  alert("You got " + score + "/" + questions.length);