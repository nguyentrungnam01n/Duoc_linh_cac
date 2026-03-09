'use client';

import { useState, useEffect } from 'react';
import type { AdminContentCreateInput, Category } from '@/types';
import { adminApi } from '@/lib/adminApi';
import { useRouter } from 'next/navigation';
import TiptapEditor from '@/components/TiptapEditor';

export function NewContentForm() {
  const router = useRouter();

  // Form states
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [html, setHtml] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [coverImageId, setCoverImageId] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [coverAlt, setCoverAlt] = useState('');
  const [publishedAt, setPublishedAt] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');

  const [authorName, setAuthorName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    adminApi
      .listCategories()
      .then(setCategories)
      .catch((err) => console.error('Failed to load categories', err));
  }, []);

  // Auto-generate slug from title if slug is empty
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!slug) {
      const newSlug = val
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

      // Auto-append timestamp if slug likely exists or just on safe side
      const uniqueSlug = `${newSlug}-${Date.now().toString().slice(-4)}`;
      setSlug(uniqueSlug);
    }
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title) {
      setError('Vui lòng nhập tiêu đề');
      return;
    }
    if (!categoryId) {
      setError('Vui lòng chọn chuyên mục');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const payload: AdminContentCreateInput = {
        categoryId,
        title,
        slug,
        html: html || '<p>Nội dung mới...</p>',
        excerpt,
        coverImageId: coverImageId || undefined,
        coverAlt: coverAlt || undefined,
        publishedAt: publishedAt
          ? new Date(publishedAt).toISOString()
          : undefined,
        createdById: authorId || undefined,
        authorName: authorName || undefined,
        metaTitle,
        metaDescription,
      };
      console.log('Creating content with payload:', payload);
      const res = await adminApi.createContent(payload);
      console.log('Create content response:', res);
      // API returns the created object directly on success, NOT { ok: true }
      router.push(`/admin/contents/${res.id}`);
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Create failed');
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sticky top-4 z-10 bg-[#FDFBF7]/80 backdrop-blur-md p-4 rounded-xl border border-[#E5E1DA] shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-[#4D0000]">Tạo bài viết mới</h1>
          <p className="text-sm text-stone-500">
            Điền thông tin để tạo bài viết mới
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="rounded-lg border border-stone-200 bg-white px-5 py-2.5 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900"
          >
            Hủy bỏ
          </button>
          <button
            onClick={onSubmit}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg bg-[#E75739] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#D1492E] disabled:opacity-50"
          >
            {loading ? 'Đang xử lý...' : 'Tạo bài viết'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-[#E5E1DA] bg-white p-6 shadow-sm space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">
                Tiêu đề bài viết <span className="text-red-500">*</span>
              </label>
              <input
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Nhập tiêu đề..."
                className="w-full rounded-lg border-stone-200 px-4 py-2.5 text-lg font-semibold focus:border-[#4D0000] focus:ring-[#4D0000]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">
                Mô tả ngắn (Excerpt)
              </label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={3}
                placeholder="Tóm tắt nội dung..."
                className="w-full rounded-lg border-stone-200 px-3 py-2 text-sm focus:border-[#4D0000] focus:ring-[#4D0000]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">
                Nội dung (HTML/Markdown)
              </label>
              <div className="flex flex-col min-h-[500px]">
                <TiptapEditor content={html} onChange={setHtml} />
              </div>
            </div>

            {/* SEO Fields */}
            <div className="pt-4 border-t border-stone-100 space-y-4">
              <h3 className="font-semibold text-stone-800">SEO Meta Data</h3>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    Meta Title
                  </label>
                  <input
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                    className="w-full rounded-lg border-stone-200 py-2 text-sm focus:border-[#4D0000] focus:ring-[#4D0000]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    Meta Description
                  </label>
                  <textarea
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    rows={2}
                    className="w-full rounded-lg border-stone-200 py-2 text-sm focus:border-[#4D0000] focus:ring-[#4D0000]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <div className="rounded-xl border border-[#E5E1DA] bg-white p-5 shadow-sm space-y-4">
            <h3 className="font-semibold text-[#4D0000]">Cấu hình</h3>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">
                Chuyên mục <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full rounded-lg border-stone-200 bg-white py-2 text-sm text-stone-700 focus:border-[#4D0000] focus:ring-[#4D0000]"
              >
                <option value="">Chọn chuyên mục</option>
                {categories?.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Slug</label>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full rounded-lg border-stone-200 py-2 text-sm text-stone-600 focus:border-[#4D0000] focus:ring-[#4D0000]"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-stone-700">
                Ảnh Thumbnail
              </label>

              <div className="flex flex-col gap-3">
                {/* Preview Image if ID exists */}
                {coverImageId && (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-stone-200 bg-stone-50">
                    <div className="flex items-center justify-center h-full text-xs text-stone-400">
                      {coverImageUrl || coverImageId.startsWith('http') ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={coverImageUrl || coverImageId}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : null}
                    </div>
                    <button
                      onClick={() => {
                        setCoverImageId('');
                        setCoverImageUrl('');
                      }}
                      className="absolute top-2 right-2 p-1 bg-white/80 rounded-full hover:bg-white text-red-600"
                      title="Xóa ảnh"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                    </button>
                  </div>
                )}

                <div className="flex gap-2">
                  <input
                    type="file"
                    id="thumbnail-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      try {
                        // Simple local check
                        if (file.size > 5 * 1024 * 1024)
                          throw new Error('File quá lớn (>5MB)');

                        const formData = new FormData();
                        formData.append('file', file);

                        // Assuming upload returns { id, url }
                        // We need to cast because current api return type is unknown
                        const res = (await adminApi.uploadMedia(formData)) as {
                          id: string;
                          url: string;
                        };

                        if (res?.id) {
                          setCoverImageId(res.id);
                          setCoverImageUrl(res.url);
                        } else {
                          throw new Error(
                            'Upload succeeded but no ID returned',
                          );
                        }
                      } catch (err: unknown) {
                        if (err instanceof Error) {
                          alert(err.message || 'Upload failed');
                        } else {
                          alert('Upload failed');
                        }
                      }
                    }}
                  />
                  <label
                    htmlFor="thumbnail-upload"
                    className="flex-1 cursor-pointer rounded-lg border border-dashed border-stone-300 px-4 py-3 text-center text-sm text-stone-600 hover:border-[#4D0000] hover:bg-stone-50 transition-colors"
                  >
                    <span className="font-medium text-[#4D0000]">
                      Tải ảnh lên
                    </span>{' '}
                    hoặc kéo thả vào đây
                    <p className="text-xs text-stone-400 mt-1">
                      PNG, JPG, WEBP (Max 5MB)
                    </p>
                  </label>
                </div>

                {/* <div className="relative">
                  <input
                    value={coverImageId}
                    onChange={(e) => {
                      setCoverImageId(e.target.value);
                      if (!e.target.value.startsWith('http'))
                        setCoverImageUrl('');
                    }}
                    placeholder="Hoặc nhập ID / URL ảnh..."
                    className="w-full rounded-lg border-stone-200 py-2 pl-3 pr-10 text-xs text-stone-500 font-mono focus:border-[#4D0000] focus:ring-[#4D0000]"
                  />
                </div> */}

                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-700">
                    Mô tả ảnh (Alt Text)
                  </label>
                  <input
                    value={coverAlt}
                    onChange={(e) => setCoverAlt(e.target.value)}
                    placeholder="Mô tả ảnh cho SEO..."
                    className="w-full rounded-lg border-stone-200 py-2 text-sm text-stone-600 focus:border-[#4D0000] focus:ring-[#4D0000]"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">
                Tên tác giả (Author Name)
              </label>
              <input
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Nhập tên tác giả hiển thị..."
                className="w-full rounded-lg border-stone-200 py-2 text-sm text-stone-600 focus:border-[#4D0000] focus:ring-[#4D0000]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">
                Tác giả (Author ID - Optional)
              </label>
              <input
                value={authorId}
                onChange={(e) => setAuthorId(e.target.value)}
                placeholder="Để trống = User hiện tại"
                className="w-full rounded-lg border-stone-200 py-2 text-sm text-stone-600 focus:border-[#4D0000] focus:ring-[#4D0000]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">
                Ngày xuất bản
              </label>
              <input
                type="datetime-local"
                value={publishedAt}
                onChange={(e) => setPublishedAt(e.target.value)}
                className="w-full rounded-lg border-stone-200 py-2 text-sm text-stone-600 focus:border-[#4D0000] focus:ring-[#4D0000]"
              />
              <p className="text-xs text-stone-400">
                Để trống = Chưa xuất bản (Draft)
              </p>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="fixed bottom-4 right-4 max-w-sm rounded-lg bg-red-100 p-4 text-sm text-red-800 shadow-lg border border-red-200 animate-in slide-in-from-bottom-2">
          <strong>Lỗi:</strong> {error}
          <button onClick={() => setError(null)} className="ml-2 underline">
            Đóng
          </button>
        </div>
      )}
    </div>
  );
}
