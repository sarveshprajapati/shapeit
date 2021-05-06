const shapeit = (option) => {
    let elements = document.querySelectorAll('.shapeit');
    let shapeValue = null;
    if (option.shape = 'round') {
        shapeValue = '50px';
    }
    else if (option.shape = 'oval') {
        shapeValue = `50%`;
    }
    else {
        shapeValue = '10px';
    }
    elements.forEach(el => {
        el.style.borderRadius = shapeValue;
    });
}
module.exports.shapeit = shapeit;