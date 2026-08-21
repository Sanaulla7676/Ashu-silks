# Ashu Silks

Production-oriented React e-commerce rebuild for Ashu Silks.

## Stack

- React + TypeScript + Vite
- React Router
- TanStack Query
- Radix UI primitives
- React Hook Form / Zod ready for data-entry workflows
- Lucide React icons
- Tailwind-compatible utility architecture can be introduced without replacing the domain components

## Product direction

The storefront is designed as a premium, real-world saree commerce experience with responsive collection discovery and a dedicated owner workspace.

The owner dashboard is intentionally separated from the customer storefront and provides product controls for:

- Add product
- Edit product name, category, price and compare-at price
- Edit stock
- Change active / draft / archived status
- Feature products on the homepage
- Search the catalog
- Review orders, customer, analytics, collection and storefront modules

## Payment boundary

Payment gateway integration is deliberately **not included** in this build. The architecture should expose a future checkout/payment service boundary rather than embedding provider-specific payment code into storefront components.

## Asset note

The existing `ashuvedio.mp4` is retained and reused for the hero/product presentation. Product image handling should be moved to durable storage before launch, with optimized responsive images and CDN caching.

## Production next steps

Connect the catalog and dashboard mutations to a real database/API, add authenticated owner access, object storage for product media, server-side validation, order persistence, audit logging, transactional email/WhatsApp hooks, automated tests, and deployment environment configuration before accepting real customer orders.