import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

const emblaNode = document.querySelector(".embla");
const options = { loop: true };
const plugins = [Autoplay()];
const emblaApi = EmblaCarousel(emblaNode, options, plugins);
