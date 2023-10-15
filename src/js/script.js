const buttons = document.querySelectorAll('.button');
const characters = document.querySelectorAll('.character');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        unselectButton();
        unselectCharacter();

        button.classList.add('selected');
        characters[index].classList.add('selected');
    });
})

function unselectCharacter() {
    const selectedCharacter = document.querySelector('.character.selected');
    selectedCharacter.classList.remove('selected');
}


function unselectButton() {
    const selectedButton = document.querySelector('.button.selected');
    selectedButton.classList.remove('selected');
}