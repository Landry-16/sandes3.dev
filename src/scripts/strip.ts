/** Wires the previous and next buttons of the client sites film strip to its horizontal scroll. */
export function startStrip(): void {
  const strip = document.querySelector<HTMLElement>("[data-strip]");
  if (!strip) return;
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-strip-step]"));

  const update = (): void => {
    const max = strip.scrollWidth - strip.clientWidth - 2;
    buttons.forEach((button) => {
      const direction = Number(button.dataset.stripStep);
      button.disabled = direction < 0 ? strip.scrollLeft <= 2 : strip.scrollLeft >= max;
    });
    buttons[0]?.parentElement?.toggleAttribute("hidden", max <= 0);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const frame = strip.querySelector<HTMLElement>(".frame");
      const distance = frame ? frame.offsetWidth + 40 : strip.clientWidth * 0.8;
      strip.scrollBy({ left: Number(button.dataset.stripStep) * distance, behavior: "smooth" });
    });
  });
  strip.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}
