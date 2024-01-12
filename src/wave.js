const RESOLUTION = 80;
const AMPLITUDE = 1;
export default function applyWaveEffect(startTime, element) {
    render();
    function render() {
        const runtime = (Date.now() - startTime)/RESOLUTION;

        const rect = element.getBoundingClientRect();
        const size = rect.right - rect.left;

        const leftPoint  =  Math.sin((Math.PI * (runtime + rect.left) * 2) / RESOLUTION) * AMPLITUDE;
        const rightPoint =  Math.sin((Math.PI * (runtime + rect.right) * 2) / RESOLUTION) * AMPLITUDE - leftPoint;
        const centerPoint = (leftPoint + rightPoint) / 2;
        element.style.transform = `translateY(${leftPoint}px) rotate(${Math.asin(rightPoint/size)}rad)`;
        requestAnimationFrame(render);
    }
}

