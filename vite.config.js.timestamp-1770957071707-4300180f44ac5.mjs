// vite.config.js
import { defineConfig } from "file:///home/finmet-010/Adonis/adonis-project/node_modules/vite/dist/node/index.js";
import adonisjs from "file:///home/finmet-010/Adonis/adonis-project/node_modules/@adonisjs/vite/build/src/client/main.js";
import tailwindcss from "file:///home/finmet-010/Adonis/adonis-project/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///home/finmet-010/Adonis/adonis-project/node_modules/autoprefixer/lib/autoprefixer.js";
var vite_config_default = defineConfig({
  plugins: [
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ["resources/js/app.js"],
      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ["resources/views/**/*.edge"]
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9maW5tZXQtMDEwL0Fkb25pcy9hZG9uaXMtcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvZmlubWV0LTAxMC9BZG9uaXMvYWRvbmlzLXByb2plY3Qvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvZmlubWV0LTAxMC9BZG9uaXMvYWRvbmlzLXByb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IGFkb25pc2pzIGZyb20gJ0BhZG9uaXNqcy92aXRlL2NsaWVudCdcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcydcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgYWRvbmlzanMoe1xuICAgICAgLyoqXG4gICAgICAgKiBFbnRyeXBvaW50cyBvZiB5b3VyIGFwcGxpY2F0aW9uLiBFYWNoIGVudHJ5cG9pbnQgd2lsbFxuICAgICAgICogcmVzdWx0IGluIGEgc2VwYXJhdGUgYnVuZGxlLlxuICAgICAgICovXG4gICAgICBlbnRyeXBvaW50czogWydyZXNvdXJjZXMvanMvYXBwLmpzJ10sXG5cbiAgICAgIC8qKlxuICAgICAgICogUGF0aHMgdG8gd2F0Y2ggYW5kIHJlbG9hZCB0aGUgYnJvd3NlciBvbiBmaWxlIGNoYW5nZVxuICAgICAgICovXG4gICAgICByZWxvYWQ6IFsncmVzb3VyY2VzL3ZpZXdzLyoqLyouZWRnZSddLFxuICAgIH0pLFxuICBdLFxuXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFt0YWlsd2luZGNzcywgYXV0b3ByZWZpeGVyXSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1MsU0FBUyxvQkFBb0I7QUFDalUsT0FBTyxjQUFjO0FBQ3JCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sa0JBQWtCO0FBRXpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS1AsYUFBYSxDQUFDLHFCQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS25DLFFBQVEsQ0FBQywyQkFBMkI7QUFBQSxJQUN0QyxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLGFBQWEsWUFBWTtBQUFBLElBQ3JDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
