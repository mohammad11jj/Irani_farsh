// footer.js
document.addEventListener("DOMContentLoaded", function() {
    const footer = `
        <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__left">
          <div class="footer__about-us">
            <a href="index.html">
              <h2 class="footer__brand">ایـــرانی  فرش</h2>

            </a>
            <p class="footer__text">با ایرانی فرش همراه باشید و از زیبایی و شگفتی های فرش های متنوع و با کیفیت ما لذت ببرید. خرید آسان، تحویل سریع و خدمات پس از فروش حرفه ای، تنها چندی از ویژگی های خرید از ماست. با ایرانی فرش یک خرید آسان و لذت بخش را تجربه کنید.</p>
          </div>
          <div class="footer__info">
            <div class="footer__info-left">
              <h3 class="footer__phone">تلفن پشتیبانی:  0212544</h3>
              <div class="footer__socials">
                <a href="https://www.linkedin.com/in/jalalimohammad">
                  <svg class="footer__icon-linkedin" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.04 0H0.96C0.429 0 0 0.429 0 0.96V23.04C0 23.571 0.429 24 0.96 24H23.04C23.571 24 24 23.571 24 23.04V0.96C24 0.429 23.571 0 23.04 0ZM7.119 20.451H3.558V8.997H7.119V20.451ZM5.34 7.431C4.93178 7.431 4.53273 7.30995 4.1933 7.08315C3.85388 6.85636 3.58933 6.534 3.43311 6.15686C3.27689 5.77971 3.23602 5.36471 3.31566 4.96433C3.3953 4.56396 3.59188 4.19619 3.88053 3.90753C4.16919 3.61888 4.53696 3.4223 4.93733 3.34266C5.33771 3.26302 5.75271 3.30389 6.12986 3.46011C6.50701 3.61633 6.82936 3.88088 7.05615 4.2203C7.28295 4.55973 7.404 4.95878 7.404 5.367C7.401 6.507 6.477 7.431 5.34 7.431ZM20.451 20.451H16.893V14.88C16.893 13.551 16.869 11.844 15.042 11.844C13.191 11.844 12.906 13.29 12.906 14.784V20.451H9.351V8.997H12.765V10.563H12.813C13.287 9.663 14.448 8.712 16.182 8.712C19.788 8.712 20.451 11.085 20.451 14.169V20.451Z" fill="#505050"/>
                    </svg>

                </a>
                <a href="https://www.t.me/mohammad11jj">
                  <svg class="footer__icon-telegram" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5525 -0.00308982C18.3117 0.014427 18.0754 0.0709115 17.8527 0.16416H17.8497C17.636 0.24891 16.6197 0.67641 15.0747 1.32441L9.53822 3.65616C5.56547 5.32866 1.66022 6.97566 1.66022 6.97566L1.70672 6.95766C1.70672 6.95766 1.43747 7.04616 1.15622 7.23891C0.982463 7.34948 0.832947 7.49414 0.716717 7.66416C0.578717 7.86666 0.467717 8.17641 0.508967 8.49666C0.576467 9.03816 0.927467 9.36291 1.17947 9.54216C1.43447 9.72366 1.67747 9.80841 1.67747 9.80841H1.68347L5.34572 11.0422C5.50997 11.5694 6.46172 14.6984 6.69047 15.4192C6.82547 15.8497 6.95672 16.1189 7.12097 16.3244C7.20047 16.4294 7.29347 16.5172 7.40522 16.5877C7.46331 16.6215 7.52526 16.6481 7.58972 16.6672L7.55222 16.6582C7.56347 16.6612 7.57247 16.6702 7.58072 16.6732C7.61072 16.6814 7.63097 16.6844 7.66922 16.6904C8.24897 16.8659 8.71472 16.5059 8.71472 16.5059L8.74097 16.4849L10.9032 14.5162L14.5272 17.2964L14.6097 17.3317C15.365 17.6632 16.13 17.4787 16.5342 17.1532C16.9415 16.8254 17.0997 16.4062 17.0997 16.4062L17.126 16.3387L19.9265 1.99191C20.006 1.63791 20.0262 1.30641 19.9385 0.98466C19.848 0.659029 19.639 0.378966 19.3527 0.19941C19.1123 0.0532463 18.8335 -0.0173034 18.5525 -0.00308982ZM18.4767 1.53441C18.4737 1.58166 18.4827 1.57641 18.4617 1.66716V1.67541L15.6875 15.8729C15.6755 15.8932 15.6552 15.9374 15.5997 15.9817C15.5412 16.0282 15.4947 16.0574 15.251 15.9607L10.8185 12.5624L8.14097 15.0029L8.70347 11.4104L15.9455 4.66041C16.244 4.38291 16.1442 4.32441 16.1442 4.32441C16.1652 3.98391 15.6935 4.22466 15.6935 4.22466L6.56147 9.88191L6.55847 9.86691L2.18147 8.39316V8.39016L2.17022 8.38791C2.17789 8.38536 2.1854 8.38236 2.19272 8.37891L2.21672 8.36691L2.23997 8.35866C2.23997 8.35866 6.14822 6.71166 10.121 5.03916C12.11 4.20141 14.114 3.35766 15.6552 2.70666C16.5693 2.32191 17.4843 1.93941 18.4002 1.55916C18.4617 1.53516 18.4325 1.53441 18.4767 1.53441Z" fill="#505050"/>
                    </svg>
                    
                </a>

                <a href="https://www.instagram.com/jla.mohammad">
                  
                    <svg class="footer__icon-instagram"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5001 18.9584H7.50008C2.97508 18.9584 1.04175 17.0251 1.04175 12.5001V7.50008C1.04175 2.97508 2.97508 1.04175 7.50008 1.04175H12.5001C17.0251 1.04175 18.9584 2.97508 18.9584 7.50008V12.5001C18.9584 17.0251 17.0251 18.9584 12.5001 18.9584ZM7.50008 2.29175C3.65841 2.29175 2.29175 3.65841 2.29175 7.50008V12.5001C2.29175 16.3417 3.65841 17.7084 7.50008 17.7084H12.5001C16.3417 17.7084 17.7084 16.3417 17.7084 12.5001V7.50008C17.7084 3.65841 16.3417 2.29175 12.5001 2.29175H7.50008Z" fill="#505050"/>
                      <path d="M9.99992 13.5416C8.04992 13.5416 6.45825 11.9499 6.45825 9.99992C6.45825 8.04992 8.04992 6.45825 9.99992 6.45825C11.9499 6.45825 13.5416 8.04992 13.5416 9.99992C13.5416 11.9499 11.9499 13.5416 9.99992 13.5416ZM9.99992 7.70825C8.73325 7.70825 7.70825 8.73325 7.70825 9.99992C7.70825 11.2666 8.73325 12.2916 9.99992 12.2916C11.2666 12.2916 12.2916 11.2666 12.2916 9.99992C12.2916 8.73325 11.2666 7.70825 9.99992 7.70825Z" fill="#505050"/>
                      <path d="M14.1666 6.24992C14.0583 6.24992 13.9499 6.22492 13.8499 6.18325C13.7499 6.14159 13.6583 6.08325 13.5749 6.00825C13.4999 5.92492 13.4333 5.83325 13.3916 5.73325C13.3499 5.63325 13.3333 5.52492 13.3333 5.41659C13.3333 5.30825 13.3499 5.19992 13.3916 5.09992C13.4416 4.99159 13.4999 4.90825 13.5749 4.82492C13.6166 4.79159 13.6583 4.74992 13.6999 4.72492C13.7499 4.69159 13.7999 4.66659 13.8499 4.64992C13.8999 4.62492 13.9499 4.60825 14.0083 4.59992C14.2749 4.54159 14.5583 4.63325 14.7583 4.82492C14.8333 4.90825 14.8916 4.99159 14.9333 5.09992C14.9749 5.19992 14.9999 5.30825 14.9999 5.41659C14.9999 5.52492 14.9749 5.63325 14.9333 5.73325C14.8916 5.83325 14.8333 5.92492 14.7583 6.00825C14.6749 6.08325 14.5833 6.14159 14.4833 6.18325C14.3833 6.22492 14.2749 6.24992 14.1666 6.24992Z" fill="#505050"/>
                      </svg>
                      
                </a>
                  
              </div>
            </div>
            <div class="footer__info-right">
              <a href="#">
                
                <svg width="56" height="102" viewBox="0 0 56 102" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="56" height="102" fill="url(#pattern0_6771_621)"/>
<defs>
<pattern id="pattern0_6771_621" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_6771_621" transform="scale(0.0178571 0.00980392)"/>
</pattern>
<image id="image0_6771_621" width="56" height="102" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>

              </a>
            </div>
          </div>
        </div>
        <div class="footer__right">
          <div class="footer__cat1">
            <h3 class="footer__cat-title">فرش های  دست بافت</h3>
            <ul class="footer__lists">
              <li class="footer__list">
                <a href="#" class="footer__list-link">لوکس</a>
              </li>
              <li class="footer__list">
                <a href="#" class="footer__list-link">قدیمی</a>
              </li>
              <li class="footer__list">
                <a href="#" class="footer__list-link">مدرن</a>
              </li>
            </ul>
          </div>
          <div class="footer__cat2">
            <h3 class="footer__cat-title">فرش های ماشینی</h3>
            <ul class="footer__lists">
              <li class="footer__list">
                <a href="#" class="footer__list-link">لوکس</a>
              </li>
              <li class="footer__list">
                <a href="#" class="footer__list-link">قدیمی</a>
              </li>
              <li class="footer__list">
                <a href="#" class="footer__list-link">مدرن</a>
              </li>
            </ul>
          </div>
          <div class="footer__cat3">
            <h3 class="footer__cat-title">سایر فرش ها</h3>
            <ul class="footer__lists">

              <li class="footer__list">
                <a href="#" class="footer__list-link">لوکس</a>
              </li>
              <li class="footer__list">
                <a href="#" class="footer__list-link">قدیمی</a>
              </li>
              <li class="footer__list">
                <a href="#" class="footer__list-link">مدرن</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
    `;
  
    // تزریق فوتر به انتهای بدنه صفحه
    document.body.insertAdjacentHTML("beforeend", footer);
  });