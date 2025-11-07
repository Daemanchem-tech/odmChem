// 스크롤 내려가면 클라스 추가

const headerNod = document.querySelector("header");

// 스크롤 반응시 적용할 이벤트 등록
window.addEventListener('scroll' , function(){
    // pageYOffset: 문서의 수직 스크롤 위치\
    const browerScrollY = window.pageYOffset;
    if(browerScrollY>0){
        // add() 배열에 추가
        // 헤더의 클라스 이름을 active라고 설정
        headerNod.classList.add("active");

    }else{
        headerNod.classList.remove("active");
    }
});

window.addEventListener('scroll', function(){
    this.requestAnimationFrame(scrollCheck);
})

function scrollCheck(){
    // scrollY 값이 0(거짓)이면 pageYOffset 값으로 정의, 0이 아니면 scrollY값으로 정의 
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrollY > 0){
        headerNod.classList.add("active");
    }else{
        headerNod.classList.remove("active");
    }
}
