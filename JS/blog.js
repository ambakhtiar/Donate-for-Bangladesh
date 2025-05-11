const btnBlogs = document.getElementsByClassName('btn-blog');
// console.log(btnBlogs);


for (let i = 0; i < btnBlogs.length; i++) {
    btnBlogs[i].addEventListener('click', function () {
        // console.log('Blog button clicked:', i);
        window.location.href = './blog.html';
    });
}