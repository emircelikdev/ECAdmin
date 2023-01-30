import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

//Font Awsome Components
import "./Sources/icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//i18n
import { createI18n } from "vue-i18n";
import translateTr from "./Sources/Langs/tr.json";
import translateEn from "./Sources/Langs/en.json";
const i18n = createI18n({
    legacy: false,
    locale: "tr",
    fallbackLocale: "en",
    messages: {
        tr: translateTr,
        en: translateEn,
    },
});

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .component("font-awesome-icon", FontAwesomeIcon)
            .use(i18n)
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
