function removeTransition(e)
{
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
}

function playSound(e) 
{
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio) return;

	key.classList.add('playing');
	audio.currentTime = 0;
	audio.play();

	document.body.style.background = "#"+((1<<24)*Math.random()|0).toString(16);
}



const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);