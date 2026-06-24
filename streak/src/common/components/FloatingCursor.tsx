import { Script } from "streak/components";

const FloatingCursor = () => (
  <>
    <div id="custom-cursor-wrapper" style={{ display: "none" }}>
      <div
        id="cursor-follower"
        className="fixed top-0 left-0 rounded-full bg-white opacity-20 pointer-events-none z-[9998]"
        style={{
          width: "40px",
          height: "40px",
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      <div
        id="cursor-main"
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9999] transition-colors duration-200 ease-out bg-transparent border-primary"
        style={{
          width: "30px",
          height: "30px",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </div>
    <Script id={`floating-cursor-script-loader`}>
      {(gDom: any) => {
        const cursorMain = gDom.geById("cursor-main") as HTMLElement;
        const cursorFollower = gDom.geById("cursor-follower") as HTMLElement;
        const wrapper = gDom.geById("custom-cursor-wrapper") as HTMLElement;

        let isHovered = false;
        let isClicked = false;
        let mouseX = 0,
          mouseY = 0;
        let followerX = 0,
          followerY = 0;

        const stiffness = 0.15; // trailing smoothness
        let debounceTimer: any;

        function animateFollower() {
          followerX += (mouseX - followerX) * stiffness;
          followerY += (mouseY - followerY) * stiffness;
          cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20
            }px)`;
          requestAnimationFrame(animateFollower);
        }
        animateFollower();

        document.addEventListener("mouseleave", () => {
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            wrapper.style.display = "none";
          }, 50);
        });

        document.addEventListener("mousemove", (e: MouseEvent) => {
          mouseX = e.clientX;
          mouseY = e.clientY;

          clearTimeout(debounceTimer);

          debounceTimer = setTimeout(() => {
            const showCursor =
              mouseX > 0 &&
              mouseY > 0 &&
              mouseX < window.innerWidth &&
              mouseY < window.innerHeight &&
              window.innerWidth >= 768; // only for large devices
            wrapper.style.display = showCursor ? "block" : "none";
          }, 50);

          cursorMain.style.transform = `translate(${mouseX - 15}px, ${mouseY - 15
            }px)`;

          // Dynamic hover detection
          const target = e.target as HTMLElement;
          const isHoverable =
            target.closest("a:not(#disable-link-custom-hover)") ||
            target.closest("button:not(#disable-button-custom-hover)") ||
            target.closest("[data-cursor-hover]");

          if (isHoverable && !isHovered) {
            isHovered = true;
            cursorMain.style.width = "16px";
            cursorMain.style.height = "16px";
            cursorFollower.style.width = "0px";
            cursorFollower.style.height = "0px";
          } else if (!isHoverable && isHovered) {
            isHovered = false;
            cursorMain.style.width = "30px";
            cursorMain.style.height = "30px";
            cursorFollower.style.width = "40px";
            cursorFollower.style.height = "40px";
          }
        });

        document.addEventListener("click", () => {
          if (isClicked) return;
          isClicked = true;
          cursorMain.classList.remove("border-primary");
          cursorMain.classList.add("border-red");

          setTimeout(() => {
            cursorMain.classList.remove("border-red");
            cursorMain.classList.add("border-primary");
            isClicked = false;
          }, 300);
        });
      }}
    </Script>
  </>
);

export default FloatingCursor;
