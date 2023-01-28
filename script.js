const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function changeVlaue(){
    let suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
    
}

inputs.forEach(input => input.addEventListener('change', changeVlaue));
inputs.forEach(input => input.addEventListener('mousemove',changeVlaue));
