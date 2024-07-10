export default function initialLoading () {
    window.addEventListener('load', () => {
        document.querySelector('.container').style.display = 'grid';
        document.querySelector('#pre-loader').remove();
    })
}