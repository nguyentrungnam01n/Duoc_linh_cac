export type ContentType = 'DISEASE' | 'SERVICE' | 'HERB' | 'POST';

export type PublishStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

export type ContentSummary = {
  id: string;
  type: ContentType;
  slug: string;
  title: string;
  excerpt?: string | null;
  cover?: string | null;
  ogImage?: string | null;
  publishStatus: PublishStatus;
  publishedAt?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
};

export type ContentDetail = ContentSummary & {
  html?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  disclaimerEnabled?: boolean | null;
  disclaimerText?: string | null;
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

export type ApiOk = { ok: true };

export type JsonObject = Record<string, unknown>;

export type AdminLoginInput = {
  email: string;
  password: string;
};

export type AdminContentListResponse = PaginatedResponse<ContentSummary>;

export type AdminContentCreateInput = {
  type: ContentType;
  title: string;
  slug: string;
  html?: string;
  metaTitle?: string;
  metaDescription?: string;
  cover?: string;
  ogImage?: string;
  excerpt?: string;
  disclaimerEnabled?: boolean;
  disclaimerText?: string;
};

export type AdminContentUpdateInput = JsonObject;

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
