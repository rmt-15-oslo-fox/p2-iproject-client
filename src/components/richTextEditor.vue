<template>
  <div class="w-4/5 mx-auto bg-white text-black text-left">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }" class="bg-green-700 py-2 pl-2">
      <div>
        <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold" class="px-2 text-white active:bg-black">
          <i class="fas fa-bold"></i>
        </button>
        <button :class="{ 'is-active': isActive.italic() }" @click="commands.italic" class="px-2 text-white active:bg-black">
          <i class="fas fa-italic"></i>
        </button>
        <button :class="{ 'is-active': isActive.underline() }" @click="commands.underline" class="px-2 text-white active:bg-black">
          <i class="fas fa-underline"></i>
        </button>
        <button :class="{ 'is-active': isActive.strike() }" @click="commands.strike" class="px-2 text-white active:bg-black">
          <i class="fas fa-strikethrough"></i>
        </button>
        <button :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click="commands.heading({ level: 1 })" class="px-2 text-white active:bg-black">
          H1
        </button>
        <button :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2 })" class="px-2 text-white active:bg-black">
          H2
        </button>
        <button :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click="commands.heading({ level: 3 })" class="px-2 text-white active:bg-black">
          H3
        </button>
      </div>
    </editor-menu-bar>
    <editor-content :editor="editor"/>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'

export default {
  components: {
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: `
          <h1>Yay Headlines!</h1>
          <p>All these <strong>cool tags</strong> are working now.</p>
        `,
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
