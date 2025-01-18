const box = document.getElementById('box');

// Stop animation on mouseover
box.addEventListener('mouseover', ()=>{
    box.style.animationPlayState = 'paused';
});

// Resume animation on mouseout
box.addEventListener('mouseout', ()=>{
    box.style.animationPlayState = 'running';
});

