import type {
  AdminContentListResponse,
  AdminContentResponse,
  AdminLeadListResponse,
  AdminSettingsResponse,
  ContentDetail,
  ContentSummary,
  ContentType,
  PaginatedResponse,
  PublishStatus,
  SettingsDto,
} from '@/types';

function nowIso() {
  return new Date().toISOString();
}

function makeId(prefix: string, idx: number) {
  return `${prefix}_${idx}`;
}

function makeSlug(base: string, idx: number) {
  return `${base}-${idx}`;
}

function makeSummary(params: {
  idx: number;
  type: ContentType;
  titlePrefix: string;
  publishStatus?: PublishStatus;
}): ContentSummary {
  const idx = params.idx;
  return {
    id: makeId(params.type.toLowerCase(), idx),
    type: params.type,
    slug: makeSlug(params.type.toLowerCase(), idx),
    title: `${params.titlePrefix} ${idx}`,
    excerpt: 'Nội dung mẫu để bạn dựng UI trước khi có backend.',
    cover: null,
    ogImage: null,
    publishStatus: params.publishStatus ?? 'PUBLISHED',
    publishedAt: nowIso(),
    updatedAt: nowIso(),
    createdAt: nowIso(),
  };
}

function makeDetail(type: ContentType, slug: string): ContentDetail {
  const base: ContentSummary = {
    id: `${type.toLowerCase()}_${slug}`,
    type,
    slug,
    title: `${type}: ${slug}`,
    excerpt: 'Nội dung mẫu (mock).',
    cover: null,
    ogImage: null,
    publishStatus: 'PUBLISHED',
    publishedAt: nowIso(),
    updatedAt: nowIso(),
    createdAt: nowIso(),
  };

  return {
    ...base,
    html: `<p><strong>Mock content</strong> cho <code>${type}</code> / <code>${slug}</code>.</p>`,
    metaTitle: base.title,
    metaDescription: base.excerpt,
    disclaimerEnabled: true,
    disclaimerText: 'Nội dung chỉ mang tính tham khảo (mock).',
  };
}

export function mockPublicHome(): {
  featured: ContentSummary[];
  latestPosts: ContentSummary[];
  settings: SettingsDto;
} {
  return {
    featured: [
      makeSummary({ idx: 1, type: 'POST', titlePrefix: 'Bài đăng nổi bật' }),
      makeSummary({ idx: 2, type: 'POST', titlePrefix: 'Bài đăng nổi bật' }),
    ],
    latestPosts: [
      makeSummary({ idx: 3, type: 'POST', titlePrefix: 'Bài đăng mới' }),
      makeSummary({ idx: 4, type: 'POST', titlePrefix: 'Bài đăng mới' }),
    ],
    settings: {
      siteName: 'Dược Linh Các',
      hotline: '0123 456 789',
      address: 'Địa chỉ (mock)',
      seoDefaultTitle: 'Dược Linh Các',
      seoDefaultDescription: 'Frontend skeleton (mock mode).',
    },
  };
}

export function mockContentList(params: {
  type: ContentType;
  q?: string;
  page?: number;
  pageSize?: number;
}): PaginatedResponse<ContentSummary> {
  const page = Math.max(1, params.page ?? 1);
  const pageSize = Math.max(1, Math.min(50, params.pageSize ?? 10));

  const start = (page - 1) * pageSize;
  const items: ContentSummary[] = Array.from({ length: pageSize }).map((_, i) =>
    makeSummary({
      idx: start + i + 1,
      type: params.type,
      titlePrefix: params.q ? `KQ "${params.q}"` : 'Nội dung',
    }),
  );

  return {
    items,
    total: 200,
    page,
    pageSize,
  };
}

export function mockContentDetail(
  type: ContentType,
  slug: string,
): ContentDetail {
  return makeDetail(type, slug);
}

export function mockAdminContentsList(params: {
  type?: ContentType;
  status?: PublishStatus;
  page?: number;
  pageSize?: number;
}): AdminContentListResponse {
  const page = Math.max(1, params.page ?? 1);
  const pageSize = Math.max(1, Math.min(50, params.pageSize ?? 20));
  const type = params.type ?? 'POST';
  const status = params.status ?? 'PUBLISHED';

  const start = (page - 1) * pageSize;
  const items: ContentSummary[] = Array.from({ length: pageSize }).map((_, i) =>
    makeSummary({
      idx: start + i + 1,
      type,
      titlePrefix: 'Admin content',
      publishStatus: status,
    }),
  );

  return {
    items,
    total: 200,
    page,
    pageSize,
  };
}

export function mockAdminContentResponse(
  idOrSlug: string,
): AdminContentResponse {
  // Treat idOrSlug as slug-ish for stable output.
  return makeDetail('POST', idOrSlug);
}

export function mockAdminLeadsList(params: {
  page?: number;
  pageSize?: number;
}): AdminLeadListResponse {
  const page = Math.max(1, params.page ?? 1);
  const pageSize = Math.max(1, Math.min(100, params.pageSize ?? 50));

  const start = (page - 1) * pageSize;
  const items = Array.from({ length: pageSize }).map((_, i) => {
    const n = start + i + 1;
    return {
      id: `lead_${n}`,
      fullName: `Khách ${n}`,
      phone: `0900${String(n).padStart(6, '0')}`,
      email: `khach${n}@example.com`,
      message: 'Lead mock để bạn dựng UI.',
      sourceUrl: 'http://localhost:3000/lien-he',
      createdAt: nowIso(),
      status: 'NEW',
    };
  });

  return {
    items,
    total: 300,
    page,
    pageSize,
  };
}

export function mockAdminSettings(): AdminSettingsResponse {
  return {
    siteName: 'Dược Linh Các',
    hotline: '0123 456 789',
    address: 'Địa chỉ (mock)',
    seoDefaultTitle: 'Dược Linh Các',
    seoDefaultDescription: 'Frontend skeleton (mock mode).',
  };
}
