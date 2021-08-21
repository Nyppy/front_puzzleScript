<template>
  <div class="editor">
    <Header @openModal="togleAssets" cog fixed search_elem :name_protocol="name_protocol + '' + idProtocol"/>
    
    <div class="main">
      <vue-file-toolbar-menu :content="menu" class="bar" />

      <vue-document-editor class="editor" ref="editor"
        :content.sync="content"
        :overlay="overlay"
        :zoom="zoom"
        :page_format_mm="page_format_mm"
        :page_margins="page_margins"
        :display="display"
      />
    </div>

    <Save/>
    <Assets v-if="flag_assets" @outside="togleAssets"/>
  </div>
</template>

<script>
import VueFileToolbarMenu from 'vue-file-toolbar-menu';
import VueDocumentEditor from '../components/DocumentEditor/DocumentEditor.vue';

import Header from '@/components/HeaderPrivate.vue';

import Save from '@/components/Save.vue';
import Assets from '@/components/Assets.vue';

import axios from 'axios';

export default {
  name: 'Editor',
  components: { 
    VueDocumentEditor,
    VueFileToolbarMenu,
    Header,
    Save,
    Assets
  },
  data () {
    return {
      content: [
        `
          <table border="1" cellpadding="5" width="100%">
            <tr align="center">
              <td colspan="2" style="padding: 5px;">НАИМЕНОВАНИЕ ПОДРАЗДЕЛЕНИЯ: 1</td>
            </tr>

            <tr>
              <td align="center" style="padding: 5px;" colspan="2"><h1>ПРОТОКОЛ</h1></td>
            </tr>

            <tr>
              <td align="center" style="padding: 5px;" colspan="2"><h3>НАЗВАНИЕ ПРОТОКОЛА: «TEST»</h3></td>
            </tr>

            <tr>
            <td align="left" style="padding: 5px;">ДАТА ПРОТОКОЛА: «11.12.21»</td>
            <td align="left" style="padding: 5px;">НОМЕР ПРОТОКОЛА «1»</td>
            </tr>

            <tr>
              <td align="left" style="padding: 5px;" colspan="2">ГОРОД: «Kursk»</td>
            </tr>

            <tr>
              <td align="left" style="padding: 5px;" colspan="2">ПРЕДСЕДАТЕЛЬСТВУЮЩИЙ: «Иванов Иван»</td>
            </tr>

            <tr>
              <td align="left" colspan="2">Присутствовали: Иванов Иван, Сидоров Алексей</td>
            </tr>

            <tr>
              <td align="left" style="padding: 5px;" colspan="2">ПОВЕСТКА: «Этапы хакатона ЦП 2021»</td>
            </tr>

            <tr>
              <td align="left" style="padding: 5px;" colspan="2">Текст:</td>
            </tr>

            <tr>
              <td align="left" style="padding: 5px;" colspan="2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia nihil ad repellat animi dignissimos eius maxime, rerum sed dicta minus, quos nemo corrupti, quo qui quibusdam! Quasi, commodi mollitia.
              </td>
            </tr>

            <tr>
              <td align="left" style="padding: 5px;" colspan="2">Председатель: «Сидоров Илья»</td>
            </tr>

            <tr>
              <td align="left" style="padding: 5px;" colspan="2">Секретарь: «Иванова Анна»</td>
            </tr>


            <style>
              li {
                margin-left: 40px;
              }
            </style>

          </table>
        `
      ],
      zoom: 0.8,
      zoom_min: 0.10,
      zoom_max: 5.0,
      page_format_mm: [210, 297],
      page_margins: "10mm 15mm",
      display: "grid", // ["grid", "vertical", "horizontal"]
      mounted: false, // will be true after this component is mounted
      undo_count: -1, // contains the number of times user can undo (= current position in content_history)
      content_history: [], // contains the content states for undo/redo operations
      flag_assets: false,
      name_protocol: 'Test 1',

      load_data: null
    }
  },
  created () {
    // Initialize gesture flags
    let start_zoom_gesture = false;
    let start_dist_touch = false;
    let start_zoom_touch = false;
    // Manage ctrl+scroll zoom (or trackpad pinch)
    window.addEventListener("wheel", (e) => {
      if(e.ctrlKey){
        e.preventDefault();
        this.zoom = Math.min(Math.max(this.zoom - e.deltaY * 0.01, this.zoom_min), this.zoom_max);
      }
    }, { passive: false });
    // Manage trackpad pinch on Safari
    window.addEventListener("gesturestart", (e) => {
      e.preventDefault();
      start_zoom_gesture = this.zoom;
    });
    window.addEventListener("gesturechange", (e) => {
      e.preventDefault();
      if(!start_zoom_touch){
        this.zoom = Math.min(Math.max(start_zoom_gesture * e.scale, this.zoom_min), this.zoom_max);
      }
    });
    window.addEventListener("gestureend", () => {
      start_zoom_gesture = false;
    });
    // Manage pinch to zoom for touch devices
    window.addEventListener("touchstart", (e) => {
      if (e.touches.length == 2) {
        e.preventDefault();
        start_dist_touch = Math.hypot(
          e.touches[0].pageX - e.touches[1].pageX,
          e.touches[0].pageY - e.touches[1].pageY
        );
        start_zoom_touch = this.zoom;
      }
    }, { passive: false });
    window.addEventListener("touchmove", (e) => {
      if (start_dist_touch && start_zoom_touch) {
        e.preventDefault();
        let zoom = start_zoom_touch * Math.hypot(
          e.touches[0].pageX - e.touches[1].pageX,
          e.touches[0].pageY - e.touches[1].pageY
        ) / start_dist_touch;
        this.zoom = Math.min(Math.max(zoom, this.zoom_min), this.zoom_max);
      }
    }, { passive: false });
    window.addEventListener("touchend", () => {
      start_dist_touch = false;
      start_zoom_touch = false;
    }, { passive: false });
    // Manage history undo/redo events
    const manage_undo_redo = (e) => {
      switch(e && e.inputType){
        case "historyUndo": e.preventDefault(); e.stopPropagation(); this.undo(); break;
        case "historyRedo": e.preventDefault(); e.stopPropagation(); this.redo(); break;
      }
    }
    window.addEventListener("beforeinput", manage_undo_redo);
    window.addEventListener("input", manage_undo_redo); // in case of beforeinput event is not implemented (Firefox)
    // If your component is susceptible to be destroyed, don't forget to
    // use window.removeEventListener in the Vue.js beforeDestroy handler
  },
  mounted () {
    this.mounted = true;

    this.loadData();
  },
  computed: {
    idProtocol() {
      return this.$route.params.id;
    },
    // This is the menu content
    menu () {
      return [
        // Main commands
        { text: "Новый", title: "Новый", icon: "description", click: () => { if(confirm("")){ this.content = ["Это создаст пустой документ. Ты уверен?"]; this.resetContentHistory(); } } },
        { text: "Печать", title: "Печать", icon: "print", click: () => window.print() },
        { is: "spacer" },
        // Undo / redo commands
        { title: "Назад", icon: "undo", disabled: !this.can_undo, hotkey: this.isMacLike ? "command+z" : "ctrl+z", click: () => this.undo() },
        { title: "Вперед", icon: "redo", disabled: !this.can_redo, hotkey: this.isMacLike ? "shift+command+z" : "ctrl+y", click: () => this.redo() },
        { is: "spacer" },
        // Rich text menus
        { icon: "format_align_left", title: "Лево", active: this.isLeftAligned, disabled: !this.current_text_style, hotkey: this.isMacLike ? "shift+command+l" : "ctrl+shift+l", click: () => document.execCommand("justifyLeft") },
        { icon: "format_align_center", title: "Центр", active: this.isCentered, disabled: !this.current_text_style, hotkey: this.isMacLike ? "shift+command+e" : "ctrl+shift+e", click: () => document.execCommand("justifyCenter") },
        { icon: "format_align_right", title: "Право", active: this.isRightAligned, disabled: !this.current_text_style, hotkey: this.isMacLike ? "shift+command+r" : "ctrl+shift+r", click: () => document.execCommand("justifyRight") },
        { icon: "format_align_justify", title: "По ширине", active: this.isJustified, disabled: !this.current_text_style, hotkey: this.isMacLike ? "shift+command+j" : "ctrl+shift+j", click: () => document.execCommand("justifyFull") },
        { is: "separator" },
        { icon: "format_bold", title: "Bold", active: this.isBold, disabled: !this.current_text_style, hotkey: this.isMacLike ? "command+b" : "ctrl+b", click: () => document.execCommand("bold") },
        { icon: "format_italic", title: "Italic", active: this.isItalic, disabled: !this.current_text_style, hotkey: this.isMacLike ? "command+i" : "ctrl+i", click: () => document.execCommand("italic") },
        { icon: "format_underline", title: "Underline", active: this.isUnderline, disabled: !this.current_text_style, hotkey: this.isMacLike ? "command+u" : "ctrl+u", click: () => document.execCommand("underline") },
        { icon: "format_strikethrough", title: "Strike through", active: this.isStrikeThrough, disabled: !this.current_text_style, click: () => document.execCommand("strikethrough") },
        { is: "button-color", type: "compact", menu_class: "align-center", disabled: !this.current_text_style, color: this.curColor, update_color: (new_color) => document.execCommand('foreColor', false, new_color.hex8) },
        { is: "separator" },
        { icon: "format_list_numbered", title: "Нумерованный список", active: this.isNumberedList, disabled: !this.current_text_style, click: () => document.execCommand("insertOrderedList") },
        { icon: "format_list_bulleted", title: "Маркированный список", active: this.isBulletedList, disabled: !this.current_text_style, click: () => document.execCommand("insertUnorderedList") },
        { html: "<b>H1</b>", title: "Заголовок 1", active: this.isH1, disabled: !this.current_text_style, click: () => document.execCommand('formatBlock', false, '<h1>') },
        { html: "<b>H2</b>", title: "Заголовок 2", active: this.isH2, disabled: !this.current_text_style, click: () => document.execCommand('formatBlock', false, '<h2>') },
        { html: "<b>H3</b>", title: "Заголовок 3", active: this.isH3, disabled: !this.current_text_style, click: () => document.execCommand('formatBlock', false, '<h3>') },
        { icon: "format_clear", title: "Обычный", disabled: !this.current_text_style, click () { document.execCommand('removeFormat'); document.execCommand('formatBlock', false, '<div>'); } },
        { icon: "splitscreen", title: "Разрыв страницы", disabled: !this.current_text_style, click: () => this.insertPageBreak() },
        
        { is: "spacer" },
        { // Format menu
          text: this.current_format_name,
          title: "Формат",
          icon: "crop_free",
          chevron: true,
          menu: this.formats.map(([text, w, h]) => {
            return {
              text,
              active: (this.page_format_mm[0] == w && this.page_format_mm[1] == h),
              click: () => { this.page_format_mm = [w, h]; }
            }
          }),
          menu_width: 80,
          menu_height: 280
        },
        { // Margins menu
          text: this.current_margins_name,
          title: "Отступы",
          icon: "select_all",
          chevron: true,
          menu: this.margins.map(([text, value]) => {
            return {
              text: text+" ("+value+")",
              active: (this.page_margins == value),
              click: () => { this.page_margins = value; }
            }
          }),
          menu_width: 200,
          menu_class: "align-center"
        },
        // { // Zoom menu
        //   text: Math.floor(this.zoom * 100) + "%",
        //   title: "Увеличить",
        //   icon: "zoom_in",
        //   chevron: true,
        //   menu: [
        //     ["200%", 2.0],
        //     ["150%", 1.5],
        //     ["125%", 1.25],
        //     ["100%", 1.0],
        //     ["75%", 0.75],
        //     ["50%", 0.5],
        //     ["25%", 0.25]
        //   ].map(([text, zoom]) => {
        //     return {
        //       text,
        //       active: this.zoom == zoom,
        //       click: () => { this.zoom = zoom; }
        //     }
        //   }),
        //   menu_width: 80,
        //   menu_height: 280,
        //   menu_class: "align-center"
        // },
        // { // Display mode menu
        //   title: "Экран",
        //   icon: this.display == "horizontal" ? "view_column" : (this.display == "vertical" ? "view_stream" : "view_module"),
        //   chevron: true,
        //   menu: [{
        //     icon: "view_module",
        //     active: this.display == "grid",
        //     click: () => { this.display = "grid"; }
        //   }],
        //   menu_width: 55,
        //   menu_class: "align-right"
        // }
      ]
    },
    // Formats management
    current_format_name () {
      const format = this.formats.find(([, width_mm, height_mm]) => (this.page_format_mm[0] == width_mm && this.page_format_mm[1] == height_mm));
      return format ? format[0] : (this.page_format_mm[0]+"mm x "+this.page_format_mm[1]+"mm");
    },
    formats: () => [
      ["A4", 210, 297],
    ],
    // Margins management
    current_margins_name () {
      const margins = this.margins.find(([, margins]) => (this.page_margins == margins));
      return margins ? margins[0] : margins[1];
    },
    margins: () => [
      ["Обычный", "20mm"],
      ["Средний", "15mm"],
      ["Маленький", "10mm 15mm"],
    ],
    // Current text style management
    current_text_style () { return this.mounted ? this.$refs.editor.current_text_style : false; },
    isLeftAligned () { return ["start", "left", "-moz-left"].includes(this.current_text_style.textAlign); },
    isRightAligned () { return ["end", "right", "-moz-right"].includes(this.current_text_style.textAlign); },
    isCentered () { return ["center", "-moz-center"].includes(this.current_text_style.textAlign); },
    isJustified () { return ["justify", "justify-all"].includes(this.current_text_style.textAlign); },
    isBold () {
      const fontWeight = this.current_text_style.fontWeight;
      return fontWeight && (parseInt(fontWeight) > 400 || fontWeight.indexOf("bold") == 0);
    },
    isItalic () { return this.current_text_style.fontStyle == "italic"; },
    isUnderline () { // text-decoration is not overridden by children, so we query the parent stack
      const stack = this.current_text_style.textDecorationStack;
      return stack && stack.some(d => (d.indexOf("underline") == 0));
    },
    isStrikeThrough () { // text-decoration is not overridden by children, so we query the parent stack
      const stack = this.current_text_style.textDecorationStack;
      return stack && stack.some(d => (d.indexOf("line-through") == 0));
    },
    isNumberedList () { return this.current_text_style.isList && this.current_text_style.listStyleType == "decimal"; },
    isBulletedList () { return this.current_text_style.isList && ["disc", "circle"].includes(this.current_text_style.listStyleType); },
    isH1 () { return this.current_text_style.headerLevel == 1; },
    isH2 () { return this.current_text_style.headerLevel == 2; },
    isH3 () { return this.current_text_style.headerLevel == 3; },
    curColor () { return this.current_text_style.color || "transparent"; },
    // Platform management
    isMacLike: () => /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),
    // Undo / redo flags
    can_undo () { return this.undo_count > 0; },
    can_redo () { return this.content_history.length - this.undo_count - 1 > 0; }
  },
  methods: {
    loadData() {
      axios.get('http://89.223.69.148:8000/api/file_get/?file_id=' + this.idProtocol).then(res => {
        this.load_data = res.data.data;
      })
    },
    // Page overlays (headers, footers, page numbers)
    overlay (page, total) {
      // Add page numbers on each page
      let html = '<div style="position: absolute; bottom: 8mm; ' + ((page % 2) ? 'right' : 'left') + ': 10mm">Страница ' + page + ' из ' + total + '</div>';
      return html;
    },
    // Undo / redo functions examples
    undo () { if(this.can_undo){ this._mute_next_content_watcher = true; this.content = this.content_history[--this.undo_count]; } },
    redo () { if(this.can_redo){ this._mute_next_content_watcher = true; this.content = this.content_history[++this.undo_count]; } },
    resetContentHistory () { this.content_history = []; this.undo_count = -1; },
    // Insert page break function example
    async insertPageBreak () {
      // insert paragraph at caret position
      document.execCommand("insertParagraph");
      // insert a marker at caret position (start of the new paragraph)
      const marker = "###PB###"; // must be regex compatible
      document.execCommand("insertText", false, marker);
      // wait for DOM update
      await this.$nextTick();
      // find the marker inside content items and split this content item in two items between the two paragraphs
      // only match root tags (p, div, h1, h2...) to avoid non-root tags like <li>
      const regexp = new RegExp("<(p|div|h\\d)( [^/>]+)*>(<[^/>]+>)*"+marker);
      for(let i = 0; i < this.content.length; i++) {
        const item = this.content[i];
        if(typeof item != "string") continue;
        const match = regexp.exec(item);
        if(match) {
          const tags_open = match[0].slice(0, -marker.length);
          let content_plus_tags_close = item.substr(match.index + match[0].length);
          // insert <br> to empty pages that would not be handled correctly by contenteditable
          if(content_plus_tags_close.indexOf("</") == 0) content_plus_tags_close = "<br>" + content_plus_tags_close;
          this.content.splice(i, 1, item.substr(0, match.index), tags_open + content_plus_tags_close);
          return;
        }
      }
      // if the code didn't return before, the split didn't work (e.g. inside a <li>). just remove the marker from the content
      for(let i = 0; i < this.content.length; i++) {
        const item = this.content[i];
        if(typeof item != "string" || item.indexOf(marker) < 0) continue;
        this.content.splice(i, 1, item.replace(marker, ''));
        break;
      }
    },
    togleAssets(){
      this.flag_assets = !this.flag_assets;
    }
  },
  watch: {
    content: {
      immediate: true,
      // Fill undo / redo history stack on user input
      handler (new_content) {
        if(!this._mute_next_content_watcher) { // only update the stack when content is changed by user input, not undo/redo commands
          this.content_history[++this.undo_count] = new_content;
          this.content_history.length = this.undo_count + 1; // remove all redo items
        }
        this._mute_next_content_watcher = false;
      }
    }
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  background: rgb(248, 249, 250);
}
::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}
::-webkit-scrollbar-track, ::-webkit-scrollbar-corner {
  display: none;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border: 5px solid transparent;
  border-radius: 16px;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
.main {
  width: fit-content;
  margin: auto;
}
.bar {
  width: 80%;
  margin: auto !important;

  position: sticky;
  left: 0;
  top: 0;
  /* width: calc(100vw - 16px); */
  z-index: 1000;
  background: rgba(248, 249, 250, 0.8);
  border-bottom: solid 1px rgb(248, 249, 250);
  backdrop-filter: blur(10px);
  --bar-button-active-color: #188038;
  --bar-button-open-color: #188038;
  --bar-button-active-bkg: #e6f4ea;
  --bar-button-open-bkg: #e6f4ea;
}
</style>