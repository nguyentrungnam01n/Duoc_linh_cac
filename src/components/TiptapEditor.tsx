'use client';

import { useEffect, useState } from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { adminApi } from '@/lib/adminApi';

const CustomImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
      },
      height: {
        default: null,
      },
      style: {
        default: 'display: block; margin-left: auto; margin-right: auto;',
        parseHTML: (element) => element.getAttribute('style'),
      },
    };
  },
});

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    if (!editor) return;

    const handler = () => forceUpdate((x) => x + 1);

    editor.on('transaction', handler);
    editor.on('selectionUpdate', handler);

    return () => {
      editor.off('transaction', handler);
      editor.off('selectionUpdate', handler);
    };
  }, [editor]);

  if (!editor) {
    return null;
  }

  const addImage = async () => {
    // Hidden file input to select image
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (!file) return;

      try {
        const formData = new FormData();
        formData.append('file', file);
        const res = (await adminApi.uploadMedia(formData)) as { url: string };

        if (res?.url) {
          editor
            .chain()
            .focus()
            .setImage({ src: res.url, width: 1200, height: 547 })
            .run();
        }
      } catch (error) {
        console.error('Failed to upload image:', error);
        alert('Upload ảnh thất bại');
      }
    };
    input.click();
  };

  return (
    <div className="sticky top-0 z-10 flex flex-wrap gap-2 rounded-t-lg border-b border-stone-200 bg-stone-50 p-2">
      <button
        type="button"
        onClick={() => {
          editor.chain().focus().toggleBold().run();
        }}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`rounded px-2 py-1 text-sm font-medium transition-colors ${
          editor.isActive('bold')
            ? 'bg-[#760000]/90 text-white'
            : 'text-stone-600 hover:bg-stone-200'
        }`}
      >
        Bold
      </button>
      <button
        type="button"
        onClick={() => {
          editor.chain().focus().toggleItalic().run();
        }}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`rounded px-2 py-1 text-sm font-medium transition-colors ${
          editor.isActive('italic')
            ? 'bg-[#760000]/90 text-white'
            : 'text-stone-600 hover:bg-stone-200'
        }`}
      >
        Italic
      </button>
      <button
        type="button"
        onClick={() => {
          editor.chain().focus().toggleStrike().run();
        }}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`rounded px-2 py-1 text-sm font-medium transition-colors ${
          editor.isActive('strike')
            ? 'bg-[#760000]/90 text-white'
            : 'text-stone-600 hover:bg-stone-200'
        }`}
      >
        Strike
      </button>
      <button
        type="button"
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
        className={`rounded px-2 py-1 text-sm font-medium transition-colors ${
          editor.isActive('heading', { level: 2 })
            ? 'bg-[#760000]/90 text-white'
            : 'text-stone-600 hover:bg-stone-200'
        }`}
      >
        H2
      </button>
      <button
        type="button"
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 3 }).run();
        }}
        className={`rounded px-2 py-1 text-sm font-medium transition-colors ${
          editor.isActive('heading', { level: 3 })
            ? 'bg-[#760000]/90 text-white'
            : 'text-stone-600 hover:bg-stone-200'
        }`}
      >
        H3
      </button>
      <button
        type="button"
        onClick={() => {
          editor.chain().focus().toggleBulletList().run();
        }}
        className={`rounded px-2 py-1 text-sm font-medium transition-colors ${
          editor.isActive('bulletList')
            ? 'bg-[#760000]/90 text-white'
            : 'text-stone-600 hover:bg-stone-200'
        }`}
      >
        List
      </button>
      <button
        type="button"
        onClick={addImage}
        className="rounded px-2 py-1 text-sm font-medium text-stone-600 hover:bg-stone-200"
      >
        Add Image (Ưu tiên ảnh 1200x547)
      </button>
    </div>
  );
};

export default function TiptapEditor({
  content,
  onChange,
}: {
  content: string;
  onChange: (html: string) => void;
}) {
  const editor = useEditor({
    extensions: [StarterKit, CustomImage],
    content: content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'prose prose-stone max-w-none focus:outline-none min-h-[300px] p-4',
      },
    },
  });

  return (
    <div className="rounded-lg border border-stone-200 bg-white shadow-sm focus-within:ring-1 focus-within:ring-[#4D0000]">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
