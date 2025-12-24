Templates folder

This folder contains reusable Next/React template components you can import into your app.

Available templates:
- `agency/template.tsx` — agency homepage layout (Hero, Services, Portfolio, CTA)
- `saas/template.tsx` — SaaS landing (Hero, Features, Pricing)
- `consultant/template.tsx` — Personal consultant portfolio
- `ecommerce/template.tsx` — E-commerce product grid template

Usage
1. Import the template component into a page inside your app directory:

```tsx
import AgencyTemplate from '../../templates/agency/template';

export default function Page(){
  return <AgencyTemplate />;
}
```

2. Customize copy, replace placeholder images, and adapt styles.

Notes
- Templates are simple, Tailwind-ready components intended as starting points.
- If you'd like full standalone template projects (with package.json, routes, build scripts), tell me and I will scaffold those separately.
