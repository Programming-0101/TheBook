(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{329:function(e,t,s){e.exports=s.p+"assets/img/J-SecretNumber-2.aa1ad69f.png"},330:function(e,t,s){e.exports=s.p+"assets/img/J-GuessingGame-2.516a2b73.png"},524:function(e,t,s){"use strict";s.r(t);var i=s(2),n=Object(i.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"guessinggame"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#guessinggame","aria-hidden":"true"}},[e._v("#")]),e._v(" GuessingGame")]),e._v(" "),i("p",[e._v("This example expands on the sample GuessingGame by adding more guess methods to make guessing more efficient by using the SecretNumber’s guessWithHint() method.")]),e._v(" "),i("p",[e._v("In a regular number guessing game between two people, one person asks another person to guess a whole number between a pair of values. In this example, two different classes take on the roles of the two people in the game: The SecretNumber class takes on the role of the person who has picked a value between some lower and upper limit, while the GuessingGame class takes on the role of the person who has to guess what that hidden number is.")]),e._v(" "),i("p",[i("strong",[e._v("SecretNumber")])]),e._v(" "),i("p",[e._v("Objects of this class will store a hidden value between some upper and lower limit (inclusive). The SecretNumber class supports these public methods:")]),e._v(" "),i("ul",[i("li",[e._v("GetLowerLimit() – Returns a number representing the lower end (inclusive) of the range of possible values for the hidden value.")]),e._v(" "),i("li",[e._v("GetUpperLimit() – Returns a number representing the upper end (inclusive) of the range of possible values for the hidden value.")]),e._v(" "),i("li",[e._v("GuessWithHint() – Returns CORRECT if the supplied value matches the hidden value, otherwise it returns GUESS_HIGHER if the attempted guess was too low or GUESS_LOWER if the attempted guess was too high.")])]),e._v(" "),i("p",[i("em",[e._v("Note:")]),e._v(" This class is already coded for you in the samples.")]),e._v(" "),i("p",[i("img",{attrs:{src:s(329),alt:""}})]),e._v(" "),i("p",[i("strong",[e._v("GuessingGame")])]),e._v(" "),i("p",[e._v("This class simulates the action of guessing what hidden value is stored inside of a SecretNumber object. The SecretNumber is supplied to the constructor of the GuessingGame, and the following methods attempt to find out what that number is.")]),e._v(" "),i("ul",[i("li",[e._v("GuessUsingHints() – This first method simply tries to guess the hidden value of the SecretNumber. It has “unlimited” guesses, and it will return the number of attempts it took to find out what that hidden number is. Use the GuessWithHint method of the SecretNumber object.")]),e._v(" "),i("li",[e._v("GuessUsingHints(MaxAttempts : Integer) – This method will also try to guess the SecretNumber’s hidden value, but it is limited to a maximum number of guesses. This method will return the actual number of attempts it took to find the hidden value, or it will return the GUESS_FAILED constant if it was unable to guess the secret number. Use the GuessWithHint method of the SecretNumber object.\nAs an additional exercise, create a simple driver that instantiates a SecretNumber object and supplies it to a GuessingGame object. Show how many attempts it took to guess the hidden number when using hints.")])]),e._v(" "),i("p",[i("img",{attrs:{src:s(330),alt:""}})])])},[],!1,null,null,null);n.options.__file="GuessingGame.md";t.default=n.exports}}]);