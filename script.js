const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
const year = document.querySelector("#year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("表格目前為靜態示範。正式使用前可接入電郵、表單服務或後端 API。");
    form.reset();
  });
});

document.querySelectorAll(".tab-pills button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-pills button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

document.querySelectorAll(".quote-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.closest(".product-card")?.querySelector("h3")?.textContent || "商品";
    alert(`${productName} 已加入報價清單示範。正式使用前可接入購物車或報價系統。`);
  });
});
