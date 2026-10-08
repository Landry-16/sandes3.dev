/**
 * Click a gallery image to open it full size. Arrow keys and the side buttons
 * move between images, Escape or a click outside closes. Falls back to doing
 * nothing when <dialog> is unsupported, so the page stays usable.
 */
interface Shot {
  src: string;
  alt: string;
}

export function startLightbox(): void {
  const dialog = document.querySelector<HTMLDialogElement>("[data-lightbox]");
  const image = document.querySelector<HTMLImageElement>("[data-lightbox-image]");
  const caption = document.querySelector<HTMLElement>("[data-lightbox-caption]");
  const counter = document.querySelector<HTMLElement>("[data-lightbox-count]");
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-zoom]"));
  if (!dialog || !image || !caption || !counter || buttons.length === 0) return;
  if (typeof dialog.showModal !== "function") return;

  const shots: Shot[] = buttons.map((b) => ({ src: b.dataset.src ?? "", alt: b.dataset.alt ?? "" }));
  dialog.classList.toggle("is-single", shots.length < 2);
  let current = 0;

  function show(index: number): void {
    current = (index + shots.length) % shots.length;
    const shot = shots[current];
    image!.src = shot.src;
    image!.alt = shot.alt;
    caption!.textContent = shot.alt;
    counter!.textContent = shots.length > 1 ? `${current + 1} / ${shots.length}` : "";
  }

  buttons.forEach((button, index) =>
    button.addEventListener("click", () => {
      show(index);
      dialog.showModal();
    }),
  );

  dialog.querySelectorAll<HTMLButtonElement>("[data-step]").forEach((button) =>
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      show(current + Number(button.dataset.step));
    }),
  );

  dialog.querySelector<HTMLButtonElement>("[data-close]")?.addEventListener("click", () => dialog.close());

  // A click anywhere outside the image closes, like a photo viewer.
  dialog.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    if (!event.target.closest("img, button")) dialog.close();
  });

  dialog.addEventListener("keydown", (event) => {
    if (shots.length < 2) return;
    if (event.key === "ArrowRight") show(current + 1);
    if (event.key === "ArrowLeft") show(current - 1);
  });

  dialog.addEventListener("close", () => buttons[current]?.focus());
}
