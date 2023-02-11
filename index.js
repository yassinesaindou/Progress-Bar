function updateProgressBar(){
    const {scrollTop, scrollHeight}= document.documentElement;
        const scrollPercent =`${(scrollTop/(scrollHeight-window.innerHeight)) *100}%`;
        console.log(scrollPercent);
        document.querySelector('#progress-bar').style.setProperty('--progress',scrollPercent);

}


document.addEventListener('scroll',updateProgressBar);