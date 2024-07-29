export default function createToast(type, icon, title, text) {
  let notifications = document.querySelector(".notifications");

  let newToast = document.createElement("div");

  newToast.innerHTML = `<div class="toast ${type}">
            <!--  icon -->
         <div>
         ${icon}
</div>
            <div class="content">
              <div class="title">${title}</div>
              <span>${text}</span>
            </div>
            <!-- close icon -->
         <div onClick="(this.parentElement).remove()">
         <svg
         xmlns="http://www.w3.org/2000/svg"
         width="1em"
         height="1em"
         viewBox="0 0 15 15"
         >
              <path
                fill="white"
                d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
              />
                </div>
            </svg>
          </div>
 </div>
          `;
  // add on click
  notifications.appendChild(newToast);
  // remove after 3s
  newToast.timeOut = setTimeout(() => newToast.remove(), 3000);
}