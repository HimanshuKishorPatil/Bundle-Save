// const options = document.querySelectorAll('.bundle-option');

// options.forEach(option => {
//     option.addEventListener('click', () => {
//         options.forEach(opt => opt.classList.remove('selected'));
//         option.classList.add('selected');
//     });
// });
const options = document.querySelectorAll('.bundle-option');

options.forEach(option => {
    const radio = option.querySelector('input[type="radio"]');
    radio.addEventListener('change', () => {
        options.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});
