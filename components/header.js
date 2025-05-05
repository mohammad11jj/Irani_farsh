// header.js

document.addEventListener('DOMContentLoaded', function () {
  const header = `
          <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__top">
            <div class="header__right">
              <div class="header__toggle-icon">
                <div class="header__toggle-line"></div>
              </div>

              <a href="../index.html" class="header__link-logo">
                <h4 class="header__logo-text">ایرانی فرش</h4>
              </a>

              <div class="header__search-box">
                
                <svg class="header__search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7549 11.255H11.9649L11.6849 10.985C12.6649 9.845 13.2549 8.365 13.2549 6.755C13.2549 3.165 10.3449 0.255005 6.75488 0.255005C3.16488 0.255005 0.254883 3.165 0.254883 6.755C0.254883 10.345 3.16488 13.255 6.75488 13.255C8.36488 13.255 9.84488 12.665 10.9849 11.685L11.2549 11.965V12.755L16.2549 17.745L17.7449 16.255L12.7549 11.255ZM6.75488 11.255C4.26488 11.255 2.25488 9.245 2.25488 6.755C2.25488 4.26501 4.26488 2.255 6.75488 2.255C9.24488 2.255 11.2549 4.26501 11.2549 6.755C11.2549 9.245 9.24488 11.255 6.75488 11.255Z" fill="#717171"/>
</svg>

                <input
                  type="search"
                  placeholder="جستجو فرش"
                  class="header__search-input"
                />
              </div>
            </div>
            <div class="header__left">
              <a href="../shopping.html" class="header__shopping-link">
                <svg
                  class="header__shopping-icon"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5463 11C15.2963 11 15.9563 10.59 16.2963 9.97L19.8763 3.48C20.2463 2.82 19.7663 2 19.0063 2H4.20634L3.26634 0H-0.00366211V2H1.99634L5.59634 9.59L4.24634 12.03C3.51634 13.37 4.47634 15 5.99634 15H17.9963V13H5.99634L7.09634 11H14.5463ZM5.15634 4H17.3063L14.5463 9H7.52634L5.15634 4ZM5.99634 16C4.89634 16 4.00634 16.9 4.00634 18C4.00634 19.1 4.89634 20 5.99634 20C7.09634 20 7.99634 19.1 7.99634 18C7.99634 16.9 7.09634 16 5.99634 16ZM15.9963 16C14.8963 16 14.0063 16.9 14.0063 18C14.0063 19.1 14.8963 20 15.9963 20C17.0963 20 17.9963 19.1 17.9963 18C17.9963 16.9 17.0963 16 15.9963 16Z"
                  />
                </svg>
              </a>

              <a href="../signup.html" class="header__login-link">
                <svg
                  class="header__login-icon"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z"
                  />
                </svg>
                <span class="header__login-text">ورود/ثبت نام</span>
              </a>

              <a href="#" class="header__login-link-m">
                <svg
                  class="header__login-m-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7499 12.1667L15.9166 8L11.7499 3.83333L10.5749 5.00833L12.7249 7.16667H5.08325V8.83333H12.7249L10.5749 10.9917L11.7499 12.1667Z"
                  />
                  <path
                    d="M13.4166 13.8333H1.74992V2.16667H13.4166V3.83333H15.0833V2.16667C15.0833 1.25 14.3416 0.5 13.4166 0.5H1.74992C0.833252 0.5 0.083252 1.25 0.083252 2.16667V13.8333C0.083252 14.75 0.833252 15.5 1.74992 15.5H13.4166C14.3416 15.5 15.0833 14.75 15.0833 13.8333V12.1667H13.4166V13.8333Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <nav class="nav">
            <ul class="menu">
              <li class="menu__item">
                <a href="../index.html" class="menu__item-link menu__item-link-active"
                  >صفحه اصلی</a
                >
              </li>
              <li class="menu__item">
                <a href="#" class="menu__item-link">وبلاگ</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__item-link">تماس با ما</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__item-link">درباره ما</a>
              </li>
            </ul>
          </nav>

          <div class="header__search-box-m">
            
            <svg class="header__search-icon-m" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7549 11.255H11.9649L11.6849 10.985C12.6649 9.845 13.2549 8.365 13.2549 6.755C13.2549 3.165 10.3449 0.255005 6.75488 0.255005C3.16488 0.255005 0.254883 3.165 0.254883 6.755C0.254883 10.345 3.16488 13.255 6.75488 13.255C8.36488 13.255 9.84488 12.665 10.9849 11.685L11.2549 11.965V12.755L16.2549 17.745L17.7449 16.255L12.7549 11.255ZM6.75488 11.255C4.26488 11.255 2.25488 9.245 2.25488 6.755C2.25488 4.26501 4.26488 2.255 6.75488 2.255C9.24488 2.255 11.2549 4.26501 11.2549 6.755C11.2549 9.245 9.24488 11.255 6.75488 11.255Z" fill="#717171"/>
</svg>
            <input
              type="search"
              placeholder="جستجو فرش"
              class="header__search-input-m"
            />
          </div>
        </div>
      </div>
    </header>
    `;

  // تزریق هدر به ابتدای بدنه صفحه
  document.body.insertAdjacentHTML('afterbegin', header);

  const navToggleIcon = document.querySelector('.header__toggle-icon');
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.nav');
  
  
  // Hamburger menu icon
  navToggleIcon.addEventListener('click', function () {
    this.classList.toggle('header__toggle-icon--open');
    // menu.classList.toggle("menu--open");
    nav.classList.toggle('menu--open');
  });
});

