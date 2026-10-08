import { renderPost, renderTheme } from "./UI/ui.js";

const paramLink = new URLSearchParams(window.location.search);

renderPost(paramLink);