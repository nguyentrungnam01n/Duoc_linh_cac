# Dược Linh Các — Frontend

Frontend skeleton dùng Next.js (App Router) + TypeScript + Tailwind.

- Public site: các trang nội dung + SEO (Metadata + JSON-LD).
- Admin UI: `/admin` (đăng nhập + quản lý nội dung/leads/cài đặt).
- Không có tính năng thương mại điện tử (không giỏ hàng/đơn hàng/thanh toán).

## Yêu cầu

- Node.js (khuyến nghị LTS)
- Backend chạy ở `NEXT_PUBLIC_API_BASE` (mặc định sẽ dùng `http://localhost:4000` nếu bạn không set env)

## Cài đặt

```bash
npm install
```

## Biến môi trường

Tạo `.env.local` dựa trên `.env.example`:

```bash
NEXT_PUBLIC_API_BASE=http://localhost:4000
```

## Chạy local

```bash
npm run dev
```

Mở `http://localhost:3000`.

## Scripts

- `npm run dev`: chạy dev
- `npm run build`: build production
- `npm run start`: chạy production server
- `npm run lint`: ESLint
- `npm run format`: Prettier write
- `npm run format:check`: Prettier check

## Routes chính

- Public:
  - `/` (Trang chủ)
  - `/chung-benh`, `/chung-benh/[slug]`
  - `/dich-vu`, `/dich-vu/[slug]`
  - `/linh-duoc`, `/linh-duoc/[slug]`
  - `/bai-dang`, `/bai-dang/[slug]`
  - `/lien-he`
- Admin:
  - `/admin/login`
  - `/admin`
  - `/admin/contents`, `/admin/contents/new`, `/admin/contents/[id]`
  - `/admin/leads`
  - `/admin/settings`

## Ghi chú bảo mật (Admin)

- Token admin được lưu bằng httpOnly cookie `dlc_admin_token`.
- Admin UI chỉ gọi các endpoint nội bộ `/api/admin/*` (Next Route Handlers sẽ proxy sang backend).
