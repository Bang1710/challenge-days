var empties = document.querySelectorAll('.empty');
var fill = document.querySelector('.fill');

fill.addEventListener('dragstart', dragstart);
fill.addEventListener('dragend', dragend);

for (const empty of empties) {
    empty.addEventListener('dragenter', dragenter);
    empty.addEventListener('dragover', dragover);
    empty.addEventListener('dragleave', dragleave);
    empty.addEventListener('drop', drop);
};

// fill event

function dragstart(event) {
    this.className += ' hold';
    setTimeout(() => this.className = '', 0);
};

function dragend(event) {
    this.className = 'fill';
}
;
// empty event

function dragenter(event) {
    event.preventDefault();
    this.className += ' hovered';
};

function dragover(event) {
    event.preventDefault()
};

function dragleave(event) {
    this.className = 'empty';
};

function drop(event) {
    this.className = 'empty';
    this.append(fill);
};
