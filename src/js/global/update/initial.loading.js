export default function initialLoading () {
    function removeLoading() {
        document.querySelector('.container').style.display = 'grid';
        document.querySelector('#pre-loader').remove();
        window.removeEventListener('load', removeLoading);
    }

    window.addEventListener('load', removeLoading);
}