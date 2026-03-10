'use client';

import { useEffect, useState } from 'react';
import { adminApi } from '@/lib/adminApi';
import type {
  AdminContentResponse,
  Category,
  AdminContentUpdateInput,
} from '@/types';
import { useRouter } from 'next/navigation';
import TiptapEditor from '@/components/TiptapEditor';

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ContentEditor({ id }: { id: string }) {
  const router = useRouter();
  const [data, setData] = useState<AdminContentResponse | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [html, setHtml] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [coverImageId, setCoverImageId] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [coverAlt, setCoverAlt] = useState('');
  const [publishedAt, setPublishedAt] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    Promise.all([adminApi.getContent(id), adminApi.listCategories()])
      .then(([res, cats]) => {
        if (mounted) {
          setData(res);
          setCategories(cats);
          setTitle(res.title);
          setSlug(res.slug);
          setHtml(res.html || '');
          setExcerpt(res.excerpt || '');
          setCategoryId(res.categoryId);
          setCoverImageId(res.coverImageId || '');
          setCoverImageUrl(res.coverImage?.url || '');
          setCoverAlt(res.coverAlt || '');
          setPublishedAt(
            res.publishedAt
              ? new Date(res.publishedAt).toISOString().slice(0, 16)
              : '',
          );
          setAuthorName(res.authorName || '');
          setAuthorId(res.authorId || '');
          setMetaTitle(res.metaTitle || '');
          setMetaDescription(res.metaDescription || '');
        }
      })
      .catch((err) => {
        if (mounted)
          setError(err instanceof Error ? err.message : 'Load failed');
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  const handleSave = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const payload: AdminContentUpdateInput = {
        title,
        slug,
        html,
        excerpt,
        categoryId,
        coverImageId: coverImageId || null,
        coverAlt: coverAlt || null,
        publishedAt: publishedAt ? new Date(publishedAt).toISOString() : null,
        createdById: authorId || null,
        authorName: authorName || null,
        metaTitle,
        metaDescription,
      };

      console.log('Updating with payload:', payload);
      const updated = await adminApi.updateContent(id, payload);
      setData(updated);
      alert('Đã cập nhật thành công!'); // Simple feedback for now
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Update failed');
    } finally {
      setSubmitting(false);
    }
  };

  const handlePublish = async () => {
    // Validate required fields for publishing
    const missing = [];
    if (!title) missing.push('Tiêu đề');
    if (!slug) missing.push('Slug');
    if (!coverImageId) missing.push('Ảnh Thumbnail');
    if (!coverAlt) missing.push('Mô tả ảnh / Alt Text');
    if (!metaTitle) missing.push('Meta Title');
    if (!metaDescription) missing.push('Meta Description');

    if (missing.length > 0) {
      setError(`Không thể xuất bản. Thiếu thông tin: ${missing.join(', ')}`);
      return;
    }

    if (!confirm('Bạn có chắc chắn muốn xuất bản nội dung này?')) return;
    setSubmitting(true);
    setError(null);
    try {
      const published = await adminApi.publishContent(id);
      setData(published);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Publish failed');
    } finally {
      setSubmitting(false);
    }
  };

  const handleUnpublish = async () => {
    if (!confirm('Gỡ bỏ nội dung cập nhật khỏi website?')) return;
    setSubmitting(true);
    setError(null);
    try {
      const unpublished = await adminApi.unpublishContent(id);
      setData(unpublished);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unpublish failed');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center text-stone-500">Đang tải nội dung...</div>
    );
  }

  if (!data) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-center text-red-600">
        Không tìm thấy nội dung hoặc có lỗi xảy ra: {error}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sticky top-4 z-10 bg-[#FDFBF7]/80 backdrop-blur-md p-4 rounded-xl border border-[#E5E1DA] shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="rounded-full p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-900"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-[#4D0000] line-clamp-1">
              {title || 'Không có tiêu đề'}
            </h1>
            <div className="flex items-center gap-2 text-xs">
              <span
                className={`inline-flex items-center rounded-full px-2 py-0.5 font-medium ${
                  data.status === 'PUBLISHED'
                    ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20'
                    : 'bg-yellow-50 text-yellow-800 ring-1 ring-inset ring-yellow-600/20'
                }`}
              >
                {data.status === 'PUBLISHED' ? 'Đã xuất bản' : 'Bản nháp'}
              </span>
              <span className="text-stone-400">|</span>
              <span className="text-stone-500">
                Last updated:{' '}
                {new Date(
                  data.updatedAt || data.createdAt || Date.now(),
                ).toLocaleString('vi-VN')}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {data.status === 'PUBLISHED' ? (
            <button
              onClick={handleUnpublish}
              disabled={submitting}
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 disabled:opacity-50"
            >
              Gỡ bài
            </button>
          ) : (
            <button
              onClick={handlePublish}
              disabled={submitting}
              className="rounded-lg bg-[#760000]/90 px-4 py-2 text-sm font-medium text-[#FFF9A7] shadow-sm hover:bg-[#3A0000] disabled:opacity-50"
            >
              Xuất bản
            </button>
          )}

          <button
            onClick={handleSave}
            disabled={submitting}
            className="rounded-lg bg-[#E75739] px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#D1492E] disabled:opacity-50"
          >
            {submitting ? 'Đang lưu...' : 'Lưu thay đổi'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-[#E5E1DA] bg-white p-6 shadow-sm space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">
                Tiêu đề bài viết
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
              <TiptapEditor content={html} onChange={setHtml} />
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
            <h3 className="font-semibold text-[#4D0000]">Cấu hình chung</h3>

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
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">
                Slug - Đường dẫn URL
              </label>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full rounded-lg border-stone-200 py-2 text-sm text-stone-600 focus:border-[#4D0000] focus:ring-[#4D0000]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">
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
                      if (!e.target.value.startsWith('http')) setCoverImageUrl('');
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
            </div>
          </div>

          {/* Simple meta info display */}
          <div className="rounded-xl border border-[#E5E1DA] bg-white p-5 shadow-sm space-y-2 text-xs text-stone-500">
            {/* <p>
              <strong>ID:</strong> {data.id}
            </p> */}
            <p>
              <strong>Ngày tạo:</strong>{' '}
              {new Date(data.createdAt || Date.now()).toLocaleString()}
            </p>
            <p>
              <strong>Ngày cập nhật:</strong>{' '}
              {new Date(
                data.updatedAt || data.createdAt || Date.now(),
              ).toLocaleString()}
            </p>
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
