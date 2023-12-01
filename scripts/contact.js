// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const submitButton = document.getElementById('submit-button');/*target button by its ID and put it into a variable */
const mainSection = document.getElementById('contact-page');/**target main section by its id and put it into a variable */
submitButton.addEventListener('click', ChangeMain);/** make a event when button clicked run ChangeMain function*/

function ChangeMain() {
  mainSection.innerHTML = '<p style="font-size: 24px;">Thank you For your Message!</p>'; /**Change  all inner HTML of this section too.\ */
}
