function attachGradientEvents() {
   let gradientElement = document.getElementById('gradient');
   let resultElement = document.getElementById('result');

   const gradientMouseoverHandler = (e) => {
    let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100);
     //console.log(e)
    resultElement.textContent = `${percent}%`;
   }
   gradientElement.addEventListener('mousemove', gradientMouseoverHandler);
}