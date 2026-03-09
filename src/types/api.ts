export type PublishStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

export type ContentSummary = {
  id: string;
  status: PublishStatus;
  categoryId: string;
  category?: Category;
  title: string;
  slug: string;
  excerpt?: string | null;
  coverImageId?: string | null;
  coverImage?: { url: string } | null;
  coverAlt?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  ogImageId?: string | null;
  medicalRelated: boolean;
  disclaimerEnabled: boolean;
  disclaimerText?: string | null;
  publishedAt?: string | null;
  createdById?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  authorId?: string | null;
  authorName?: string | null;
};

export type ContentDetail = ContentSummary & {
  html?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  disclaimerEnabled?: boolean | null;
  disclaimerText?: string | null;
  ok?: boolean;
  error?: string | null;
};

export type LeadPayload = {
  fullName: string;
  phone: string;
  email?: string;
  message: string;
  sourceUrl?: string;
  company?: string;
};

export type SettingsDto = {
  siteName?: string;
  hotline?: string;
  address?: string;
  seoDefaultTitle?: string;
  seoDefaultDescription?: string;
};

export type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};

export type ApiOk = { ok: true; error: string | null };

export type JsonObject = Record<string, unknown>;

export type AdminLoginInput = {
  email: string;
  password: string;
};

export type AdminContentListResponse = PaginatedResponse<ContentSummary>;

export type AdminContentCreateInput = {
  categoryId: string;
  title: string;
  slug: string;
  html?: string;
  metaTitle?: string;
  metaDescription?: string;
  coverImageId?: string | null;
  coverAlt?: string;
  publishedAt?: string | null;
  createdById?: string | null;
  authorName?: string | null;
  ogImageId?: string | null;
  excerpt?: string;
  disclaimerEnabled?: boolean;
  disclaimerText?: string;
};

export type AdminContentUpdateInput = JsonObject & {
  authorName?: string | null;
  createdById?: string | null;
  publishedAt?: string | null;
  coverImageId?: string | null;
};

export type AdminContentResponse = ContentDetail;

export type AdminLead = {
  id: string;
  fullName: string;
  phone: string;
  email?: string | null;
  message?: string | null;
  sourceUrl?: string | null;
  createdAt?: string | null;
  status?: string | null;
};

export type AdminLeadListResponse = PaginatedResponse<AdminLead>;

export type AdminSettingsResponse = SettingsDto;
export type AdminSettingsUpdateInput = SettingsDto;

export type AdminMeResponse = {
  id: string;
  email: string;
  role: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  contentsCount?: number;
};
