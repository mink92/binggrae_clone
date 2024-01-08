const $topBtn = document.querySelector(".move_btn_top");

// 버튼 클릭 시 맨 위로 이동
$topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const $bottomBtn = document.querySelector(".move_btn_bottom");

// 버튼 클릭 시 페이지 하단으로 이동
$bottomBtn.onclick = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};
