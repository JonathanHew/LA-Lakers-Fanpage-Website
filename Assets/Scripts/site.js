function myFunctionKobe() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  }
}

function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  }
}

function validate()
{
	//check thatthe firstname field is not blank
	if (document.regForm.firstname.value =="")
	{
		document.getElementById("firstnameMessage").innerHTML = "(First Name Cant be Blank!!)";
		return false;
	}//end if
	
	//check that the last name field is not blank
	if (document.regForm.lastname.value == "")
	{
		alert("Lastname cant be blank");
		return false;
	}//end if
	
	//check that address field is not blank
	if (document.regForm.address.value == "")
	{
		alert("Address cant be blank!!")
		return false;
	}
	return true;
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//array to hold quiz questions
var questions = [];

//array to hold the answer
var answers= [];

//setting questions and anwers

//first question 
questions[0]= "What year did the LA Lakers last win an NBA Championship Ring?";
answers[0]= "2010";

//second question
questions[1]= "Is Stephen Curry in the 2019/2020 LA Lakers Roster? Yes or No.";
answers[1]= "No";

//third question
questions[2]= "Who is the all time point leader right now for the LA Lakers?";
answers[2]= "Kobe Bryant";

var currentQuestion;

function setQuestion(questionNumber)
{
	currentQuestion = questionNumber;
	document.getElementById("quizQuestion").innerHTML = questions[questionNumber];
}

function checkAnswer()
{
	var tmpAnswer = document.getElementById("answer").value;
	if (tmpAnswer == answers[currentQuestion])
	{
		document.getElementById("correct").innerHTML = 'Correct Answer!';
	}//end if
	else
	{
		document.getElementById("correct").innerHTML = 'Wrong!!';
	}//end else
}