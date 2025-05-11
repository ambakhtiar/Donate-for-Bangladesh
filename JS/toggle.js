document.getElementById('btn-donation')
    .addEventListener('click', () => {
        toggle('btn-donation');
        // window.location.href = './index.html';

        document.getElementById('donation').classList.remove('hidden');
        document.getElementById('history').classList.add('hidden');
    });

document.getElementById('btn-history')
    .addEventListener('click', () => {
        toggle('btn-history');
        // window.location.href = './history.html';

        document.getElementById('donation').classList.add('hidden');
        document.getElementById('history').classList.remove('hidden');
    });

document.getElementById('btn-blog')
    .addEventListener('click', () => {
        toggle('btn-blog');
        window.location.href = './blog.html';
    });



// If History have fiferen html file. *****
// highlight the correct button on page load

// document.addEventListener('DOMContentLoaded', () => {
//     // window.location.pathname might be "/index.html", "/history.html", or "/blog.html"
//     const file = window.location.pathname.split('/').pop() || 'index.html';

//     if (file === 'index.html') toggle('btn-donation');
//     else if (file === 'history.html') toggle('btn-history');
//     else if (file === 'blog.html') toggle('btn-blog');
// });

// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', highlightActive);
// } else {
//     highlightActive();
// } 